window.addEventListener("message", function (event) {
    console.log("Received message from iFrame: ", event.data);
    alert("Received message from iFrame: "+ event.data);

});
