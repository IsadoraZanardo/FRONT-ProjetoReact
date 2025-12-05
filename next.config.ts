import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "https://upload.wikimedia.org/wikipedia/commons/7/78/Toyota_Logo.svg"
      }//um objeto para cada imagem/link
    ]
  }
};

export default nextConfig;
