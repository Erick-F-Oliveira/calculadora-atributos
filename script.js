
function allowNegativeNumber(e) 
{
  var charCode = (e.which) ? e.which : event.keyCode
  if (charCode = 45 && (charCode < 45 || charCode > 52 )) {
    return false;
  }
  return true;
    
}

function calcular()
  {
    var valorForca = document.getElementById('forcaValor')
    var racaForca = document.getElementById('forcaRaca')


    var valorInicFor = Number(valorForca.value)
    var valorRacaFor = Number(racaForca.value)

    var totalForca =''
    
    
    totalForca = (valorInicFor + valorRacaFor) 
    document.querySelector('input[id="forcaTotal"]').value = ` ${totalForca}` 
    console.log('resposta')
    

  
  }

//var resposta = document.getElementById('forcaTotal')//