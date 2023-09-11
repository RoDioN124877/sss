var pomogalka2 = true;
var filtr_conteiner = document.getElementById("filtr_conteiner");


function filtr()
{
  if (pomogalka2 == true)
  {
    filtr_conteiner.style.opacity = "1";
    filtr_conteiner.style.pointerEvents = "all";
    pomogalka2 = false;
  }
  else
  {
    filtr_conteiner.style.pointerEvents = "none";
    pomogalka2 = true;
    filtr_conteiner.style.opacity = "0";
  }
}

let filter = function () {

let input = document.getElementById('filter-input')
input.addEventListener('keyup',function(){
  let filter = input.value.toLowerCase(),
            filterElements = document.querySelectorAll('#filter-list li');
})
};
filter();
