  const cartWrapper =  document.querySelector('.cart_wrapper');

  let pomogalka = true;
  let corsina = document.getElementById("corsina");
  let corsina_all = document.getElementById("corsina_all");

  function Corsina_opasiti(qw)
  {
    if (pomogalka == true)
    {
      corsina.style.opacity = "1";
      corsina.style.pointerEvents = "all";
      pomogalka = false;
    }
    else
    {
      corsina.style.pointerEvents = "none";
      pomogalka = true;
      corsina.style.opacity = "0";
    }
  }

var corsina_colvo = 0;

const corsina_img_1 = document.getElementById("ball_img");

window.addEventListener('click',function(event){

  if (event.target.hasAttribute('data-cart')) {
    corsina_colvo++;
    if(corsina_colvo != 0)
    {
      document.getElementById("ball").innerHTML = corsina_colvo;
      document.getElementById("ball").style.opacity = "1";
      corsina_img_1.style.opacity = "1";
    }
    else 
    {
      corsina_img_1.style.opacity = "0";
      document.getElementById("ball").style.opacity = "0";

    }
    

   

    const card = event.target.closest('.tovar');
    const productInfo = {
      id:card.dataset.id,
      imgSrc:card.querySelector('.tovar_img').getAttribute('src'),
      title:card.querySelector('.tovar_txt').innerText,
      price:card.querySelector('.tovar_price').innerText,
      colvo_tovar:card.querySelector('.colvo_tovar').innerText,
      total_price_forcode:card.querySelector('.tovar_total_price_for_code').innerText,
      select:card.getElementsByClassName('razmer')[0].value,
        }

    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    const itemInsize = cartWrapper.querySelector(`[value="${productInfo.select}"]`);

		// Если товар есть в корзине
		if (itemInCart && itemInsize) {
			const counterElement = itemInCart.querySelector('[data_counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.colvo_tovar);

    }
    else {
    const cartItemHTML = `
    <div data-id="${productInfo.id}" class="tovar_item">

      <img class="tovar_item_img" src="${productInfo.imgSrc}" alt="">
      <div class="tovar_item_txt" name = "tovar_item_txt">${productInfo.title}</div>
      <div class="tovar_item_price" name = "tovar_item_price">${productInfo.price}</div><div class="tovar_total_price_for_code_item">${productInfo.total_price_forcode}</div>
      <div class = "container_item" style="display: table;">
      <button data-cart2 type="button" id="first_button_item_minus" data-action="minus" class="tovar_item_button">-</button>
      <div data_counter class ="colvo_tovar_item">${productInfo.colvo_tovar}</div><div class="colvo_tovar_sht_item">шт.</div>
      <button data-cart2 type="button" data-action="plus" class="tovar_item_button">+</button>
      <div class="razmer_item">${productInfo.select}</div>
      <input name = "tovar_item_txt}" type="text" corsina.style.pointerEvents = "none"; class = "kostili"  value ="${productInfo.title}">
      <input name = "tovar_item_price" class = "kostili" corsina.style.pointerEvents = "none"; type="text" value="${productInfo.price}">
      <input name = "tovar_item_colvo" class = "kostili" corsina.style.pointerEvents = "none"; type="text" value="${productInfo.colvo_tovar}">
      <input name = "tovar_item_size"  class = "kostili" corsina.style.pointerEvents = "none"; type="text" value="${productInfo.select}">
      </div>
    </div>`;

    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
  }
  toggleCartStatus();
  calcCartPrice();
  }
})

window.addEventListener('click',function(event){



  if (event.target.hasAttribute('data-cart2')) {

  }
})



window.addEventListener('click',function(event){



if (event.target.dataset.action ==='plus')
{
  calcCartPrice();
  const container_item = event.target.closest('.container_item');
  const counter_block_scor = container_item.querySelector('[data_counter]');
  counter_block_scor.innerText = ++counter_block_scor.innerText;
  corsina_colvo++;
  if(corsina_colvo != 0)
  {
    document.getElementById("ball").innerHTML = corsina_colvo;
    document.getElementById("ball").style.opacity = "1";
    corsina_img_1.style.opacity = "1";
  }
  else {
    corsina_img_1.style.opacity = "0";
    document.getElementById("ball").style.opacity = "0";
  }
}
if (event.target.dataset.action ==='minus')
{
  const container_item = event.target.closest('.container_item');
  const counter_block_scor = container_item.querySelector('[data_counter]');
  if (parseInt(counter_block_scor.innerText)>0)
  {
    toggleCartStatus();
    calcCartPrice();
    corsina_colvo--;
    if(corsina_colvo != 0)
    {
      corsina_img_1.style.opacity = "1";
      document.getElementById("ball").innerHTML = corsina_colvo;
      document.getElementById("ball").style.opacity = "1";

    }
    else {
      corsina_img_1.style.opacity = "0";
      document.getElementById("ball").style.opacity = "0";
    }
    counter_block_scor.innerText = --counter_block_scor.innerText;
  }

if (event.target.closest('.container_item')&&parseInt(counter_block_scor.innerText) ===0)
{
  event.target.closest('.tovar_item').remove();
}

}
 calcCartPrice();
})


function toggleCartStatus(){
cartWrapper.children;
const cartEmptyBadge = document.querySelector('[data-cart-empty]');

if (cartWrapper.children.length > 0)
{
  cartEmptyBadge.classList.add('none')
}

else {
  cartEmptyBadge.classList.remove('none')
}

}



