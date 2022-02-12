const arr = [10, 2, 3, 20, 43, 1, 40, 99, 11];

//প্রত্যেকটা array element এর সাথে ২ যোগ করো...।
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 2;
}
console.log(arr);

//পুরো array element এর যোগফল বের কর...।
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

//array element থেকে জোড় সংখ্যা গুলো বের কর...।
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
//array element থেকে জোড় সংখ্যা গুলোর যোগফল বের কর...।
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i];
    }
}
console.log(sum);

//array element থেকে বিজোড় সংখ্যা গুলো বের কর...।
for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
        console.log(arr[i]);
    }
}

//array element থেকে বিজোড় সংখ্যা গুলোর যোগফল বের কর...।
var sub = 0;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 1){
        sub += arr[i];
    }
}
console.log(sub);


