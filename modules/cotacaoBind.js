var CotacaoBind = {
    bindDetalhe : function(data){
      UtilDebug.alert(data);
      CotacaoForm.lblCodigo.text = data.codCotacao;
    },
    bindLista : function(data){
      UtilDebug.alert(data);
      CotacaoForm.listCotacoes.masterData = data.lista;
    }
};