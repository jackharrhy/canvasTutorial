function init() {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  
  var half = canvas.width/2;
  
  function line(a) {
    c.moveTo(half + a, half - 100);
    c.lineTo(half + a, half + 100);
  }
  
  c.beginPath();
  c.lineWidth = 5;
  line(-150);
  c.strokeStyle = "#FF0000";
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth = 6;
  c.strokeStyle = "#FF7F00";
  line(-100);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth = 7;
  c.strokeStyle = "#FFFF00";
  line(-50);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth = 8;
  c.strokeStyle = "#00FF00";
  line(0);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth = 9;
  c.strokeStyle = "0000FF";
  line(50);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth = 10;
  c.strokeStyle = "4B0082";
  line(100);
  c.stroke();
  c.closePath();
  
  c.beginPath();
  c.lineWidth = 11;
  c.strokeStyle = "8F00FF";
  line(150);
  c.stroke();
  c.closePath();
}