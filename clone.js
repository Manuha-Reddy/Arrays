function clone(a){
  return a.slice();
}
var original = [1,2,3,4];
var cloned = clone(original);
document.write(clone(original));
document.write(clone(cloned));
