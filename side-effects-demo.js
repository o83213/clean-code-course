function InitApp() {
  const didConnect = connectDatabase();
  if (didConnect) {
    return true;
  } else {
    console.log("Could not connect to database!"); // expected side effect
  }
}

function connectDatabase() {
  const didConnect = database.connect(); // expected side effect
  return didConnect;
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent(); // expected side effect
  }
  return findAgentByRequestType(ticket.requestType); // expected side effect
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    console.log("Input not value");
  }
  //...
}

function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    return false;
  }
  return true;
}
