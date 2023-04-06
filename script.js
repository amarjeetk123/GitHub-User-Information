
let getUserInfo = document.getElementById("getUserInfo")
document.getElementById("user-box").style.visibility  = "hidden"
let img = document.getElementById("image");
function getInfo() {
    let userInput = document.getElementById("userInput").value;
    document.getElementById("user-box").style.visibility  = "visible"
    // let p = fetch("https://api.github.com/users/amarjeetk123");
    let p = fetch("https://api.github.com/users/"+userInput);
    p.then((value1) => {
        return value1.json()
    }).then((value2) => {
        // console.log(value2)
        // document.getElementsByTagName("img").src = "https://avatars.githubusercontent.com/u/109898434?v=4";
        document.getElementById("image").src = value2.avatar_url;
        document.getElementById("name").innerHTML = value2.name;
        document.getElementById("bio").innerHTML = value2.bio;
        document.getElementById("follower").innerHTML = "Total Follower : "+value2.followers;
        document.getElementById("repos").innerHTML = "Total Repositories : "+ value2.public_repos
        ;
    })
}


