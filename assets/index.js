let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "gelar") {
            event.target.setAttribute("src", "assets/image/gelar.jpg");
            return;
        } else if (event.target.id === "degradasi") {
            event.target.setAttribute("src", "assets/image/terdegradasi.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "gelar") {
            event.target.setAttribute("src", "assets/image/logo.png");
            return;
        }
        if (event.target.id === "degradasi") {
            event.target.setAttribute("src", "assets/image/logo.png");
            return;
        }
    });
}