export const yearDiscount = (base, year) => {
    const actualYear = new Date().getFullYear();
    return ((actualYear - year) * 3 * base)/100;
}

export const brandComputate = (base, marca) => {
    let incremento = 0;

    switch(marca){
        case '1': 
            incremento = 1.3;
            break;
        case '2':
            incremento = 1.15;
            break;
        case '3':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return base * incremento;
}

export const planComputate = (base, plan) => {
    return plan === '1' ? base * 1.2 : base * 1.5;
}

export const formatMoney = (money) => {
    return money.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}