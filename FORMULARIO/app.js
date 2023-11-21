function validaFormulario(){
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

        if(nome == '' || email == '' || senha == ''){
           alert("Por favor, preencha todos os campos")
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(emailRegex.test(email)){
            alert("Por favor, insira um e-mail válido!")
        }
        if(senha.length > 8){
            alert('A senha precisa ter no máximo 8 caracteres')
        }
}


