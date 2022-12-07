function validate(){
    var name = document.getElementById("nome").value;
    var subject = document.getElementById("assunto").value;
    var phone = document.getElementById("telefone").value;
    var email = document.getElementById("e-mail").value;
    var message = document.getElementById("mensagem").value;
    var error_message = document.getElementById("erro de mensagem");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Coloque um e-mail válido";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Escreva o assunto de maneira correta";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Insira um número de telefone válido";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Insira um e-mail válido";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Insira mais de 140 caracteres";
      error_message.innerHTML = text;
      return false;
    }
    alert("Formulário enviado com sucesso");
    return true;
  }