// //api.github.com/repos/codeyourfuture/js-exercises/pulls

var labeluser = document.createElement("label");
labeluser.setAttribute("for", "username");
labeluser.style.marginTop = "0px";
labeluser.innerHTML = "Filter PRs by user:";

document.getElementById("milley").appendChild(labeluser);

var searchButton = document.createElement("input");
searchButton.setAttribute("type", "text");
searchButton.setAttribute("id", "input-text");
searchButton.setAttribute("placeholder", "Search for user");
searchButton.style.marginLeft = "5px";

labeluser.appendChild(searchButton);

searchButton.addEventListener("keyup", function(event) {
  const text = event.target.value;
  //alert(text);
  fetchFunction(text);
});

function fetchFunction(name) {
  fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls") // take json
    .then(response => response.json()) // if success transform json in JS object
    .then(data => {
      //console.log(data);
      var reposList = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].user.login === name) {
          //console.log(data[i]);
          reposList += ` <li> Your Pull Request For JS-Exercises: <a href="
            ${data[i].html_url}"
            >${data[i].html_url}</a></li> `;
        }
      } //console.log(reposList);
      var listRepos = document.getElementById("pull-requests-list");
      listRepos.innerHTML = reposList;
    });
}
