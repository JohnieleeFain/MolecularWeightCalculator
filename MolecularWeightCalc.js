function getElement() {
var a = document.getElementById("elements");
var value = a.options[a.selectedIndex].value;
document.getElementById("output").innerHTML = value;
}

function getCompound() {
var a = document.getElementById("compounds");
var value = a.options[a.selectedIndex].value;
document.getElementById("output").innerHTML = value;
}
