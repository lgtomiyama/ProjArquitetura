//Type your code here
function createLocalnotification() {
    var notificationId = "06";
    var date = "26 may 2017 13:53:00 +0530";
    var format = "dd MMM yyyy HH:mm:ss Z";
    var message = "Local notification Received";
    var title = "Title";
    var categoryId = "calendar";
    kony.localnotifications.create({
        "id": notificationId,
        "dateTime": {
            "date": date,
            "format": format
        },
        "message": message,
        "title": title,
        "categoryId": categoryId,
        "pspConfig": {
            "badge": 1,
            "sound": kony.localnotifications.DEFAULT_SOUND
        }
    });
}