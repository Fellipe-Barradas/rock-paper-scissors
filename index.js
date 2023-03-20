const form = document.querySelector(".form")
const enemyScreen = document.querySelector('.enemy-screen')
const playerScreen = document.querySelector(".player-screen")
//Iniciar jogo após o botõa de iniciar é cliclado
form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const weapown = document.querySelector("#weapown").value
        startGame(weapown)
        
})
//Função que será executada após iniciar o jogo
const startGame = (weapown)=>{
        
        showWeapown(weapown, "player")
        //Contagem de 3s
        //Sortear uma escolha para o computador
        //Aparecer a arma do inimigo na tela
        //Verificar se o player ganhou
        //Notificação se o player ganhou
        //Adicionar Pontos no score
}
//Adicionar Imagem da arma na tela do player
const showWeapown = (arma, player)=>{
    if(player === "player"){
        switch(arma){
            case "scissors":
                console.log("Tesoura")
                playerScreen.style.backgroundImage = "url('imgs/scissors.png')"
                break
            case "rock":
                console.log("Pedra")
                playerScreen.style.backgroundImage = "url('imgs/rock.png')"
                break
            case "paper":
                console.log("Papel")
                playerScreen.style.backgroundImage = "url('imgs/paper.png')"
                break
        }
    }

}
