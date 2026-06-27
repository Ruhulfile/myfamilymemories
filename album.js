const albumBtn = document.querySelector(".album");
const albumList = document.getElementById("albumList");

function loadAlbums() {
    albumList.innerHTML = "";

    const albums = JSON.parse(localStorage.getItem("albums")) || [];

    albums.forEach(name => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>📁 ${name}</h3>
            <p>📷 0 Photos</p>
        `;
        albumList.appendChild(card);
    });
}

albumBtn.addEventListener("click", () => {
    const albumName = prompt("Album ka naam likho:");

    if (!albumName) return;

    const albums = JSON.parse(localStorage.getItem("albums")) || [];
    albums.push(albumName);

    localStorage.setItem("albums", JSON.stringify(albums));

    loadAlbums();
});

loadAlbums();
