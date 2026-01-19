let users = [
  {
    pseudo: "Slayerf",
    connecte: true,
  },
  {
    pseudo: "Dark",
    connecte: false,
  },
  {
    pseudo: "Luffy",
    connecte: true,
  },
];

for (let user of users) {
  if (user.connecte === true) {
    console.log(user.pseudo + " est connecté");
  } else {
    console.log(user.pseudo + " est déconnecté");
  }
}
