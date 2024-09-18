const tel = document.getElementById('telefone');
const enviar = document.querySelector('[data-telefone]');
const cadastro = document.querySelector('[data-cadastro-total]');
const nome = document.querySelector('#nome');
const rua = document.querySelector('#rua');
const quadra = document.querySelector('#quadra');
const lote = document.querySelector('#lote');
const setor = document.querySelector('#setor');
const dtNascimento = document.querySelector('#dtNascimento')


const cadastros = []


tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}



enviar.addEventListener('submit', (evento) => {
    evento.preventDefault();

    window.location.href = './cadastro.html';
})

cadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const cadastro = {
        telefone: tel.value,
        nome: nome.value,
        rua: rua.value,
        quadra: quadra.value,
        lote: lote.value,
        setor: setor.value,
        dtNascimento: dtNascimento.value
    }

    cadastros.push(cadastro);

    console.log(tel.value)
})


