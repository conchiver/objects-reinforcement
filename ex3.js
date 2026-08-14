const users = [
  {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
    name: "Alex",
  },
  {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
    name: "Asab",
  },
  {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
    name: "Brook",
  },
  {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Daniel",
  },
  {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
    name: "John",
  },
  {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Thomas",
  },
  {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Paul",
  },
];

/**
 * Recorre el array de usuarios y encuentra aquél usuario que tiene más 'skills' de todos.
 * El resultado de tu búsqueda debería ser Asab.
 */

let contador = users[0].skills.length;
let usuario = users[0].name;



for (let i=1; i< users.length; i++){
  if (contador < users[i].skills.length){
  
      contador = users[i].skills.length;
      usuario = users[i].name;
      
  }
  
}


console.log(`Usuario ${usuario} con mayor número de skills: ${contador}`);