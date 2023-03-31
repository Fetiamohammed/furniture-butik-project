//getting the cityies.
let cityId = document.getElementById('id');
let cityName = document.getElementById('name');
let cityPop = document.getElementById('population');
let getBtn = document.getElementById('button');
//// get
//////
getBtn.addEventListener("click", function () {
    getCity(cityId.value);
    //console.log(Id.value)
    function getCity(Id) {
        addEventListener("click", function () {

            fetch("https://avancera.app/cities/" + Id)
                .then(res => res.json())
                .then(data => console.log(data))
        })
    }

});
//it works
////////post

let addBtn = document.getElementById('addbutton');
addBtn.addEventListener("click", function () {
    addNewCity(cityName.value , cityPop.value);
    console.log(cityName.value , cityPop.value);
    function addNewCity(cityName,cityPop) {
        addEventListener("click", function () {
            fetch("https://avancera.app/cities/", {
                body: JSON.stringify({ "name": cityName, "population": parseInt(cityPop) }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))


        })
    }
});
// it works

////// remove
let removeBtn = document.getElementById('removeButton');
removeBtn.addEventListener("click", function () {
    removeCity(cityId.value);
    console.log(cityId);
    function removeCity(cityId) {
        addEventListener("click", function () {
            fetch("https://avancera.app/cities/" + cityId, {
                method: "DELETE"
            })
                .then(result => {
                    console.log(result)
                })
                .catch(err => console.log(err))
        })
    }
});
///it works
///////////////////////////////////////
////////put
let updateBtn = document.getElementById('putButton');
updateBtn.addEventListener("click", function () {
    updateCity(cityId.value,cityName.value , cityPop.value);
    console.log('hej');
    function updateCity(cityId,cityName,cityPop) {
        addEventListener("click", function () {
            fetch("https://avancera.app/cities/" + cityId, {
                body: JSON.stringify({ id:cityId,"name": cityName, "population": parseInt(cityPop) }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT'
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        })
    }
});
///it works


