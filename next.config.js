const optimizedImages = require('next-optimized-images');
module.exports = optimizedImages({
  images: {
    disableStaticImages: true,
  },
  env: {
    BASEPATH: 'http://localhost:3000',
    APIURL: "http://localhost:3001/graphql",
    MAP: "AIzaSyAUTJACDw_EewE7Hqpo2qJUg6mNDu510jc"
  }
});