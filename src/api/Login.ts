export const Login = (login: string, _password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() >= 0.5;
      if (isSuccess) {
        resolve(login);
      } else {
        reject(new Error("Неверный логин или пароль."));
      }
    }, 3000);
  });
};
