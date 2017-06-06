var cotacaoBind = {
    bindDetalhe: function(data) {
        utilDebug.alert(data);
        cotacaoForm.lblCodigo.text = data.codCotacao;
    },
    bindLista: function(data) {
        utilDebug.alert(data);
        cotacaoForm.listCotacoes.masterData = data.lista;
    }
};