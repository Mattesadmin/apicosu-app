import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Erlaubt, dass du im Browser über http://192.168.0.130:3000 zugreifen kannst
  allowedDevOrigins: ["192.168.0.130"],
};

export default nextConfig;

