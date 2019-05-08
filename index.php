<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="content/css/style.css">
    <script src="content/js/app.js"></script>
    <script src="content/js/jquery.js"></script>
    <title>genetic algorithm</title>
</head>
<body>
    <h2>genetic algorithm</h2>

    <div class="forJS">
    
        <!-- <button id="btGenerate" onclick="getRandomInt(2)">Generate</button> -->
        <input type="number" name="lenght" id="lenght" value=8 min=8 max=64 step=8>
        <button id="btGenerate" onclick="affPopulation()">Generate</button>
        <button id="btSort" onclick="affTri()">Sort</button>
        <button id="btMuatate">Mutate</button>
        <button id="btFill">Fill</button>
        <button id="btReset" onclick="reset()">reset</button>

        <br>        <br>        <br>
    
        <div class="population1">
        <p id="pop1"></p><p id="score1"></p>
        <p id="pop2"></p><p id="score2"></p>
        <p id="pop3"></p><p id="score3"></p>
        <p id="pop4"></p><p id="score4"></p>
        <p id="pop5"></p><p id="score5"></p>
        <p id="pop6"></p><p id="score6"></p>
        <p id="pop7"></p><p id="score7"></p>
        <p id="pop8"></p><p id="score8"></p>

<!--    <p id="pop0" tag="0">1.</p>
        <p id="pop1">2.</p>
        <p id="pop2">3.</p>
        <p id="pop3">4.</p>
        <p id="pop4">5.</p>
        <p id="pop5">6.</p>
        <p id="pop6">7.</p>
        <p id="pop7">8.</p> -->
        </div>

        <div class="population1Trier">
        <p id="popT1"></p>
        <p id="popT2"></p>
        <p id="popT3"></p>
        <p id="popT4"></p>
        <p id="popT5"></p>
        <p id="popT6"></p>
        <p id="popT7"></p>
        <p id="popT8"></p>
        </div>

    </div>
</body>
</html>