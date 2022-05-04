let ticket = 0,
  UNO = 50,
  DOS = 100,
  TRES = 150,
  pSalsa = 20,
  bolaUno = 0,
  bolaDos = 0,
  bolaTres = 0,
  nSalsa = 0,
  i = 1;
for (let contador = 0; contador < 5; contador++) {
  let nNum = prompt(
    "Si desea comer un helado por favor diga SI para retirar su numero, en caso contrario NO"
  );
  nNum = nNum.toUpperCase();

  if (nNum === "SI") {
    ticket += 1;
  } else if (nNum === "NO") {
    ticket += 0;
  } else {
    let nNum = prompt(
      "Opción incorrecta. Si desea comer un helado por favor diga SI para retirar su numero, en caso contrario NO"
    );
  }
}

while (i <= ticket) {
  let helado = prompt(
    "Persona " + i + " Cuantas bolas de helado quiere? 1.UNO 2.DOS 3.TRES"
  );
  helado = helado.toUpperCase();
  if (helado === "UNO") {
    bolaUno++;

    let salsa = prompt(
      "Gracias por su elección. Quiere agregarle alguna salsa? 1.SI 2.NO"
    );
    salsa = salsa.toUpperCase();

    if (salsa === "SI") {
      let elección = prompt("Elige 1.CHOCOLATE 2.FRUTILLA");
      elección = elección.toUpperCase();

      if (elección === "CHOCOLATE") {
        alert("Gracias por su elección");
        nSalsa++;
        i++;
      } else if (elección === "FRUTILLA") {
        alert("Gracias por su elección");
        nSalsa++;
        i++;
      } else {
        alert("Opción incorrecta");
      }
    } else if (salsa === "NO") {
      nSalsa += 0;
      i++;
    } else {
      alert("Opción incorrecta");
    }
  } else if (helado === "DOS") {
    bolaDos++;

    let salsa = prompt(
      "Gracias por su elección. Quiere agregarle alguna salsa? 1.SI 2.NO"
    );
    salsa = salsa.toUpperCase();

    if (salsa === "SI") {
      let elección = prompt("Elige 1.CHOCOLATE 2.FRUTILLA");
      elección = elección.toUpperCase();

      if (elección === "CHOCOLATE") {
        alert("Gracias por su elección");
        nSalsa++;
        i++;
      } else if (elección === "FRUTILLA") {
        alert("Gracias por su elección");
        nSalsa++;
        i++;
      } else {
        alert("Opción incorrecta");
      }
    } else if (salsa === "NO") {
      nSalsa += 0;
      i++;
    } else {
      alert("Opción incorrecta");
    }
  } else if (helado === "TRES") {
    bolaTres++;

    let salsa = prompt(
      "Gracias por su elección. Quiere agregarle alguna salsa? 1.SI 2.NO"
    );
    salsa = salsa.toUpperCase();

    if (salsa === "SI") {
      let elección = prompt("Elige 1.CHOCOLATE 2.FRUTILLA");
      elección = elección.toUpperCase();

      if (elección === "CHOCOLATE") {
        alert("Gracias por su elección");
        nSalsa++;
        i++;
      } else if (elección === "FRUTILLA") {
        alert("Gracias por su elección");
        nSalsa++;
        i++;
      } else {
        alert("Opción incorrecta");
      }
    } else if (salsa === "NO") {
      nSalsa += 0;
      i++;
    } else {
      alert("Opción incorrecta");
    }
  } else {
    alert("Opción incorrecta");
  }
}
ventaTotal = bolaUno * UNO + bolaDos * DOS + bolaTres * TRES + nSalsa * pSalsa;
alert(
  "La venta total del día fue de " +
    ventaTotal +
    " $ se vendió " +
    bolaUno +
    " helados de una bola " +
    bolaDos +
    " helados de dos bola " +
    bolaTres +
    " helados de tres bolas."
);
