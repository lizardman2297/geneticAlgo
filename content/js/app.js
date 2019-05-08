//#region generation1

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
//#endregion generation1


function affPopulation(){
    // pop1();
    // pop2();
    // pop3();
    // pop4();
    // pop5();
    // pop6();
    // pop7();
    // pop8();

    var i = 0;

    do {
        document.getElementById("pop"+i).innerHTML(getRandomInt(2));
        i += 1;
    } while (i < 7)
}

function getRandomInt(max) {

    var individu = [];
    var i = 0;
    var gene;
    var nb = document.getElementById("lenght").value;
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
    document.getElementById("pop1").innerHTML = "1. ";
    document.getElementById("pop2").innerHTML = "2. ";
    document.getElementById("pop3").innerHTML = "3. ";
    document.getElementById("pop4").innerHTML = "4. ";
    document.getElementById("pop5").innerHTML = "5. ";
    document.getElementById("pop6").innerHTML = "6. ";
    document.getElementById("pop7").innerHTML = "7. ";
    document.getElementById("pop8").innerHTML = "8. ";
    document.getElementById("lenght").value = 8;
}