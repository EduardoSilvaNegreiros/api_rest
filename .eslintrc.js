module.exports = {
  // Define o ambiente do código
  env: {
    es6: true, // Define o uso do ECMAScript 6 (ES6)
    node: true // Define o uso do Node.js como ambiente
  },

  // Extende as regras de estilo da base do Airbnb
  extends: [
    "airbnb-base"
  ],

  // Define variáveis globais que podem ser usadas sem serem declaradas
  globals: {
    Atomics: "readonly", // Variável global usada em threads (read-only)
    SharedArrayBuffer: "readonly" // Variável global usada em threads (read-only)
  },

  // Define opções do parser (analisador de sintaxe)
  parserOptions: {
    ecmaVersion: 2018, // Define a versão do ECMAScript (ES2018)
    sourceType: "module" // Define o uso de módulos do ECMAScript
  },

  // Define regras específicas para o código
  rules: {
    "no-console": "off", // Permite o uso de `console.log`
    "class-methods-use-this": "off", // Desativa a regra que força métodos de classe a usarem `this`
    "import/first": "off", // Desativa a regra que força as importações a estarem no topo do arquivo
    "no-param-reassign": "off", // Desativa a regra que impede a reatribuição de parâmetros de função
    "camelcase": "off",
  },
};
