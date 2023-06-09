function w() {
  var b = 2;
  return x();
  function x() {
    var a = 7;
    function y() {
      console.log(a);
      console.log(b);
    }
    return y;
  }
}
var z = w();
console.log(z);
//
//
z();
