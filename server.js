console.log("Ciao Node");

/*Node package MANAGER   NPM

ci da la possibiltà di importare librerie e plug in vari invece di usare le cdn 

ogni volta che vogliamo creare un progetto con npm andiamoa scrivere nel terminale

-           npm init  

va  a creare un file  package.json  contente  le info del progetto

una volta che scegliamo il pacchetto da installare andiamo su suto di npm e copiamo la riga di comando da incollare nel codice  
dopo l istallazione ci crea una cartella con scritto node_modules che aggiugngiamo al file gitignore per non pusharla nella repo







*/

/* Come chiedere a node di eseguire i comandi 

NEL  FILE   package.json 


  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },

in questa sezione se non abbiamo l alias start lo andiamo a creare 

poi dopo nel terminale andiamo a digitare  nmp run start

per far monitorare il server continuamente andiamo  a modificare una porzione di codice

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node -- watch server.js"
  },







*/
