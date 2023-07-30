const cl = console.log

// SUPPORT

const acende = document.querySelector("#b1")
const apaga = document.querySelector("#b2")
const conserta = document.querySelector("#b3")
const lampada = document.querySelector("#imgx")
const lampadaAcesa = document.querySelector("#imgy")
const lampadaQuebrada = document.querySelector("#imgz")
let contaClick = 0

function acender(){
	lampada.classList.remove('aceso')
	lampadaAcesa.classList.add('aceso')}

function apagar(){
	lampada.classList.add('aceso')
	lampadaAcesa.classList.remove('aceso')}

function quebra(){
	contaClick++
	if(contaClick >=3){
		lampada.classList.remove('aceso')
		lampadaAcesa.classList.remove('aceso')
		lampadaQuebrada.classList.add('quebra')
		conserta.classList.add('aparece')
		acende.classList.add('some')
		apaga.classList.add('some')
		contaClick=0}}

function consertar(){
		lampada.classList.add('aceso')
		lampadaQuebrada.classList.remove('quebra')
		conserta.classList.remove('aparece')
		acende.classList.remove('some')
		apaga.classList.remove('some')}

acende.addEventListener('click', acender)
apaga.addEventListener('click', apagar)
conserta.addEventListener('click', consertar)
lampada.addEventListener('click', quebra)
lampadaAcesa.addEventListener('click', quebra)