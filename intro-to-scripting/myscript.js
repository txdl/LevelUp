
function main() {
  var x = document.getElementById('input').value;

  var y = add(10, x);

  console.log(y)
};

function add(a, b) {
  a = Number(a);
  b = Number(b);
  return (a + b);
} 

function checkPassword(x, y) {
  // this will only return true is x is equal to y
  console.log('x = ' + x);
  console.log('y = ' + y);
  return (x === y);
};
