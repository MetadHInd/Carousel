
const opcion = document.querySelectorAll('.opcion');

// Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {

    // Añadimos un evento a cada elemento seleccionado
    e.addEventListener('click', function(e){

        // Alteranmos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');

        
    });


});

function iniciarMap(){
    var coord = {lat:7.106408 ,lng: -73.1185527};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });

    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

