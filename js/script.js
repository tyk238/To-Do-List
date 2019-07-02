var input = document.querySelector(".text");
var button = document.querySelector(".add-btn");
var list = document.querySelector(".list");
var clear_spisok_del = document.querySelector(".clear_spisok_del")

button.addEventListener("click", function(){
	list.innerHTML = list.innerHTML + input.value + "<br>"
});


clear_spisok_del.addEventListener("click", function(){
	list.innerHTML = "";
});


