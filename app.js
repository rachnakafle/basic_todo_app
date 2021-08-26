// VARIABLES
let input = document.querySelector("#add");
let button = document.querySelector("#btn");
let list = document.querySelector(".list")
let el= document.getElementsByTagName("li");


btn.onclick = function(){
    var text = input.value;
    if(text == ''){
        alert('You must write something');
    }
    else{
        li = document.createElement('li');
        li.innerHTML = text;
        list.insertBefore(li,list.childNodes[0]); 
        input.value = ''; 
    } 
};

list.onclick = function(listadd){
    if(listadd.target.tagName == 'LI'){
        listadd.target.classList.toggle('checked');
    } 
};  