

let free = false;

const validarCliente = (time)=>{
    let edad = prompt('Cual es tu edad?');
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false){
            alert('Pasas gratis compa');
            free = true;
        }
        else{
        alert(`Si pasa maestro pagas pq son las ${time}`);
        }
    }
    else {
        alert('No pasas compa');
    }
}

validarCliente(23)
validarCliente(24)
validarCliente(0.2)
validarCliente(1)
validarCliente(2)
validarCliente(2.4)
validarCliente(3)

