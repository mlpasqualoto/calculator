# Calculadora

Este é um projeto de calculadora interativa desenvolvido com HTML, CSS e JavaScript, que realiza operações matemáticas básicas. A calculadora possui uma interface moderna e responsiva, adequada tanto para desktops quanto para dispositivos móveis.

## Pré-visualização

- **Desktop**

![Captura de tela 2024-11-30 032415](https://github.com/user-attachments/assets/298016ad-b03b-414b-ac4a-dbbb24b462e6)

- **Mobile**

![essa!!!](https://github.com/user-attachments/assets/64a73252-7a58-4d9a-800a-bee4a72ac6a0)

## Funcionalidades

- **Operações Matemáticas**: Suporte para adição, subtração, multiplicação e divisão.
- **Botões de Controle**:
  - **C (Clear)**: Reseta todos os valores e limpa a tela.
  - **CE (Clear Entry)**: Limpa apenas o número exibido atualmente.
- **Interface Intuitiva**: Botões organizados e visual limpo.
- **Resultados Precisos**: Exibição de resultados com até 8 casas decimais, quando necessário.
- **Ícones Dinâmicos**: Uso de ícones para melhorar a experiência do usuário.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Lógica para cálculos e manipulação da interface.

## Estrutura do Código

- **HTML**:
  - Contém o layout da calculadora, com divisões claras para a tela de exibição e os botões.
- **CSS**:
  - Estilos para organização e aparência da calculadora.
  - Uso de `grid` para organizar os botões.
- **JavaScript**:
  - Função `getNumber(n)`: Adiciona números à tela.
  - Função `getOperator(op)`: Define o operador da operação atual.
  - Função `getResult()`: Realiza o cálculo baseado nos números inseridos e no operador escolhido.
  - Função `reset()`: Limpa todos os dados armazenados.
  - Função `clean()`: Apaga apenas o número atual na tela.

## Como Utilizar

1. Insira os números clicando nos botões ou tocando na tela.
2. Escolha uma operação matemática: `+`, `-`, `×`, ou `÷`.
3. Clique no botão `=` para ver o resultado.
4. Use `C` para limpar tudo ou `CE` para apagar o último número exibido.
