const path = require('path');

module.exports = {
  resolve: {
    alias: {
      models: path.resolve(__dirname, 'src/models'),
      parsers: path.resolve(__dirname, 'src/parsers'),
      searchers: path.resolve(__dirname, 'src/searchers')
    },
  },
};