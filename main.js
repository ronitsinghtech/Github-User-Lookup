// How do I find the api online if I don't know where to look? Used GPT Search to help me out here
//https://api.github.com/users/{username} <-- This is the API Link found.

const form = document.querySelector(".input");
form.onsubmit = async (event) => {
  event.preventDefault();
  const info = new FormData(form);
  const info2 = info.get("userinput");
  const userinfo = await getUserInfo(info2);
  try {
    const image = document.querySelector("#profile-pic");
    image.src = userinfo.avatar_url;
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
