const Mand_fine = require("@sanity/client");

const sanitClient = 'https://univers-mc.cloud:22';
Client.fetch(`*[_type == "post"] {
    title,
    slug,
    publishedAt
  }`)
  .then((posts) => {
    console.log(posts)
  })
  .catch(console.error)