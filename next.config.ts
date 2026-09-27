import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: path.join(process.cwd()),
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
