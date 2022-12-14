let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

let title = document.querySelector(".title");


btn.onclick = () => {
    nav.classList.toggle("open")
};

mask.onclick = () => {
    nav.classList.toggle("open")
};

let options = {
    rootMargin: "0px" ,
    threshold: 0.5 ,
};

let setItemActive = (entries) => {
    entries.map((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let observer = new IntersectionObserver(setItemActive, options);

observer.observe(title);
