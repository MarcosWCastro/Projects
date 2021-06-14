let min = 0;
let sec = 0;
let mil = 10;

function inicio() {

    msg.innerHTML = `${ipt_min.value} : ${ipt_seg.value}`;
    
    setTimeout(() => {
        thousandths.innerHTML = `${mil}`;
        mil++
        inicio()

    }, 10);

    if (mil > 69) {
        mil = 10;
        sec++ 
        seconds.innerHTML = `${sec}`
    } else if (sec == 59) {
        sec = 0;
        min++
        minutes.innerHTML = `${min}`
    }

    if (min == ipt_min.value && sec == ipt_seg.value) {
        horarios.innerHTML = `Acooooorda<br><img src="https://icon-library.com/images/clock-icon-white/clock-icon-white-8.jpg" width="150px">`;
        document.getElementById('music').play();
    }
   
}

function reinicio() {
    location.reload()
}