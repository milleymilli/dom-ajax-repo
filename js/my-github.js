var xClick = document.getElementById("repos-count");
var ownerName = document.getElementById("reposOwner");
fetch("https://api.github.com/users/milleymilli/repos")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // console.log(data.length);
    xClick.innerHTML = data.length;
    let reposi = "";
    data.forEach(element => {
      reposi += `<li> Repository :<a href="${element.html_url}">${
        element.html_url
      }</a> </li>`;
    });
    //console.log(reposi);
    document.querySelector("#repos-list li").innerHTML = reposi;
  })
  .catch(error => {
    console.log(error);
  });

//getting github by using searching button

var labeluser = document.createElement("label");
labeluser.setAttribute("for", "username");
labeluser.style.marginTop = "35px";
labeluser.innerHTML = "Search for a GitHub user:";
document.getElementById("p-tag0").appendChild(labeluser);

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input-text-field");
input.setAttribute("placeholder", "Enter username...");
labeluser.appendChild(input);

var searchButton = document.createElement("button");
searchButton.setAttribute("type", "search");
searchButton.innerHTML = "Search";
searchButton.style.cursor = "pointer";
searchButton.style.marginLeft = "5px";

labeluser.appendChild(searchButton);

searchButton.addEventListener("click", () => {
  var usernName = input.value;
  fetchingUser(usernName);
});

function fetchingUser(name) {
  fetch(`https://api.github.com/users/${name}/repos`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      //alert(data);

      let reposList = "";
      data.forEach(element => {
        reposList += ` <li>Your Repository list: <a href="${
          element.html_url
        }">${element.html_url}</a></li>`;
      });
      xClick.innerHTML = data.length;
      ownerName.innerHTML = name;
      if (reposList.length > 0) {
        document.querySelector("#repos-list li").innerHTML = reposList;
      } //: (document.querySelector("#repos-list li").innerHTML = "");
    });
}
