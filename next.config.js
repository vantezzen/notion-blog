export default {
  staticPageGenerationTimeout: 300,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.notion.so' },
      { protocol: 'https', hostname: 'notion.so' },
      { protocol: 'https', hostname: 'file.notion.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 's3.us-west-2.amazonaws.com' }
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  // The blog moved to https://vantezzen.io/blog. Every old URL forwards to
  // the same post there; the order matters, the first match wins.
  redirects() {
    const blog = 'https://vantezzen.io/blog'
    return [
      { source: '/', destination: blog, permanent: true },
      { source: '/feed', destination: `${blog}/feed.xml`, permanent: true },
      {
        source: '/building-liquid-glass-on-the-web',
        destination: `${blog}/liquid-glass`,
        permanent: true
      },
      { source: '/:slug', destination: `${blog}/:slug`, permanent: true },
      { source: '/:path*', destination: blog, permanent: true }
    ]
  }
}
