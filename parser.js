import { type } from "os";

export default function parser(tokens) {
  const ast = {
    type: "Program",
    body: [],
  };

  while (tokens.length > 0) {
    let token = tokens.shift();

    if (token.type === "terminator") {
      continue;
    }

    if (token.type === "keyword" && token.value === "maanlo") {
      let declaration = {
        type: "Declaration",
        name: tokens.shift().value,
        value: null,
      };

      //Check for assignment
      if (tokens[0].type === "operator" && tokens[0].value === "=") {
        tokens.shift(); //consume '='

        //Parse the Expression
        let expression = "";
        while (tokens.length > 0 && tokens[0].type !== "terminator") {
          expression += tokens.shift().value;
        }
        declaration.value = expression.trim();
      }

      ast.body.push(declaration);
    }

    if (token.type === "keyword" && token.value === "bolo") {
      let declaration = {
        type: "Print",
        expression: null,
      };
      let expression = "";
      while (tokens.length > 0 && tokens[0].type !== "terminator") {
        expression += tokens.shift().value;
      }
      declaration.expression = expression.trim();

      ast.body.push(declaration);
    }

    // if (token.type === "keyword" && token.value === "agar") {
    //   let declaration = {
    //     type: "Comparision",
    //     expression: null,
    //   };
    //   let expression = "";
    //   while (tokens.length > 0 && tokens[0].type !== "keyword") {
    //     expression += tokens.shift().value;
    //   }
    //   declaration.expression = expression.trim();

    //   ast.body.push(declaration);
    // }

    if (token.type === "keyword" && token.value === "agar") {
      let declaration = {
        type: "Comparision",
        condition: null,
        codeBlock: null,
      };
      let condition = "";
      while (tokens.length > 0 && tokens[0].value !== "{") {
        let char = tokens.shift().value;
        if (!/[\(\)]/.test(char)) {
          condition += char;
        }
      }
      tokens.shift();

      let codeBlock = [];
      while (tokens.length > 0 && tokens[0].value !== "}") {
        codeBlock.push(tokens.shift());
      }
      tokens.shift();

      declaration.condition = condition.trim();
      declaration.codeBlock = parser(codeBlock);
      // declaration.codeBlock.type = "IF";
      ast.body.push(declaration);
    }

    if (token.type === "keyword" && token.value === "warna") {
      let declaration = {
        type: "Comparision",
        // condition: null,
        codeBlock: null,
      };

      while (tokens.length > 0 && tokens[0].value !== "{") {
        tokens.shift();
      }
      tokens.shift();

      let codeBlock = [];
      while (tokens.length > 0 && tokens[0].value !== "}") {
        codeBlock.push(tokens.shift());
      }
      tokens.shift();

      declaration.codeBlock = parser(codeBlock);
      // declaration.codeBlock.type = "ELSE";
      ast.body.push(declaration);
    }

    // while loop
    if (token.type === "keyword" && token.value === "jabtak") {
      let declaration = {
        type: "WhileLoop",
        condition: null,
        codeBlock: null,
      };
      let condition = "";
      while (tokens.length > 0 && tokens[0].value !== "{") {
        let char = tokens.shift().value;
        if (!/[\(\)]/.test(char)) {
          condition += char;
        }
      }
      tokens.shift();

      let codeBlock = [];
      while (tokens.length > 0 && tokens[0].value !== "}") {
        codeBlock.push(tokens.shift());
      }
      tokens.shift();

      declaration.condition = condition.trim();
      declaration.codeBlock = parser(codeBlock);
      // declaration.codeBlock.type = "IF";
      // console.log(declaration.codeBlock);
      ast.body.push(declaration);
    }

    if (token.type === "identifier") {
      let declaration = {
        type: "Assignment",
        name: token.value,
        value: null,
      };

      //Check for assignment
      if (tokens[0].type === "operator" && tokens[0].value === "=") {
        tokens.shift(); //consume '='

        //Parse the Expression
        let expression = "";
        while (tokens.length > 0 && tokens[0].type !== "terminator") {
          expression += tokens.shift().value;
        }
        declaration.value = expression.trim();
      }

      ast.body.push(declaration);
    }
  }
  return ast;
}
