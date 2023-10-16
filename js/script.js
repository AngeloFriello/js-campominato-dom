const selectDOMElement = document.getElementById('select');
const playBtnDOMElement = document.querySelector('.play-btn');
const gridDOMElement = document.querySelector('.grid');

playBtnDOMElement.addEventListener('click', function (){

    const bombs = getArrayRandom (1, 100 ,16)
    console.log(bombs)

    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('grid-hard');
    gridDOMElement.classList.remove('grid-mid');
// selettore di difficoltà
    // facile
    if(selectDOMElement.value == 0){
        gridDOMElement.classList.add('grid-easy');
        const gridEasyDOMElement = document.querySelector('.grid-easy');
        for (let i = 1; i <= 49 ;i++){
            n = i;
            gridEasyDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    // medio
    }else if(selectDOMElement.value == 1){
        gridDOMElement.classList.add('grid-mid');
        const gridMidDOMElement = document.querySelector('.grid-mid');     
        for (let i = 1; i <= 81 ;i++){
            n = i;
            gridMidDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    // difficile
    }else if(selectDOMElement.value == 2){
        gridDOMElement.classList.add('grid-hard');
        const gridHardDOMElement = document.querySelector('.grid-hard');
        for (let i = 1; i <= 100; i++){
            n = i;
            gridHardDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }
// lesezionare cella singola
    const cellDOMElements = document.querySelectorAll('.cell');
    console.log(cellDOMElements);
// creare un ciclo per ciclare tutte le celle per poter selezionare le singole celle e darle degli atributi
    for (let i = 0; i < cellDOMElements.length; i++){

        const currentCellDOMElement = cellDOMElements[i];

        currentCellDOMElement.addEventListener ('click', function() {
            
            if (bombs.includes(i + 1) === true){

                currentCellDOMElement.classList.add('bg-red')
            }else{
               currentCellDOMElement.classList.add('bg-azurro');
            }
            
        console.log('hai selezionato la casella'+ `${i +1}`);
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