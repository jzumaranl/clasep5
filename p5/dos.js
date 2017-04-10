var coffees = [
  "Espresso",
  "Latte",
  "Mocha",
  "Macchiato",
  "Cappuccino",
  "Americano",
]

var nota = [2,5,7,4,5,2]

//coffees.push("Matrix");
//nota.push(4);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('here');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(25);
  for(var x = 0; x <= coffees.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(255,100);
    // el tamaño del texto es igual a la cantidad de nota ganados * 3
    textSize((nota[x]*8));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    text(nota[x], ((width/(coffees.length+1))*(x+1)), (height/2));
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(coffees[x], ((width/(coffees.length+1))*(x+1)), ((height/2)+12),((windowWidth/(coffees.length+1))-50),100);
  }
}
