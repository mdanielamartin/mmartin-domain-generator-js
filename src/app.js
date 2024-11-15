let pronouns = ['the', 'our', 'a', 'one', 'first'];
let adjetives = ['great', 'epic', 'creative', 'bold', 'radiant'];
let nouns = ['car', 'resort', 'flight', 'book', 'dog', 'internet', 'cactus', 'glove'];
let extensions = ['.com', '.net', '.gov', '.us', '.ve'];
let count = 0;
for (let pronoun of pronouns) {
  for (let adj of adjetives) {
    for (let noun of nouns) {
      for (let ext of extensions) {
        let domain = [];
        if (ext.length === 4 && ext.slice(-3) === noun.slice(-3)) {
          let domainHack = []
          let nounHack = noun.slice(0, noun.length - 3);
          domainHack.push(pronoun, adj, nounHack, ext)
          console.log(domainHack.join(""));
          count += 1;
        } else if (ext.length === 3 && ext.slice(-2) === noun.slice(-2)) {
          let domainHack = []
          let nounHack = noun.slice(0, noun.length - 2);
          domainHack.push(pronoun, adj, nounHack, ext);
          console.log(domainHack.join(""));
          count += 1;
        }
        domain.push(pronoun, adj, noun, ext);
        console.log(domain.join(""));
        count += 1;
      }
    }
  }
}


console.log(`Total Number of Domains Created: ${count}`)
