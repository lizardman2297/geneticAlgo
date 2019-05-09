var population = [];

function btGenerate(){
    generationPopulation();
    testAff();
}

function generationPopulation(){
    var i = 0;
    var nbGenome = 8;
    do {
        var gene = getIndividu(2);
        population[i] = gene;
        i += 1;
    } while(i < nbGenome)
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

    // return console.log("individu : " + individu);
    return individu;
}



function testAff(){
    var i = 0;
    do {
        document.getElementById("affPop").innerHTML += "<br><br> individu "+ (i + 1) +" : " + population[i] + "<br> score  : " + score(population[i]) ;
        i += 1;
    } while(i < population.length)
}

function clear(){
    document.getElementById("affPop").innerHTML="";
}



function reset(){
    document.getElementById("nbGene").innerHTML = 8;
    document.getElementById("GeneMoyen").innerHTML = 4;
    document.getElementById("affPop").innerHTML = "";
}