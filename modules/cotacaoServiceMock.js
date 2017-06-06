var cotacaoServiceMock = {
  buscarCotacaoLista : function(callBackSucesso,callBackErro,params){
    return {lista : [[["apolice","Apólice"], 
            ["sinistro","Sinistro"],
            ["situacao_financeira","Situação financeira"],
            ["sugestao","Sugestão"],
            ["reclamacao","Reclamação"],
            ["demais_assuntos","Demais assuntos"], 100]]};
  },
  buscarCotacaoDetalhe : function(callBackSucesso,callBackErro,params){
    return {codCotacao:"VX7Y89T",
           	nomCotacao:"JosePereiraSilva"};
  }
};
