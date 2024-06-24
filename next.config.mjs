/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
      appDir: true,
    },
    
    // Middleware configurations:
    matcher: ["/admin/:path*"], // Apply middleware to paths starting with '/admin/'
  };
  
  export default nextConfig;