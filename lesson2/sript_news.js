buttons = document.querySelectorAll('button');



removeBlock = (event) => {
    //console.log(event.target);
    rows_news = document.querySelectorAll(event.target.dataset.name);
    rows_news.forEach(el_new => {
        el_new.remove();
    })
}

buttons.forEach(button => {
    button.addEventListener('click', removeBlock);
})