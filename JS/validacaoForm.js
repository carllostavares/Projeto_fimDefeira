      function validarForm(){

       if(document.querySelector('input[name=genero]:checked') == null){
         alert("Escolha o gênero!");
       }

      if(document.querySelector('input[name=concordo]') == null){
         alert("Marque a opção Li e Concordo");
      }

      var name = document.getElementById("name").value;
      if(name.trim() == ""){
         alert("Informe o nome");
         document.getElementById("name").focus();
         return;
      }
      let nameValidado = /^[a-zA-Z\s]+$/.test(document.getElementById('name').value);
            if (nameValidado == false) {
               alert("O nome deve conter apenas letras")
               return;
            }
      var cpf = document.getElementById("cpf").value;
      if(cpf.trim() == 0){
         alert("Informe o CPF");
         document.getElementById("cpf").focus();
         return;
      }
      let cpfValidado = /^([0-9]{11})+$/.test(document.getElementById('cpf').value);
            if (cpfValidado == false) {
               alert("O CPF informado não é válido!");
               return;
            }
      var rg = document.getElementById("rg").value;
      if(rg.trim() == 0){
         alert("Informe o RG");
         document.getElementById("rg").focus();
         return;
      }
      let rgValidado = /^([0-9]{7,9})+$/.test(document.getElementById('rg').value);
            if(rgValidado == false){
               alert("O RG informado não é válido!");
               return;
            }
      var senha = document.getElementById("senha").value;
      if(senha.trim() == 0){
         alert("Informe uma senha");
         document.getElementById("senha").focus();
         return;
      }
      let senhaValidada = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/.test(document.getElementById('senha').value);
            if(senhaValidada == false){
               alert("A senha precisa no minimo de 8 caracteres, pelo menos uma letra munúscula e uma letra maiúscula");
               return;
            }
      var email = document.getElementById("email").value;
            if(email.trim() == 0){
               alert("Informe o e-mail!");
               document.getElementById("email").focus();
               return;
            }
            alert("Validado");
   }