const moduleScope = "module";

{
  const standaloneBlockScope = "standalone";
  for (let loopScope = 0; loopScope < 3; loopScope++) {
    switch (loopScope) {
      case 0:
        console.log(moduleScope);
        break;
      case 1:
        console.log(standaloneBlockScope);
        break;
      case 2: {
        const caseBlockScope = "case";
        console.log(caseBlockScope);
      }
    }
  }
}
