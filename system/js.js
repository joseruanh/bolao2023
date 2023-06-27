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
            <td> <img src="images/pedro.jpg" alt="perfil" class="perfil"> </td>
            <td class="nome">Pedro</td> <td>20 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/eu.png" src="perfil" class="perfil"> </td>
            <td class="nome">Ruanh</td> <td>18 pontos</td>
            </tr>
            
            <tr>
            <td> <img src="images/marcos.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Relâmpago</td> <td>18 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/semfoto.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Ademiro</td> <td>17 pontos</td>
            </tr>

            <tr>
            <td> <img src="images/brener.png" class="perfil"> </td>
            <td class="nome">Brener</td> <td>15 pontos</td>
            </tr>
          
            <tr>
            <td> <img src="images/pickles.png" alt="perfil" class="perfil"> </td>
            <td class="nome">Mr Pickles</td> <td>15 pontos</td>
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

function assistir()
{
    let a = window.document.getElementById("youtube")
    a.innerHTML = `
    
    <div class="assistir">
    <p><button class="assistir" onclick="fechar()"> Fechar </button></p>
    <iframe height="315" src="https://www.youtube.com/embed/ysFOizDaozk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>


    `
}
function fechar()
{
    let a = window.document.getElementById("youtube")
    a.innerHTML = `
    
    <button class="assistir" onclick="assistir()">Assistir</button>


    `
}

function assistir2()
{
    let a = window.document.getElementById("youtube2")
    a.innerHTML = `
    
    <div class="assistir">
    <p><button class="assistir" onclick="fechar2()"> Fechar </button></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FQceQNDrCTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>


    `
}
function fechar2()
{
    let a = window.document.getElementById("youtube2")
    a.innerHTML = `
    
    <button class="assistir" onclick="assistir2()">Assistir</button>


    `
}

function assistir3()
{
    let a = window.document.getElementById("youtube3")
    a.innerHTML = `
    
    <div class="assistir">
    <p><button class="assistir" onclick="fechar3()"> Fechar </button></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sL3C2ROqWVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>


    `
}
function fechar3()
{
    let a = window.document.getElementById("youtube3")
    a.innerHTML = `
    
    <button class="assistir" onclick="assistir3()">Assistir</button>


    `
}

function assistir4()
{
    let a = window.document.getElementById("youtube4")
    a.innerHTML = `
    
    <div class="assistir">
    <p><button class="assistir" onclick="fechar4()"> Fechar </button></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fmJo71R8_G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>


    `
}
function fechar4()
{
    let a = window.document.getElementById("youtube4")
    a.innerHTML = `
    
    <button class="assistir" onclick="assistir4()">Assistir</button>


    `
}






