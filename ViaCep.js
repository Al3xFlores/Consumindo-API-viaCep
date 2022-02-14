document.getElementById('cep')
         .addEventListener('blur', consultaCep)

async function consultaCep () {
 const cep = document.getElementById('cep').value
 const urll = `https://viacep.com.br/ws/${cep}/json/`

 const dados = await fetch(urll)
 const endereco = await dados.json()
 console.log(endereco)
 preencherForm(endereco)

}

const preencherForm = (endereco) => {
 document.getElementById('rua').value = endereco.logradouro;
 document.getElementById('bairro').value = endereco.bairro;
 document.getElementById('cidade').value = endereco.localidade;
 document.getElementById('estado').value = endereco.uf;
}



/* const cep = document.getElementById('cep')

cep.addEventListener('blur', (e) =>{
 let Cep = document.getElementById("cep").value;
 let saerch = cep.value.replace("-", "")
 
fetch(`https://viacep.com.br/ws/${saerch}/json/`)
.then((response) =>{
response.json()

.then((data) =>{ 
 console.log(data)
 document.getElementById('rua').value = data.logradouro;
 document.getElementById('bairro').value = data.bairro;
 document.getElementById('cidade').value = data.localidade;
 document.getElementById('estado').value = data.uf;
}) 
})
}) */