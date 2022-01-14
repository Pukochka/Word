const btn = {
    weight : document.querySelector('#weight'),
    italics : document.querySelector('#italics'),
    underline : document.querySelector('#underline'),
    link : document.querySelector('#link')
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
        total;
        

    text.entr.addEventListener('keyup',function(e){
        text.out.innerHTML = text.entr.value;
    });
    
    text.entr.addEventListener('select',function(e){

        content = document.getSelection().toString();
        
        remake = text.entr.value.match(`${content}`);
        
        
        symbolindex = remake['index'];
        symbolLenght = remake[0].length;

        insert = symbolindex + symbolLenght + 1;
        total = [...text.out.innerText];

        // console.log(symbolLenght, symbolindex, insert,total);
        
    });

    


    function ital(){
        
        total.splice(symbolindex,0,tags.istart);
        total.splice(insert,0,tags.iend);
        let o = total.join('');
        text.out.innerHTML = o;
        
       
    }
    function weit(){
        
        total.splice(symbolindex,0,tags.bstart);
        total.splice(insert,0,tags.bend);
        let o = total.join('');
        text.out.innerHTML = o;
       
    }

    function lin(){
        
        total.splice(symbolindex,0,tags.astart);
        total.splice(insert,0,tags.aend);
        let o = total.join('');
        text.out.innerHTML = o;
       
    }

    function under(){
        
        total.splice(symbolindex,0,tags.ustart);
        total.splice(insert,0,tags.uend);
        let o = total.join('');
        text.out.innerHTML = o;
       
    }

    btn.italics.addEventListener('click',function(){
        ital();
    });
    btn.weight.addEventListener('click',function(){
        weit();
    });
    btn.link.addEventListener('click',function(){
        lin();
    });
    btn.underline.addEventListener('click',function(){
        under();
    });