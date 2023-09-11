function nesubmnitnafek(){

    let tover_name = document.getElementsByName('tovar_item_txt');
    let tovar_price = document.getElementsByName('tovar_item_price');
    let fullprice = document.getElementsByName('full_price');
    let colvo = document.getElementsByName('tovar_item_colvo');
    let size = document.getElementsByName('tovar_item_size');

    $.ajax({
      url: 'tg_corsina.php',
      method: 'post',
      data: {tovar_item_txt:tover_name,
        tovar_item_price:tovar_price,
        full_price:fullprice,
        tovar_item_colvo:colvo,
        tovar_item_size:size},
      success: function(data){
      console.log(data);
      },
      error:function(e){
        console.log(e);
      }
    });
    return false;
    }