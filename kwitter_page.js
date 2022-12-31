var firebaseConfig = {
      apiKey: "AIzaSyDHy61Jriub8bGcs69lt6LmOwNfik1XXVc",
      authDomain: "kwitter-b3e86.firebaseapp.com",
      databaseURL: "https://kwitter-b3e86-default-rtdb.firebaseio.com",
      projectId: "kwitter-b3e86",
      storageBucket: "kwitter-b3e86.appspot.com",
      messagingSenderId: "715216703029",
      appId: "1:715216703029:web:2fdcb2d0ec90d16e9dab7c"
    };
    
     firebase.initializeApp(firebaseConfig);
var username_var=localStorage.getItem("username");
var roomname_var=localStorage.getItem("roomname");
     function send(){
var store_message=document.getElementById("kwitter_page_input").value;
firebase.database().ref(roomname_var).push({
     Name:username_var,
     Message:store_message,
     likes:0
})
  document.getElementById("kwitter_page_input").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
