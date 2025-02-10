var services = {
    haircut: '100 $',
    shave: '50 $',
    beardTrim: '30 $',
};

function price() {
    var price = 0;

    for (var service in services) {
        var number = parseInt(services[service]);
        price += number;
    }

    return price + " $";
}

function minPrice() {
    var price = 0;

    for (var service in services) {
        var number = parseInt(services[service]);

        if (price === 0) {
            price = number;
        } else {
            if (number < price) {
                price = number;
            }
        }
    }

    return price + " $";
}

function maxPrice() {
    var price = 0;

    for (var service in services) {
        var number = parseInt(services[service]);

        if (price === 0) {
            price = number;
        } else {
            if (number > price) {
                price = number;
            }
        }
    }

    return price + " $";
}

services['nails'] = '150 $';
services.eyelashes = '200 $';

console.log('price', price());
console.log('min price', minPrice());
console.log('max price', maxPrice());