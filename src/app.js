let pronouns = ['the', 'our', 'a', 'one', 'first'];
let adjetives = ['great', 'epic', 'creative', 'bold', 'radiant'];
let nouns = ['car', 'resort', 'flight', 'book', 'dog'];
let extensions = ['.com', '.net', '.gov', '.us', '.ve'];
let count = 0;
for (let pronoun of pronouns) {
  for (let adj of adjetives) {
    for (let noun of nouns) {
      for (let ext of extensions) {
        let domain = [];
        domain.push(pronoun, adj, noun, ext);
        console.log(domain.join(""));
        count += 1;
      }
    }
  }
}

console.log(`Total Number of Domains Created: ${count}`)
