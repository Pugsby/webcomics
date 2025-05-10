function openComic(source, name, description) {
    document.getElementById("comicImage").src = source;
    document.getElementById("comicName").innerText = name;
    document.getElementById("description").innerHTML = description;
}

function attachHoverSound() {
    document.querySelectorAll('button').forEach(button => {
        if (!button.hasAttribute('data-hover-sound')) {
            button.setAttribute('data-hover-sound', 'true');
            button.addEventListener('mouseover', () => {
                const audio = new Audio('hover.mp3');
                audio.play();
            });
            button.addEventListener('click', () => {
                const audio = new Audio('click.mp3');
                audio.play();
            });
        }
    });
}

attachHoverSound();

const observer = new MutationObserver(() => {
    attachHoverSound();
});

observer.observe(document.body, { childList: true, subtree: true });
