declare global {
  var DB: { currentUser: User };
}

export interface User {name: string; email: string; avatar?: string;}

export const DB = (global.DB = {
  currentUser: { name: "user",
  email: "user@email.com", avatar: undefined,
  },
});

export async function getCurrentUser() {
  return DB.currentUser;
}

export async function updateUser(user: Partial<User>) {
  DB.currentUser = Object.assign({}, DB.currentUser, user);
}