function printHello() {
  let name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let greeting = document.getElementById("greeting");

  if (name === "" && password === "") {
    greeting.innerHTML = "Please enter both username and password.";
  } 
  else if (name === ""){
    greeting.innerHTML = "Please enter username.";
  }
  else if (password === ""){
    greeting.innerHTML = "Please enter password";
  }
  else {
    greeting.innerText = `Hello, ${name}! \n  Your password is: ${password}`;
  }
}

window.addEventListener('keydown', (e) => {
    console.log(e)
})

//     // select inputs
//     const username = document.getElementById("username").value
//     const password = document.querySelector('#password').value

// // create container div
// const containerElement = document.createElement('div');

// // create content elements
// const welcomeElement = document.createElement('p');
// const usernameElement = document.createElement('p');
// const passowordElement = document.createElement('p');

// // insert contents into elements
// welcomeElement.innerText =  "Welcome to our website, you will enjoy it"
// usernameElement.innerText = "Your name is: " + username;
// passowordElement.innerText = "Your password is: " + password;

// // add contents into container div
// containerElement.appendChild(welcomeElement);
// containerElement.appendChild(usernameElement);
// containerElement.appendChild(passwordElement);

// // add content elements into body/html
// document.body.appendChild(containerElement);

//
