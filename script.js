function openComic(source, name, description) {
    document.getElementById("comicImage").src = source;
    document.getElementById("comicName").innerText = name;
    document.getElementById("description").innerHTML = description;
}