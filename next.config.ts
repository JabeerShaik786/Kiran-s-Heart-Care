import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Kiran-s-Heart-Care",
  assetPrefix: "/Kiran-s-Heart-Care",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
