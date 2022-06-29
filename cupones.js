function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}    

const cupones=["desc10", "desc15", "desc20"];  

function buttonDiscountCoupon(){
     

    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const valueCoupon = inputCoupon.value;

    let descuento;

    switch(valueCoupon){
        case cupones[0]:
            descuento = 10;
            break;
        case cupones[1]:
            descuento = 15;
            break;
        case cupones[2]:
            descuento = 20;
            break;    
    }


    const precioDescuentoCupon = calcularPrecioConDescuento(valuePrice, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: " + precioDescuentoCupon;
}