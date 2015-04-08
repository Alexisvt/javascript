function foo () {
  console.log(this.a);
}

function doFoo (fn) {
  fn();
}

var obj = {
  a: 2,
  foo: foo
};

// global.a= "opps, global";
var a= "opps, global";

setTimeout(obj.foo, 1000); // opps, global
// doFoo(obj.foo);

// error este archivo en node no funciona correctamente
/*PARA ENTENDER MEJOR ESTE EJEMPLO SE DEBE DE CORRER EN EL NAVEGADOR
DEBIDO A QUE NO SE PORQUE LA FUNCION setTimeout DEVUELVE undefined
aunque a esta definido en el global */
