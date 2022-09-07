/* let maso = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let masodesrod = ["2", "A", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "3"]


let icons = ['<i class="fa-solid fa-heart"></i>', '<i class="fa-solid fa-heart text-danger"></i>','<i class="fa-solid fa-clover"></i>','<i class="fa-solid fa-diamond text-danger"></i>',]



const excuseGenerator = () => {
    document.getElementById('change').addEventListener('click', () => {
       let uniqueIcon = icons[randomExcuse(icons)];
        document.getElementById('cardNumber').innerText = maso[randomExcuse(maso)];
        document.querySelectorAll('.icon')[0].innerHTML = uniqueIcon;
        document.querySelectorAll('.icon')[1].innerHTML = uniqueIcon;
    })
};


const randomExcuse = (array) => {
    let min = 0;
    let max = array.length - 1;
    let random = Math.floor(Math.random() * (max - min + 1));
    return random;
};


excuseGenerator(); */

/* let notas = [2, 10, 21, 5, 32, 12, 90, 8, 19, 22]; */
/* const bubbleSortFor = (arr = []) => {
    let array_sorts = [];
    let array_final = [];
    let size = arr.length; // 10
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size - 1; j++){
            array_final[j] = arr;
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                array_final[j] = arr;
                array_sorts = null;
            }
        }
    }
    return array_final;
} */

/* const bubbleSortFor = (arr = []) => {
    let size = arr.length; // 10
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let resultado2 = bubbleSortFor(notas);
console.log(resultado2); */


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

    document.getElementById('nombreboton').addEventListener('click', () => {
        let randomPositions = randomNumberCards(document.getElementById('nombreinput').value);
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
