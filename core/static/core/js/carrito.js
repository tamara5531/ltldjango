const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

/* ------------------------------ */

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-items');

let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('#price').textContent,
        };

        const exits = allProducts.some(product => product.title === infoProduct.title);

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });

            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(product => product.title !== title);

        showHTML();
    }
});

function showHTML() {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
}

function generarBoleta() {
    // Obtener los elementos del carrito
    const cartProducts = document.querySelectorAll('.cart-product');

    // Crear un array para almacenar los detalles de los artículos
    const detallesArticulos = [];
    const datosBoleta = JSON.stringify(detallesArticulos);

// Enviar la solicitud AJAX al servidor Django
$.ajax({
  url: '/boleta/',  // Reemplaza '/ruta-de-tu-vista-en-django/' con la URL de la vista de Django que procesará la solicitud
  method: 'POST',
  data: datosBoleta,
  contentType: 'application/json',
  success: function(response) {
    // Lógica a realizar cuando la petición AJAX se ha completado con éxito
    // Puedes redirigir al usuario a la página de la boleta generada o mostrar un mensaje de éxito
  },
  error: function(error) {
    // Lógica a realizar cuando la petición AJAX ha fallado
    // Puedes mostrar un mensaje de error o realizar otras acciones
  }
});

    // Iterar sobre los elementos del carrito
    cartProducts.forEach(cartProduct => {
        // Obtener los detalles de cada artículo
        const cantidad = cartProduct.querySelector('.cantidad-producto-carrito').textContent;
        const titulo = cartProduct.querySelector('.titulo-producto-carrito').textContent;
        const precio = cartProduct.querySelector('.precio-producto-carrito').textContent;

        // Crear un objeto con los detalles del artículo
        const detalleArticulo = {
            cantidad: cantidad,
            titulo: titulo,
            precio: precio
        };

        // Agregar el objeto al array de detalles de artículos
        detallesArticulos.push(detalleArticulo);
    });

    // Aquí puedes hacer lo que desees con los detalles de los artículos
    // Por ejemplo, puedes enviar los datos al servidor para generar la boleta o realizar otras operaciones

    // Ejemplo: Imprimir los detalles de los artículos en la consola
    console.log(detallesArticulos);
}

// Evento al hacer clic en el botón de generar boleta
const btnGenerarBoleta = document.querySelector('.btn-comprar');
btnGenerarBoleta.addEventListener('click', generarBoleta);