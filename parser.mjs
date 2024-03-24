export default function parser(tokens) {
  const ast = {
    type: "Program",
    body: [],
  };

  while (tokens.length > 0) {
    let token = tokens.shift();

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
        while (tokens.length > 0 && tokens[0].type !== "keyword") {
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
      while (tokens.length > 0 && tokens[0].type !== "keyword") {
        expression += tokens.shift().value;
      }
      declaration.expression = expression.trim();

      ast.body.push(declaration);
    }

    if (token.type === "keyword" && token.value === "agar") {
      let declaration = {
        type: "Comparision",
        expression: null,
      };
      let expression = "";
      while (tokens.length > 0 && tokens[0].type !== "keyword") {
        expression += tokens.shift().value;
      }
      declaration.expression = expression.trim();

      ast.body.push(declaration);
    }

    if (token.type === "keyword" && token.value === "warna") {
      let declaration = {
        type: "Comparision",
        expression: null,
      };
      let expression = "";
      while (tokens.length > 0 && tokens[0].type !== "keyword") {
        expression += tokens.shift().value;
      }
      declaration.expression = expression.trim();

      ast.body.push(declaration);
    }
  }
  return ast;
}
