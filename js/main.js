let progLangage_list = ['java', 'javascript', 'c#', 'c', 'c++']
let animal_list = ['chien', 'chat', 'oiseau', 'souris', 'tigre', 'serpent']
let words_list = []
let score = 0

var btn = document.querySelector('input')

function updateBtn() {
    for (let i = 0; i < progLangage_list.length; i++) {
        if (btn.value == progLangage_list[i]) {
            words_list.push(progLangage_list[i])
            progLangage_list.splice(i, 1);
            score += 1
            console.log("PROG LISTE : ", progLangage_list)
            console.log("words : ", words_list)
            console.log("score : ", score)
        }
        if (progLangage_list.length == 0) {
            console.log("Vous avez trouvé tous les mots ! Bravo !")
        }
    }
}