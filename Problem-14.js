// Write the price of the books you have.Display the prices lower then 200.

var bookPrices = ['120', '100', '140', '150', '180', '220', '250', '300']
for(i = 0 ; i < bookPrices.length; i++){
    var number = bookPrices[i];
    if (number > 200){
        continue;
    }
    console.log('The book prices is - ' + number);
}