<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="content/css/style.css">
    <script src="content/js/app.js"></script>
    <title>genetic algorithm</title>
</head>
<body>
    <h2 id="titre">genetic algorithm</h2>

    <div class="forJS">
    
        <label for="nbGenome">Nombre d'individu de la population</label>
        <input type="number" name="nbGenome" id="nbGenome" value="8" max="500" min="8" step="1">
        <br>
        <button id="geneUP" onclick='plus()'>+</button>
        <button id="geneDOWN" onclick='moins()'>-</button>
        <p id="test">Nombre de genes de la population : <p id="nbGene">8</p></p>
        <p>moyenne : <p id="GeneMoyen">4</p></p>
        <button id="btGenerate" onclick="btGenerate()">Generate</button>
        <button id="btSort" onclick="btTri()">Sort</button>
        <button id="btMuatate">Mutate</button>
        <button id="btFill">Fill</button>
        <button id="btReset" onclick="reset()">reset</button>

        <br>        <br>        <br>

        <label for="affPop">non trier</label>
        <p id="affPop"></p>

        <label for="affPopTrier">trier</label>
        <p id="affPopTrier"></p>

    </div>
</body>
</html>