function p(content) {
  console.log(content);
}

// O JavaScript é uma linguagem SINGLE THREAD
// IO não bloqueante

p("Teste 01");
setTimeout(() => p("Teste 02"), 0); // Essa função entrou em uma fila
p("Teste 03");
p("Teste 04");
setTimeout(() => p("Teste 05"), 0); // Essa função entrou em uma fila
p("Teste 06");

/*
  Promises
  Uma Promise é um objeto do JavaScript que representa a eventual conclusão ou falha de uma operação assincrona.

  Estados:
  - Pendente: operação pendente
  - Realizada: recebe os dados
  - Rejeitado: ocorre algum erro
  - Estabelecida: finalizada
*/

// Formato conceitual para estudo
function jaRealizada() {
  // Retorna uma Promise já resolvida
  return Promise.resolve("Deu certo!");
}

// Formato conceitual para estudo
function jaRejeitada() {
  return Promise.reject();
}

// **** Promises entram em uma fila especial / preferencial ***
// O método 'then()' é chamado assim que a promise é realizada
jaRealizada().then(function (data) {
  // Função de callback
  p({ data });
});

// O método 'catch' trata o erro
jaRejeitada().catch(function () {
  p("Deu errado");
});

// Formato mais comum de uso
function promiseTrabalhada() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Hello JavaScript"), 1000);
  });
}

promiseTrabalhada().then((message) => p(message));

// Testando uma consulta na API dos correios

// Retorna uma Promise
fetch("https://viacep.com.br/ws/90630084/json/").then((data) => {
  // data contem a resoposta da requisição http
  p(data);
  // .jason() também retorna uma promise
  data.json().then((endereco) => {
    p(endereco);
  });
});
