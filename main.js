// How do I find the api online if I don't know where to look? Used GPT Search to help me out here
//https://api.github.com/users/{username} <-- This is the API Link found.

const form = document.querySelector(".input");
form.onsubmit = async (event) => {
  event.preventDefault();
  const info = new FormData(form);
  const info2 = info.get("userinput");
  const userinfo = await getUserInfo(info2);
  const infoscreen = document.querySelector(".infoscreen");
  infoscreen.style.display = "flex";
  try {
    const image = document.querySelector("#profile-pic");
    image.src = userinfo.avatar_url;

    if (userinfo.name == null) {
      document.querySelector("#name").textContent = "Unavailable";
    } else {
      document.querySelector("#name").textContent = userinfo.name;
    }

    if (userinfo.login == null) {
      document.querySelector("#handle").textContent = "Unavailable";
    } else {
      document.querySelector("#handle").textContent = `@${userinfo.login}`;
    }

    if (userinfo.public_repos == null) {
      document.querySelector("#repositories").textContent = "Unavailable";
      document.querySelector("#repositories").style.color = "#8a8a8d";
      document.querySelector("#repos").style.backgroundColor = "#222225";
    } else {
      document.querySelector(
        "#repositories"
      ).textContent = `${userinfo.public_repos} Repositories`;
    }

    if (userinfo.company == null) {
      document.querySelector("#workplace").textContent = "Unavailable";
      document.querySelector("#workplace").style.color = "#8a8a8d";
      document.querySelector("#company").style.backgroundColor = "#222225";
    } else {
      document.querySelector("#workplace").textContent = `${userinfo.company}`;
    }

    if (userinfo.followers == null) {
      document.querySelector("#followerscount").textContent = "Unavailable";
      document.querySelector("#followerscount").style.color = "#8a8a8d";
      document.querySelector("#followers").style.backgroundColor = "#222225";
    } else {
      document.querySelector(
        "#followerscount"
      ).textContent = `${userinfo.followers} Followers`;
    }

    if (userinfo.following == null) {
      document.querySelector("#followingcount").textContent = "Unavailable";
      document.querySelector("#followingcount").style.color = "#8a8a8d";
      document.querySelector("#following").style.backgroundColor = "#222225";
    } else {
      document.querySelector(
        "#followingcount"
      ).textContent = `Following ${userinfo.following}`;
    }

    if (userinfo.twitter_username == null) {
      document.querySelector("#xusername").textContent = "Unavailable";
      document.querySelector("#xusername").style.color = "#8a8a8d";
      document.querySelector("#xuserhandle").style.backgroundColor = "#222225";
    } else {
      document.querySelector("#xusername").textContent =
        userinfo.twitter_username;
    }

    if (userinfo.location == null) {
      document.querySelector("#location").textContent = "Unavailable";
      document.querySelector("#location").style.color = "#8a8a8d";
      document.querySelector("#locate").style.backgroundColor = "#222225";
    } else {
      document.querySelector("#location").textContent = userinfo.location;
    }
  } catch {
    alert("Error fetching user data");
    console.log("Error fetching user data");
  }
};

async function getUserInfo(username) {
  const info = await fetch(`https://api.github.com/users/${username}`);
  const info2 = await info.json();
  return info2;
}
function switchtoDark() {
  document.querySelector(".screen").style.backgroundColor = "#18181b";
  document.querySelector(".input").style.backgroundColor = "#27272a";
  document.querySelector(".infoscreen").style.backgroundColor = "#27272a";
  document.querySelector("#inputbar").style.backgroundColor = "#27272a";
  const infoelements = document.querySelectorAll(".oneinfo");
  infoelements.forEach((element) => {
    const pchild = element.querySelector("p.textinfo");
    if (pchild) {
      const text = pchild.textContent.trim();
      if (text === "Unavailable") {
        element.style.backgroundColor = "#222225";
      } else {
        element.style.backgroundColor = "#1e1e21";
      }
    }
  });
}
function switchtoLight() {
  document.querySelector(".screen").style.backgroundColor = "#f4f4f5";
  document.querySelector(".input").style.backgroundColor = "#e4e4e7";
  document.querySelector(".infoscreen").style.backgroundColor = "#e4e4e7";
  document.querySelector("#inputbar").style.backgroundColor = "#e4e4e7";
  const infoelements = document.querySelectorAll(".oneinfo");
  infoelements.forEach((element) => {
    const pchild = element.querySelector("p.textinfo");
    if (pchild) {
      const text = pchild.textContent.trim();
      if (text === "Unavailable") {
        element.style.backgroundColor = "#9f9fa6";
      } else {
        element.style.backgroundColor = "#71717a";
      }
    }
  });
}
