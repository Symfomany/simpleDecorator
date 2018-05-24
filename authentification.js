function AuthUser(targetDecorated) {
  const user = targetDecorated;
  user.login = () => `${user.prenom} se connecte`;
  user.logout = () => `${user.prenom} se déconnecte`;

  return user;
}

module.exports = AuthUser;
