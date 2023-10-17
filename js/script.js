const selectDOMElement = document.getElementById('select');
const playBtnDOMElement = document.querySelector('.play-btn');
const gridDOMElement = document.querySelector('.grid');

let bombs = [];

playBtnDOMElement.addEventListener('click', function (){
    let scoreDOMElement = document.getElementById('contatore');
    let score = 0;

    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('grid-hard');
    gridDOMElement.classList.remove('grid-mid');
    gridDOMElement.classList.remove('cursor');

    let numberOfCell = 0;

    if(selectDOMElement.value == 0){
        numberOfCell = 49;
        gridDOMElement.classList.add('grid-easy');
    }else if(selectDOMElement.value == 1){
        numberOfCell = 81;
        gridDOMElement.classList.add('grid-mid');
    }else if(selectDOMElement.value == 2){
        numberOfCell = 100;
        gridDOMElement.classList.add('grid-hard');
    }
    bombs = getArrayRandom (1, numberOfCell ,16)
    console.log(bombs);
    for (let i = 0; i < numberOfCell; i++){
        n = i + 1;
        gridDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
    }
    
// sesezionare cella singola
    const cellDOMElements = document.querySelectorAll('.cell');
    console.log(cellDOMElements);
// creare un ciclo per ciclare tutte le celle per poter selezionare le singole celle e darle degli atributi
    for (let i = 0; i < cellDOMElements.length; i++){

        const currentCellDOMElement = cellDOMElements[i];

        currentCellDOMElement.addEventListener ('click', function() {
            
            if (bombs.includes(i + 1) === true){
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