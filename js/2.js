function init() {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  
  var half = canvas.width/2;
  
  function line(a) {
    c.moveTo(half + a, half - 100);
    c.lineTo(half + a, half + 100);
  }
  
  c.beginPath();
  
  line(-100);
  line(-50);
  line(0);
  line(50);
  line(100);
  
  c.stroke();
  
}