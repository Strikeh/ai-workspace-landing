"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { SVGProps } from "react";

const demoCategories = [
  { id: "workspace", label: "Workspace" },
  { id: "action-bar", label: "Action Bar" },
  { id: "workspace-overlay", label: "Workspace Overlay (chatgpt.com)" },
];

// Demo videos with actual YouTube IDs
const demoVideos = {
  workspace: [
    {
      id: 1,
      title: "Organize Your Workspace With Categories",
      videoId: "GN7Zu_jRL8U",
      thumbnail: "",
    },
    {
      id: 2,
      title: "How to Create a New Vault in AI Workspace",
      videoId: "D4xBchnUWcI",
      thumbnail: "",
    },
    {
      id: 3,
      title: "One Click Prompt Execution with AIWorkspace Pro",
      videoId: "kriH0lG5h3o",
      thumbnail: "",
    },
    {
      id: 4,
      title: "Managing AI Prompts With Categories & Tags",
      videoId: "RIBEO7YSBXg",
      thumbnail: "",
    },
  ],
  "action-bar": [],
  "workspace-overlay": [],
};

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("workspace");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openDemoModal", handleOpen);
    return () => window.removeEventListener("openDemoModal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSelectedVideo(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close video player on orientation change to prevent crashes
  // But don't close if video is in fullscreen mode
  useEffect(() => {
    const handleOrientationChange = () => {
      // Check if any element is in fullscreen
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc = document as any;
      const isFullscreen = !!(
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );

      // Only close video if not in fullscreen and screen is very small in landscape
      if (selectedVideo && !isFullscreen && window.innerHeight < 500) {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, [selectedVideo]);

  if (!isOpen) return null;

  const currentVideos = demoVideos[activeTab as keyof typeof demoVideos] || [];
  const filteredVideos = currentVideos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="demo-modal-backdrop" onClick={() => setIsOpen(false)}>
      <div
        className="demo-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="demo-modal-header">
          <h2 className="demo-modal-title">Video Tutorials</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="demo-modal-close"
            aria-label="Close demo hub"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Search bar */}
        <div className="demo-modal-search">
          <SearchIcon className="demo-search-icon" />
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="demo-search-input"
          />
        </div>

        {/* Tabs */}
        <div className="demo-modal-tabs">
          {demoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveTab(category.id);
                setSearchQuery("");
                setSelectedVideo(null);
              }}
              className={`demo-tab ${
                activeTab === category.id ? "demo-tab--active" : ""
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Video grid or player */}
        <div className="demo-modal-content">
          {selectedVideo ? (
            <div className="demo-video-player">
              <div className="demo-video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Demo video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="demo-video-iframe"
                />
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="demo-back-btn"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to videos
              </button>
            </div>
          ) : (
            <div className="demo-video-grid">
              {filteredVideos.length === 0 ? (
                <div className="demo-empty-state">
                  <p style={{ color: "var(--color-text-muted)" }}>
                    No videos found. Try a different search or category.
                  </p>
                </div>
              ) : (
                filteredVideos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video.videoId)}
                    className="demo-video-card"
                  >
                    <div className="demo-video-thumbnail">
                      <Image
                        src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                        alt={video.title}
                        width={320}
                        height={180}
                        className="demo-thumbnail-img"
                        unoptimized
                      />
                      <div className="demo-play-overlay">
                        <PlayIcon className="h-12 w-12" />
                      </div>
                    </div>
                    <div className="demo-video-info">
                      <h3 className="demo-video-title">{video.title}</h3>
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
