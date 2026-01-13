const note = document.getElementById("note");
note.value = localStorage.getItem("note") || "";

document.getElementById("save").onclick = () => {
  localStorage.setItem("note", note.value);
};
