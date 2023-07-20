const ingredient1 = document.querySelector("#fruit1");
const ingredient2 = document.querySelector("#fruit2");
const ingredient3 = document.querySelector("#fruit3");

let data = [];

function getFruits(data){
    data.forEach((fruit) => {
        let option = document.createElement("option");
        option.setAttribute("value",`${fruit.name}`);
        option.setAttribute("name", `${fruit.name}`);
        option.textContent = `${fruit.name}`;
        ingredient1.appendChild(option);
        ingredient2.appendChild(option.cloneNode(true));
        ingredient3.appendChild(option.cloneNode(true));
    });
}
async function getData(){
    const response = await fetch("./json/fruit.json");
    data = await response.json();
    // console.log(data);
    getFruits(data);
}
getData();


const order = document.querySelector("#orderform");
// const results = document.querySelector(".form-results");
document.querySelector("#fdate").value = new Date();
const submitBtn = document.querySelector("#submitBtn");

order.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const email = document.querySelector("#email").value;
    const tel = document.querySelector("#phone").value;
    const orderDate = document.querySelector("#fdate").value;
    const fruit1 = document.querySelector("#fruit1").value;
    const fruit2 = document.querySelector("#fruit2").value;
    const fruit3 = document.querySelector("#fruit3").value;
    calculateFacts(fruit1, fruit2, fruit3);
    let specialInstructions = document.querySelector("#orderInstr").value;
    if (specialInstructions === "") {
        specialInstructions = "without conditions";
    }
    // document.querySelector("repDate").innerHTML = `{new Date()}`;
    document.querySelector("repName").innerHTML = name;
    document.querySelector("repLastN").innerHTML = lname;
    document.querySelector("repMail").innerHTML = email;
    document.querySelector("repCel").innerHTML = email;
    document.querySelector("repIngr1").innerHTML = email;
    document.querySelector("repIngr1").innerHTML = email;
    document.querySelector("repIngr1").innerHTML = email;    
    addOrder();
    results.focus();
});

// Extracts nutritional facts, sums them up and returns a string with that information
function calculateFacts(fruit1, fruit2, fruit3){
    const filteredFruits =  data.filter((fruit)=>{
        if (fruit.name === fruit1){
            return fruit;
        }
        if (fruit.name === fruit2){
            return fruit;
        }
        if (fruit.name === fruit3){
            return fruit;
        }
    });
    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;
    filteredFruits.forEach(fruit => {
        carbs = carbs + fruit.nutritions.carbohydrates;
        protein = protein + fruit.nutritions.protein;
        fat = fat + fruit.nutritions.fat;
        sugar = sugar + fruit.nutritions.sugar;
        calories = calories + fruit.nutritions.calories;
    });
    document.querySelector("repCarb").innerHTML = `${carbs.toFixed(1)}`;
    document.querySelector("repProt").innerHTML = `${protein.toFixed(1)}`;
    document.querySelector("repFat").innerHTML = `${fat.toFixed(1)}`;
    document.querySelector("repSug").innerHTML = `${sugar.toFixed(1)}`;
    document.querySelector("repCal").innerHTML = `${calories.toFixed(1)}`;

}

// Take current number of orders and add one more
function addOrder(){
    let regOrder = Number(localStorage.getItem("orders-track"));
    regOrder++;
    localStorage.setItem("orders-track", currentOrder);
}