
    function checkForm()
    {

      let fail = "";


      let name = document.getElementById('name_input').value;
      

      let surname = document.getElementById('surname_input').value;
      

      let tel = document.getElementById('tel_input').value;
      

      let email = document.getElementById('Em_input').value;
      

      let tema = document.getElementById('tema_input').value;
      
      let info = document.getElementById('soobshenie_input').value;
      



      if (name == "" || surname == "" || tel == "" || email == ""  || info == "" )
        fail = "Заполните все поля";
      else {
        fail = "форма отправлена ";
      }

      if (fail != "")
      {
        document.getElementById('error').innerHTML = fail;
      }
      $.ajax({
        url: 'teleg.php',
        method: 'post',
        data: {user_email:email,
           user_name:name,
           user_surname:surname,
           user_phone:tel,
           soobshenie:info},
        success: function(data){
        console.log(data);
        },
        error:function(e){
          console.log(e);
        }
      });
      return false;
    }


