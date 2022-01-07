//Calculadora de média

function funcMedia(
	nome,
	notaProva1,
	notaProva2,
	notaProva3,
	notaProvaReposicao,
	notaProvaFinal
) {
	notaProva1 = parseFloat(notaProva1);
	notaProva2 = parseFloat(notaProva2);
	notaProva3 = parseFloat(notaProva3);

	var notaFinal = (notaProva1 + notaProva2 + notaProva3) / 3;
	var notaFinalFixada = notaFinal.toFixed(2);

	if (notaFinalFixada >= 7) {
		document.getElementById("aprovado").style.color = "green";
		document.getElementById("aprovado").innerHTML =
			"Parabéns, " +
			nome +
			"! Você foi aprovado com média " +
			notaFinalFixada +
			" :)";
	} else {
		document.getElementById("aprovado").innerHTML = "";
		document.getElementById("reposicao").style.color = "red";
		document.getElementById("reposicao").innerHTML =
			"Que pena, " +
			nome +
			".  Você ficou com " +
			notaFinalFixada +
			" de média e não foi aprovado :(<br>Voce ainda pode passar na reposição:";

		var testData = !!document.getElementById("botao1");
		if (testData) {
			document.getElementById("botao1").remove();
			document.getElementById("mediaReposicao").innerHTML =
				'<form><label for="notaProvaReposicao" class="page-subtitle">Nota Reposicao:</label><input type="number" value="0" min="0" max="10" step="0.5" id="notaProvaReposicao" /><br><br></form><button type="button" class="botao" id="botao2" onClick="funcMedia(nome.value,notaProva1.value,notaProva2.value, notaProva3.value,notaProvaReposicao.value)">Calcular nota</button>';
			return 0;
		}

		notaProvaReposicao = parseFloat(notaProvaReposicao);
		console.log("nota reposicao" + notaProvaReposicao);

		if (notaProva1 < notaProva2) {
			if (notaProva1 < notaProva3) {
				notaProva1 = notaProvaReposicao;
				console.log("nota1 menor nota" + notaProva1);
			} else {
				notaProva3 = notaProvaReposicao;
				console.log("nota3 menor nota" + notaProva3);
			}
		} else {
			if (notaProva2 < notaProva3) {
				notaProva2 = notaProvaReposicao;

				console.log("nota2 menor nota" + notaProva2);
			} else {
				notaProva3 = notaProvaReposicao;
				console.log("nota3 menor nota" + notaProva3);
			}
		}

		var notaFinalReposicao = (notaProva1 + notaProva2 + notaProva3) / 3;
		var notaFinalReposicaoFixada = notaFinalReposicao.toFixed(2);

		if (notaFinalReposicaoFixada >= 7) {
			document.getElementById("aprovado").innerHTML = "";
			document.getElementById("resultadoReposicaoAprovado").style.color = "green";
			document.getElementById("resultadoReposicaoAprovado").innerHTML =
				"Parabéns, " +
				nome +
				"! Você foi aprovado na reposição com média " +
				notaFinalReposicaoFixada +
				" :)";
		} else {
			document.getElementById("aprovado").innerHTML = "";
			var notaNecessaria = 12 - notaFinalReposicaoFixada;
			document.getElementById("resultadoReposicaoFinal").style.color = "red";
			document.getElementById("resultadoReposicaoFinal").innerHTML =
				"Que pena, " +
				nome +
				".  Você ficou com " +
				notaFinalReposicaoFixada +
				" de média e não foi aprovado na reposição :(<br>Voce ainda pode passar na final caso tire " +
				notaNecessaria +
				" ou mais!";

			var testData2 = !!document.getElementById("botao2");
			if (testData2) {
				document.getElementById("botao2").remove();
				document.getElementById("notaFinal").innerHTML =
					'<form><label for="notaProvaFinal" class="page-subtitle">Nota Final:</label><input type="number" value="0" min="0" max="10" step="0.5" id="notaProvaFinal" /><br><br></form><button type="button" class="botao" id="botao3" onClick="funcMedia(nome.value,notaProva1.value,notaProva2.value, notaProva3.value,notaProvaReposicao.value,notaProvaFinal.value)">Calcular nota</button>';
				return 0;
			}
			notaProvaFinal = parseFloat(notaProvaFinal);
			console.log("nota final" + notaProvaFinal);

			if (notaProvaFinal >= notaNecessaria) {
				document.getElementById("resultadoFinal").style.color = "green";
				document.getElementById("resultadoFinal").innerHTML =
					"Parabéns, " + nome + "! Você foi aprovado na final :)";
			} else {
				document.getElementById("resultadoFinal").style.color = "red";
				document.getElementById("resultadoFinal").innerHTML =
					"Que pena, " + nome + ". Você reprovou :(";
			}
		}
	}
}
