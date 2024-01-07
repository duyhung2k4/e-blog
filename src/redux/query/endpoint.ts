export const HEADER = {
  defaultHeader: () => ({
    accept: 'application/json',
  })
}

export const endPoint = {
  auth: {
    loginGoogle: () => ({
      url: "api/v1/login-google",
      method: "POST",
      headers: HEADER.defaultHeader(),
    }),
  }
}