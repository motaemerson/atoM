troca = 1;

function mudarCores() {
	if (troca == 1){
		document.getElementById("cabecalho").style.background = "purple";
		document.getElementById("conteudo").style.background = "beige";
		document.getElementById("rodape").style.background = "purple";
		troca = 0;
	} else{
		document.getElementById("cabecalho").style.background = "brown";
		document.getElementById("conteudo").style.background = "black";
		document.getElementById("rodape").style.background = "brown";
		troca = 1;
	}
}