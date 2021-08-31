 
const calcular= document.getElementById('calcular');
   calcular.addEventListener('click',imc);

 function imc(){

  const nome= document.getElementById('nome');
 const peso= document.getElementById('peso');
 const altura= document.getElementById('altura');
 const resultado= document.getElementById('resultado');
 
   if(nome.value!==''&&peso.value!==''&&altura.value!==''){

     const a=(peso.value/(altura.value*altura.value)).toFixed(1)
 
   let classi=''
   
  if(a<16.9){
    
    classi='muito abaixo do peso, muito cuidado!'

    }else if (a<18.4){

     classi='abaixo do peso, cuidado!'

    }else if (a<24.9){

     classi='com peso normal, parabéns!'

  }else if (a <29.9) {

    classi = 'acima do peso, cuidado!'

    }else if (a < 34.9) {

      classi = 'com obesidade grau 1,cuidado!!'

    }else if (a <40) {

      classi = 'com obesidade grau 2,cuidado!! '

    }else if (a >40) {

      classi = 'com obesidade grau 3, muito cuidado!'

    }
   resultado.textContent=`${nome.value} seu imc é ${a},e você está ${classi}`;

   }else{
    resultado.textContent=('preencha todos os campos')
   }

 }
