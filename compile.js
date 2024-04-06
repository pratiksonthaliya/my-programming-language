import lexer from "./components/lexer.js";
import parser from "./components/parser.js";
import codeGenerator from "./components/codeGeneratorJS.js";
// import { code } from "./code.js";

function runner(input) {
  try {
    eval(input);
  } catch {
    console.error(new Error(`Syntax Error`));
  }
}

export default function compile(input) {
  const tokens = lexer(input);
  const ast = parser(tokens);
  const executableCode = codeGenerator(ast);
  runner(executableCode);
}

// compile(code);
