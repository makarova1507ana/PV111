buttons = document.querySelectorAll('.btnRemove');
button_add_news = document.querySelector('.addNews');
text_area=document.querySelector('textarea');
num_news = 2
function addNews() {

    tr = document.createElement('tr');
    p = document.createElement('p');
    document.querySelector('tbody').append(tr);
    num_news ++;
    tr.outerHTML = '<tr class="news'+String(num_news) +'"><th>Новость '+String(num_news) +'</th><td><button data-name="news'+String(num_news) +'" class="btnRemove">delete</button></td></tr>'
    tr = document.createElement('tr');
    tr.outerHTML = '  <tr class="news'+String(num_news)+'"><td><p>'+text_area.innerText+'</p></td></tr>'
        buttons = document.querySelectorAll('.btnRemove');
        buttons.forEach(button => {
            button.addEventListener('click', removeBlock);
        })
        console.log(buttons)

}

removeBlock = (event) => {
    //console.log(event.target);
    rows_news = document.querySelectorAll("." + event.target.dataset.name); //tr .news1

    rows_news.forEach(el_new => {
        el_new.remove();
    })
}


button_add_news.addEventListener('click', addNews);