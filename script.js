    const simpleButtons = document.querySelectorAll('.simpleButtons'),
          cl = document.querySelectorAll('.cl');  

    const buttons = {
        link : document.querySelector('#link'),
        sp : document.querySelector('#sp'),
        code : document.querySelector('#code'),
        delete : document.querySelector('#delete'),
        undo : document.querySelector('#undo')
    }

    let select,
        editor = rich.document;
    
    function designMode(){
        editor.designMode = 'On';
        editor.body.setAttribute('spellcheck','false');
    }

    function setStyle(style){
        editor.execCommand(style);
    }
    
    rich.document.addEventListener('keydown',function(e){
        if(e.keyCode == 13){
            editor.execCommand('insertLineBreak', false, null);
            e.preventDefault();
        }
    });
        editor.onselectionchange = function(){
            select = editor.getSelection();
        }

            for(let btn of simpleButtons){
                btn.addEventListener('click',function(){
                    let data = btn.getAttribute('data-style');
                    setStyle(data);
                });
            }

        const createLinkActive = () => {
            document.querySelector('.createlink').classList.add('active');
            document.querySelector('.editor_input').classList.add('hidden')
        };

        const createLinkHidden = () => {
            document.querySelector('.createlink').classList.remove('active');
            document.querySelector('.editor_input').classList.remove('hidden');
        };

        const visibleCode = () => document.querySelector('.codearea').classList.toggle('active');

        let codeValue = () => {
            let outH = editor.body.innerHTML;
            let slesh = /<br>/gi;
            let n = outH.replace(slesh, '<br>\n');
            let e = n.replace(/&nbsp;|&lt;|&gt;|&amp;/gi,'');
            document.querySelector('.codearea').value = e;
        }

        buttons.link.addEventListener('click',function(e){
                createLinkActive();
                document.querySelector('.createlink').addEventListener('keydown',(e)=>{
                    switch(e.keyCode) {
                        case 13 :
                            let joinLink = document.querySelector('.createlink').value;
                            editor.execCommand('createLink',false,`${joinLink}`);
    
                            createLinkHidden();
                            break;
                    }
                });
        });

        buttons.code.addEventListener('click',function(){

            if(document.querySelector('.codearea').classList.contains('active')){
                editor.body.innerHTML = document.querySelector('.codearea').value;
                console.log('active')
            }else{
                document.querySelector('.codearea').value = editor.body.innerHTML
            }
            
            visibleCode();
        });

        buttons.sp.addEventListener('click',function(){
            let content = select.getRangeAt(0);
            console.log(select)
            if(content.commonAncestorContainer.data !== ''){
                editor.execCommand('insertHTML',false,`<span class="tg-spoiler">${content}</span>`)
            }
        });

        buttons.delete.addEventListener('click',codeValue);

        buttons.undo.addEventListener('click',codeValue);
        