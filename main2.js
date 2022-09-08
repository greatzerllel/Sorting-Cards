let maso = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const randomNumberCards = ( num ) => {
    let randomCards = [];
    
    for(let i = 0; i < num; i++) {
        let randomPosition = Math.floor(Math.random() * maso.length);
        randomCards[i] = randomPosition;
    }

    return randomCards;
}

const nameCard = (arr) => {

    let arraytemp = []
    for(let i=0; i <= arr.length - 1; i++){
      for(let j=0; j <= maso.length - 1; j++){
          if( arr[i] == j){
              arraytemp[i] = maso[j]
            }
        }
    }
    return arraytemp
}

const printCards = () => {
    
    let randomArray = [];

    document.getElementById('drawCardsBtn').addEventListener('click', () => {
        let randomPositions = randomNumberCards(document.getElementById('cardsNumber').value);
        for(let i = 0; i < randomPositions.length; i++) {
            for(let j = 0; j < randomPositions.length - 1; j++){
                if(randomPositions[j] > randomPositions[j+1]){
                    let temp = randomPositions[j];
                
                    randomPositions[j] = randomPositions[j+1];
                    randomPositions[j+1] = temp;
                    
                    randomArray = randomPositions;
                    console.log(nameCard(randomArray))
                } 
                
            }
            
        }


    });

}
 
printCards();