var cotacaoService = {
    buscarCotacaoDetalhe: function(callBackSucesso, callBackErro, params) {
        var opMock = true;
        var servico = "MobileInstitucionalWS";
        var operacao = "detalhe";
        if (opMock || config.mockarTudo) {
            callBackSucesso(cotacaoServiceMock.buscarCotacaoDetalhe(callBackSucesso, callBackErro, params));
        } else {
            //callWebService(param, retornoCotacaoSucesso, retornoCotacaoFalha, cotacaoService.operacao);
        }
    },
    buscarCotacaoLista: function(callBackSucesso, callBackErro, params) {
        var opMock = true;
        var servico = "MobileInstitucionalWS";
        var operacao = "lista";
        if (opMock || config.mockarTudo) {
            callBackSucesso(cotacaoServiceMock.buscarCotacaoLista(callBackSucesso, callBackErro, params));
        } else {
            //callWebService(param, retornoCotacaoSucesso, retornoCotacaoFalha, cotacaoService.operacao);
        }
    }
};