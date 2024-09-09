const { resolve } = require('path');
const { promises: fs } = require('fs');

const loadConfig = async () => {
  const configPath = resolve(__dirname, 'config.js');
  const configFile = await fs.readFile(configPath, 'utf8');
  return eval(configFile);
};

module.exports = async () => {
  return await loadConfig();
};
