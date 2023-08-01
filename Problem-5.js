// Calculate the largest number

var num_1 = 520;
var num_2 = 715;
var num_3 = 600;

if(num_1 > num_2){
    if(num_1 > num_3){
        console.log('Biggest number is : ' + num_1);
    }
    else{
        console.log('Biggest Number is : ' + num_3);
    }
}
else{
    if(num_2 > num_3){
        console.log('Biggest Number is : ' + num_2);
    }
    else{
        console.log('Biggest Number is : ' + num_3)
    }
}
