module.exports = {
  env: {
    es6: true, // Habilita recursos ES6
    node: true // Define Node.js como ambiente
  },

  extends: [
    "airbnb-base"
  ],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module" // Permite o uso de módulos ES
  },

  rules: {
    "no-console": "off", // Permite o uso de console.log
    "class-methods-use-this": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "camelcase": "off", // Desabilita a exigência de camelCase
  },
};
