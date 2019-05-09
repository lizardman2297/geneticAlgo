//#region generation1

function pop1(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop1");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score1");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}

function pop2(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop2");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score2");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}

function pop3(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop3");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score3");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}

function pop4(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop4");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score4");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}

function pop5(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop5");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score5");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}

function pop6(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop6");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score6");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}

function pop7(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop7");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score7");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}

function pop8(){
    var genome = getRandomInt(2);
    var ligne = document.getElementById("pop8");
    var contenu = ligne.innerHTML;
    var ligneScore = document.getElementById("score8");
    ligneScore.innerHTML = 'Score : ' + score(genome);
    ligne.innerHTML = contenu + ' ' + genome;
    
    console.log("score : " + score(genome));
}
//#endregion generation1

function plus(){
    var nbActuel = document.getElementById("nbGene").innerHTML;
    var nbSuivant = nbActuel * 2;
    var moyen = nbActuel;
    console.log(nbActuel);
    console.log(nbSuivant);
    document.getElementById("nbGene").innerHTML = nbSuivant;
    document.getElementById("GeneMoyen").innerHTML = nbActuel;
}

function moins(){
    var nbActuel = document.getElementById("nbGene").innerHTML;
    var nbSuivant = nbActuel / 2;
    var moyen = nbActuel;
    console.log(nbActuel);
    console.log(nbSuivant);
    document.getElementById("nbGene").innerHTML = nbSuivant;
    document.getElementById("GeneMoyen").innerHTML = nbActuel;
}

function affPopulation(){
    pop1();
    pop2();
    pop3();
    pop4();
    pop5();
    pop6();
    pop7();
    pop8();
}

function affTri(){
    pop1T();
    pop2T();
    pop3T();
    pop4T();
    pop5T();
    pop6T();
    pop7T();
    pop8T();
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



function getRandomInt(max) {

    var individu = [];
    var i = 0;
    var gene;
    var nb = document.getElementById("nbGene").innerHTML;
    // console.log(nb);

    do {
        gene =  Math.floor(Math.random() * Math.floor(max));
        individu[i] = gene ;
        // console.log(individu);
        i += 1
    } while(i<nb)

    // return console.log("individu : " + individu);
    return individu;
}







function reset(){
    document.getElementById("pop1").innerHTML = "";
    document.getElementById("pop2").innerHTML = "";
    document.getElementById("pop3").innerHTML = "";
    document.getElementById("pop4").innerHTML = "";
    document.getElementById("pop5").innerHTML = "";
    document.getElementById("pop6").innerHTML = "";
    document.getElementById("pop7").innerHTML = "";
    document.getElementById("pop8").innerHTML = "";
    document.getElementById("score1").innerHTML = "";
    document.getElementById("score2").innerHTML = "";
    document.getElementById("score3").innerHTML = "";
    document.getElementById("score4").innerHTML = "";
    document.getElementById("score5").innerHTML = "";
    document.getElementById("score6").innerHTML = "";
    document.getElementById("score7").innerHTML = "";
    document.getElementById("score8").innerHTML = "";
    document.getElementById("nbGene").innerHTML = 8;
    document.getElementById("GeneMoyen").innerHTML = 4;
}