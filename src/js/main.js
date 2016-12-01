function scrollToPrice(){
    window.scrollTo(0, 655);
}

function scrollToReviews() {
    window.scrollTo(0, 1395);
}

function scrollToContacts() {
    window.scrollTo(0, 1950);
}

var loading = false;
function onLoad(){
    var scrollable = document.getElementById("scrollable");
    scrollable.removeChild(scrollable.lastChild);
    loading = false;
    var newContent = document.createElement("div");
    newContent.className = "after-scroll";
    scrollable.appendChild(newContent);
}

function getNewData(scrollable){
    var loader = document.createElement("div");
    loader.className = "loading";
    loader.innerHTML = "загрузка";
    scrollable.appendChild(loader);

    setTimeout(onLoad, 600);
}
function scroll(){
    if(loading) return false;
    var scrollable = document.getElementById("scrollable");
    var endPos = scrollable.scrollHeight - scrollable.clientHeight - scrollable.scrollTop;
    if(endPos === 0){
        loading = true;
        getNewData(scrollable);
    }
}