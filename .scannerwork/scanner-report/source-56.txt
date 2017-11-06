var UtilDebug = {
  //Metodo para exibir 
  alert:function(texto){
    if(config.debug)
    {
		alert(texto);
    }
  },
  //Metodo para tratamento de erros
  error:function(erro){
    if(config.debug)
    {
		alert(erro);
    }
    kony.print("erro:" + erro);
  },
    //Metodo para tratamento de erros
  erroCallback:function(erro){
    if(config.debug)
    {
		alert(erro);
    }
    kony.print("erro callback:" + erro);
  }
};