export default function codeGeneratorJS(node) {
  switch (node.type) {
    case "Program":
      return node.body.map(codeGeneratorJS).join("\n");
    case "Declaration":
      return `let ${node.name} = ${node.value};`;
    case "Comparision":
      if (node.expression != "") {
        return `if(${node.expression})`;
      } else {
        return `else`;
      }
    case "Print":
      return `console.log(${node.expression});`;
  }
}
