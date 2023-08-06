var  myArray =[10, 20, 30, 40, 50];
var result = make_avg(myArray, size);
var size = myArray.length;

function make_avg(arr, size){
    if (size.length === 0){
        return null;

    }
    var total = arr.reduce((sum, sum) => sum + num, 0);
    var average = total / size;
    return average;
}
console.log("The average is : " ,result);