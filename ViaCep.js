const cep = document.getElementById('cep')

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
})