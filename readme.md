<h1>Mario kart com Node.js</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>DESCRIÇÃO: </b>
                <p>Este é um jogo de corrida simples implementado em Node.js, onde dois personagens competem em uma série de rodadas. Cada personagem possui atributos de velocidade, manobrabilidade e poder que influenciam seu desempenho em diferentes tipos de blocos de corrida: reta, curva e confronto.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>💾 Instalação: </h3>
  <p>Para executar este projeto localmente, siga os passos abaixo:</p>
    <ul>
        <li>
            <strong>Clone o repositório:</strong>
            <pre><code>
    <kbd>bash</kbd>
    https://github.com/JoaoJorda/Mario_kart.git
    cd mario_kart
            </code></pre>
        </li>
        <li>
            <strong>Instale o Node.js:</strong>
            <p>Caso você ainda não tenha o Node.js instalado na sua máquina, faça o download e a instalação a partir do <a href="https://nodejs.org/" target="_blank">site oficial</a>.</p>
        </li>
        <li>
            <p>Este projeto não possui dependências adicionais além do Node.js.</p>
        </li>
        <li>
            <strong>Para iniciar o jogo, execute o código no seu terminal:</strong>
            <pre><code>
    <kbd>bash</kbd>
    node index.js
            </code></pre>
        </li>
    </ul>


<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada.</label>

<b>Pistas:</b>

<ul>
  <li> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas.</label></li>
  <li> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto.</label>
    <ul>
      <li> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto.</label></li>
      <li> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto.</label></li>
      <li> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto.</label></li>
      <li> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<label for="vitoria-item">Ao final, vence quem acumulou mais pontos.</label>
<br>
<h3> Divirta-se jogando e boa sorte na corrida! 🏁🏆</h3>