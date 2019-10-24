// Promisify
const util = require("util");
// Método obterUsuário e obterUsuárioAsync
const obterUsuarioAsync = util.promisify(obterUsuario);
function obterUsuario(callback) {
  // return callback(new Error("FUNCTION obterUsuario, CHECK THE LOG OF SUA MÃE"));
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Felipe Austríaco",
      idade: 23
    });
  }, 1000);
}
// Método obterEmail e obterEmailAsync
const obterEmailDoUsuarioAsync = util.promisify(obterEmailDoUsuario);
function obterEmailDoUsuario(usuarioId, callback) {
  setTimeout(() => {
    return callback(null, {
      email: "felipe.araujo@hubfintech.com.br"
    });
  }, 2000);
}
const obterTelefoneDoUsuarioAsync = util.promisify(obterTelefoneDoUsuario);
function obterTelefoneDoUsuario(usuarioId, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: 975812099,
      ddd: 11
    });
  }, 2000);
}
obterUsuarioAsync()
  .then(usuario => {
    return {
      id: usuario.id,
      nome: usuario.nome,
      idade: usuario.idade
    };
  })
  .then(usuario => {
    const email = obterEmailDoUsuarioAsync(usuario.id);
    return email.then(email => {
      return {
        usuario: usuario,
        email: email
      };
    });
  })
  .then(usuario => {
    const telefone = obterTelefoneDoUsuarioAsync(usuario.id);
    return telefone.then(telefone => {
      return {
        usuario: usuario,
        telefone: telefone
      };
    });
  })
  .then(thenFinal => {
    console.log(thenFinal);
  })
  .catch(erro => {
    console.log("PUTA QUE PARIU", erro);
  });
