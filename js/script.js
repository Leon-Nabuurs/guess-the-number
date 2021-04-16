var person = prompt("Welkom! Wat is je naam", "John Doe");

if (person != null) {
    alert ("Hoi " + person);
}

var ondergrens = parseInt(prompt("Welke ondergrens wil je gebruiken?", 0));
var bovengrens = parseInt(prompt("Welke bovengrens wil je gebruiken?", 25));

var getrokkenGetal = ondergrens + Math.floor(Math.random() * (bovengrens - ondergrens));

const maxAantalPogingen = 5;
var aantalPogingen = 1;
while (gokje !== getrokkenGetal && aantalPogingen <= maxAantalPogingen) {
    var gokje = parseInt(prompt("Voer een nummer in van 0 tot " + bovengrens + " om te beginnen met raden..." + "\n" +  "Dit is je "+aantalPogingen+"e poging", ));
    if (gokje === getrokkenGetal) {
        alert('Gefeliciteerd, je hebt gewonnen');
    }
    else {
        alert('Dat is niet correct');
        aantalPogingen++;
    }
    if (aantalPogingen > maxAantalPogingen) {
        alert('Helaas, je bent er niet achter gekomen. Volgend keer beter');
    }
}
alert('Dag '+person+'! Tot de volgende keer');
