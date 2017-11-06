var UtilsNetwork = {};
	UtilsNetwork.conectado = function(){
      var estaConectado = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
      return estaConectado;
    };