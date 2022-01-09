var input = document.getElementById("input");
var container = document.querySelector('.container');
var keycontainer = document.getElementById("keycontainer");
var key = document.getElementById("key");
var homescreen = document.querySelector(".homescreen");
function submit() {
    keycontainer.style.display = "none";
    container.style.display = "flex";
}
function number(x) {
    input.value = input.value + x;
}
function unlock() {
    if (input.value == "") {
        alert("Enter the  Key!");

    } else if (input.value === key.value) {
        container.style.display = "none";
        homescreen.style.display = "initial";
        keycontainer.style.display = "none";
    }

    else
        alert("Enter the correct Key!");
}