let langages_list = ['java', 'javascript', 'c#', 'c', 'c++']
let animaux_list = ['chien', 'chat', 'lion', 'tigre', 'serpent']
let pays_list = ['france', 'espagne', 'italie', 'grece', 'maroc', 'turquie']

let blank_list_langage = []
let blank_list_animaux = []
let blank_list_pays = []
let score = 0

var btn = document.querySelector('input')

function generateTheme(list, blank) {
    for (let i = 0; i < list.length; i++) {
        if (btn.value == list[i]) {
            blank.push(list[i])
            list.splice(i, 1);
            console.log("LISTE : ", list)
            console.log("BLANK : ", blank)
        }
        if (list.length == 0) {
            console.log("Vous avez trouvé tous les mots ! Bravo !")
        }
    }
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