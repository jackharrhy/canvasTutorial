function init() {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  
  var half = canvas.width/2;
  
  function line(a) {
    c.moveTo(half + a, half - 100);
    c.lineTo(half + a, half + 100);
  }
  
  c.beginPath();
  c.lineWidth=1;
  line(-100);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth=2;
  line(-50);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth=3;
  line(0);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth=4;
  line(50);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth=5;
  line(100);
  c.stroke();
  c.closePath();
  
}