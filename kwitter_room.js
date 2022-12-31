
var firebaseConfig = {
      apiKey: "AIzaSyDHy61Jriub8bGcs69lt6LmOwNfik1XXVc",
      authDomain: "kwitter-b3e86.firebaseapp.com",
      databaseURL: "https://kwitter-b3e86-default-rtdb.firebaseio.com",
      projectId: "kwitter-b3e86",
      storageBucket: "kwitter-b3e86.appspot.com",
      messagingSenderId: "715216703029",
      appId: "1:715216703029:web:2fdcb2d0ec90d16e9dab7c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username");
document.getElementById("tag_id").innerHTML="WELCOME "+username+"!";
function add_room(){
  var room_name=document.getElementById("room_username").value; 
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room"
   });
   localStorage.setItem("roomname",room_name)
   window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name is "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;




      //End code
      });});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("roomname",name)
   window.location="kwitter_page.html";

}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}