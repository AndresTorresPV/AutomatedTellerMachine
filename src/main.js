//El nombre de la clase va en mayúscula
class Billete {
  //la función constructor construye los atributos
  //En Java el nombre del constructor debe ser el mismo que el nombre de la clase
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {
  dinero = parseInt(t.value);
  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - papeles * bi.valor;
    }
  }

  if (dinero > 0) {
    //Atributo innerHTM reemplaza el método .write
    r.innerHTML = "Error al procesar la transacción.";
  } else {
    for (var e of entregado) {
      r.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
    }
  }
}

//push es para meter dinero en el cajero
var caja = [];
var entregado = [];

caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dinero;
var div = 0;
var papeles = 0;

//El botón habita la variable b
var b = document.getElementById("extraer");
var t = document.getElementById("dinero");
var r = document.getElementById("resultado");

//El botón activa la función entregarDinero
b.addEventListener("click", entregarDinero);
