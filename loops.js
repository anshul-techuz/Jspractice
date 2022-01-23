/////For and ForEachh loop

var arr=[1,2,3,4,5,6,7];
console.log(arr);

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
arr.forEach(function(element){
    console.log(element);
});


////////While loop in javascrit
let j=0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}

/////do while loop in javascipt
j=0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);