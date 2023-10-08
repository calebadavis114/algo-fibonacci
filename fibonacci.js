function fibonacci(num) {
 let arrNum = num;
  let arr = [0 , 1, 2];
  let f = 2;
if(num == 0){
  return 0;
}else if(num == 1){
  return 1;
}else{
      while(num > 0){
        f += arr[arr.length - 2];
        arr.push(f);
       
          num--;
}
 }
 return arr[arrNum - 1];
}

module.exports = fibonacci;