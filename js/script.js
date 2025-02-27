
document.addEventListener("DOMContentLoaded", function(){
  var btn = document.getElementById("myBtn");
  var element = document.getElementById("myToast");

  // Create toast instance
  var myToast = new bootstrap.Toast(element);

  btn.addEventListener("click", function(){
      myToast.show();
  });
});

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário se houver erros
    event.preventDefault();

    // Obtendo os valores dos campos
    const email = document.getElementById('formEmail').value;
    const password = document.getElementById('formSenha').value;

    // Validação do email (Expressão regular para email)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Validação da senha (mínimo de 6 caracteres)
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

     // Validação do email (verificar se é admin@gmail.com)
     if (email !== 'admin@gmail.com') {
      alert('O email inserido é inválido.');
      return;
    }

    // Validação da senha (verificar se é 1234)
    if (password !== '123456') {
      alert('Senha incorreta.');
      return;
    }

    // Se tudo estiver correto, você pode enviar o formulário
    alert('Login realizado com sucesso!');


    // Se tudo estiver correto, redireciona para a index.html
    window.location.href = '../index.html';

  });

  // Formata o CPF enquanto o usuário digita
  function formatarCPF(campo) {
    let cpf = campo.value.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    campo.value = cpf;
  }

  // Formata o telefone para o padrão (XX) 9XXXXXXXX
  function formatarPhone(campo) {
    let phone = campo.value.replace(/\D/g, "");
    phone = phone.substring(0, 11); // Limita a 11 dígitos
    if (phone.length > 0) {
      phone = "(" + phone;
    }
    if (phone.length > 3) {
      phone = phone.slice(0, 3) + ") " + phone.slice(3);
    }
    campo.value = phone;
  }

  // Valida o CPF verificando os dígitos verificadores
  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf[i - 1]) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf[i - 1]) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf[10]);
  }

  // Função de validação do cadastro
  function validarCadastro(event) {
    event.preventDefault();
    
    const nome = document.getElementById('formNome').value;
    const cpf = document.getElementById('formCpf').value;
    const email = document.getElementById('formEmail').value;
    const senha = document.getElementById('formSenha').value;
    const phone = document.getElementById('formPhone').value;

    // Validação do email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, insira um email válido.');
      return false;
    }
    
    // Validação da senha
    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }
    
    // Validação do CPF
    const cpfDigits = cpf.replace(/\D/g, "");
    if (!validarCPF(cpfDigits)) {
      alert('CPF inválido!');
      return false;
    }
    
    // Validação do telefone (deve estar no formato: (XX) 9XXXXXXXX)
    const phonePattern = /^\(\d{2}\)\s9\d{8}$/;
    if (!phonePattern.test(phone)) {
      alert('O número de telefone deve estar no formato (XX) 9XXXXXXXX.');
      return false;
    }
    
    // Se tudo estiver correto:
    alert('Cadastro realizado com sucesso!');
    window.location.href = '../index.html';
    return true;
  }


      function lerTexto() {
          let textoSelecionado = window.getSelection().toString();
          if (textoSelecionado) {
              let synth = window.speechSynthesis;
              let utterance = new SpeechSynthesisUtterance(textoSelecionado);
              
              // Definir voz em português (se disponível)
              utterance.lang = "pt-BR";

              // Falar o texto
              synth.speak(utterance);
          } else {
              alert("Selecione um texto primeiro!");
          }
      }
