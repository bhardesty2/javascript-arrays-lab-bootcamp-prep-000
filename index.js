var kittens = [ 'Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyAppendKitten(name){
  kittens.shift(name);
  return kittens
}
