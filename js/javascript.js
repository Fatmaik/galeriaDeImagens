window.onload = function() {
    imagens();
}

function imagens() {
    var images = [
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/Lamborghini-wallpaper-2.jpg",
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/Lamborghini-wallpaper-3.jpg",
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/Lamborghini-wallpaper-4.jpg",
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/Lamborghini-wallpaper-5.jpg",
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/Lamborghini-wallpaper-12.jpg",
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/Lamborghini-wallpaper-13.jpg",
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/Lamborghini-wallpaper-14.jpg",
        "http://cdn.wonderfulengineering.com/wp-content/uploads/2013/12/wallpaper-of-Lamborghini-2.jpg"
    ];
    var img = document.getElementById("img"); // instancia para acessar e modificar documento de img do html
    var next = document.getElementById("next"); // instancia para acessar botao next do html
    var prev = document.getElementById("prev"); // instancia para acessar botao prev do hrml
    var x = 0; // contador de posicao para acessar a lista de imagens

    // funcao muda imagem ao clickar no botao next
    next.onclick = function() {
            if (x < images.length - 1) {
                x += 1;
            } else {
                x = 0;
            }
            img.src = images[x];
        }
        // funcao contraria ao botao next
    prev.onclick = function() {
        if (x > 0) {
            x -= 1;
        } else {
            x = images.length - 1;
        }
        img.src = images[x];
    }
}