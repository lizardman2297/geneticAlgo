function pop1(){
    var lignePop1 = document.getElementById("pop1");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
}

function pop2(){
    var lignePop1 = document.getElementById("pop2");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
}

function pop3(){
    var lignePop1 = document.getElementById("pop3");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
}

function pop4(){
    var lignePop1 = document.getElementById("pop4");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
}

function pop5(){
    var lignePop1 = document.getElementById("pop5");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
}

function pop6(){
    var lignePop1 = document.getElementById("pop6");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
}

function pop7(){
    var lignePop1 = document.getElementById("pop7");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
}

function pop8(){
    var lignePop1 = document.getElementById("pop8");
    var contenu = lignePop1.innerHTML;
    console.log(contenu + ' ' + getRandomInt(2));
    lignePop1.innerHTML = contenu + ' ' + getRandomInt(2);
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

function generate(){
    var individu = Math.random();
    affPopulation(individu);
}

function getRandomInt(max) {

    var individu = "";
    var i = 0;
    var gene;

    do {
        gene =  Math.floor(Math.random() * Math.floor(max));
        individu = gene + individu;
        // console.log(individu);
        i += 1
    } while(i<8)

    // return console.log("individu : " + individu);
    return individu;
  }


// console.log(getRandomInt(3));