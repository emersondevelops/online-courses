var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

for (i of usuarios) {
  console.log(`O ${i.nome} possui as habilidades:`, i.habilidades.join(", "));
}
