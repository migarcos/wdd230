// menuBtn menuItems
function toggleMenu() {
    // console.log("It worked!");
    document.getElementById("menuItems").classList.toggle("open");
    document.getElementById("webName").classList.toggle("showOff");
    document.getElementById("socialHeader").classList.toggle("showOff");
    document.getElementById("dayInfo").classList.toggle("showOff");
    document.getElementById("headerNav").classList.toggle("wideNav");
}

const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;