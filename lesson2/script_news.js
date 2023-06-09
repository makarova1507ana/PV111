buttons = document.querySelectorAll('.btnRemove');
button_add_news = document.querySelector('.addNews');


function addNews() {
    tr = document.createElement('tr');
    p = document.createElement('p');
    document.querySelector('tbody').append(tr);
    tr.outerHTML = '<tr class="news3"><th>Новость 3</th><td><button data-name="news1" class="btnRemove">delete</button></td></tr>'
        // document.querySelector('table').append(td);

}

removeBlock = (event) => {
    //console.log(event.target);
    rows_news = document.querySelectorAll("." + event.target.dataset.name); //tr .news1

    rows_news.forEach(el_new => {
        el_new.remove();
    })
}

buttons.forEach(button => {
    button.addEventListener('click', removeBlock);
})
button_add_news.addEventListener('click', addNews);