document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)
    const db = firebase.firestore();

    const myPost = db.collection('posts').doc('firstpost');

    myPost.onSnapshot(doc => {
 
        const data = doc.data();
        document.write( data.title + '<br>')
        document.write( data.createdAt + '<br>')
          
          
            })
}); 




function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user)
        })
        .catch(console.log)
}

const firebaseConfig = {
    apiKey: "AIzaSyAZ96yCNGQ-kTUZSpQXo3FlkqfvaHBseIk",
    authDomain: "kuproject2-b59bd.firebaseapp.com",
    databaseURL: "https://kuproject2-b59bd.firebaseio.com",
    projectId: "kuproject2-b59bd",
    storageBucket: "kuproject2-b59bd.appspot.com",
    messagingSenderId: "1013064070830",
    appId: "1:1013064070830:web:499c11fabe7f0d4f"
  };