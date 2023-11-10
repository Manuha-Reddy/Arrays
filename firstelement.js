function first(arr,n=1){
  return arr.slice(0,n);
}
document.write(first([7, 9, 0, -2]));        
document.write(first([], 3));                
document.write(first([7, 9, 0, -2], 3));     
document.write(first([7, 9, 0, -2], 6));     
document.write(first([7, 9, 0, -2], -3));
