//https://teachablemachine.withgoogle.com/models/pBcDxEMB1/model.json

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pBcDxEMB1/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        R = Math.floor(Math.random() * 255) + 1;
        G = Math.floor(Math.random() * 255) + 1;
        B = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+
        results[0].label
        document.getElementById("result_confidence").innerHTML = 'Precisão -'+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +R+","+G+","+B+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +R+","+G+","+B+")";

        img = document.getElementById('imagens')


        if (results[0].label == "latido") {
            img.src = 'cachorro.jpg';

        }
        else if (results[0].label == "miado") {
            img.src = 'gato.jpg';

        }
        else if (results[0].label == "canto") {
            img.src = 'passaro.jpg';

        }
        else if (results[0].label == "ronco"){
            img.src = 'porco.jpg';

        }
    }
}