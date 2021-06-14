function ajuda() {
    card_um.style.display = 'none'
    help.style.display = 'block'
}

function voltar() {
    card_um.style.display = 'block'
    help.style.display = 'none'
}

function jogar() {
    if (ipt_play1.value == '' || ipt_play2.value == '') {
        alert('Insira o nome dos jogadores')
        location.reload()
    }
    card_dois.style.display = 'block'
    card_um.style.display = 'none'

    play1.innerHTML = `${ipt_play1.value}`;
    play2.innerHTML = `${ipt_play2.value}`;
}


let jogador1 = 0;
let jogador2 = 0;

function sortear() {
    for (i = 1; i <= 3; i++) {

        var sorteio = parseInt(Math.random() * 3 + 1);
        var sorteio2 = parseInt(Math.random() * 3 + 1);

        if (sorteio == 1) {
            result.innerHTML =
                `<img src="scissors.png" style="width: 100px;">`;
        }

        if (sorteio == 2) {
            result.innerHTML = `<img src="paper.png" style="width: 100px;">`;
        }

        if (sorteio == 3) {
            result.innerHTML = `<img src="stone.png" style="width: 100px;">`;
        }

        if (sorteio2 == 1) {
            result2.innerHTML =
                `<img src="scissors2.png" style="width: 100px;">`;
        }

        if (sorteio2 == 2) {
            result2.innerHTML =
                `<img src="paper2.png" style="width: 100px;">`;
        }

        if (sorteio2 == 3) {
            result2.innerHTML =
                `<img src="stone2.png" style="width: 100px;">`;
        }

    }

    if (sorteio == 1 && sorteio2 == 2) {
        jogador1++
        jog1.innerHTML = `${jogador1}`
    }

    if (sorteio == 2 && sorteio2 == 1) {
        jogador2++
        jog2.innerHTML = `${jogador2}`
    }

    if (sorteio == 1 && sorteio2 == 3) {
        jogador2++
        jog2.innerHTML = `${jogador2}`
    }

    if (sorteio == 3 && sorteio2 == 1) {
        jogador1++
        jog1.innerHTML = `${jogador1}`
    }

    if (sorteio == 3 && sorteio2 == 2) {
        jogador2++
        jog2.innerHTML = `${jogador2}`
    }

    if (sorteio == 2 && sorteio2 == 3) {
        jogador1++
        jog1.innerHTML = `${jogador1}`
    }

    if (jogador1 == 5) {
        document.getElementById("bt_jogar").disabled = true;
        card_tres.style.display = 'block'
        card_tres.innerHTML = `${ipt_play1.value} ganhou!!!<br><br><br>
        <img src="giphy.gif" style="width: 280px; border-radius: 15px;">
        <br><br><br>
        <button onclick="reiniciar()">Reiniciar</button>`
    } else if (jogador2 == 5) {
        document.getElementById("bt_jogar").disabled = true;
        card_tres.style.display = 'block'
        card_tres.innerHTML = `${ipt_play2.value} ganhou!!!<br><br><br>
        <img src="giphy.gif" style="width: 280px; border-radius: 15px;">
        <br><br><br>
        <button onclick="reiniciar()">Reiniciar</button>`
    }
}

function reiniciar() {
    location.reload()
}