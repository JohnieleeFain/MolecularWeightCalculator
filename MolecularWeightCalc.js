function Element(symbol, aNum){
    this.symbol = symbol;
    this.aNum = aNum;
}

var Ac = new Element("Ac", 10000000);
var Li = new Element("Li", 3);


function getElement(elem) {
//var msg = document.getElementById("elements").value;
//var value = a.options[a.selectedIndex].value;
var msg = elem;
console.log(msg);
document.getElementById("atoms").innerHTML = msg;
}

function getCompound() {
var a = document.getElementById("compounds");
var value = a.options[a.selectedIndex].value;
document.getElementById("output").innerHTML = value;
}
