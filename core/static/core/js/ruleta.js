function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]] =[
            array[currentIndex],
            array[currentIndex],

        ];
    }
     return array;

}


function spin (){
    applause.play();
    const box= document.getElementById("box");
    const element= document.getElementById("mainbox");
    let selectedItem= "";

    let dsct= shuffle ([1890,2250,2610]);
    let sigap = shuffle ([1850,2210,2570]);
    let descts = shuffle ([1770,2130,2490]);
    let dospor= shuffle ([1810,2170,2530]);
    let parala = shuffle ([1750,2210,2480]);
    let vuelv= shuffle ([1630,1990,2350]);
    let sonrrie = shuffle ([1570.1930,2290]);

    let results= shuffle([
        dsct[0],
        sigap[0],
        descts[0],
        dospor[0],
        parala[0],
        vuelv[0],
        sonrrie[0],

    ]);

    if (dsct.includes(results[0])) selectedItem=" Descuento del 10%";
    if (sigap.includes(results[0])) selectedItem=" Sigue participando";
    if (descts.includes(results[0])) selectedItem=" Descuento del 5%";
    if (dospor.includes(results[0])) selectedItem=" 3x1";
    if (parala.includes(results[0])) selectedItem=" Sigue participando";
    if (vuelv.includes(results[0])) selectedItem=" Sigue participando";
    if (sonrrie.includes(results[0])) selectedItem=" Sigue participando";
    

    box.style.setProperty("transition", "all ease 5s")
    box.style.transform="rotate("+ results[0] +"deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    },5000);
    setTimeout(function(){
        wheel.play();
        Swal.fire({
            title: '¡Que emocion!',
            html: 'Resultado:'+selectedItem + ' |',
            imageUrl: 'https://i.pinimg.com/564x/f1/e1/70/f1e1706a5ac61e774c2ebbcb63a826ce.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    },5500)
    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform= "rotate(90deg)";

    }, 6000);
}