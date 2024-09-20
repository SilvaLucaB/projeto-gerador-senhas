//INPUT(ID) da linha 17: 
let sliderElement = document.querySelector("#slider");

//BUTTON(ID) da linha 20:
let buttonElement = document.querySelector("#button");

//Tamanho dos caracteres (linha 16): 
let sizePassword = document.querySelector("#valor");

//Senha (linha 25)
let password = document.querySelector("#password");

//ID linha 23
let containerPassword = document.querySelector("#container-password");

/* -------------------------------------------------
Possiveis caracteres da senha :*/
let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz0123456789';
let novaSenha = "";

//Número de caracteres(x) ("tamanho x caracteres"):

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
    //Vai receber o valor atual da barra de rolagem
}

//Função que vai gerar a senha:

function generatePassword() { //atribuir essa função ao "Gerar senha (linha 20)"

    let pass = "";

    //I = contador
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        /*I vai continuar contando ate que seja menor que o tanto de caracteres que o usuário escolher. N = vai pegar o tamanho de caracteres do CHARSET(linha 18) */

        pass += charset.charAt(Math.floor(Math.random() * n));
        /*CHARAT = pega o caractere baseado na posição(Exemplo: se o resultado dos MATH * n = 0, no nosso charset, seria a letra A)
        MATH FLOOR = ger anúmero inteiro
        MATH RANDOM = Gera número aleatorio */

    }

    //Faz com que ao clicar em gerar senha, a mesma seja exposta:
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword() {
    alert("Senha copiada com sucesso!");
    //Copiar o que estiver dentro da variável senha:
    navigator.clipboard.writeText(novaSenha);
    //Chamar essa função no index(linha 23)
}