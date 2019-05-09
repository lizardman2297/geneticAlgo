var population = [];
var populationTrier = [];
var nbGeneration = 0;

function btGenerate(){
    clear();
    generationPopulation();
    affichagePopulation();
    nbGeneration += 1;
    majTitre();
}

function generationPopulation(){
    var i = 0;
    var nbGenome = document.getElementById("nbGenome").value;
    do {
        var gene = getIndividu(2);
        population[i] = gene;
        i += 1;
    } while(i < nbGenome)
}

function score(ix){
    var i = 0;
    var score = 0;
    do {
        if (ix[i] == 1 ) {
            score += 1;
        } else {
            score +=0;
        }
        i += 1
        // console.log(score);
    }while(i < (document.getElementById("nbGene").innerHTML))
    return score;
}

function getIndividu(max) {

    var individu = [];
    var i = 0;
    var gene;
    var nb = document.getElementById("nbGene").innerHTML;
    do {
        gene =  Math.floor(Math.random() * Math.floor(max));
        individu[i] = gene ;
        i += 1
    } while(i<nb)
    return individu;
}

function affichagePopulation(){
    var i = 0;
    do {
        document.getElementById("affPop").innerHTML += "<br><br> individu "+ (i + 1) +" : " + population[i] + "<br> score  : " + score(population[i]) ;
        i += 1;
    } while(i < document.getElementById("nbGenome").value)
}

function clear(){
    document.getElementById("affPop").innerHTML="";
}

function majTitre(){
    var titre = "genetic algorith - generation n°"
    document.getElementById("titre").innerHTML = titre + nbGeneration;
}

function btTri(){
    
    var i = 0;
    var max = 0;
    var temp = 0;
    var point = []

    do {
        point[i] = score(population[i]);
        
        i += 1;
    } while(i < document.getElementById("nbGenome").value);
    console.log("best : " + Math.max(point));
    console.log(point);
}













function reset(){
    document.getElementById("nbGene").innerHTML = 8;
    document.getElementById("GeneMoyen").innerHTML = 4;
    document.getElementById("affPop").innerHTML = "";
    document.getElementById("nbGenome").value = 8;
    document.getElementById("titre").innerHTML = "genetic algorith";
    nbGeneration = 0;
}

function plus(){
    var nbActuel = document.getElementById("nbGene").innerHTML;
    var nbSuivant = nbActuel * 2;
    var moyen = nbActuel;
    document.getElementById("nbGene").innerHTML = nbSuivant;
    document.getElementById("GeneMoyen").innerHTML = moyen;
}

function moins(){
    var nbActuel = document.getElementById("nbGene").innerHTML;
    var nbSuivant = nbActuel / 2;
    var moyen = nbSuivant / 2;
    document.getElementById("nbGene").innerHTML = nbSuivant;
    document.getElementById("GeneMoyen").innerHTML = moyen;
}