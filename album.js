// ===============================
// My Family Memories - Album System v1
// ===============================

const albumBtn = document.querySelector(".album");

albumBtn.addEventListener("click", () => {

    const albumName = prompt("Album ka naam likho:");

    if (!albumName) return;

    alert("Album '" + albumName + "' successfully create ho gaya! 🎉");

});
