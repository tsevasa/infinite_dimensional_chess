const navpanel = document.getElementById("idc-nav-panel");
const text = document.getElementById("idc-text");

function onresizeFormatter(){
    if(window.innerWidth < 600){
        navpanel.style.visibility = 'hidden';
        text.style.marginLeft = 0;
        text.style.marginRight = 0;
    } else{
        navpanel.style.visibility = 'visible';
        text.style.marginLeft = '25%';
        text.style.marginRight = '25%';
    }
}

onresizeFormatter();
window.onresize = onresizeFormatter;
addEventListener("resize", (event) => {});