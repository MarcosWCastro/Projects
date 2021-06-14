function clique() {
    cadastro.style.display = 'block'
    login.style.display = 'none'
}

function cadastrar() {
    var usuario = ipt_usuario.value
    var email = ipt_email.value
    var senha = ipt_senha.value
    var confSenha = ipt_confSenha.value

    var email_ok = email.indexOf('@') && email.indexOf('.com');
    var senha_ok = senha == confSenha;

    if (email_ok && senha_ok) {
        alert("ku")
    } else {
        alert('bla')
    }
}

// function logar() {
//     if (txtLogin.value == "" || txtSenha.value == "") {
//         alert("Algum campo está vazio, preenchá-o!")
//     } else {
//         if (usuario == txtLogin.value || email == txtLogin.value && senha == txtSenha.value) {
//             window.location.href = "./dashboard/alertas.html";
//         } else {
//             alert('Usuário ou senha incorretos. Tente novamente!');
//         }
//     }
// }