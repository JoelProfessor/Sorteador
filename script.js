function drawNumber() {
    const input = document.getElementById('intervalsInput').value;
    const resultDiv = document.getElementById('randomNumber');
    const resultContainer = document.getElementById('resultContainer');
    
    // 1. Limpar espaços e dividir por vírgula
    const parts = input.split(',');
    let validNumbers = [];

    parts.forEach(part => {
        // 2. Identificar o intervalo (ex: 0-120)
        const range = part.trim().split('-');
        
        if (range.length === 2) {
            const start = parseInt(range[0]);
            const end = parseInt(range[1]);

            if (!isNaN(start) && !isNaN(end)) {
                // Adiciona todos os números entre o início e o fim
                const min = Math.min(start, end);
                const max = Math.max(start, end);
                for (let i = min; i <= max; i++) {
                    validNumbers.push(i);
                }
            }
        } else {
            // Caso o usuário coloque um número solto em vez de intervalo
            const singleNum = parseInt(part.trim());
            if (!isNaN(singleNum)) validNumbers.push(singleNum);
        }
    });

    // 3. Remover duplicatas (caso os intervalos se sobreponham)
    validNumbers = [...new Set(validNumbers)];

    if (validNumbers.length === 0) {
        alert("Por favor, insira intervalos válidos (ex: 10-20, 30-40)");
        return;
    }

    // 4. Sortear
    const randomIndex = Math.floor(Math.random() * validNumbers.length);
    const chosen = validNumbers[randomIndex];

    // 5. Mostrar resultado com animação simples
    resultContainer.classList.remove('hidden');
    resultDiv.innerText = chosen;
}