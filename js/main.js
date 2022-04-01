let langages_list = ['java', 'javascript', 'c#', 'c', 'c++', 'python',
    'ruby', 'php', 'swift', 'julia', 'bash', 'css', 'html',
    'haskell', 'kotlin#', '.net', 'powershell', 'perl', 'rust'
]
let animaux_list = ['chien', 'chat', 'lion', 'tigre', 'serpent',
    'lezard', 'girafe', 'elephant', 'cochon', 'vache', 'requin', 'baleine', 'rat', 'souris'
]
let pays_list = ['france', 'espagne', 'italie', 'grece', 'maroc', 'turquie', 'allemagne', 'autriche',
    'belgique', 'bulgarie', 'chypre', 'croatie'
]

let blank_list_langage = []
let blank_list_animaux = []
let blank_list_pays = []
let score = 0
var btn = document.querySelector('input')
const totalscore = document.getElementById("scores")

//fait la recherche des mots d'une liste
function generateTheme(list, blank) {
    let trouve = false;
    for (let i = 0; i < list.length; i++) {
        if (btn.value == list[i]) {
            blank.push(list[i])
            list.splice(i, 1)
            score += 1
            totalscore.innerHTML = score
            addTime(2)
            console.log("LISTE : ", list)
            console.log("BLANK : ", blank)
            trouve = true;
        }
    }
    if (!trouve) {
        removeTime(5);
    }
}


//fonctions pour les boutons de redirections
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


//choisi les listes en fonctions du thème
function checkLangage() {
    generateTheme(langages_list, blank_list_langage)
}

function checkAnimaux() {
    generateTheme(animaux_list, blank_list_animaux)
}

function checkPays() {
    generateTheme(pays_list, blank_list_pays)
}


// fonction de timer
var timer;
var timeLeft = 60; // seconds
const temps = document.getElementById("timer")

// What to do when the timer runs out
function gameOver() {
    clearInterval(timer)
}

function addTime(value) {
    if (timeLeft != 60) {
        timeLeft = timeLeft + value;
        temps.innerHTML = timeLeft;
    }
}


function removeTime(value) {
    if ((timeLeft - value) > 0) {
        timeLeft = timeLeft - value;
        temps.innerHTML = timeLeft;
    } else {
        temps.innerHTML = 0
        gameOver();
    }
}

function updateTimer() {
    timeLeft = timeLeft - 1;
    if (timeLeft >= 0)
        temps.innerHTML = timeLeft
    else {
        gameOver();
    }
}

// The button has an on-click event handler that calls this
function start() {
    // every N milliseconds (1 second = 1000 ms)
    timer = setInterval(updateTimer, 1000);

    // It will be a whole second before the time changes, so we'll call the update
    // once ourselves
    updateTimer();
}