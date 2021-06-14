window.onload = function home_click() {
    document.getElementById("id_home").className = "destaque";
    document.getElementById("id_artistas").className = "";
    document.getElementById("id_categoria").className = "";
}

function home_click() {
    document.getElementById("id_home").className = "destaque";
    document.getElementById("id_artistas").className = "";
    document.getElementById("id_categoria").className = "";
}

function artistas_click() {
    document.getElementById("id_artistas").className = "destaque";
    document.getElementById("id_categoria").className = "";
    document.getElementById("id_home").className = "";
    
}

function categoria_click() {
    document.getElementById("id_categoria").className = "destaque";
    document.getElementById("id_artistas").className = "";
    document.getElementById("id_home").className = "";
}