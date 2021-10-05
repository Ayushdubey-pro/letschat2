const firebaseConfig = {
      apiKey: "AIzaSyAMdmD3lR5pyRv1ojxxLXZbFDXgyOg1dvg",
      authDomain: "kwitter-ffd01.firebaseapp.com",
      projectId: "kwitter-ffd01",
      storageBucket: "kwitter-ffd01.appspot.com",
      messagingSenderId: "1004176608624",
      appId: "1:1004176608624:web:f0f721398995fc1215d3b5"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
