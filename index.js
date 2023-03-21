let points = 0 
const form = document.querySelector(".form")
const enemyScreen = document.querySelector('.enemy-screen')
const playerScreen = document.querySelector(".player-screen")
const close_instructions = document.querySelector('.close')
const instructions = document.querySelector('.instructions')
const notificacao = document.querySelector('.notificacao')
const score = document.querySelector('#score')
//Fechar tela de instruções 
close_instructions.addEventListener("click", ()=>{
    instructions.style.display = 'none'
})
//Iniciar jogo após o botõa de iniciar é cliclado
form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const weapown = document.querySelector("#weapown").value
        startGame(weapown)
        
})
//Função que será executada após iniciar o jogo
const startGame = (weapown)=>{
        showWeapown(weapown, "player")
        //Aparecer a arma do inimigo na tela
        const enemy = enemyChoice()
        showWeapown(enemy, 'enemy')
        //Verificar se o player ganhou
        //Notificação se o player ganhou
        //Adicionar Pontos no score
        if(isWinning(weapown, enemy)){
             notificacao.textContent = 'Ganhou'
             
             points++
             score.textContent = `${points}`
        }else if(weapown == enemy){
             notificacao.textContent = 'Empate'
        }else{
            notificacao.textContent = 'Perdeu'
        }
}
//Adicionar Imagem da arma na tela do player
const showWeapown = (arma, player)=>{
    if(player === "player"){
        switch(arma){
            case "scissors":
                console.log("Tesoura")
                playerScreen.style.backgroundImage = "url('imgs/scissors.png')"
                playerScreen.textContent = ''
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
    if(player === 'enemy'){
        switch(arma){
            case "scissors":
                console.log("Tesoura")
                enemyScreen.style.backgroundImage = "url('imgs/scissors.png')"
                enemyScreen.textContent = ''
                break
            case "rock":
                console.log("Pedra")
                enemyScreen.style.backgroundImage = "url('imgs/rock.png')"
                enemyScreen.textContent = ''
                break
            case "paper":
                console.log("Papel")
                enemyScreen.style.backgroundImage = "url('imgs/paper.png')"
                enemyScreen.textContent = ''
                break
        }
    }   
}
//Sortear uma escolha para o computador
const enemyChoice = ()=>{
    const weapons = ["paper", "scissors", "rock"]
    const escolha = weapons[Math.floor(Math.random()* weapons.length)]
    return escolha
}
//Verificar se o player venceu, retornando curso
const isWinning = (player, enemy)=>{
    
    return (player === 'paper' && enemy === 'rock') || (player === 'scissors' && enemy === 'paper') || (player === 'rock' && enemy === 'scissors')
}
