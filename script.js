var cube = document.getElementById('cube');

var min = 1;
var max = 10; //maximo de voltas que o cubo pode dar

cube.onclick = function() {
  var xRand = getRandom(max, min); //sorteia um numero para o eixo x e um para o eixo y
  var yRand = getRandom(max, min);
    
  cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)'; //essa funcao que faz o cubo rodar
  cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}
