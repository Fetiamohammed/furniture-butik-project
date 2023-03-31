fetch('data/furniture.json')
.then(response=> response.json())
.then(data =>{
   // console.log(data)
    let ProductInfo = '';
    data.map ((itemInfo) =>{
        ProductInfo +=
        `
        <div class="card">
              <img src=${itemInfo.image} class="productImge" alt="">
              <p class="productName">${itemInfo.productName}</p>
              <p class="price">${itemInfo.price} kr</p>
              <a href="#" class="btn btn-primary" onclick="confirmBox()" id='confirmBuy'>BUY</a>
        </div>
        `
    });
    document.getElementById("itemCard").innerHTML= ProductInfo;
}).catch (error=>{
    console.log(error)
})
////
function confirmBox(){
   // let confirmBuy = getElementById('confirmBuy')
   // to make confirmtion msg apears every time user click the buy btn.
    let confirmBuy = confirm(" Are you sure you want to make a payment?");
    if (confirmBuy=== true){
        alert('Payement is successfull');
    }
    else{
        alert('Payment is canceled');
    }
}
//show the the selected img
/*
function selectedImg(){
let selectedImg = document.querySelector("#confirmBuy");
selectedImg.addEventListener('click', function(){
    console.log("hej");
})
}*/


//// making some changes on buy page
let buyContainer = document.getElementById('content');
buyContainer.style.color= 'rgb(26, 61, 26)';
let element = document.getElementsByClassName('hero-text');
element.removeChild(element.child[div[h1]]);//


// rewrite the greating msg.
//let greating ='';
// 
/*let addBags = document.getElementById('bag')
   for( let i = 0 ; i < addBags.length; i++){ 
let button = addBags[i]
button.addEventListener('click', addBagClicked)
   }*/
   
