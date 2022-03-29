let langages_list = ['java', 'javascript', 'c#', 'c', 'c++', 'python',
    'ruby', 'php', 'swift', 'julia', 'bash', 'css', 'html',
    'haskell', 'kotlin#', '.net', 'powershell', 'perl', 'rust'
]
let animaux_list = ['chien', 'chat', 'lion', 'tigre', 'serpent', 'chat', 'lion', 'tigre', 'serpent',
    'lezard', 'girafe', 'elephant', 'cochon', 'vache', 'requin', 'baleine', 'rat', 'souris'
]
let pays_list = ['france', 'espagne', 'italie', 'grece', 'maroc', 'turquie', 'allemagne', 'autriche',
    'belgique', 'bulgarie', 'chypre', 'croatie'
]

let blank_list_langage = []
let blank_list_animaux = []
let blank_list_pays = []
let score = 0
let trouve = false
var btn = document.querySelector('input')

function generateTheme(list, blank) {
    for (let i = 0; i < list.length; i++) {
        if (list.length == 0) {
            console.log("Vous avez trouvé tous les mots ! Bravo !")
        }
        if (btn.value == list[i]) {
            blank.push(list[i])
            list.splice(i, 1);
            trouve = true
            console.log("LISTE : ", list)
            console.log("BLANK : ", blank)
        } else if (btn.value != list[i]) {
            trouve = false
        }
    }
    if (trouve == false)
        diminuerTemps()
}

function langage() {
    window.location = "file:///C:/Users/gaudreem/Documents/Workspace/PENDU/Pendu_for%C3%AAt/langage.html"
}

function animaux() {
    window.location = "file:///C:/Users/gaudreem/Documents/Workspace/PENDU/Pendu_for%C3%AAt/animaux.html"
}

function pays() {
    window.location = "file:///C:/Users/gaudreem/Documents/Workspace/PENDU/Pendu_for%C3%AAt/pays.html"
}

function retour() {
    window.location = "file:///C:/Users/gaudreem/Documents/Workspace/PENDU/Pendu_for%C3%AAt/index.html"
}

function checkLangage() {
    generateTheme(langages_list, blank_list_langage)
}

function checkAnimaux() {
    generateTheme(animaux_list, blank_list_animaux)
}

function checkPays() {
    generateTheme(pays_list, blank_list_pays)
}

// function clavier(evenement) {
//     var touche = window.event ? evenement.keyCode : evenement.which;
//     touche = String.fromCharCode(touche).substring(0, 1);

//     var longueurMot = document.getElementById("textBoxMot").value.length

//     if (evenement.keyCode == 8) {
//         console.log("suppression");
//         document.getElementById("textBoxMot").value = document.getElementById("textBoxMot").value.substr(0, longueurMot - 1);
//     } else {
//         document.getElementById("textBoxMot").value += touche;
//     }
// }

const departMinutes = 2
let temps = departMinutes * 60
let stock = temps;

const timerElement = document.getElementById("timer")

function diminuerTemps() {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText = minutes + ":" + secondes
    temps--
}

setInterval(diminuerTemps, 1000)