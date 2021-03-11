function main(numOne, numTwo){
    // only change code below this line
    var numOne;
    var numTwo;
    var product;
    product = numOne * numTwo;
   // product = product.toPrecision(2);
    
    // only change code above this line
    return product;
    }
    
    console.log(main(2.5, 2.0).toPrecision(2));
    console.log(main(5.5, 5.5));
    console.log(main(100.25, 43.20));
    module.exports = main;