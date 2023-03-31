//register section start
///////saving users data on local storage.

////////////

let userName = document.querySelector("#userName");
let userEmail = document.querySelector('#userEmail');
let Password = document.querySelector('#Password');
let rptPassword = document.querySelector('#rpt-password');
let regbutton = document.querySelector('#regbutton');
regbutton.addEventListener('click', function(){

localStorage.userName = userName.value ;
localStorage.userEmail = userEmail.value;
localStorage.Password = Password.value;
localStorage.rptPassword = rptPassword.value;
})
// saving on localstorage works.

/*function congrateBox(){
  //
  // to make congates msg apears when register btn clicked.
   let congrateMsg = confirm(" CONGRA!!!"+ " You have 20% extra !! " +
   'Du you want to use it to day ?' );
   if (congrateMsg=== true){
    document.write("discount added on your purchase");
   }
   else{
       document.write('your discount is Saved');
   }
}
*/


// charts section start
var eldiscount = document.getElementById('discountChart').getContext('2d');
var decPrice = [] // created three variable with empty array.
var orgPrice=[]
var productNames = []

fetch('charts/chartsInfo.json')   // bring the information from json file with fetch and used for loop
.then(response=> response.json()) // to push to the array.
.then(result => {
  for (let i = 0; i< result.length; i++) {
    orgPrice.push(result[i].originalPrice)
    decPrice.push(result[i].currentPrice)
    productNames.push(result[i].productName)
    console.log(result[i]);
  }
console.log(productNames.length.toString())

// getting all the info is succeded
// adding two values on the x axis is not succeded. but with one value is works fine.
new Chart(eldiscount, {
  type: 'bar',
  data: {
    labels:productNames,
    datasets: [
      {
        label: 'product price after discount',
        data: decPrice,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})
})

///
let btnShow = document.getElementById("chartShow");
let btnHide = document. querySelector('chartsHide');
function chartsBox(){
  btnShow.addEventListener('click', () =>{
    console.log("yes")
  })

}
///