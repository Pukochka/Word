    const btn = {
        bold : document.querySelector('#bold'),
        italic : document.querySelector('#italic'),
        line : document.querySelector('#line'),
        link : document.querySelector('#link'),
        code : document.querySelector('#code'),
        sp : document.querySelector('#sp')
    }
    let text = {
        outCode : document.querySelector('#textarea'),
        editor : document.querySelector('#editor')
    }
    const tags = {
        istart : '<i>',
        iend : '</i>',
        bstart : '<b>',
        bend : '</b>',
        astart : '<a href="#">',
        aend : '</a>',
        lstart : '<span class="line">',
        lend : '</span>',
    }

    let content,
        selection,
        start,
        end;

        let i =0;
    
    
    document.onselectionchange = function() {
        selection = document.getSelection();
        
        
        
    };
    function setStyle(start,end){
        if(text.editor.innerHTML == '' ){return}
        let { startOffset , endOffset} = selection.getRangeAt(i);
        console.log(startOffset,endOffset)
        let inner = [...text.editor.innerHTML];
        inner.splice(startOffset,0,start);
        inner.splice(endOffset + 1  ,0,end);
        
        let total = inner.join('');
        
        text.editor.innerHTML = total;
        selection.removeAllRanges()
    }
    
    btn.bold.addEventListener('click',function(){
        setStyle(tags.bstart,tags.bend)
    }) ;
    btn.link.addEventListener('click',function(){
        setStyle(tags.astart,tags.aend)
    }) ;
//     btn.sp.addEventListener('click',function(){
//         setStyle(tags.bstart,tags.bend)
//    }) ;
    btn.line.addEventListener('click',function(){
        setStyle(tags.lstart,tags.lend)
    }) ;
    btn.italic.addEventListener('click',function(){
        setStyle(tags.istart,tags.iend)
    }) ;