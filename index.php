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
    <h2>First genetic algorithm</h2>

    <div class="forJS">
    
        <!-- <button id="btGenerate" onclick="getRandomInt(2)">Generate</button> -->
        <input type="number" name="lenght" id="lenght" value=8 min=8 step=+8>
        <button id="btGenerate" onclick="affPopulation()">Generate</button>
        <button id="btSort">Sort</button>
        <button id="btMuatate">Mutate</button>
        <button id="btFill">Fill</button>
        <button id="btReset" onclick="reset()">reset</button>

        <br>
        <br>
        <br>
    
        <div class="population1">
        
        <p id="pop1">1.</p>
        <p id="pop2">2.</p>
        <p id="pop3">3.</p>
        <p id="pop4">4.</p>
        <p id="pop5">5.</p>
        <p id="pop6">6.</p>
        <p id="pop7">7.</p>
        <p id="pop8">8.</p>
            

        </div>

    </div>
</body>
</html>