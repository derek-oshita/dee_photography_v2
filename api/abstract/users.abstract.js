class UsersAbstract {
  one = (user) => {
    if (!user) {
      return null;
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  };

  many = (users) => {
    if (!users) {
      return null;
    }
    return users.map(this.one);
  };
}

module.exports.usersAbstract = new UsersAbstract();
