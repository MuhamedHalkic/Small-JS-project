// Lekcija 9 ****************** Varijable

/*var ime = 'Muhamed';
var prezime = 'Halkic';
var godina = 24;
var ozenjen = prompt('Da li je ozenjen? ')

console.log('Radnik ' + ime + ' ' + prezime + ' ima ' + godina + ' godine. Bračno stanje: ' + ozenjen );*/

// ******************       ******************

// CC1

/*var MarkKg, JohnKg, MarkV, JohnV;
MarkKg = 80;
MarkV = 180;
JohnV = 194;
JohnKg = 92;

var MarkBMI = MarkKg / (MarkV * MarkV);
var JohnBMI = JohnKg / (JohnV * JohnV);

if(MarkBMI > JohnBMI){
    console.log('Markov BMI je veći!');
}else{
    console.log('Johnov BMI je veći!');
}*/

// ******************       ******************

// CC 2

/*var a = 120 + 89 + 103;
var b = 116 + 94 + 123;
var c = 97 + 134 + 105;

var aAvrg = a/3;
var bAvrg = b/3;
var cAvrg = c/3;

if(aAvrg > bAvrg && aAvrg > cAvrg){
    console.log('Igrač a je bolji!');
}else if(bAvrg > aAvrg && bAvrg > cAvrg){
    console.log('Igrač b je bolji!');
}else if(cAvrg > aAvrg && cAvrg > bAvrg){
    console.log('Igrač c je bolji!');
}else{
    console.log('Isti su!');
}*/

// ******************       ******************

// CC 3

/*var tip1 = 124, tip2 = 48, tip3 = 268;
var baksis = function(broj){
    if(broj <50){
        return broj * 0.2;
    }else if(broj >= 50 && broj <= 200){
        return broj * 0.15;
    }else{
        return broj * 0.1;
    }
}
var prviNiz = [baksis(tip1), baksis(tip2), baksis(tip3)];
console.log(prviNiz);

var drugiNiz = [baksis(tip1)+tip1, baksis(tip2)+tip2, baksis(tip3)+tip3];
console.log(drugiNiz);*/


// ******************       ******************

// Objects and methods

/*var objekt = {
    naziv :'naziv',
    smisao : 'smisao',
    objasnjenje : 'objasnjenje',
    godina : 2019,
    proracun  : function(){
        this.novi = 3 + this.godina;
    }
};

objekt.proracun();
console.log(objekt.novi);*/

// CC 4

/*

var MarkObj = {
    firstName : 'Mark',
    kg : 80,
    visina : 1.80,
    BMI : function(){
        return MarkObj.kg / (MarkObj.visina*Mark.visina);
    }
}
var JohnObj = {
    firstName : 'John',
    kg : 92,
    visina : 1.94,
    BMI : function(){
        return JohnObj.kg / (JohnObj.visina*JohnObj.visina);
    }
}
if(MarkObj.BMI() > JohnObj.BMI()){
    console.log('Veći je ' + MarkObj.firstName + '!');
}else if(MarkObj.BMI() < JohnObj.BMI()){
    console.log('Veći je ' + JohnObj.firstName + '!');
}else{
    console.log('Isti su!');
}*/

// Jonasova verzija!

/*var MarkObj = {
    firstName : 'Mark',
    kg : 80,
    visina : 1.80,
    BMI : function(){
        this.b = this.kg / (this.visina * this.visina);
        return this.b;
    }
}
var JohnObj = {
    firstName : 'John',
    kg : 110,
    visina : 1.94,
    BMI : function(){
        this.b = this.kg / (this.visina * this.visina);
        return this.b;
    }
}
if(MarkObj.BMI() > JohnObj.BMI()){
    console.log('Veći je ' + MarkObj.firstName + '!');
}else if(MarkObj.b < JohnObj.b){
    console.log('Veći je ' + JohnObj.firstName + '!');
}else{
    console.log('Isti su!');
}*/



// ******************       ******************


//CC 5

var calcObj = {
    vrijednosti : [124, 48, 268, 180, 42],
    kalk : function(){
        this.tips = [];
        this.finalni = [];
        for(var i = 0; i < this.vrijednosti.length; i++){
            this.procenat;
            if(this.vrijednosti[i] < 50){
                procenat = 0.2;
            }else if(this.vrijednosti[i] > 50 && this.vrijednosti[i] < 200){
                procenat = 0.15;
            }else{
                procenat = 0.1;
            }
            this.tips[i] = this.vrijednosti[i] * procenat;
            this.finalni[i] = this.vrijednosti[i] + this.vrijednosti[i] * procenat;
        }
    }
}
calcObj.kalk();
console.log(calcObj.finalni);

var MarkovKalk = function(){
    niz = [77, 375, 110, 45];
    
}