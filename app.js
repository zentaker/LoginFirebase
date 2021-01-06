
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1Ke0RJ8yUiUbxKx4wsa5k0vw8KbypaSk",
    authDomain: "loginserver-9d29a.firebaseapp.com",
    projectId: "loginserver-9d29a",
    storageBucket: "loginserver-9d29a.appspot.com",
    messagingSenderId: "986187586678",
    appId: "1:986187586678:web:256deb65c1756edf1a1357"
  };
    

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
        // User is signed in.
          document.getElementById("user_div").style.display = "block";
          document.getElementById("login_div").style.display = "none";
      } else {
        // No user is signed in.
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
      }
    });
  
  function login() {
  
      
      var userEmail = document.querySelector('#email').value;
      var userPassword = document.querySelector('#password').value;
  
    console.log(userEmail);
    console.log(userPassword);
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  
    .catch((error) => {
      var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });
  
  
  
  
      
  }