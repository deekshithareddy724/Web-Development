function formatCurrency(amount, currencyCode) {
    let symbol = '';
    let symbolBefore = true;
    let decimalPlaces = 2;

    switch (currencyCode) {
        case 'USD':
            symbol = '$';
            symbolBefore = true;
            break;
        case 'EUR':
            symbol = '€';
            symbolBefore = true;
            break;
        case 'INR':
            symbol = '₹';
            symbolBefore = true;
            break;
        case 'JPY':
            symbol = '¥';
            symbolBefore = true;
            decimalPlaces = 0;
            break;
        default:
            symbol = currencyCode + ' ';
            symbolBefore = true;
    }

    const parts = amount.toFixed(decimalPlaces).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Adding commas

    const formatted = parts.join(".");

    return symbolBefore ? `${symbol}${formatted}` : `${formatted}${symbol}`;
}

// Example usage:
console.log(formatCurrency(1234567.89, 'USD')); // $1,234,567.89
console.log(formatCurrency(9876543.21, 'INR')); // ₹9,876,543.21
console.log(formatCurrency(5000, 'JPY')); // ¥5,000
