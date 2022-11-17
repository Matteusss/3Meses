
const msg = document.querySelector(".options");

 
function mudaParaSim() {
	
	document.getElementById("imgProfile").src = "imgs/profile2.gif";
	document.getElementById("msg").innerHTML = "Se escolheu Sim e pq me ama";
	
	
}


function mudaParaNao() {
	document.getElementById("imgProfile").src = "imgs/profile3.gif";
	document.getElementById("msg").innerHTML = "Escolheu não. Vai ficar de castigo agora.";
	
}
 