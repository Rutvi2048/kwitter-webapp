//YOUR FIREBASE LINKS

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

    var user_name=localStorage.getItem("user_name");

var room_name=localStorage.getItem("room_name");

var uname,message,like,name_with_tag,message_with_tag,like_button,span_with_tag,row;


var likes,update_likes;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
uname=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4"+uname+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0,
});
document.getElementById("msg").value="";
}


function updateLike(message_id)
{
      console.log("clicker on like button - "+message_id);
likes=document.getElementById(message_id).value;
update_likes=Number(likes)+1;
console.log(update_likes);

firebase.document().ref(room_name).child(message_id).update({
like : update_likes
});

}












