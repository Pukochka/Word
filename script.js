const btn = {
    weight : document.querySelector('#weight'),
    italics : document.querySelector('#italics'),
    underline : document.querySelector('#underline'),
    link : document.querySelector('#link'),
    redact : document.querySelector('#redact'),
    unred : document.querySelector('#addRed')
}
let text = {
    entr : document.querySelector('#textarea'),
    oiu : document.querySelector('#out'),
    out : document.querySelector('#in')
}
const tags = {
    istart : '<i>',
    iend : '</i>',
    bstart : '<b>',
    bend : '</b>',
    astart : '<a href="#">',
    aend : '</a>',
    ustart : '<span class="underline">',
    uend : '</span>',
}
    

    let content,
        remake,
        symbolindex,
        symbolLenght,
        insert,
        total,
        o;
        

    text.entr.addEventListener('keyup',function(e){
        text.out.innerHTML = text.entr.value;
    });
    
    text.oiu.addEventListener('mouseup',function(e){
        
        content = window.getSelection().toString();
        
        remake = text.out.innerHTML.match(`${content}`);
        
        
        symbolindex = remake['index'];
        symbolLenght = remake[0].length;

        insert = symbolindex + symbolLenght + 1;
        total = [...text.out.innerHTML];

        console.log(symbolLenght, symbolindex, insert,total);
        
    });

    function edit(start,end){

        total.splice(symbolindex,0,start);
        total.splice(insert,0,end);

        o = total.join('');

        text.out.innerHTML = o;
    }

    btn.redact.addEventListener('click',function(){
        document.querySelector('.buttons_main').classList.add('hidden');
        document.querySelector('.buttons_redaction').classList.add('active');
        text.entr.classList.add('tehidden');
        text.oiu.classList.add('active')
    });

    btn.unred.addEventListener('click',function(){
        document.querySelector('.buttons_main').classList.remove('hidden');
        document.querySelector('.buttons_redaction').classList.remove('active');
        text.entr.classList.remove('tehidden');
        text.oiu.classList.remove('active')
    });

    btn.italics.addEventListener('click',function(){
        edit(tags.istart,tags.iend)
    });
    btn.weight.addEventListener('click',function(){
        edit(tags.bstart,tags.bend)
    });
    btn.link.addEventListener('click',function(){
        edit(tags.astart,tags.aend)
    });
    btn.underline.addEventListener('click',function(){
        edit(tags.ustart,tags.uend)
    });