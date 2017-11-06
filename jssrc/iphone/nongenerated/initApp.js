 function iniciarForms() {
     //Iniciar eventos dos forms
     CotacaoForm.preShow = CotacaoView.preShow;
 }

 function localNotCallBacks() {
     try {
         kony.localnotifications.setCallbacks({
             "offlinenotification": offlinenotification,
             "onlinenotification": onlinenotification
         });
     } catch (err) {
         kony.print("Error Code " + err.errorCode + " Message " + err.message);
     }
 }
 /* Notification callback handlers. These are invoked automatically when their respective notifications are fired. */
 function offlinenotification(notificationobject, actionid) {
     alert("offline notification callback inkvoked");
     alert("notification object is :" + JSON.stringify(notificationobject) + " action id is " + actionid);
 }

 function onlinenotification(notificationobject, actionid) {
     alert("onlinenotification notification callback inkvoked");
     alert("notification object is :" + JSON.stringify(notificationobject) + " action id is " + actionid);
 }

 function registerActions() {
     var accept = kony.notificationsettings.createAction({
         "id": "Accept",
         "label": "Accept",
         "pspConfig": {
             "authenticationRequired": true,
             "destructive": true,
             "activationMode": kony.notificationsettings.ACTIVATION_MODE_FORWARDS,
             "visibleOn": kony.notificationsettings.BOTH
         }
     });
     var reject = kony.notificationsettings.createAction({
         "id": "Reject",
         "label": "Reject",
         "pspConfig": {
             "authenticationRequired": false,
             "destructive": false,
             "activationMode": kony.notificationsettings.ACTIVATION_MODE_FORWARDS,
             "visibleOn": kony.notificationsettings.BOTH
         }
     });
     var decline = kony.notificationsettings.createAction({
         "id": "Decline",
         "label": "Decline",
         "pspConfig": {
             "activationMode": kony.notificationsettings.ACTIVATION_MODE_BACKWARDS,
             "authenticationRequired": true,
             "destructive": false,
             "visibleOn": kony.notificationsettings.BOTH
         }
     });
     var defaultActionContextArr = [accept, reject, decline];
     var minimalActionContextArr = [accept, reject];
     var categoryObj = kony.notificationsettings.createCategory({
         "categoryId": "invitation",
         "actions": defaultActionContextArr,
         "pspConfig": {
             "minimalActions": minimalActionContextArr
         }
     });
     //Using kony.notificationsettings.registerCategory 
     var categoryArr = [categoryObj];
     var registerCategory = kony.notificationsettings.registerCategory({
         "categories": categoryArr,
         "pspConfig": {
             "types": [0, 1, 2]
         }
     });
 }