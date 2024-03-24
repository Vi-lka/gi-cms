module.exports = ({ env }) => ({
  // ...
  graphql: {
    config: {
      endpoint: '/graphql',
      depthLimit: 10,
      amountLimit: 1000,
    },
  },
  "apollo-sandbox": {
    // enables the plugin only in development mode
    // if you also want to use it in production, set this to true
    // keep in mind that graphql playground has to be enabled
    enabled: process.env.NODE_ENV === "production" ? false : true,
  },
  'import-export-entries': {
    enabled: true,
    config: {
          /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
          serverPublicHostname: env('PUBLIC_URL', 'http://localhost:1337')
    },
  },
  'drag-drop-content-types': {
    enabled: true
  },
  'publisher': {
    enabled: true
  },
  // ...
});