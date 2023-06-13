function pontos()
{
    let a = window.document.getElementById("res");
    a.innerHTML = `
    <button class="pontos" onclick="reload()"> Planilhas </button>
    
    <div class="principal">
			<p>Pontuação e Classificação</p>
			<br>
			<table>

            <tr>
            <td class="nome">Ruanh</td> <td>6 pontos</td>
            </tr>
            <tr>
            <td class="nome">Brener</td> <td>6 pontos</td>
            </tr>
            <tr>
            <td class="nome">Pedro</td> <td>6 pontos</td>
            </tr>
            <tr>
            <td class="nome">Mr Pickles</td> <td>5 pontos</td>
            </tr>
            <tr>
            <td class="nome">Relâmpago</td> <td>5 pontos</td>
            </tr>
            <tr>
            <td class="nome">Ademiro</td> <td>4 pontos</td>
            </tr>
            <tr>
            <td class="nome">Jean</td> <td>4 pontos</td>
            </tr>
            <tr>
            <td class="nome">Tony</td> <td>0 pontos</td>
            </tr>
            <tr>
            <td class="nome">Victor</td> <td>0 pontos</td>
            </tr>
            <tr>
            <td class="nome">Kennyd</td> <td>0 pontos</td>
            </tr>
            
            
            
            </table>
		</div>
    
    
    `
}

function reload()
{
    location.reload();
}