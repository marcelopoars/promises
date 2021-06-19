function p(content) {
  console.log(content);
}

/* Criando funções nomedas */
function jaRealizada() {
  return Promise.resolve("90630084");
}

function pegaCep(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

function pegaEndereco(data) {
  return data.json();
}

function imprimeEndereco(endereco) {
  return p(endereco);
}

function trataErro(erro) {
  p(`Algo deu errado! ${erro}`);
}
/* End Criando funções nomedas */

/* Teste com setTimeout() */
function demora500ms() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("demora500ms");
    }, 500);
  });
}

function demora200ms() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("demora200ms");
    }, 200);
  });
}
/* End Teste com setTimeout() */

jaRealizada()
  .then(pegaCep)
  .then(pegaEndereco)
  .then(imprimeEndereco)
  .catch(trataErro) // Tratando erros
  .finally(() => p("Sempre será executado!")); // Sempre executa

Promise.all([demora500ms(), demora200ms()])
  // O then() só ocorre depois de todas promoises forem executadas
  .then((promisesResolvidas) => {
    // p(promisesResolvidas);
  });

// Retorna o valor da primeira Promise resolvida ou rejeitada
Promise.race([demora500ms(), demora200ms()]).then((promisesResolvidas) => {
  p(promisesResolvidas);
});
