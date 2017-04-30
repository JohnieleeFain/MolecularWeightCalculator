function Element(symbol, aNum, mass) {
    this.symbol = symbol;
    this.aNum = aNum;
    this.mass = mass;
}
var elements = new Array(109);
elements[0] = new Element("H", 1, 1.01);
elements[1] = new Element("He", 2, 4.00);
elements[2] = new Element("Li", 3, 6.94);
elements[3] = new Element("Be", 4, 9.01);
elements[4] = new Element("B", 5, 10.81);
elements[5] = new Element("C", 6, 12.01);
elements[6] = new Element("N", 7, 14.01);
elements[7] = new Element("O", 8, 16.00);
elements[8] = new Element("F", 9, 19.00);
elements[9] = new Element("Ne", 10, 20.18);
elements[10] = new Element("Na", 11, 22.99);
elements[11] = new Element("Mg", 12, 24.31);
elements[12] = new Element("Al", 13, 26.98);
elements[13] = new Element("Si", 14, 28.09);
elements[14] = new Element("P", 15, 30.97);
elements[15] = new Element("S", 16, 32.07);
elements[16] = new Element("Cl", 17, 35.45);
elements[17] = new Element("Ar", 18, 39.95);
elements[18] = new Element("K", 19, 39.10);
elements[19] = new Element("Ca", 20, 40.08);
elements[20] = new Element("Sc", 21, 44.96);
elements[21] = new Element("Ti", 22, 47.87);
elements[22] = new Element("V", 23, 50.94);
elements[23] = new Element("Cr", 24, 52.00);
elements[24] = new Element("Mn", 25, 54.94);
elements[25] = new Element("Fe", 26, 55.85);
elements[26] = new Element("Co", 27, 58.93);
elements[27] = new Element("Ni", 28, 58.69);
elements[28] = new Element("Cu", 29, 63.55);
elements[29] = new Element("Zn", 30, 65.39);
elements[30] = new Element("Ga", 31, 69.72);
elements[31] = new Element("Ge", 32, 72.61);
elements[32] = new Element("As", 33, 74.92);
elements[33] = new Element("Se", 34, 78.96);
elements[34] = new Element("Br", 35, 79.90);
elements[35] = new Element("Kr", 36, 83.80);
elements[36] = new Element("Rb", 37, 85.47);
elements[37] = new Element("Sr", 38, 87.62);
elements[38] = new Element("Y", 39, 88.91);
elements[39] = new Element("Zr", 40, 91.22);
elements[40] = new Element("Nb", 41, 92.91);
elements[41] = new Element("Mo", 42, 95.94);
elements[42] = new Element("Tc", 43, 98);
elements[43] = new Element("Ru", 44, 101, 07);
elements[44] = new Element("Rh", 45, 102.91);
elements[45] = new Element("Pd", 46, 106.42);
elements[46] = new Element("Ag", 47, 107.87);
elements[47] = new Element("Cd", 48, 112.41);
elements[48] = new Element("In", 49, 114.82);
elements[49] = new Element("Sn", 50, 118.71);
elements[50] = new Element("Sb", 51, 121.76);
elements[51] = new Element("Te", 52, 127.60);
elements[52] = new Element("I", 53, 126.90);
elements[53] = new Element("Xe", 54, 131.29);
elements[54] = new Element("Cs", 55, 132.91);
elements[55] = new Element("Ba", 56, 137.33);
elements[56] = new Element("La", 57, 138.91);
elements[57] = new Element("Ce", 58, 140.12);
elements[58] = new Element("Pr", 59, 140.91);
elements[59] = new Element("Nd", 60, 144.24);
elements[60] = new Element("Pm", 61, 145);
elements[61] = new Element("Sm", 62, 150.36);
elements[62] = new Element("Eu", 63, 151.96);
elements[63] = new Element("Gd", 64, 157.25);
elements[64] = new Element("Tb", 65, 158.93);
elements[65] = new Element("Dy", 66, 162.50);
elements[66] = new Element("Ho", 67, 164.93);
elements[67] = new Element("Er", 68, 167.26);
elements[68] = new Element("Tm", 69, 168.93);
elements[69] = new Element("Yb", 70, 173.04);
elements[70] = new Element("Lu", 71, 174.97);
elements[71] = new Element("Hf", 72, 178.49);
elements[72] = new Element("Ta", 73, 180.95);
elements[73] = new Element("W", 74, 183.64);
elements[74] = new Element("Ac", 75, 186.21);
elements[75] = new Element("Os", 76, 190.23);
elements[76] = new Element("Ir", 77, 192.22);
elements[77] = new Element("Pt", 78, 195.08);
elements[78] = new Element("Au", 79, 196.97);
elements[79] = new Element("Hg", 80, 200.59);
elements[80] = new Element("Ti", 81, 204.38);
elements[81] = new Element("Pb", 82, 207.2);
elements[82] = new Element("Bi", 83, 208.98);
elements[83] = new Element("Po", 84, 209)
elements[84] = new Element("At", 85, 210);
elements[85] = new Element("Rn", 86, 222);
elements[86] = new Element("Fr", 87, 223);
elements[87] = new Element("Ra", 88, 226);
elements[88] = new Element("Ac", 89, 227);
elements[89] = new Element("Th", 90, 232.04);
elements[90] = new Element("Pa", 91, 231.04);
elements[91] = new Element("U", 92, 238.03);
elements[92] = new Element("Np", 93, 237);
elements[93] = new Element("Pu", 94, 244);
elements[94] = new Element("Am", 95, 243);
elements[95] = new Element("Cm", 96, 247);
elements[96] = new Element("Bk", 97, 247);
elements[97] = new Element("Cf", 98, 251);
elements[98] = new Element("Es", 99, 252);
elements[99] = new Element("Fm", 100, 257);
elements[100] = new Element("Md", 101, 258);
elements[101] = new Element("No", 102, 259);
elements[102] = new Element("Lr", 103, 262);
elements[103] = new Element("Rf", 104, 261);
elements[104] = new Element("Db", 105, 262);
elements[105] = new Element("Sg", 106, 266);
elements[106] = new Element("Bh", 107, 264);
elements[107] = new Element("Hs", 108, 269);
elements[108] = new Element("Mt", 109, 268);

function getElement(elemSymbol, number = 1) {
    var elem = null;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].symbol === elemSymbol) {
            elem = elements[i];
            var table = document.getElementById("rows");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cell1.innerHTML = number;
            cell2.innerHTML = elem.symbol;
            cell3.innerHTML = elem.aNum;
            cell4.innerHTML = elem.mass;
            cell5.innerHTML = elem.mass;


           // document.getElementById("atomic").innerHTML = elem.aNum;
          //  document.getElementById("atoms").innerHTML = elem.symbol;
           // document.getElementById("masses").innerHTML = elem.mass;
           // document.getElementById("subtotal").innerHTML = elem.mass;
           // document.getElementById("number").innerHTML = 1;
            break;
        }
    }
}


function Compound(formula) {
    this.formula = formula;
}
var compounds = new Array(59);
compounds[0] = new Compound("C19H29COOH");
compounds[1] = new Compound("C12H10");
compounds[2] = new Compound("C12H6O2");
compounds[3] = new Compound("C12H8");
compounds[4] = new Compound("CH3CHO");
compounds[5] = new Compound("C8H9NO");
compounds[6] = new Compound("CH3COOH");
compounds[7] = new Compound("CH3COCH3");
compounds[8] = new Compound("CH3CN");
compounds[9] = new Compound("C8H8O");
compounds[10] = new Compound("C6H5CHO");
compounds[11] = new Compound("C6H6");
compounds[12] = new Compound("C6H5COOH");
compounds[13] = new Compound("C7H8O");
//compounds[14] = new Compound("C6H5Br");
//compounds[15] = new Compound("CH3Br");
compounds[16] = new Compound("C4H8O");
compounds[17] = new Compound("C4H10");
compounds[18] = new Compound("C4H10O");
compounds[19] = new Compound("CO2");
compounds[20] = new Compound("H2CO3");
compounds[21] = new Compound("C6H10O5");
compounds[22] = new Compound("C2H3Cl");
//compounds[23] = new Compound("CHCl3");
compounds[24] = new Compound("C6H12");
compounds[25] = new Compound("C4H10O");
compounds[26] = new Compound("C2H6");
compounds[27] = new Compound("CH3CH2OH");
compounds[28] = new Compound("C2H4");
//compounds[29] = new Compound("C21H20BrN3");
compounds[30] = new Compound("C4H8O2");
compounds[31] = new Compound("C2H7N");
compounds[32] = new Compound("C8H10");
compounds[33] = new Compound("C2H4");
compounds[34] = new Compound("HOCH2CH2OH");
compounds[35] = new Compound("HCHO");
compounds[36] = new Compound("C6H12O6");
compounds[37] = new Compound("C3H8O3");
compounds[38] = new Compound("C3H8O3");
compounds[39] = new Compound("C7H16");
compounds[40] = new Compound("C6H14");
//compounds[41] = new Compound("C10H18O");
//compounds[42] = new Compound("C12H22O11");
compounds[43] = new Compound("C6H14N2O2");
compounds[44] = new Compound("C4H2O3");
compounds[45] = new Compound("CH4");
compounds[46] = new Compound("CH3OH");
compounds[47] = new Compound("C3H6O2");
compounds[48] = new Compound("C10H8");
compounds[49] = new Compound("C8H18");
compounds[50] = new Compound("C5H12");
compounds[51] = new Compound("CH3CONHC6H4OC2H5");
compounds[52] = new Compound("C3H8");
compounds[53] = new Compound("CH3CH2COOH");
compounds[54] = new Compound("C7H6O3");
compounds[55] = new Compound("C8H8");
compounds[56] = new Compound("C12H22O11");
compounds[57] = new Compound("C6H5CH3");
compounds[58] = new Compound("C5H11NO2");
compounds[59] = new Compound("H2O");

function getCmpd(formula) { //compound -- property = the compounds formula
    for (var i = 0; i < formula.length; i++ ){
        var e = formula.charAt(i); //e is defined as the character at certain indexes of the compound formula
        console.log(e);
        var x = parseInt(formula.charAt(i + 1));

        var doubleDigit = "" ;
        while (!isNaN(x) && i <= formula.length){ // if x is not not a number (techinically x is a number)
            doubleDigit += x;

            console.log(doubleDigit);
            i++
            x = parseInt(formula.charAt(i+1));

        }
        doubleDigit = parseInt(doubleDigit);
        if(isNaN(doubleDigit)){
            doubleDigit = 1
        }
        getElement(e, doubleDigit);

    }
}

function subtotalMass(e) {
    for (var i = 0; i < formula.length; i++ ){
        elem.mass * NumOfAtms //NumOfAtms --> have not been parsed/substrung yet
        cell1.innerHTML = number; //want to display the subtotal in the HTML
    }
}
