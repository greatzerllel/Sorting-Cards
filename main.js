let maso = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let icons = ['<i class="fa-solid fa-heart text-danger"></i>', '<i class="fa-solid fa-heart"></i>','<i class="fa-solid fa-clover"></i>','<i class="fa-solid fa-diamond text-danger"></i>',]

// let arrDraw = []
// let arrSort = [];

let arrDraw = arrSort = [];


const randomNumberCards = ( num ) => {
    let randomCards = [];

    for(let i = 0; i < num; i++) {
        let randomPosition = Math.floor(Math.random() * maso.length);
        randomCards[i] = randomPosition;
    }

    return randomCards;
}



const nameCard = (arr) => {
    
    let arraytemp = [];
    for(let i=0; i <= arr.length - 1; i++){
        for(let j=0; j <= maso.length - 1; j++){
            let icon = icons[Math.floor(Math.random() * icons.length)];
            if( arr[i] == j){
                let numeroCarta = []
                arraytemp[i] = maso[j];
              numeroCarta.push(arraytemp[i], icon);
              arraytemp[i] = numeroCarta
            }
        }
    }
    return arraytemp;
}




document.getElementById('drawCardsBtn').addEventListener('click', () => {
    let randomPositions = randomNumberCards(document.getElementById('cardsNumber').value);
    let drawArray = null;
    let cartasRandom = document.querySelector("#cartasRandom");
    document.querySelector("#cartasOrdenadas").innerHTML = "";
    cartasRandom.innerHTML = "";

        for(let i = 0; i < randomPositions.length; i++){
            drawArray = randomPositions
        }    
        arrDraw = drawArray; 
        // console.log(nameCard(arrDraw));
        let name = nameCard(arrDraw);
        console.log(name);

        for(let k = 0; k < arrDraw.length; k++) {

            let cardNumber = name[k][0]
            let cardIcon = name[k][1]

            // console.log(name)
            let carta = document.createElement('div');
            // carta.id = 'carta';
            carta.classList.add("gameCard","d-flex", "flex-column", "justify-content-center", "align-items-center", "justify-content-between", "m-2",);
    
            carta.innerHTML = `<div class="w-100"><div class="iconTopLeft icon">${cardIcon}</div></div>            
            <span class="display-6" id="cardNumber">${cardNumber}</span>              
        <div class="w-100"><div class="iconBottonRight rotate icon">${cardIcon}</div></div>`;

            cartasRandom.appendChild(carta)
        }
});


    document.getElementById('sortCardsBtn').addEventListener('click', () => {
        let randomPositions = arrDraw;
        let cartasOrdenadas = document.querySelector("#cartasOrdenadas");
        let contador = 0;
        for(let i = 0; i < randomPositions.length; i++) {
            for(let j = 0; j < randomPositions.length - 1; j++){
                if(randomPositions[j] > randomPositions[j+1]){
                    let temp = randomPositions[j];
                    randomPositions[j] = randomPositions[j+1];
                    randomPositions[j+1] = temp;

                    arrSort = randomPositions;
                    // console.log(nameCard(arrSort))

                    let name = nameCard(arrSort);
                    
                    let cartasFila = document.createElement('div');
                    cartasFila.classList.add("d-flex");
                    let index = document.createElement('span');
                    index.innerText = contador;
                    cartasFila.appendChild(index);
                    for(let k = 0; k < arrSort.length; k++) {
                        
                        let cardNumber = name[k][0]
                        let cardIcon = name[k][1]
                        
                            let carta = document.createElement('div');
                            carta.classList.add("gameCard","d-flex", "flex-column", "justify-content-center", "align-items-center", "justify-content-between", "m-2");
                            
                            carta.innerHTML = `<div class="w-100"><div class="iconTopLeft icon">${cardIcon}</div></div>            
                            <span class="display-6" id="cardNumber">${cardNumber}</span>              
                        <div class="w-100"><div class="iconBottonRight rotate icon">${cardIcon}</div></div>`;
                            cartasFila.appendChild(carta)
                        
                        }
                    contador += 1;
                    cartasOrdenadas.appendChild(cartasFila)

                } 
            }

        }

    });


 


 

