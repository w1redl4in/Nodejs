const util = require("util");

const getPessoaAsync = util.promisify(getPessoa);
function getPessoa(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Felipe Austríaco",
      idade: 23
    });
  }, 5000);
}
const getEmailByIdAsync = util.promisify(getEmailById);
function getEmailById(userID, callback) {
  setTimeout(() => {
    return callback(null, {
      email: "felipe1180@hotmail.com"
    });
  }, 3000);
}
const getTelByIdAsync = util.promisify(getTelById);
function getTelById(userID, callback) {
  setTimeout(() => {
    return callback(null, {
      tel: 946223028
    });
  }, 4000);
}

getPessoaAsync()
  .then(pessoa => {
    return {
      id: pessoa.id,
      nome: pessoa.nome,
      idade: pessoa.idade,
    };
  })
  .then(pessoa => {
    const email = getEmailByIdAsync(pessoa.id);
    return email
        .then(email => {
            return {
                usuario: pessoa,
                email: email
            }
    })
  })
  .then(pessoaEmail => {
      const tel = getTelByIdAsync(pessoaEmail.id)
      return tel.then(tel => {
          return {
              usuario: pessoaEmail,
              tel: tel
          }
      })
  })
  .then(thenFINAL => {
    console.log(thenFINAL);
  })
  .catch(erro => {
    console.log("Azedou o pé do loiro ", erro);
  });
