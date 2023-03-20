window.addEventListener("message", function (event) {
    console.log("Received message from iFrame: ", event.data, "\nOrigin of the message :", event.origin);
    alert("Received message from iFrame: "+ event.data + "\nOrigin of the message :" + event.origin);

});
