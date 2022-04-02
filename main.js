window.onscroll = () => {
    if(window.scrollY < 10 && window.location.href.includes("#")) {
        history.replaceState({}, '', "/");
    }
}