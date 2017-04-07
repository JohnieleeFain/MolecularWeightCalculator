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


function Element(number, symbol, mass){
    this.number = number;
    this.symbol = symbol;
    this.mass = mass;
}
var element = new Element(1, "H", 1.01);
//
//function NumberOfElements() {
//    var x= document.getElementById("elements").selected;
//     document.getElementById("demo").innerHTML = x;
//}
//
//function atomArray(symbol, mass) {
//	this.symbol = symbol
//	this.mass = mass
//}
//
//function makeArray(arraySize) {
//	this.length = arraySize
//	for (var i=1; i <= arraySize; i++) {
//	this[i] = 0
//	}
//	return this
//}
//
//a = new makeArray(109)
//a[1] = new atomArray("H",1.0079)
//a[2] = new atomArray("He",4.0026)
//a[3] = new atomArray("Li",6.941)
//a[4] = new atomArray("Be",9.0122)
//a[5] = new atomArray("B",10.811)
//a[6] = new atomArray("C",12.0107)
//a[7] = new atomArray("N",14.0067)
//a[8] = new atomArray("O",15.9994)
//a[9] = new atomArray("F",18.9984)
//a[10] = new atomArray("Ne",20.1797)
//a[11] = new atomArray("Na",22.9897)
//a[12] = new atomArray("Mg",24.305)
//a[13] = new atomArray("Al",26.9815)
//a[14] = new atomArray("Si",28.0855)
//a[15] = new atomArray("P",30.9738)
//a[16] = new atomArray("S",32.065)
//a[17] = new atomArray("Cl",35.453)
//a[18] = new atomArray("Ar",39.948)
//a[19] = new atomArray("K",39.0983)
//a[20] = new atomArray("Ca",40.078)
//a[21] = new atomArray("Sc",44.9559)
//a[22] = new atomArray("Ti",47.867)
//a[23] = new atomArray("V",50.9415)
//a[24] = new atomArray("Cr",51.9961)
//a[25] = new atomArray("Mn",54.938)
//a[26] = new atomArray("Fe",55.845)
//a[27] = new atomArray("Co",58.9332)
//a[28] = new atomArray("Ni",58.6934)
//a[29] = new atomArray("Cu",63.546)
//a[30] = new atomArray("Zn",65.39)
//a[31] = new atomArray("Ga",69.723)
//a[32] = new atomArray("Ge",72.64)
//a[33] = new atomArray("As",74.9216)
//a[34] = new atomArray("Se",78.96)
//a[35] = new atomArray("Br",79.904)
//a[36] = new atomArray("Kr",83.8)
//a[37] = new atomArray("Rb",85.4678)
//a[38] = new atomArray("Sr",87.62)
//a[39] = new atomArray("Y",88.9059)
//a[40] = new atomArray("Zr",91.224)
//a[41] = new atomArray("Nb",92.9064)
//a[42] = new atomArray("Mo",95.94)
//a[43] = new atomArray("Tc",98)
//a[44] = new atomArray("Ru",101.07)
//a[45] = new atomArray("Rh",102.9055)
//a[46] = new atomArray("Pd",106.42)
//a[47] = new atomArray("Ag",107.8682)
//a[48] = new atomArray("Cd",112.411)
//a[49] = new atomArray("In",114.818)
//a[50] = new atomArray("Sn",118.71)
//a[51] = new atomArray("Sb",121.76)
//a[52] = new atomArray("Te",127.6)
//a[53] = new atomArray("I",126.9045)
//a[54] = new atomArray("Xe",131.293)
//a[55] = new atomArray("Cs",132.9055)
//a[56] = new atomArray("Ba",137.327)
//a[57] = new atomArray("La",138.9055)
//a[58] = new atomArray("Ce",140.116)
//a[59] = new atomArray("Pr",140.9077)
//a[60] = new atomArray("Nd",144.24)
//a[61] = new atomArray("Pm",145)
//a[62] = new atomArray("Sm",150.36)
//a[63] = new atomArray("Eu",151.964)
//a[64] = new atomArray("Gd",157.25)
//a[65] = new atomArray("Tb",158.9253)
//a[66] = new atomArray("Dy",162.5)
//a[67] = new atomArray("Ho",164.9303)
//a[68] = new atomArray("Er",167.259)
//a[69] = new atomArray("Tm",168.9342)
//a[70] = new atomArray("Yb",173.04)
//a[71] = new atomArray("Lu",174.967)
//a[72] = new atomArray("Hf",178.49)
//a[73] = new atomArray("Ta",180.9479)
//a[74] = new atomArray("W",183.84)
//a[75] = new atomArray("Re",186.207)
//a[76] = new atomArray("Os",190.23)
//a[77] = new atomArray("Ir",192.217)
//a[78] = new atomArray("Pt",195.078)
//a[79] = new atomArray("Au",196.9665)
//a[80] = new atomArray("Hg",200.59)
//a[81] = new atomArray("Tl",204.3833)
//a[82] = new atomArray("Pb",207.2)
//a[83] = new atomArray("Bi",208.9804)
//a[84] = new atomArray("Po",209)
//a[85] = new atomArray("At",210)
//a[86] = new atomArray("Rn",222)
//a[87] = new atomArray("Fr",223)
//a[88] = new atomArray("Ra",226)
//a[89] = new atomArray("Ac",227)
//a[90] = new atomArray("Th",232.0381)
//a[91] = new atomArray("Pa",231.0359)
//a[92] = new atomArray("U",238.0289)
//a[93] = new atomArray("Np",237)
//a[94] = new atomArray("Pu",244)
//a[95] = new atomArray("Am",243)
//a[96] = new atomArray("Cm",247)
//a[97] = new atomArray("Bk",247)
//a[98] = new atomArray("Cf",251)
//a[99] = new atomArray("Es",252)
//a[100] = new atomArray("Fm",257)
//a[101] = new atomArray("Md",258)
//a[102] = new atomArray("No",259)
//a[103] = new atomArray("Lr",262)
//a[104] = new atomArray("Rf",261)
//a[105] = new atomArray("Db",262)
//a[106] = new atomArray("Sg",266)
//a[107] = new atomArray("Bh",264)
//a[108] = new atomArray("Hs",277)
//a[109] = new atomArray("Mt",268)
