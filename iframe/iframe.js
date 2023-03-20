const input = document.getElementById("message-input");
const button = document.getElementById("send-message");

input.addEventListener("input", function () {
    if (input.value.trim() === "") {
        button.disabled = true;
        button.classList.remove("enabled");
    } else {
        button.disabled = false;
        button.classList.add("enabled");
    }
});

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        window.parent.postMessage(input.value, "*");
    }
});