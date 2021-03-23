$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "# Funcionalidade: Consulta"
    },
    {
      "line": 3,
      "value": "#  Cenario: Consultar Ovo de Pascoa"
    },
    {
      "line": 4,
      "value": "# Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 5,
      "value": "#Quando pesquiso por \"Ovo de Páscoa\""
    },
    {
      "line": 6,
      "value": "#Entao Exibe a expressao \"Ovo de Páscoa\" no titulo da guia"
    }
  ],
  "line": 8,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4868666000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": ": Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;:-consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Exibe a expressao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 7159580100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 4275535300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 10007361800,
  "status": "passed"
});
formatter.after({
  "duration": 4059824000,
  "status": "passed"
});
});