firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, You are logged in successfully! "
    }
})


function logout(){
    firebase.auth().signOut()
}
