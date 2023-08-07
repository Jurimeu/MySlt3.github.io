function verificarNumero() {
      var numero = document.getElementById("numero").value;
      var resultadoElement = document.getElementById("resultado");

      if (numero  >= 18) {
        resultadoElement.textContent = "Sinto lhe informa, mas aprende isso depois de adulto é complicado...";
      } 
      
      else if (numero < 18){
        resultadoElement.textContent = "Esta no caminho certo";
      }

else if (numero  >= 100) {
        resultadoElement.textContent = "Volta pra tumba mumia pilantra";
      } 
	      
 else if (numero < 1){
        resultadoElement.textContent = "Nem nasceu ainda K7";
      }
	      
 else if (numero < 4){
        resultadoElement.textContent = "novo D+";
      }
	      
      else {  resultadoElement.textContent = "So numeros animal...";}
	    
	     event.preventDefault();
}
