# Tone & Style Guide — AI Workspace Pro Blog
# Read before writing any blog. Non-negotiable rules.

## Voice

AI Workspace Pro's blog voice is **professional-conversational**:
- Write like a knowledgeable colleague, not a salesperson or textbook
- Use "you" often. Use "I" in tutorials and reviews.
- Short paragraphs (3-4 sentences max)
- Vary sentence length. Mix short punchy sentences with longer explanations.
- Contractions are fine (it's, you'll, doesn't)
- No jargon without explanation

## Mandatory E-E-A-T Rule

**Every blog MUST include at least one of these from config.yaml trust_signals:**
1. A testimonial quote (from testimonials array)
2. A metric (from metrics array — e.g., "73% memory reduction")
3. A personal experience from the author
4. A review link (Chrome Web Store reviews link)

If config.yaml has no trust signals yet → ask user to provide one before publishing.

## Competitor Mentions

- **Always lead with their strengths.** "Superpower ChatGPT is a solid extension with great folder organization. Where AI Workspace Pro differs is..."
- Never trash competitors. Be factual and specific.
- If a competitor claim is unverified in competitors.yaml → add caveat: "Based on our last check. Visit [competitor].com for the latest."
- Link to competitor's website. Don't just name-drop.

## Unique Angle Rule

Every blog MUST have a defined unique angle before writing starts.
- "More comprehensive" is NOT an angle.
- "We tested this ourselves" IS an angle.
- "Using data nobody else compiled" IS an angle.
- "Addressing a sub-audience nobody targets" IS an angle.

## CTA Rules

- **One CTA per blog**, at the end
- Soft, not pushy: "Try AI Workspace Pro free" or "See how it works"
- Link to Chrome Web Store install page
- Never put CTA above the fold or in the middle of content

## Formatting Rules

- H1: Title only (auto-generated from frontmatter)
- H2: Main sections (include primary keyword in at least one H2)
- H3: Subsections
- No H4 or deeper in blog posts
- Use bullet lists for 3+ items
- Use tables for comparisons
- Use blockquotes for testimonials
- Bold key terms on first mention

## Internal Linking

- Link to at least 2 other blog posts (varied anchor text)
- Link to relevant landing pages (/prompt-library, /teams, /agencies, /freelancers, /students, /creators, /consultants, /social-media-managers, /organization, /chatgpt-text-highlighter)
- If part of a topic cluster: MUST link to pillar page

## Images

- All images in public/images/blog/{slug}/
- Descriptive alt text required (include keyword naturally if possible)
- Hero image dimensions: 1200x630px recommended (OG compatible)
- Use real screenshots where possible

## Words & Phrases to AVOID

These trigger AI content detection or sound generic:
- "In today's digital landscape"
- "In the ever-evolving world of"
- "Unlock the power of"
- "Dive deep into"
- "Let's explore"
- "In conclusion"
- "It's worth noting that"
- "Seamless" (unless describing actual UX)
- "Leverage" (use "use" instead)
- "Robust" (be specific about what makes it strong)
- "Game-changer" / "Revolutionary"
- "Harness the power"

## Words & Phrases to USE

- Specific numbers ("73% faster", not "much faster")
- Real feature names from features.yaml
- "Here's what actually happens when..."
- "I tested this with 500+ conversations..."
- Question headers ("Why does ChatGPT slow down after 100 messages?")
- Transition phrases that sound human ("That said," "Worth mentioning:" "Quick aside:")
