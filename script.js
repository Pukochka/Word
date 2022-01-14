const btn = {
    weight : document.querySelector('#weight'),
    italics : document.querySelector('#italics'),
    underline : document.querySelector('#underline'),
    link : document.querySelector('#link'),
    redact : document.querySelector('#redact')
    
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
    
    text.entr.addEventListener('select',function(e){

        content = document.getSelection().toString();
        
        remake = text.entr.value.match(`${content}`);
        
        
        symbolindex = remake['index'];
        symbolLenght = remake[0].length;

        insert = symbolindex + symbolLenght + 1;
        total = [...text.out.textContent];

        // console.log(symbolLenght, symbolindex, insert,total);
        
    });

    


    function ital(){
        
        total.splice(symbolindex,0,tags.istart);
        total.splice(insert,0,tags.iend);
         o = total.join('');
        
        text.out.innerHTML = o;
        
       
    }
    function weit(){
        
        total.splice(symbolindex,0,tags.bstart);
        total.splice(insert,0,tags.bend);
         o = total.join('');
        
        text.out.innerHTML = o;
       
    }

    function lin(){
        
        total.splice(symbolindex,0,tags.astart);
        total.splice(insert,0,tags.aend);
         o = total.join('');
        
        text.out.innerHTML = o;
       
    }

    function under(){
        
        total.splice(symbolindex,0,tags.ustart);
        total.splice(insert,0,tags.uend);
         o = total.join('');
        
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

    btn.redact.addEventListener('click',function(){
        document.querySelector('.buttons_main').classList.add('hidden');
        document.querySelector('.buttons_redaction').classList.add('active');
        text.entr.classList.add('tehidden');
        text.oiu.classList.add('active')
    });