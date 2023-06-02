const imagesToLoad = document.querySelectorAll("img[data-src]")

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let elem = entry.target;
      
            if (entry.intersectionRatio >= 0.75) {
              intersectionCounter++;
            }
        }
    });
};
  
let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
};
  
let observer = new IntersectionObserver(callback, options);
  

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
  