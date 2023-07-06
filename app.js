const frontCard = document.getElementById("front-card");
const transBase = document.getElementById('transparent-base');
const matches = document.getElementById('matches');
const whiteLayer = document.getElementById('white-layer');
const coverImageIndexes =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const imageIndexes =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const whiteImageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const memMatchBox = document.getElementById('mem-match-box');
// const imageIndexesMatch=[11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const selectedIndex = null;
 
//I will have to hide this layer and the one underneath to reveal the correct background
// I am still haveing a hard time vewing the cover, even though I put it in using the same method of the card backs. 

coverImageIndexes.forEach((i) => {
  const coverImage = document.createElement('img');
  coverImage.setAttribute ("src" , `./background/circuit-board-background-copy-${i}.jpg`);
  coverImage.style.width = "150px";
  coverImage.style.height = '150px';
  coverImage.classList.add('cover');
  coverImage.setAttribute("id" , `cover${i}`);
  frontCard.appendChild(coverImage);

    const topOfCard = document.getElementById(`cover${i}`);

    topOfCard.addEventListener('click' , flipCard);
      function flipCard(){
        coverImage.classList.toggle("flipCard");
        topOfCard.style.visibility = "hidden";
        matches.style.visibility = "visible";
        // topOfCard.style.display = "none";
      }
      
  });
  
//put all the images inside a funciton in order to manipulate data
  const getData = () => [
imageIndexes.forEach((i) => {
  const image = document.createElement('img');

  // chnage this to the card back
  image.setAttribute ("src" , `images/memory-match-${i}.png`);
  image.style.width = "150px";
  image.style.height = '150px';
  image.classList.add('back-card');
 
  

  //I successfully named one id a specific for the intiial cares and their matches m$[i>10]
    if (i <= 10){
      image.setAttribute("id" , `${i}`);
      image.setAttribute("name", "set1");
    } else {
      image.setAttribute("id", `m${i}`);
      image.setAttribute("name", "set2");
    };

      
    // }
  //does this suffice for a different id for every image?

  // image.addEventListener('click' , () => {
  //   // not sure yet
  // })
  matches.appendChild(image);
 
})];

// getData();

// function randomize(array) {
// for (let i = imageIndexes.length - 1; i > 0; i --){
//   let j = Math.floor(Math.random() * (i + 1));
//   [array[i], array[j]] = [array[j], array[i]];
// }

// return array;

// };

// randomize(imageIndexes);
const randomize = (array) => {
array.sort(() => Math.random() - 0.5);
return array;
}; 


const cardData = getData();

randomize(getData());

// if the iteration of i from set 1 and set 2 are equal, then the cards slected are a match

// const set1 = document.getElementsByName("set1");
// const set2 = document.getElementsByName('set2');

// const theyMatch = []
// let selectedCards = []



//   for in set1 && set2, if the numbers m
// if (i in set1 == i in set2){
//   theyMatch.push(image.id);
// }

// console.log(theyMatch)

// if the first number plus 10, equals the second number, then set 1 and set 2 are matches
// if 2 cards are selected
// if (`${i}` in set1 + 10 == `${i}` in set2){

// }


// const answers = [
//   [1, 11], 
//   [2, 12],
//   [3, 13],
//   [4, 14],
//   [5, 15],
//   [6, 16],
//   [7, 17],
//   [8, 18],
//   [9, 19],
//   [10, 20]
// ]



// for (let i = 0; i < answers.length; i++) {
//   if(answers[i].includes(set1) && answers[i].includes(set2)) {

// //       // make the cards stay flipped and increase score by 1
// //       break;
//   }
// }





//*******Thank goodness I didnt need these "white background" layers Trying to figure that out was a pain!*/

// });

// I will have to hide this layer and the layer above to reveal the correct background
// whiteImageIndexes.forEach((i) => {
//   const whiteImage = document.createElement("img");
//   whiteImage.setAttribute ('src' , `./cream_color_img/middle_portion_mem_match_${i}.jpg`);
//   whiteImage.style.width = '150px';
//   whiteImage.style.height = '150px';
//   whiteImage.classList.add('white-background');
//   whiteImage.setAttribute('id' , `white-layer${i}`);
//   whiteLayer.appendChild('whiteImage');

//   const secondTopOfCard = document.getElementById(`white-layer${i}`);

//   secondTopOfCard.addEventListener('click' , flipCard);
//       function flipCard(){
//         whiteImage.classList.toggle("flipCard");
//         // secondTopOfCard.style.visibility = "hidden";
//       }
// });



//this is the base for the transparent images 
// for(let i = 0; i <= whiteImageIndexes.length; i++){
//   const transBase = document.createElement("img");
//   whiteImage.setAttribute (`src , ./cream_color_img/middle_portion_mem_match_${i}.jpg`);
//   whiteImage.style.width = '150px';
//   whiteImage.style.height = '150px';
//   whiteImage.classList.add('base');
//   whiteImage.setAttribute('id' , `base${i}`);
//   whiteImage.appendChild('transparent-base');
// };

//score: for each match, you get 1 point. if you get 10 matches, find all the matches,
//then you win and all the cards are reshuffled and flipped back over aftr slecting a reset button 


//div front

// image.addEventListener ()

//when screen start, the image will lay on all of them.

//when an item is clicked, it changes attributes (use set attribite to flip to the fron and the back)


// // imageIndexes.forEach((i) => {
// const memMatchImage = new Image (200,400);
// memMatchBox.src = "memory_match-1.png";
// document.memMatchBox.appendChild(memMatchBox);



// // })
// just

//Trying to do the same method for the images from 11-20 DID not at ALL
//matches 
// imageIndexesMatch.forEach((i) => {
//   const imageMatch = document.createElement('img');

//   // chnage this to the card back
//   image.setAttribute ("src" , `./images_match/memory-match-${i}.png`);
//   image.style.width = "150px";
//   image.style.height = '150px';
//   image.classList.add('images-match');
//   image.setAttribute("id" , `m${i}`);
  
//   //does this suffice for a different id for every image?

//   image.addEventListener('click' , () => {g
//     // not sure yet
//   })
//   matches.appendChild(imageMatch);
// })