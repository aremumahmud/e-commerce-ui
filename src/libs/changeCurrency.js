function changeCurrency(param, currency, currencyTab) {

    let array = [...param]
    return [array.map(each => {
        if (!currencyTab[currency]) {
            return each
        }
        if (!each.currentCurrency) {
            //we set the currency state to be it
            each.currentCurrency = currency

            each.price /= currencyTab[currency].price_in_naira
            each.price = +each.price.toFixed(2);
            return each
        }

        let currentCurrency = each.currentCurrency
        let conv_to_naira = currencyTab[currentCurrency].price_in_naira * each.price
        each.price = conv_to_naira / currencyTab[currency].price_in_naira
        each.price = +each.price.toFixed(2);
        return each

    }), currencyTab[currency] ? currency : 'USD']
}

export default changeCurrency