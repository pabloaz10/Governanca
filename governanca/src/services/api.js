

export default async function fetchData() {
    try {
        //const response = await fetch(`${apiUrl}?keysoft=${token}&call=noticias&pagina=1`);
        const response = await fetch('https://www.cml.pr.gov.br/jsonweb/web-aplicativo.php?keysoft=bdox40jgz46d1o@tg0289kinqs19rgpi5xfvu9f7s88mqs-0b0d5d066a2691e7747&call=noticias&pagina=1')

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status}`);
        }

        const data = await response.json();
        return data; // Retorna os dados buscados
    } catch (error) {
        console.error(error);
    }
}

// Chamando a função e exibindo o resultado no console
fetchData().then((data) => {
    if (data) {
        console.log("Dados recebidos:", data); // Exibe os dados no console
    } else {
        console.log("Nenhum dado foi retornado.");
    }
});
