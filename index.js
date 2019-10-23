// Objetivos:
//   Obter Pessoa
//   Obter Telefone por ID da Pessoa
//   Obter E-mail por ID da Pessoa
//   Sincronizar dados

function obterPessoa(callback) {
  setTimeout(() => {
    return callback(null, {
      nome: "Felipe",
      idade: "23",
      faculdade: "Fatec Osasco",
      endereco: "rua Carlos Alberto Vanzolini"
    });
  }, 1000);
}
function obterTelefonePorId(pessoaId, callback) {
  setTimeout(() => {
    return callback(null, {
      numero: "(11)975812099",
      ddd: "11"
    });
  }, 7000);
}
function obterEmailPorId(pessoaId, callback) {
  setTimeout(() => {
    return callback(null, {
      email: "felipe.araujo@hubfintech.com.br"
    });
  }, 5000);
}
obterPessoa((erro, pessoa) => {
  console.log(pessoa);
  obterTelefonePorId(pessoa.id, (erro, pessoaTelefone) => {
    console.log(pessoaTelefone);
  });
  obterEmailPorId(pessoa.id, (erro, pessoaEmail) => {
    console.log(pessoaEmail);
  });
});
