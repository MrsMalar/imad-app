
// Submit Username/Password
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
        //create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
             // Take some action
         if (request.status === 200) {
            // Capture a list of names and rendor it as a list
            console.log('user logged in');
            alert('Logged in successfully');
          } else if(request.status === 403) {
              alert('Username/password is incorrect');
          } else if(request.status === 500) {
              alert('Something went wrong on the server !!!');
          }
          
         }
         // Not yet done
    };
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://malarvizhitamilarasan.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
  // Make a request to the server and send the name
  

};
    