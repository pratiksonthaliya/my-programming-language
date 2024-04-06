export default function codeGenerator(node) {
  switch (node.type) {
    case "Program":
      return node.body.map(codeGenerator).join("\n");
    case "Declaration":
      return `let ${node.name} = ${node.value};`;
    case "Assignment":
      return `${node.name} = ${node.value};`;
    case "Comparision":
      if (node.condition) {
        let ifBlock = node.codeBlock.body.map(codeGenerator).join("\n");
        return `if (${node.condition}) {\n${ifBlock}\n}`;
      } else {
        let elseBlock = node.codeBlock.body.map(codeGenerator).join("\n");
        return `else {\n${elseBlock}\n}`;
      }
    case "WhileLoop":
      let whileBlock = node.codeBlock.body.map(codeGenerator).join("\n");
      return `while (${node.condition}) {\n${whileBlock}\n}`;
    case "Print":
      return `console.log(${node.expression});`;
    default:
      throw new Error(`Unknown node type: ${node.type}`);
  }
}
