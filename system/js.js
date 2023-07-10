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
            <td> <img src="images/eu.png" src="perfil" class="perfil"> </td>
            <td class="nome">Ruanh</td> <td>35 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/pedro.jpg" alt="perfil" class="perfil"> </td>
            <td class="nome">Pedro</td> <td>35 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/ademiro.enc" alt="perfil" class="perfil"> </td>
            <td class="nome">Ademiro</td> <td>33 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/pickles.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Mr Pickles</td> <td>33 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/brener.enc" class="perfil"> </td>
            <td class="nome">Brener</td> <td>26 pontos</td>
            </tr> 
            
            <tr>
            <td> <img src="images/marcos.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Relâmpago</td> <td>18 pontos</td>
            </tr>           

            <tr>
            <td> <img src="images/semfoto.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Jean</td> <td>4 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/tony.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Tony</td> <td>0 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/semfoto.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Victor</td> <td>0 pontos</td>
            </tr>
            
            <tr>
            <td> <img src="images/kenny.png" alt="perfil" class="perfil"> </td>
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

function topo()
{
    window.scrollTo(0, 0)

}