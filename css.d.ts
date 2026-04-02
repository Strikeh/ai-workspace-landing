// Ambient module declarations for stylesheet side-effect imports.
// Ensures TypeScript does not raise TS2882 for `import "./foo.css"` throughout the project.
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
