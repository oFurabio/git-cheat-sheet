const comandos = document.querySelectorAll(".comm");

comandos.forEach((comando) => {
	comando.addEventListener("click", async () => {
		const textoOriginal = comando.textContent;

		try {
			await navigator.clipboard.writeText(textoOriginal);

			comando.textContent = "✓ Copiado!";

			setTimeout(() => {
				comando.textContent = textoOriginal;
			}, 1500);

		} catch (erro) {
			console.error("Não foi possível copiar:", erro);
		}
	});
});
