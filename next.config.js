module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
      {
          source: "https://main.d9hg163hcjy6a.amplifyapp.com",
          destination: "/"
      }
    ];
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com",
      "picsum.photos",
    ],
  },
};
