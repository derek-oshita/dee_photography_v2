const bcrypt = require('bcryptjs');

const hashPassword = (pw) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pw, salt);
  return hash;
};

const compareHash = (pw, dbHash) => {
  return bcrypt.compareSync(pw, dbHash);
};

module.exports = {
  hashPassword,
  compareHash,
};
