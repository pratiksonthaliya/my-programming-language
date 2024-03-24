import lexer from "./lexer.mjs";
import parser from "./parser.mjs";
import codeGeneratorJS from "./codeGeneratorJS.mjs";

function runner(input) {
  eval(input);
}

function compile(input) {
  const tokens = lexer(input);
  console.log(tokens);
  const ast = parser(tokens);
  console.log(ast);
  const executableCode = codeGeneratorJS(ast);
  console.log(executableCode);
  runner(executableCode);
}

const code = `
    maanlo y = 100
    maanlo p = 56
    maanlo sum = y / p
    
    agar sum < 6
        bolo 5*sum
    warna 
        bolo 4*sum

    maanlo x = 0
    
`;

compile(code);
