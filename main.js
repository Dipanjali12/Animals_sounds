function start(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResult)
}

img=document.getElementById("pic");

function gotResult(error,result){
console.log(result);
if (result[0].label=="cat"){
    img.src="cat.jpg";

} (result[0].label=="dog");{
    img.src="jpg.jpg";

} (result[0].label=="speaker");{

    img.src="speaker.jpg";

} (result[0].label=="cow");{
    img.src="cow.jfif";

} (result[0].label=="goat");{
    img.src="goat.jfif";

}
}






























