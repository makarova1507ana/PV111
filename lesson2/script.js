button = document.querySelector('button');
let blocks;

function addBlock() {
    div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.display = 'inline-block';
    div.style.background = 'rgb(' + String(Math.floor(Math.random() * 255)) + ',' + String(Math.floor(Math.random() * 255)) + ',' + String(Math.floor(Math.random() * 255)) + ')'; //'#' + String(Math.floor(Math.random() * 999999));
    button.after(div);
    blocks = document.querySelectorAll('div');
    blocks.forEach(block => {
        block.addEventListener('click', removeBlock);
    })

}
removeBlock = (event) => {
    //console.log(event.target);
    event.target.remove();
}



button.addEventListener('click', addBlock);