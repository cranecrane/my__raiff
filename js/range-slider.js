const rangeAmount = document.getElementById('range-amount');
const rangeAmountValue = document.getElementById('range-amount-value');
const rangeTerm = document.getElementById('range-term');
const rangeTermValue = document.getElementById('range-term-value');

if (rangeAmount) {
    noUiSlider.create(rangeAmount, {
        start: [500000],
        connect: 'lower',
        step: 1,
        range: {
            'min': [90000],
            'max': [2000000]
        }
    });

    rangeAmount.noUiSlider.on('update', function(values){
        rangeAmountValue.innerHTML = parseInt(values[0]);
    })
}

if (rangeTerm) {
    noUiSlider.create(rangeTerm, {
        start: [36],
        connect: 'lower',
        step: 1,
        range: {
            'min': [13],
            'max': [60]
        }
    });

    rangeTerm.noUiSlider.on('update', function(values){
        rangeTermValue.innerHTML = parseInt(values[0]);
    })
}
