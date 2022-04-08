const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = process.argv[2];
bcrypt.hash(password, saltRounds, (err, hash) => {
  console.log(hash);
});
