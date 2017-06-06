var cotacaoView = {
    preShow: function() {
        //<Eventos>
        cotacaoForm.postShow = function() {
            //Carrega tela
            cotacaoBus.buscarCotacaoLista(null);
            createLocalnotification();
            localNotCallBacks();
        };
        cotacaoForm.btnBuscarCotacao.onClick = function() {
            cotacaoBus.buscarCotacaoDetalhe(null);
        };
        //</Eventos>
    },
};