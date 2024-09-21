criaCartao(
    'Programação',
    'O que é covid 19?',
    'é um um vírus que circula pelo muno'
)

criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)
function criaCartao (categoria, pergunta, resposta) {
    console.log(categoria, pergunta, resposta)
}
cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
        </div>
        </div>
`
criaCartao(
    'Lingua inglesa',
    'Como se diz OI em inglês?',
    'Oi em ingles é HI (RAI)'
) 
