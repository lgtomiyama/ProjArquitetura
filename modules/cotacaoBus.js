//Implementacao os metodos juntos em uma referencia a classe
//Desvantagem: comum perder ',', '{', '['
var CotacaoBus = {
    buscarCotacaoLista : function(params){
      try{
        var callBackSucesso = function(data){

          CotacaoBind.bindLista(data);
        };
        var callBackErro = function(error){
          //Chamar tela OPS
          UtilDebug.erroCallback(error);
        };
        if(UtilsNetwork.conectado())
        {
      	  CotacaoService.buscarCotacaoLista(callBackSucesso,callBackErro,params);
        }else{
          UtilView.telaNaoConectado();
        }
      }catch(erro){
		UtilDebug.error(erro);
      }
  	}
};
//Implementacao dos metodos replicando a classe separado dos demais
//Vantagem: maior eficacia para buscar os metodos dentro das classes
CotacaoBus.buscarCotacaoDetalhe = function(params){
      try{
        var callBackSucesso = function(data){
          CotacaoBind.bindDetalhe(data);
        };
        var callBackErro = function(error){
          //Chamar tela OPS
          UtilDebug.erooCallback(error);
        };
      	CotacaoService.buscarCotacaoDetalhe(callBackSucesso,callBackErro,params);
      }catch(erro){
		CtilDebug.error(erro);
      }
};