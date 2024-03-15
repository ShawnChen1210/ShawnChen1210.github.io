const image1 = document.getElementById('image1');
const container1 = document.getElementById('container1');
const image2 = document.getElementById('image2');
const container2 = document.getElementById('container2');
const image3 = document.getElementById('image3');
const container3 = document.getElementById('container3');
const image4 = document.getElementById('image4');
const container4 = document.getElementById('container4');

container1.addEventListener("click", function hideimg1 () {
    if (image1.classList.contains("hideimg")) {
        image1.classList.remove("hideimg");
    } else {
        image1.classList.add("hideimg");
    }
})

container2.addEventListener("click", function hideimg1 () {
    if (image2.classList.contains("hideimg")) {
        image2.classList.remove("hideimg");
    } else {
        image2.classList.add("hideimg");
    }
})

container3.addEventListener("click", function hideimg3 () {
    if (image3.classList.contains("hideimg")) {
        image3.classList.remove("hideimg");
    } else {
        image3.classList.add("hideimg");
    }
})

container4.addEventListener("click", function hideimg4 () {
    if (image4.classList.contains("hideimg")) {
        image4.classList.remove("hideimg");
    } else {
        image4.classList.add("hideimg");
    }
})