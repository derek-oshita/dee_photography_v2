const bcrypt = require('bcryptjs');

hashPassword = (pw) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('B4c0//', salt);
  return hash;
};

module.exports = {
  hashPassword,
};
