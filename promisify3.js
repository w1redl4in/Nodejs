const util = require("util");

const getPessoaAsync = util.promisify(getPessoa);
function getPessoa(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Felipe",
      idade: "23"
    });
  }, 5000);
}
const getTelByIdAsync = util.promisify(getTelById);
function getTelById(userID, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "36212761",
      ddd: "11"
    });
  }, 3000);
}
const getEmailByIdAsync = util.promisify(getEmailById);
function getEmailById(userID, callback) {
  setTimeout(() => {
    return callback(null, {
      endereco: "felipe.araujo@hubfintech.com.br"
    });
  }, 4000);
}

getPessoaAsync()
  .then(pessoa => {
    return {
      pessoa: pessoa
    };
  })
  .then(pessoa => {
    const email = getEmailByIdAsync(pessoa.id);
    return email.then(pessoaEmail => {
      return {
        pessoa: pessoa,
        email: pessoaEmail
      };
    });
  })

  .then(pessoa => {
    const tel = getTelByIdAsync(pessoa.id);
    return tel.then(pessoaTel => {
      return {
        pessoa: pessoa.pessoa,
        email: pessoa.email,
        tel: pessoaTel
      };
    });
  })

  .then(ultimoThen => {
    console.log(ultimoThen);
  })
  .catch(erro => {
    console.log("Tal erro: ", erro);
  });
