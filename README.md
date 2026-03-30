<p align="center">
  <img src="JoTech.png" alt="Logo do Sorteador" width="200">
</p>


# 🎯 Sorteador Online de Intervalos Múltiplos
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Linguagens](https://img.shields.io/badge/Tech-HTML5%20|%20CSS3%20|%20JS-blue)

Este é um sorteador numérico avançado desenvolvido para oferecer flexibilidade total na escolha de números, permitindo criar "buracos" ou exceções nas sequências de sorteio.

---

## 🚀 Funcionalidades Principais

O grande diferencial deste sorteador é a capacidade de processar entradas complexas:

* **✨ Flexibilidade de Intervalos:** Você pode definir múltiplas faixas. 
    * *Exemplo:* `0-120, 145-500` sorteia números entre 0 e 500, ignorando automaticamente o intervalo de 121 a 144.
* **🛡️ Tratamento de Sobreposição:** Se você inserir intervalos que se cruzam (ex: `1-10, 5-15`), o sistema remove duplicatas e garante que cada número tenha a mesma chance de ser sorteado.
* **🔢 Números Avulsos:** Aceita a combinação de intervalos com números específicos.
    * *Exemplo:* `10-20, 35, 50, 100-110`.

---

## 🛠️ Como usar

1. Insira os intervalos ou números desejados no campo de texto.
2. Use o hífen (`-`) para intervalos e vírgula (`,`) para separar as sequências.
3. Clique em **Sortear Número**.
4. O resultado aparecerá destacado com uma animação de exibição.

---

## 💻 Estrutura do Projeto

O projeto foi construído de forma modular e leve:

### 🎨 Interface (CSS)
Utiliza **Flexbox** para garantir que o container e a imagem de topo estejam sempre perfeitamente centralizados, independentemente do tamanho da tela.

### 🧠 Lógica de Sorteio (JavaScript)
A lógica de processamento funciona da seguinte forma:
1. **Sanitização:** Remove espaços extras.
2. **Parsing:** Divide a string e identifica o que é intervalo e o que é número único.
3. **Coleção:** Gera um `Array` dinâmico com todos os números válidos.
4. **Unique Set:** Utiliza o objeto `Set` do ES6 para garantir que não haja números repetidos na lista final.
5. **Randomization:** Aplica `Math.random()` sobre o índice do array gerado.

---

## 📦 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/sorteador-online.git](https://github.com/seu-usuario/sorteador-online.git)