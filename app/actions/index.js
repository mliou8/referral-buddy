
/**
 user: {
  firstName: Michael,
  lastName: Liou,
  email: mliou@example.com,
  password: 1232981
}
**/

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    data: user
  }
}

