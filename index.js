//let item = prompt('choose an item?')
//alert('Hej' + ' your have this items in the basket ' + item  )
//search section start
/*const productsList = document.querySelector('#productsList');
const searchBar = document.querySelector('#search-bar');
const btnSearch = document.querySelector("#btn-Search")
let productName = ["graysofa"," pinkycomy"];
function srchProduct(){
    if(productName.indexOf(searchBar.value)==-1 ){
        console.log(productName.value);
    }
};
btnSearch.addEventListener('click', srchProduct);*/
/////////////////////////////


//blackfriday section start
//creating time counter with get date and time method
// first insert the last date which the sale ends and with getTime
// and then Get today's date and time
//// calculate the diffrence with math.floor method.
// make it display with innerhtml
// when it timeinterval < 0 the timer will disapeer and will show another text.
const lastSaleDate = new Date("may 20, 2023 17:37:25").getTime();
let time = setInterval(() => {
  let today = new Date().getTime();
  const timeInterval = lastSaleDate - today;
  let days = Math.floor(timeInterval / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);
  let blackfriday = document.getElementById("BlackSale");
  blackfriday.innerHTML ="Members discount is going to end!" +" " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (timeInterval < 0) {
    clearInterval(time);
    document.getElementById("BlackSale").innerHTML = "Wellcome!!";
  }
}, 1000);
/// blackfriday section end

//////////////////////////////////////////////
// changing  textcontent
let regText = document.querySelector("#membership-t");
regText.textContent = "Register And Get Discount!";
//////////////
let element = document.querySelector('#bestSold');
element.style.color = 'rgb(26, 61, 26)';
element.style.paddingLeft = '10%';
// change and add text to the element
let text1 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
let text2 = 'Impedit, labore nulla. Excepturi rem commodi corrupti.';
let newText = text1.concat(text2);
//update text
let upDateText = document.getElementById('bstText');
upDateText.textContent = newText;
///////////

////////adding slide image
// create an array of img
const sofaImg = [
  "labimage/bluemodern-luxury.png",
  "labimage/spacejoy.png",
  "labimage/blueCornerSofa.jpg",
  "labimage/browncornersofa.png",
  "labimage/comfysinglesofa.png",
  "labimage/couch.png",
  "labimage/familyluxurySofa.jpg",
  "labimage/fotolj.png",
  "labimage/graysimplesofa.png",
  "labimage/graysofa.png",
  "labimage/greensimplesofa.png",
  "labimage/pinkcomfy.png",
  "labimage/collov-white.jpg",
  "labimage/brown-new.png",
  "labimage/alona-gross-bg.png",
  "labimage/spacejoy-orange.png",

];
// calling the btn by its id
let slideImg = document.getElementById("slide");
const btn1 = document.getElementById("prebtn");
const btn2 = document.getElementById("nextbtn");
//the current index
let i = 0;
slideImg.src = sofaImg[i];
btn2.onclick = () => {
  //every time btn2 is clicked adds 1 image to current index
  i++;
  if (i > sofaImg.length - 1) {
    //when the slide reachs to the last image of array returns to index zero
    i = 0;
  }
  slideImg.src = sofaImg[i];

};
btn1.onclick = () => {
  //every time btn1 is clicked decreases 1 image from the current index and
  // when the index reaches 0 it starts again from the last index.
  i--;
  if (i < 0) {
    i = sofaImg.length - 1;
  }
  slideImg.src = sofaImg[i];
};
// it works.
// slide image section end
