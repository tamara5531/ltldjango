


const btnCart = document.querySelector('.container-cart-icon');

const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {

    containerCartProducts.classList.toggle('hidden-cart')
})


/* ------------------------------ */

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

/* Lista de todos los contenedores de productos */


const productsList = document.querySelector('.container-items');


/* Variable de arreglos de Productos */

let allProducts = []; //las variables let pueden ser modificadas, pero no re-declaradas, en este caso se usó en arreglos//

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')


const cartEmpty = document.querySelector('.cart-empty'); //llamo la funcion de cart empty//
const cartTotal = document.querySelector('.cart-total'); //llamo la funcion cart-total //


//Aqui voy añadiendo los productos al carrito

productsList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-cart')){

       const product = e.target.parentElement;

        const infoProduct = {

            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('#price').textContent,
        };



        //tod este pinchi código hace que si el producto ya se añadio al carrito y si el usuario vuelve a seleccionar el mismo, vaya aumentando la cantidad al producto en 2 - 3.. ETC//

        const exits = allProducts.some(product => product.title === infoProduct.title) // lo que hace este codigo si ya existe un producto //

        if (exits){

            const products = allProducts.map(product => {
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                }
                else{
                    return product
                }
            })

            allProducts = [...products]
        } else{

            allProducts = [...allProducts, infoProduct]; /* Si allProducts tiene 5 elementos, con este operador xpress lo que hace esparcirlo en el nuevo arreglo y aparte de eso añade el infoproduct */
    
    
        } 
        

        
    showHTML();

    }

    

});

//Aqui voy quitando los productos que fueron añadidos

rowProduct.addEventListener('click', (e) => {

    if(e.target.classList.contains('icon-close')){

        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title 
        );
        
        console.log(allProducts)

            showHTML()
    }

            
});


/* Funcion para mostrar HTML */

const showHTML = () => {

    //Aqui voy indicando si el carrito se encuentra vacío o no

    if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');    
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

    // Limpiar HTML //

    rowProduct.innerHTML = '';

    let total = 0; //total del dinero a pagar//
    let totalOfProducts = 0; //total de los productos que tiene el carrito

allProducts.forEach(product => {

    const containerProduct = document.createElement('div');
    containerProduct.classList.add('cart-product');

    containerProduct.innerHTML = `
    
            <div class="info-cart-product">

                    <span class="cantidad-producto-carrito">${product.quantity}</span>

                    <p class="titulo-producto-carrito">${product.title}</p>

                    <span class="precio-producto-carrito">${product.price}</span>

                    
                    

                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="icon-close">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
    
    `;

    rowProduct.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1)); //se puso slice porque solo queremos el numero y no el signo $ //
    totalOfProducts = totalOfProducts + product.quantity; //necesitamos estar sumando la cantidad de los productos que se estan añadiendo sin importar si es del mismo o si es otro producto//
});

valorTotal.innerText = `$${total}`
countProducts.innerText = totalOfProducts

};