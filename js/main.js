let langages_list = ['java', 'javascript', 'c#', 'c', 'c++', 'python', 'ruby', 'php', 'swift', 'julia', 'bash',
    'css', 'html', 'haskell', 'kotlin#', '.net', 'powershell', 'perl', 'rust', 'basic', 'visual basic', 'assembleur',
    'sql', 'swift', 'r', 'go', 'pascal', 'matlab', 'fortran', 'dart', 'bosque', 'java fx', 'k'
]
let animaux_list = ['chien', 'chat', 'lion', 'tigre', 'serpent',
    'lezard', 'girafe', 'éléphant', 'cochon', 'vache', 'requin', 'baleine', 'rat', 'souris', 'aigle', 'alligator',
    'antilope', 'autruche', 'babouin', 'singe', 'belette', 'béluga', 'bison', 'bonobo', 'cachalot', 'caiman', 'caribou',
    'cerf', 'castor', 'chamois', 'chevreuil', 'chimpanzé', 'cougar', 'crapaud', 'coyote', 'crocodile', 'dauphin',
    'élan', 'fennec', 'fouine', 'fourmis', 'guépard', 'hérisson', 'hibou', 'hirondelle', 'iguane', 'koala', 'jaguar', 'impala',
    'kangourou', 'léopard', 'loup', 'lynx', 'lapin', 'lièvre', 'tortue', 'béluga', 'belette', 'biche', 'buffle',
    'caribou', 'coyote', 'chouette', 'castor', 'pigeon', 'perroquet', 'flanant rose', 'hoppopotame', 'thon', 'narval',
    'orque', 'ours', 'panda', 'puma', 'renne', 'raton laveur', 'salamandre', 'tapir', 'wapiti', 'zèbre', 'cheval',
    'âne', 'poney'
]
let pays_list = ['france', 'espagne', 'italie', 'grece', 'maroc', 'turquie', 'allemagne', 'autriche', 'belgique',
    'bulgarie', 'chypre', 'croatie', 'albanie', 'algérie', 'andorre', 'angola', 'argentine', 'arménie', 'australie',
    'bahamas', 'bangladesh', 'belize', 'bénin', 'birmanie', 'bolivie', 'burkina', 'burkina faso', 'cambodge', 'cameroun',
    'canada', 'chili', 'chine', 'chypre', 'colombie', 'congo', 'corée', 'corée du nord', 'corée du sud', 'costa rica',
    'costa rica', 'cuba', 'danemark', 'djibouti', 'dominique', 'égypte', 'équateur', 'estonie', 'états-unis', 'éthiopie',
    'finlande', 'gabon', 'géorgie', 'ghana', 'grèce', 'inde', 'irlande', 'islande', 'japon', 'russie', 'royaume-uni',
    'brésil', 'angleterre', 'afrique'
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
            addTime(6)
            console.log("LISTE : ", list)
            console.log("BLANK : ", blank)
            trouve = true;
        }
    }
    if (!trouve) {
        removeTime(4);
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
const temps = document.getElementById("timer");
const image = document.getElementById("image");

const music2 = new Audio('./Sound/bruit2.wav');
// What to do when the timer runs out
function gameOver() {
    clearInterval(timer)
    btn.disabled = true
    music2.play();
    music2.loop = false;
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

const music1 = new Audio('./Sound/bruit.wav');
let bruit1 = false

function updateTimer() {
    timeLeft = timeLeft - 1;

    let transparence = ((timeLeft * 100) / 60) / 100;
    console.log(transparence)
    image.style.opacity = transparence;

    if (!bruit1 && timeLeft < 10) {
        music1.play();
        music1.loop = false;
        bruit1 = true
    }

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