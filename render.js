const {ipcRenderer} = require("electron");
const key = document.querySelector(".keyWord");
const btnSenha = document.getElementById("btnSenha")
const generatePassword = () => {
  ipcRenderer.send(
    "generatePassword",
    key.value
  );
};

key.addEventListener("keypress",(event) => {
  var code = event.code;
  if(code === "Enter"){
    btnSenha.click()
  }
})

ipcRenderer.on("receivePassword", (event, data) => {
  const passwordTag = document.querySelector("#password");
  passwordTag.innerText = data;
});
