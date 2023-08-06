var number = 2;
var result = check(number);

function check(num){
    if(num % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
check(number);
console.log(result)