let sobre = document.querySelector('#sob')
let hab = document.querySelector('#hab')
let cont = document.querySelector('#cont')
let logo = document.querySelector('.logo')
let dados = document.querySelector('.dados')

sobre.addEventListener('click' , function (){

    dados.innerHTML=`
    <div style="margin-left:250px">
     <p style="font-size:20px;">Olá sou o Maurício Chilala.</p>
    <p style="font-size:20px;" >Finalista do Curso de Técnico de Informática.</p>
    <p style="font-size:20px;">Seja bem vindo ao meu CV</P>
    </div>
`
})

hab.addEventListener('click',function() {

    dados.innerHTML=`
    <div style="margin-left:250px">
    <span>HTML</span>
    <div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 250px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>

<span>CSS</span>
<div class="progress">
<div class="progress-bar  bg-success" role="progressbar" style="width: 250px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
</div>
<span>JAVASCRIPT</span>
<div class="progress">
<div class="progress-bar  bg-warning" role="progressbar" style="width: 250px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
</div>
<span>PHP</span>
<div class="progress">
<div class="progress-bar" role="progressbar" style="width: 250px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
</div>
</div>
    
    `
    
})

cont.addEventListener('click',function(){



dados.innerHTML = `
    
<div style="margin-left:250px">
  <p>Telefone:995******</p>
  <p>Whatsapp:923*****</p>
</div>
    
  `   
    
})

 logo.addEventListener('click',function() {

   dados.innerHTML =`
   <div style="margin-left:370px; font-size: 40px;">curriculum vitae - Estágio</div>
    ` 
    
})