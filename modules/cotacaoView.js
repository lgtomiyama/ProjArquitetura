var CotacaoView = {
  preShow:function(){
    //<Eventos>
   	CotacaoForm.postShow = function(){
     	//Carrega tela
      CotacaoBus.buscarCotacaoLista(null);
      //UtilView.createLocalnotification();
      //localNotCallBacks();
   	};
	CotacaoForm.btnBuscarCotacao.onClick = function(){
      CotacaoBus.buscarCotacaoDetalhe(null);
    };
    //</Eventos>
  },
};
