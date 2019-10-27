const path = require('path');

module.exports = {
  clientPort: process.env.CLIENT_PORT || 9000,

  sourcePath: path.join(__dirname, '../src'),
  outPath: path.join(__dirname, '../dist')
};
