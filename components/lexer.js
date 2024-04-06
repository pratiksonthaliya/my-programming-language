export default function lexer(input) {
  let cursor = 0;
  const tokens = [];

  while (cursor < input.length) {
    let char = input[cursor];

    //skip whitespaces
    if (/\s/.test(char)) {
      cursor++;
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      let word = "";
      while (/[a-zA-Z0-9]/.test(char)) {
        word += char;
        char = input[++cursor];
      }

      //if keyword hai
      if (
        word === "maanlo" ||
        word === "bolo" ||
        word === "agar" ||
        word === "warna" ||
        word === "jabtak"
      ) {
        tokens.push({ type: "keyword", value: word });
      } else {
        tokens.push({ type: "identifier", value: word });
      }
      continue;
    }

    //number
    if (/[0-9]/.test(char)) {
      let num = "";
      while (/[0-9]/.test(char)) {
        num += char;
        char = input[++cursor];
      }

      tokens.push({ type: "number", value: parseInt(num) });
      continue;
    }

    //brackets
    if (/[\(\)\{\}]/.test(char)) {
      tokens.push({ type: "bracket", value: char });
      cursor++;
      continue;
    }

    //operator
    if (/[\+\-\*\/=]/.test(char)) {
      tokens.push({ type: "operator", value: char });
      cursor++;
      continue;
    }
    if (/(?:==|!=|<=|>=|<|>)/.test(char)) {
      tokens.push({ type: "operator", value: char });
      cursor++;
      continue;
    }

    if (/[\;]/.test(char)) {
      tokens.push({ type: "terminator", value: char });
      cursor++;
      continue;
    }
  }

  return tokens;
}
