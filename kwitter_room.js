
//ADD YOUR FIREBASE LINKS HERE

 var firebaseConfig = {
    apiKey: "AIzaSyAjUkP4J5dgO7Iw5kOBptZZ86CMu1UwVOI",
    authDomain: "database-81278.firebaseapp.com",
    databaseURL: "https://database-81278.firebaseio.com",
    projectId: "database-81278",
    storageBucket: "database-81278.appspot.com",
    messagingSenderId: "1044845000795",
    appId: "1:1044845000795:web:0df7bc370175396af6677e",
    measurementId: "G-V8MSQWQ4Z4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this,id)'>#"+Room_names +"</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

function addRoom()
{
      
      roomname=document.getElementById("room_name").value;
    localStorage.setItem("room_name",roomname);
      

  firebase.database().ref("/").child(roomname).update({
        purpose : "adding roomname"
  });

 
  window.location = "kwitter_page.html";
}