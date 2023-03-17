/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

//import elements from DOM
const btnEl = document.getElementById('btn') // button
const containerEl = document.querySelector('.container') // container
const selectEl = document.querySelector('select') // select

//Set difficulty levels
const easy = 0
const medium = 1 
const hard = 2

//grill easy level
function easyGrill() {
    let cellQuantity = 100 // Total numbers of cells for Easy level
    let text = 1 // set the text for the first cell
    for(let i = 0; i < cellQuantity; i++) { 
        const singleCell = document.createElement('div') // create cell
        singleCell.classList.add('cell') // add class .cell
        singleCell.textContent = text // add text
        singleCell.style.textAlign = 'center' // set textAlign property
        text += 1 // increase the text to set the new name of the new variable
        containerEl.append(singleCell) // 
    }
}

//grill medium level
function mediumGrill() {
    let cellQuantity = 81 // Total numbers of cells for Easy level
    let text = 1 // set the text for the first cell
    for(let i = 0; i < cellQuantity; i++) { 
        const singleCell = document.createElement('div') // create cell
        singleCell.classList.add('cell') // add class .cell
        singleCell.textContent = text // add text
        singleCell.style.textAlign = 'center' // set textAlign property
        text += 1 // increase the text to set the new name of the new variable
        containerEl.append(singleCell) // 
    }
}

//grill hard level
function hardGrill() {
    let cellQuantity = 49 // Total numbers of cells for Easy level
    let text = 1 // set the text for the first cell
    for(let i = 0; i < cellQuantity; i++) { 
        const singleCell = document.createElement('div') // create cell
        singleCell.classList.add('cell') // add class .cell
        singleCell.textContent = text // add text
        singleCell.style.textAlign = 'center' // set textAlign property
        text += 1 // increase the text to set the new name of the new variable
        containerEl.append(singleCell) // 
    }
}



btnEl.addEventListener('click', function() {
    if(selectEl[0].value == easy) {
        easyGrill()
    } else if (selectEl[1].value == medium) {
        mediumGrill()
    } else if (selectEl[2].value == hard) {
        hardGrill()
    }
})