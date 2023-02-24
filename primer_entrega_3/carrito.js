document.addEventListener('DOMContentLoaded', () => {
   
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Tallarines Lucchetti',
            precio: 120,
            imagen: 'tallarines_Lucchetti.jpg'
        },
        {
            id: 2,
            nombre: 'Moñitos Lucchetti',
            precio: 140,
            imagen: 'monitos_Lucchetti.jpg'
        },
        {
            id: 3,
            nombre: 'Leche la Serenisima',
            precio: 150,
            imagen: 'leche_la_serenisima.jpg'
        },
        {
            id: 4,
            nombre: 'Manteca Santa Monica',
            precio: 80,
            imagen: 'manteca.jpg'
        },
        {
          id: 5,
          nombre: 'Yogurt Danonino',
          precio: 135,
          imagen: 'yogurt_danonino.jpg'
        },
        {
          id: 6,
          nombre: 'Jugo de Naranja Baggio',
          precio: 140,
          imagen: 'jugo_baggio.jpg'
        },
        {
          id: 7,
          nombre: 'Huevos de la Granja',
          precio: 120,
          imagen: 'huevos.jpg'
        },
        {
          id: 8,
          nombre: 'Harina Molinos 0000',
          precio: 80,
          imagen: 'harina.jpg'
        },
        {
          id: 9,
          nombre: 'Queso Mantecoso la Serenisima',
          precio: 90,
          imagen: 'queso_mantecoso.jpg'
        },
        {
          id: 10,
          nombre: 'Sobres de Azucar Ledesma',
          precio: 100,
          imagen: 'azucar_Ledezma.jpg'
      }

    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
        
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
          
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
         
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
           
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
           
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
           
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
           
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    
    function anyadirProductoAlCarrito(evento) {
        
        carrito.push(evento.target.getAttribute('marcador'))
       
        renderizarCarrito();

    }

    
    function renderizarCarrito() {
      
        DOMcarrito.textContent = '';
        
        const carritoSinDuplicados = [...new Set(carrito)];
       
        carritoSinDuplicados.forEach((item) => {
           
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
              
                return itemBaseDatos.id === parseInt(item);
            });
          
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
               
                return itemId === item ? total += 1 : total;
            }, 0);
           
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
          
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
      
       DOMtotal.textContent = calcularTotal();
    }

    
    function borrarItemCarrito(evento) {
       
        const id = evento.target.dataset.item;
       
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
       
        renderizarCarrito();
    }

   
    function calcularTotal() {
       
        return carrito.reduce((total, item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
          
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

  
    function vaciarCarrito() {
        
        carrito = [];
        
        renderizarCarrito();
    }

  
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    renderizarProductos();
    renderizarCarrito();
  });