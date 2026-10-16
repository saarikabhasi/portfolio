import type { NextConfig } from "next";

// GitHub Pages serves a project repo from /<repo-name>/
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const nextConfig: NextConfig = {
    output: "export",
    basePath,
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;
