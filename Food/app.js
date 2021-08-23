let restur = () => {
    var email = document.getElementById('emailaddress').value
    var password = document.getElementById('passwo').value
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((username) => {
            var user = userCredntial.user;
            console.log(userCredential)
            var image = image=document.getElementById('file').files[0]
            var imgName =image.name
            var storage = firebase.storage().ref('images').child(imgName)
            storage.put(image).then((succ)=>{
                console.log('success==>' , succ)
            })
                .catch((err)=>{
                   console.log('error==>',err)
                })
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage,errorCode)
             
        });
}


let send = () => {
    var email = document.getElementById('emailss').value
    var password = document.getElementById('passws').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}  


let register = () => {
    var email = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('passcode').value
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(username,email, password)
        .then((username) => {
            var username = userCredntial.user;
            console.log(username)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage,errorCode)
             
        });
}
let login = () => {
    var email = document.getElementById('emails').value
    var password = document.getElementById('passcodes').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}  