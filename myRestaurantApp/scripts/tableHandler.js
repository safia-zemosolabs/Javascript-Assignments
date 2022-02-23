//const t1DishName = ["Banana", "Orange", "Apple", "Mango"];
//const t1DishPrice = [100, 200, 50, 60];
//const t1DishServings = [1,1,1,2];


document.getElementById("t1Summary").innerHTML = "Rs." + price(t1DishPrice, t1DishServings) +
                                                 " | Total Item: " + t1DishServings.length;

document.getElementById("t2Summary").innerHTML = "Rs." + price(t2DishPrice, t2DishServings) +
                                                 " | Total Item: " + t2DishServings.length;

document.getElementById("t3Summary").innerHTML = "Rs." + price(t3DishPrice, t3DishServings) +
                                                 " | Total Item: " + t3DishServings.length;

function price(dishPrice, dishServings){
	var sum = 0;
	for (var i = 0; i < dishPrice.length; i++) {
      sum += dishPrice[i] * dishServings[i];
    }
    return sum;
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dropTb1(ev) {
    ev.preventDefault();

    var dishId = parseInt(ev.dataTransfer.getData("text"));        
    
    t1DishName.push(menuDishName[dishId]);
    t1DishPrice.push(menuDishPrice[dishId]);
    t1DishServings.push(1);


    document.getElementById("t1Summary").innerHTML = "Rs." + price(t1DishPrice, t1DishServings) +
                                                " | Total Item: " + t1DishServings.length;
    
}

function dropTb2(ev) {
    ev.preventDefault();

    var dishId = parseInt(ev.dataTransfer.getData("text"));        
    
    t2DishName.push(menuDishName[dishId]);
    t2DishPrice.push(menuDishPrice[dishId]);
    t2DishServings.push(1);


    document.getElementById("t2Summary").innerHTML = "Rs." + price(t2DishPrice, t2DishServings) +
                                                " | Total Item: " + t2DishServings.length;
    
}

function dropTb3(ev) {
    ev.preventDefault();

    var dishId = parseInt(ev.dataTransfer.getData("text"));        
    
    t3DishName.push(menuDishName[dishId]);
    t3DishPrice.push(menuDishPrice[dishId]);
    t3DishServings.push(1);


    document.getElementById("t3Summary").innerHTML = "Rs." + price(t3DishPrice, t3DishServings) +
                                                " | Total Item: " + t3DishServings.length;
    
}

function search_table() {
    let input = document.getElementById('tSearchBar').value;
    input=input.toLowerCase();
    
    let x = document.getElementsByClassName('sk-table');

    console.log("No. of items: " + x.length);
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
}


