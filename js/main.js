const nome = prompt("Inserisci il tuo nome", "federico armando");
const cognome = prompt("Inserisci il tuo cognome", "maradona");
const colore = prompt("Inserisci il tuo colore preferito", "arancione");

function cleanup(parola) {
  // split prende 1 argomento col quale dividere la parola creando un array di subParole per esempio
  // Federico Armando => ["Federico", "Armando"]
  return parola
    .split(" ")
    .map(
      (subParola) =>
        `${subParola.charAt(0).toUpperCase()}${subParola
          .slice(1)
          .toLowerCase()}`
    )
    .join("");
  // map itera ogni elemento dell array (in questo caso il risultato di parola.split())
  // per ogni elemento dell array (in questo caso subNome )
  // per ogni subparola ritorno
  // il carattere di subparola a posizione 0
  // trasnformando in maiuscolo
  // slice prende un index da cui partire(in questo caso subParola da posizione 1 quindi la seconda lettera)
  //trasforma tutto in minuscolo

  //concatena tutti gli elementi dell map
}

document.getElementById("secret").innerText =`${nome}-${cognome}-${colore}-2023`;

document.getElementById("secretWithCleanup").innerText = `${cleanup(
  nome
)}-${cleanup(cognome)}-${cleanup(colore)}-2023`;
