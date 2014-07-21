function init() {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  
  var half = canvas.width/2;
  
  function line(x, width, color) {
    c.beginPath();
    c.lineWidth = width;
    c.moveTo(half + x, half - 100);
    c.lineTo(half + x, half + 100);
    c.strokeStyle = color;
    c.stroke();
    c.closePath();
  }
  
  line(-150, 5 , "#FF0000");
  line(-100, 6 , "#FF7F00");
  line(-50 , 7 , "#FFFF00");
  line(0   , 8 , "#00FF00");
  line(50  , 9 , "#0000FF");
  line(100 , 10, "#4B0082");
  line(150 , 11, "#8F00FF");
  
  var TextGradient = c.createLinearGradient(0,0,512,0);
  TextGradient.addColorStop("0.00","#FF0000");
  TextGradient.addColorStop("0.25","#FF7F00");
  TextGradient.addColorStop("0.50","#FFFF00");
  TextGradient.addColorStop("0.25","#FF7F00");
  TextGradient.addColorStop("1.00","#FF0000");

  c.font = "60px Georgia";
  c.fillStyle = TextGradient;
  c.fillText("Rainbow!", half - 120, half - 160);

}