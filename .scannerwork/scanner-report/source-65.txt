//Notificacao -----ainda nao deu certo
var UtilView;
UtilView.createLocalnotification = function(){ 
    var notificationId = "06";
    var date = "7 jun 2017 01:24:00 +0530";
    var format = "dd MMM yyyy HH:mm:ss Z";
    var message = "Local notification Received";
    var title = "Title";
    var categoryId ="calendar";
  
    kony.localnotifications.create({
        "id": notificationId,
        "dateTime": {
            "date": date,
            "format": format
        },
        "message": message,
        "title": title,
        "categoryId": categoryId,
        "pspConfig":{
            "badge":1,
            "sound": kony.localnotifications.DEFAULT_SOUND
        }

    });
  alert(offlinenotification);
};

UtilView.telaNaoConectado = function(){
  //chamar tela nao contectado
  
};
