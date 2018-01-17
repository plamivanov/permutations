let allperm = [];
let usedchars = [];

function permute(inp) {
  let char;

  for (let index = 0; index < inp.length; index++) {

    char = inp.splice(index, 1)[0];
    usedchars.push(char);

    if (inp.length === 0) {
      allperm.push(usedchars.slice());
    }

    permute(inp);
    inp.splice(index, 0, char);
    usedchars.pop();
  }

  return allperm;

}

console.log(permute([1, 2, 3]));