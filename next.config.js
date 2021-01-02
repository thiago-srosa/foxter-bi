const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withOffline = require('next-offline')

module.exports = withOffline(withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
}),
  {
    workboxOpts: {
      runtimeCaching: [
        {
          // MUST be the same as "start_url" in manifest.json
          urlPattern: '/',
          // use NetworkFirst or NetworkOnly if you redirect un-authenticated user to login page
          // use StaleWhileRevalidate if you want to prompt user to reload when new version available
          handler: 'NetworkFirst',
          options: {
            // don't change cache name
            cacheName: 'start-url',
            expiration: {
              maxEntries: 1,
              maxAgeSeconds: 24 * 60 * 60 // 24 hours
            }
          }
        },
        {
          urlPattern: /.png$/,
          handler: 'CacheFirst'
        },
        {
          urlPattern: /api/,
          handler: 'NetworkFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200],
              headers: {
                'x-test': 'true'
              }
            }
          }
        }
      ]
    }
  }
)
