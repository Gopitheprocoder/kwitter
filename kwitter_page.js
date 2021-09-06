//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBlzwpCFjTmeZ6_bINUWWN-xvejhDqHrmk",
      authDomain: "kwitter-6d0e9.firebaseapp.com",
      databaseURL: "https://kwitter-6d0e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d0e9",
      storageBucket: "kwitter-6d0e9.appspot.com",
      messagingSenderId: "1041318179585",
      appId: "1:1041318179585:web:225c38f99a72a2abd32100"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_NAME=localStorage.getItem("user_NAME");
get_name=localStorage.getItem("get_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      function send(){
            msg=document.getElementById("msg").value;
            firebase.database().ref(get_name).push({
                  name:user_NAME,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value=" ";
      }
      function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
      