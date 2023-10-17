const selectDOMElement = document.getElementById('select');
const playBtnDOMElement = document.querySelector('.play-btn');
const gridDOMElement = document.querySelector('.grid');

let bombs = []

playBtnDOMElement.addEventListener('click', function (){

    let scoreDOMElement = document.getElementById('contatore')

    let score = 0

    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('grid-hard');
    gridDOMElement.classList.remove('grid-mid');
    gridDOMElement.classList.remove('cursor');
// selettore di difficoltà

    // facile
    if(selectDOMElement.value == 0){

        bombs = getArrayRandom (1, 49 ,16)
        console.log(bombs)

        gridDOMElement.classList.add('grid-easy');
        const gridEasyDOMElement = document.querySelector('.grid-easy');
        for (let i = 0; i < 49 ;i++){
            n = i + 1;
            gridEasyDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    // medio
    }else if(selectDOMElement.value == 1){

        bombs = getArrayRandom (1, 81 ,16)
        console.log(bombs)

        gridDOMElement.classList.add('grid-mid');
        const gridMidDOMElement = document.querySelector('.grid-mid');     
        for (let i = 0; i < 81 ;i++){
            n = i + 1;
            gridMidDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    // difficile
    }else if(selectDOMElement.value == 2){

        bombs = getArrayRandom (1, 100 ,16)
        console.log(bombs)

        gridDOMElement.classList.add('grid-hard');
        const gridHardDOMElement = document.querySelector('.grid-hard');
        for (let i = 0; i < 100; i++){
            n = i + 1;
            gridHardDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }
    
// sesezionare cella singola
    const cellDOMElements = document.querySelectorAll('.cell');
    console.log(cellDOMElements);
// creare un ciclo per ciclare tutte le celle per poter selezionare le singole celle e darle degli atributi
    for (let i = 0; i < cellDOMElements.length; i++){

        const currentCellDOMElement = cellDOMElements[i];

        currentCellDOMElement.addEventListener ('click', function() {
            
            if (bombs.includes(i) === true){
                
                currentCellDOMElement.classList.add('bg-red');
                gridDOMElement.classList.add('cursor');
                alert ('hai perso, il tuo punteggio è:' + score);
            }else{
               currentCellDOMElement.classList.add('bg-azurro');
               score = score + 1;
               console.log(score);
               scoreDOMElement.innerHTML = 'Il tuo punteggio è : ' +  score;
               currentCellDOMElement.classList.add('cursor');
               if(score === 33){
                alert("hai vinto");
               }
            }
            
        console.log('hai selezionato la casella' + `${i + 1}`);
        })
    }

})




















function getArrayRandom (minRange, maxRange, number) {

    const arrayBombs = []
    // console.log(arrayBombs)

    while (arrayBombs.length < number) { 
        const n = getRandomIntInclusive (minRange,maxRange)
        // console.log(n)

        if (arrayBombs.includes(n) === false){

            arrayBombs.push(n)
        }
    }
    return  arrayBombs
}




function getRandomIntInclusive (min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
 } // The maximum is inclusive and the minimum is inclusive