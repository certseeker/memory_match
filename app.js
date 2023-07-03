const frontCard = document.getElementById("front-card");
// const memMatchBox = document.getElementById('mem-match-box');
const matches = document.getElementById('matches');
const whiteLayer = document.getElementById('white-layer');
const coverImageIndexes =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const imageIndexes =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const whiteImageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const imageIndexesMatch=[11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const selectedIndex = null;
 
// I am still haveing a hard time vewing the cover, even though I put it in using the same method of the card backs. 
coverImageIndexes.forEach((i) => {
  const coverImage = document.createElement('img');
  coverImage.setAttribute ("src" , `./background/circuit-board-background-copy-${i}.jpg`);
  coverImage.style.width = "150px";
  coverImage.style.height = '150px';
  coverImage.classList.add('cover');
  coverImage.setAttribute("id" , `cover${i}`);
  frontCard.appendChild(coverImage);
  
});

for(let i = 0; i <= whiteImageIndexes.length; i++){
  const whiteImage = document.createElement("img");
  whiteImage.setAttribute (`src , ./cream_color_img/middle_portion_mem_match_${i}.jpg`);
  whiteImage.style.width = '150px';
  whiteImage.style.height = '150px';
  whiteImage.classList.add('white-background');
  whiteImage.setAttribute('id' , `white-layer${i}`);
  whiteImage.appendChild('whiteLayer');
};

imageIndexes.forEach((i) => {
  const image = document.createElement('img');

  // chnage this to the card back
  image.setAttribute ("src" , `./images/memory-match-${i}.png`);
  image.style.width = "150px";
  image.style.height = '150px';
  image.classList.add('images');
  

  //I successfully named one id a specific for the intiial cares and their matches m$[i>10]
    if (i <= 10){
      image.setAttribute("id" , `${i}`);
      image.setAttribute("name", "set1");
    } else {
      image.setAttribute("id", `m${i}`);
      image.setAttribute("name", "set2");
    }
  //does this suffice for a different id for every image?

  // image.addEventListener('click' , () => {
  //   // not sure yet
  // })
  matches.appendChild(image);
});

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

// const id1 = get the id of the first one in here
// const id2 = get the id of the second one in here

// for (let i = 0; i < answers.length; i++) {
//   if(answers[i].includes(id1) && answers[i].includes(id2)) {
//       // make the cards stay flipped and increase score by 1
//       break;
//   }
// }

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
// });