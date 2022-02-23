
for(var i=0; i<menuDishName.length; i++){


    var new_element = document.createElement('a');    

    new_element.setAttribute('id', i.toString());
    new_element.setAttribute('draggable', "true");
    new_element.setAttribute('ondragstart', "drag(event)");
    new_element.setAttribute('href', "#");
    new_element.classList.add('w3-bar-item');
    new_element.classList.add('w3-button');
    new_element.classList.add('w3-border-bottom');
    new_element.classList.add('w3-padding-32');
    new_element.classList.add('sk-menuItem');
    
    new_element.innerHTML = menuDishName[i] + "<br/>" + "Rs. " + menuDishPrice[i];

    var menuList = document.getElementById("menuDisplay");
    menuList.appendChild(new_element);    
}

function search_menu() {
    let input = document.getElementById('mSearchBar').value;
    input=input.toLowerCase();
    
    let x = document.getElementsByClassName('sk-menuItem');

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