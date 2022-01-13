const btn = {
    weight : document.querySelector('#weight'),
    italics : document.querySelector('#italics'),
    underline : document.querySelector('#underline'),
    link : document.querySelector('#link')
}
let text = {
    entr : document.querySelector('#textarea'),
    out : document.querySelector('#out')
}

    let content,
        remake,
        symbolindex,
        symbolLenght,
        insert;
    text.entr.addEventListener('keyup',function(e){
        text.out.innerHTML = text.entr.value;
    });
    
    text.entr.addEventListener('select',function(e){
        content = document.getSelection().toString();
        remake = text.out.value.match(`${content}`);
        symbolindex = remake['index'];
        symbolLenght = remake[0].length;
        insert = symbolindex + symbolLenght;
        console.log(symbolLenght, symbolindex, insert)
    });

    function clickBtn(btns,skill){
        btns.addEventListener('click',() => skill())
    }
    
    let o = ['f','g','l',' ','j',' ','h'];

    let u = o.join('');
    console.log(u)