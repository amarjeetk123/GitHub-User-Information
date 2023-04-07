let getUserInfo = document.getElementById("getUserInfo")
document.getElementById("user-box").style.visibility = "hidden"
let img = document.getElementById("image");
let err =  document.getElementById("error")
err.style.visibility = "hidden";
function clear(){
    err.style.visibility = "hidden";
    console.log("dggdgdgdg")
}

let userInput = document.getElementById("userInput");
function getInfo() {
    
    let p = fetch("https://api.github.com/users/" + userInput.value);
    p.then((value1) => {
        return value1.json()
    }).then((value2) => {
        console.log(value2);
        if (userInput == "") {
            return alert("Please Enter GitHub username")
        }
        if (value2.message == "Not Found") {
          return  err.style.visibility = "visible"
        }
        else {
            document.getElementById("user-box").style.visibility = "visible"
            err.style.visibility = "hidden";
            document.getElementById("image").src = value2.avatar_url;
            document.getElementById("name").innerHTML = value2.name;
            document.getElementById("bio").innerHTML = value2.bio;
            document.getElementById("follower").innerHTML = "Total Follower : " + value2.followers;
            document.getElementById("repos").innerHTML = "Total Repositories : " + value2.public_repos;
        }
    })
}
userInput.addEventListener("keypress", function(event){
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
     getInfo()
    }
});


