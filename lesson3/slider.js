// buttonPrevious = document.getElementById('previousText');
buttonNext = document.getElementById('nextText');
text = document.querySelector('span');

counter=0
array_text = ['кот 1','кот 2','кот 3','кот 4']

function nextText(){
    //text.style.color ='red';
    counter++;
    if (counter >= array_text.length) {
        counter = 0;
    }
    text.innerHTML = array_text[counter]
}
function showNextText(){
    if (counter+1 >= array_text.length) {
        buttonNext.innerHTML = 'следующий текст (' + array_text[0] + ')'
    }
    else{
        buttonNext.innerHTML = 'следующий текст (' + array_text[counter+1] + ')'

    }
}
buttonNext.addEventListener('click', nextText);
buttonNext.addEventListener('click', showNextText);