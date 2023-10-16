const selectDOMElement = document.getElementById('select');
const playBtnDOMElement = document.querySelector('.play-btn');
const gridDOMElement = document.querySelector('.grid');

playBtnDOMElement.addEventListener('click', function (){

    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('grid-hard');
    gridDOMElement.classList.remove('grid-mid');

    if(selectDOMElement.value == 0){
        gridDOMElement.classList.add('grid-easy');
        const gridEasyDOMElement = document.querySelector('.grid-easy');
        for (let i = 1; i <= 49 ;i++){
            n = i;
            gridEasyDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }else if(selectDOMElement.value == 1){
        gridDOMElement.classList.add('grid-mid');
        const gridMidDOMElement = document.querySelector('.grid-mid');     
        for (let i = 1; i <= 81 ;i++){
            n = i;
            gridMidDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }else if(selectDOMElement.value == 2){
        gridDOMElement.classList.add('grid-hard');
        const gridHardDOMElement = document.querySelector('.grid-hard');
        for (let i = 1; i <= 100; i++){
            n = i;
            gridHardDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }

    const cellDOMElements = document.querySelectorAll('.cell');
    console.log(cellDOMElements);

    for (let i = 0; i < cellDOMElements.length; i++){
        const currentCellDOMElement = cellDOMElements[i];
        currentCellDOMElement.addEventListener('click', function() {
            currentCellDOMElement.classList.add('bg-azurro');
        console.log('hai selezionato la casella'+ `${i+1}`);``
        })
    }
})


function getArrayRandom (minRange, maxRange, number) {

    const arrayBombs = []
    // console.log(arrayBombs)

    while (arrayBombs.length > 16) {

        const n = getRandomIntInclusive (1,100)

        // console.log(n)

        if (arrayBombs.includes(n) === false){

            arrayBombs.push(n)
        }
        
    }
    console.log(arrayBombs)
    return  arrayBombs
}




function getRandomIntInclusive (min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
 } // The maximum is inclusive and the minimum is inclusive