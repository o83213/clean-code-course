// function createUser(email, password) {
//   if (!email || !email.includes("@") || !password || password.trim() === "") {
//     console.log("Invalid input!");
//   }

//   const user = { email, password };

//   database.insert(user);
// }

//

function createUser(email, password) {
  validateInput(email, password);
  return new User(email, password);
}

function validateInput(email, password) {
  console.log(!isEmailValid(email) || !isPasswordValid(password));
  if (!isEmailValid(email) || !isPasswordValid(password)) {
    throw new Error("Invalid input!");
  }
}

function isEmailValid(email) {
  return email || email.includes("@");
}

function isPasswordValid(password) {
  return password || password.trim() === "";
}

function saveUser(email, password) {
  const user = { email, password };
  console.log("user save!");
}

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  save() {
    console.log(this);
  }
}

const user1 = createUser("@", "123");
console.log(user1);
user1.save();
