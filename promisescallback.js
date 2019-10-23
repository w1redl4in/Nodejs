const util = require("util");

function getBola(callback) {
  setTimeout(() => {
    return {
      name: "Wilsom",
      form: "ball",
      borderRadius: "50%"
    };
  }, 1000);
}
function getBolaBySize() {
  setTimeout(() => {
    return {
      size: "100px",
      width: "50px",
      height: "50px"
    };
  }, 2000);
}
function getBolaByColor() {
  setTimeout(() => {
    return {
      color: "green"
    };
  }, 2000);
}

// getBola((erro, bola) => {
//   console.log(bola);
//   getBolaBySize(bola.size, (erro, bola) => {
//     console.log(bola);
//   });
//   getBolaByColor(bola.color, (erro, bola) => {
//     console.log(bola);
//   });
// });

const getBolaBySizeAsync = util.promisify(getBolaBySize);
const usuarioPromise = getBola()

usuarioPromise
  .then((bola) => {
    return getBolaByColor(bola.color)
    .then((resultado) => {
      return {
        bola: {
          
        }
      }
    })
  })
