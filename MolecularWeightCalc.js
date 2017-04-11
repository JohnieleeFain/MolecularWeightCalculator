function Element(symbol, aNum, mass){
    this.symbol = symbol;
    this.aNum = aNum;
    this.mass = mass
}

var H = new Element("H", 1, 1.01);
var He = new Element("He", 2, 4.00);
var Li = new Element("Li", 3, 6.94);
//var Li = new Element("Li", 3);",
var Be = new Element("Be", 4, 9.01);
var B = new Element("B", 5, 10.81);
var C = new Element("C", 6, 12.01);
var N = new Element("N", 7, 14.01);
var O = new Element("O", 8, 16.00);
var F = new Element("F", 9, 19.00);
var Ne = new Element("Ne", 10, 20.18);
var Na = new Element("Na", 11, 22.99);
var Mg = new Element("Mg", 12, 24.31);
var Al = new Element("Al", 13, 26.98);
var Si = new Element("Si", 14, 28.09);
var P = new Element("P", 15, 30.97);
var S = new Element("S", 16, 32.07);
var Cl = new Element("Cl", 17, 35.45);
var Ar = new Element("Ar", 18, 39.95);
var K = new Element("K", 19, 39.10);
var Ca = new Element("Ca", 20, 40.08);
var Sc = new Element("Sc", 21, 44.96);
var Ti = new Element("Ti", 22, 47.87);
var V = new Element("V", 23, 50.94);
var Cr = new Element("Cr", 24, 52.00);
var Mn = new Element("Mn", 25, 54.94);
var Fe = new Element("Fe", 26, 55.85);
var Co = new Element("Co", 27, 58.93);
var Ni = new Element("Ni", 28, 58.69);
var Cu = new Element("Cu", 29, 63.55);
var Zn = new Element("Zn", 30, 65.39);
var Ga = new Element("Ga", 31, 69.72);
var Ge = new Element("Ge", 32, 72.61);
var As = new Element("As", 33, 74.92);
var Se = new Element("Se", 34, 78.96);
var Br = new Element("Br", 35, 79.90);
var Kr = new Element("Kr", 36, 83.80);
var Rb = new Element("Rb", 37, 85.47);
var Sr = new Element("Sr", 38, 87.62);
var Y = new Element("Y", 39, 88.91);
var Zr = new Element("Zr", 40, 91.22);
var Nb = new Element("Nb", 41, 92.91);
var Mo = new Element("Mo", 42, 95.94);
var Tc = new Element("Tc", 43, 98); //atomic mass was in parentheses, don't know what that means
var Ru = new Element("Ru", 44, 101,07);
var Rh = new Element("Rh", 45, 102.91);
var Pd = new Element("Pd", 46, 106.42);
var Ag = new Element("Ag", 47, 107.87);
var Cd = new Element("Cd", 48, 112.41);
var In = new Element("In", 49, 114.82);
var Sn = new Element("Sn", 50, 118.71);
var Sb = new Element("Sb", 51, 121.76);
var Te = new Element("Te", 52, 127.60);
var I = new Element("I", 53, 126.90);
var Xe = new Element("Xe", 54, 131.29);
var Cs = new Element("Cs", 55, 132.91);
var Ba = new Element("Ba", 56, 137.33);
var La = new Element("La", 57, 138.91);
var Ce = new Element("Ce", 58, 140.12);
var Pr = new Element("Pr", 59, 140.91);
var Nd = new Element("Nd", 60, 144.24);
var Pm = new Element("Pm", 61, 145); // also has parenthesis for atomic mass
var Sm = new Element("Sm", 62, 150.36);
var Eu = new Element("Eu", 63, 151.96);
var Gd = new Element("Gd", 64, 157.25);
var Tb = new Element("Tb", 65, 158.93);
var Dy = new Element("Dy", 66, 162.50);
var Ho = new Element("Ho", 67, 164.93);
var Er = new Element("Er", 68, 167.26);
var Tm = new Element("Tm", 69, 168.93);
var Yb = new Element("Yb", 70, 173.04);
var Lu = new Element("Lu", 71, 174.97);
var Hf = new Element("Hf", 72, 178.49);
var Ta = new Element("Ta", 73, 180.95);
var W = new Element("W", 74, 183.64);
var Re = new Element("Ac", 75, 186.21);
var Os = new Element("Os", 76, 190.23);
var Ir = new Element("Ir", 77,  192.22);
var Pt = new Element("Pt", 78, 195.08);
var Au =  new Element("Au", 79, 196.97);
var Hg = new Element("Hg", 80, 200.59);
var Ti = new Element("Ti", 81, 204.38); //Tl or Ti?
var Pb = new Element("Pb", 82, 207.2);
var Bi = new Element("Bi", 83, 208.98);
var Po = new Element("Po", 84, 209) //the rest have parenthesis for their atomic masses
var At = new Element("At", 85, 210);
var Rn = new Element("Rn", 86, 222);
var Fr = new Element("Fr", 87, 223);
var Ra = new Element("Ra", 88, 226)
var Ac = new Element("Actinium", "Ac", 89, 227);
//var Ac = new Element("Ac", 89);
var Th = new Element("Th", 90, 232.04);
var Pa = new Element("Pa", 91, 231.04);
var U = new Element("U", 92, 238.03);
var Np = new Element("Np", 93, 237);
var Pu = new Element("Pu", 94, 244);
var Am = new Element("Am", 95, 243);
var Cm = new Element("Cm", 96, 247);
var Bk = new Element("Bk", 97, 247);
var Cf = new Element("Cf", 98, 251);
var Es = new Element("Es", 99, 252);
var Fm = new Element("Fm", 100, 257);
var Md = new Element("Md", 101, 258);
var No = new Element("No", 102, 259);
var Lr = new Element("Lr", 103, 262);
var Rf = new Element("Rf", 104, 261);
var Db = new Element("Db", 105, 262);
var Sg = new Element("Sg", 106, 266);
var Bh = new Element("Bh", 107, 264);
var Hs = new Element("Hs", 108, 269);
var Mt = new Element("Mt", 109, 268);


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
