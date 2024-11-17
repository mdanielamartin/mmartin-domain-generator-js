let pronouns = ['the', 'our', 'a', 'one', 'first'];
let adjetives = ['great', 'epic', 'creative', 'bold', 'radiant'];
let nouns = ['car', 'resort', 'flight', 'book', 'dog', 'internet', 'cactus', 'glove'];
let extensions = ['.com', '.net', '.gov', '.us', '.ve'];
let count = 0;

for (let pronoun of pronouns) {
  for (let adj of adjetives) {
    for (let noun of nouns) {
      for (let ext of extensions) {
        if (ext.length === 4 && ext.slice(-3) === noun.slice(-3)) {
          let nounHack = noun.slice(0, noun.length - 3);
          buildDomain(pronoun, adj, nounHack, ext);
        } else if (ext.length === 3 && ext.slice(-2) === noun.slice(-2)) {
          let nounHack = noun.slice(0, noun.length - 2);
          buildDomain(pronoun, adj, nounHack, ext);
        }
        buildDomain(pronoun, adj, noun, ext);
      }
    }
  }
}

function buildDomain(pronoun, adjective, noun, extension) {
  count += 1;
  let domain = pronoun + adjective + noun + extension;
  console.log(domain);
  return
}

console.log(`Total Number of Domains Created: ${count}`)
