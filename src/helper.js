//obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year
}

//calcula el total a pagar segun la marca
export function calcularMarca(marca){
    let incremento

    switch(marca){
        case 'mercedes':
            incremento=1.30
            break;
        case 'chevrolet':
            incremento=1.15
            break;
        case 'honda':
            incremento=1.05
            break;
        default:
            break;
    }

    return incremento
}

//calcular tipo seguro
export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.2 : 1.5
}

//capitalize texto
export function capitalize(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}