function clavier(evenement) {
     var touche = window.event ? evenement.keyCode : evenement.which;
     touche = String.fromCharCode(touche).substring(0,1);

     var longueurMot = document.getElementById("textBoxMot").value.length

     if(evenement.keyCode==8){
          console.log("suppression");
          document.getElementById("textBoxMot").value = document.getElementById("textBoxMot").value.substr(0, longueurMot-1);
     }
     else{
          document.getElementById("textBoxMot").value += touche;
     }
}


const departMinutes = 2
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
