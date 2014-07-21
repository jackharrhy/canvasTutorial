function init() {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  
  var half = canvas.width/2;
  
  c.beginPath();
  c.moveTo(half, half - 100);
  c.lineTo(half, half + 100);
  c.stroke();
  
}