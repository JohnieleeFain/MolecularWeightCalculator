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


//function getElement(elem) {
//var msg = document.getElementById("elements").value;
//var value = a.options[a.selectedIndex].value;
//var msg = elem;
//console.log(msg);
//document.getElementById("atoms").innerHTML = msg;
//}

function getElement(elem) { // elem = 'Li'
//var value = a.options[a.selectedIndex].value;
//var msg = elem;
//console.log(msg);
document.getElementById("atoms").innerHTML = elem.symbol;
document.getElementById("masses").innerHTML = elem.mass;
}

function getCompound(comp) {
//var a = document.getElementById("compounds");
//var value = a.options[a.selectedIndex].value;
var  msg_comp = comp;
document.getElementById("atoms").innerHTML = value;
}
