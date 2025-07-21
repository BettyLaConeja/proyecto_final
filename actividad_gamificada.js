let puntos = 0;

function jugar() {
  alert("🌲 Te adentras en el bosque del código...");

  let r1 = prompt("🧙‍♂️ Pregunta 1:\n¿Cómo se crea una variable en JavaScript?\nA) let miVariable;\nB) crear miVariable;\nC) hacerVariable;");
  if (r1.toLowerCase() === "a") {
    alert("¡Correcto!");
    puntos += 1;
  } else {
    alert("Incorrecto. La respuesta era A.");
  }

  let r2 = prompt("🔢 Pregunta 2:\n¿Cuál de estos es un tipo de dato?\nA) número\nB) string\nC) ambos");
  if (r2.toLowerCase() === "c") {
    alert("¡Muy bien!");
    puntos += 1;
  } else {
    alert("Incorrecto. La respuesta era C.");
  }

  let r3 = prompt("➕ Pregunta 3:\n¿Qué operador se usa para sumar?\nA) +\nB) -\nC) *");
  if (r3.toLowerCase() === "a") {
    alert("¡Correcto!");
    puntos += 1;
  } else {
    alert("Incorrecto. La respuesta era A.");
  }

  let r4 = prompt("📢 Pregunta 4:\n¿Para qué sirve console.log()?\nA) Para mostrar errores\nB) Para escribir en la consola\nC) Para guardar datos");
  if (r4.toLowerCase() === "b") {
    alert("¡Excelente!");
    puntos += 1;
  } else {
    alert("Incorrecto. La respuesta era B.");
  }

  let r5 = prompt("🔍 Pregunta 5:\n¿Qué devuelve typeof 42?\nA) number\nB) string\nC) boolean");
  if (r5.toLowerCase() === "a") {
    alert("¡Muy bien!");
    puntos += 1;
  } else {
    alert("Incorrecto. La respuesta era A.");
  }

  let r6 = prompt("❓ Pregunta 6:\n¿Cuál de estas es una comparación booleana verdadera?\nA) 5 > 10\nB) 3 === 3\nC) 4 != 4");
  if (r6.toLowerCase() === "b") {
    alert("¡Correcto!");
    puntos += 1;
  } else {
    alert("Incorrecto. La respuesta era B.");
  }

  alert("🎉 Aventura completada. Tu puntaje es: " + puntos + " de 6.");
}


