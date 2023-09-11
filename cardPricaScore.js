function calcCartPrice()
{

  const priceEL = document.querySelector('.tovar_total_price_for_code_item');
  const tovar_item = document.querySelectorAll('.tovar_item');
  const total_priceEl = document.querySelector('.itog_txt');


  let total_price = 0;
  tovar_item.forEach(function(item){
    const amountEL = item.querySelector('[data_counter]');
    const curentPrice =  parseInt(priceEL.innerText) * parseInt(amountEL.innerText);
    total_price += curentPrice;
})


  total_priceEl.innerText = total_price;
  const total_priceEl2 = document.getElementById("itoggg");
  total_priceEl2.value = total_price;
 
}
