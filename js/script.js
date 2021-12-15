function changeStatus(element) {
    if (element.innerHTML == "Login") {
        element.innerHTML = "Logout";
    } else if (element.innerHTML == "Logout") {
        element.innerHTML = "Login";
    }
}

function hide(element) {
    element.remove();
}

function updateLikes(id) {
    var element = document.querySelector(id);
    element.innerHTML++;
}
