

//Junto
var cotacaoBus = {
    buscarCotacaoLista : function(params){
      try{
        var callBackSucesso = function(data){

          cotacaoBind.bindLista(data);
        };
        var callBackErro = function(error){
          //Chamar tela OPS
          utilDebug.alert("Erro!");
        };
      	cotacaoService.buscarCotacaoLista(callBackSucesso,callBackErro,params);
      }catch(e){
		kony.print("erro cotacaoBus:" + e);
      }
  	}
};
//ou separado
cotacaoBus.buscarCotacaoDetalhe = function(params){
      try{
        var callBackSucesso = function(data){
          cotacaoBind.bindDetalhe(data);
        };
        var callBackErro = function(error){
          //Chamar tela OPS
          utilDebug.alert("Erro!");
        };
      	cotacaoService.buscarCotacaoDetalhe(callBackSucesso,callBackErro,params);
      }catch(e){
		kony.print("erro cotacaoBus:" + e);
      }
};