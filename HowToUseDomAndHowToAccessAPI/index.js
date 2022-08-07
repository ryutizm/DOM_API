//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数
function addList(user) {
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
}

async function getUsers(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();
  users.forEach(addList);
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);


// // 「もっと」をクリックした時に表示
// button.addEventListener("click", async function() {

//   // データのやり取り
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   // DOM操作
//   // for文の書き方
//   // for (let index = 0; index < users.length; index++) {
//   //   const user = users[index];
//   //   const list = document.createElement("li");
//   //   list.innerText = user.name;
//   //   lists.appendChild(list); 
//   // }

//   // foreachの書き方
//   users.forEach(function(user) {
//     const list = document.createElement("li");
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// });

// // ロードした時に表示する方法
// window.addEventListener("load", async function() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   users.forEach(function(user) {
//     const list = document.createElement("li");
//     list.innerText = user.name;
//     lists.appendChild(list);
//   });
// });