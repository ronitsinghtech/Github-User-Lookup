const form = document.querySelector("form");
form.onsubmit = (event) => {
  alert("Alert");
  event.preventDefault();
  console.log(event);
  const pro = new FormData(form); // Returns form data
  const pro2 = pro.get("firstname");
  console.log(pro2);
  const pro3 = pro.get("lastname");
  console.log(pro3);
};
