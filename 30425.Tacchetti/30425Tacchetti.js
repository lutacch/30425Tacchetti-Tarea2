let menu;

alert(
  "Hola, soy tu conversor de gramos y mililitros a tazas y estoy aqui para ayudarte a cocinar mas facil."
);

do {
  menu = "¿Que medida desea convertir el dia de hoy?";
  menu = Number(
    prompt("Opcion 1: Gramos \n Opcion 2: Mililitros \n Opcion 3: Salir. ")
  );
  switch (menu) {
    case 1:
      gramosUno();
      break;
    case 2:
      mililitrosDos();
      break;
    case 3:
      nuevoArray(
        alert(
          "Ayudanos a mejorar, ¿cuales son las harinas que mas utilizas para cocinar?"
        )
      );
      break;
  }
} while (menu > 3);

function gramosUno(solucionGramos) {
  let gramos = Number(prompt("¿Cuantos gramos desea convertir?"));
  let cup = 1;
  let a = 140;

  function solucionGramos(gramos, cup, a) {
    const resultado1 = gramos * cup;
    const resultado2 = resultado1 / a;
    alert("Tu conversión de gramos a tazas es igual a " + resultado2);
  }
  solucionGramos(gramos, cup, a);
}
gramosUno(solucionGramos);

function mililitrosDos(solucionMililitros) {
  let ml = Number(prompt("¿Cuantos mililitros desea convertir?"));
  let cup = 1;
  let b = 250;

  function solucionMililitros(ml, cup, b) {
    const resultado3 = ml * cup;
    const resultado4 = resultado3 / b;
    alert("Tu conversión de mililitros a tazas es igual a " + resultado4);
  }
  solucionMililitros(ml, cup, b);
}
mililitrosDos(solucionMililitros);

function nuevoArray(tiposHarina) {
  tiposHarina = [];
  let agregarHarina = "";

  while (agregarHarina != "salir") {
    agregarHarina = prompt(
      "Ingrese los tipos de Harina que mas utiliza, si desea finalizar la tarea escriba: salir."
    );
    tiposHarina.push(agregarHarina);
  }
  alert("Estas son las harinas que mas utilizas : " + tiposHarina);
  alert("Gracias por su ayuda! ");
}
nuevoArray(tiposHarina);
