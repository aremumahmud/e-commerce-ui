//import { symbolTab } from "../config/currency"
//import currencyTab from "../config/currency"

function calculate(arr, symbol,currencyTab,symbolTab) {
    let total = 0
    arr.forEach(d => {
        //console.log(d.price, 'd')
        //total += d.price * d.quantity_for_cart
        let p = +((d.price * currencyTab[d.currency || 'NGN'].price_in_naira) / symbolTab[symbol]).toFixed(2) * d.quantity_for_cart
            // console.log(p, 'lak')
        total += p
    })
    return total
}
export default calculate
