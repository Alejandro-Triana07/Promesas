function getUsers(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["User1", "User2", "User3"]), 2000);
  });
}

function getPosts(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post1", "Post2", "Post3"]), 3000);
  });
}
Promise.all([getUsers(), getPosts()])
  .then(([users, posts]) => {
    console.log("Usuarios y publicaciones cargados correctamente");
    console.log("Usuarios:", users);
    console.log("Publicaciones:", posts);
  })
  .catch((err) => console.error("Error:", err));
