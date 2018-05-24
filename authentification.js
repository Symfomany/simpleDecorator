function AuthUser(targetDecorated) {
  const user = targetDecorated;
  user.login = () => `${user.prenom} se connecte`;

  return user;
}

module.exports = AuthUser;
