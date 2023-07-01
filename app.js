const memMatchBox = document.getElementById('mem-match-box');
const frontCard = document.getElementById("front-card");
const imageIndexes =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const coverImageIndexes =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const selectedIndex = null;
 

coverImageIndexes.forEach((i) => {
  const coverImage = document.createElement('cover');
  coverImage.setAttribute ("src" , `/background/circuit-board-background-copy-${i}.jpg`);
  coverImage.style.width = "150px";
  coverImage.style.height = '150px';
  coverImage.classList.add('cover');
  coverImage.setAttribute("id" , `cover ${i}`);
  frontCard.appendChild(coverImage);
});

imageIndexes.forEach((i) => {
  const image = document.createElement('img');

  // chnage this to the card back
  image.setAttribute ("src" , `./images/memory-match-${i}.png`);
  image.style.width = "150px";
  image.style.height = '150px';
  image.classList.add('images');
  image.setAttribute("id" , `${i}`);
  
  //does this suffice for a different id for every image?

  image.addEventListener('click' , () => {
    // not sure yet
  })
  memMatchBox.appendChild(image);
});



//div front

// image.addEventListener ()

//when screen start, the image will lay on all of them.

//when an item is clicked, it changes attributes (use set attribite to flip to the fron and the back)


// // imageIndexes.forEach((i) => {
// const memMatchImage = new Image (200,400);
// memMatchBox.src = "memory_match-1.png";
// document.memMatchBox.appendChild(memMatchBox);



// // })