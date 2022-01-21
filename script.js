    const simpleButtons = document.querySelectorAll('.simpleButtons');

    const buttons = {
        link : document.querySelector('#link'),
        sp : document.querySelector('#sp'),
        code : document.querySelector('#code'),
        delete : document.querySelector('#delete'),
        undo : document.querySelector('#undo')
    }

    let select,
        outH,
        editor = rich.document,
        inner;
    
    function designMode(){
        editor.designMode = 'On';
        editor.body.style.wordWrap = 'break-word';
        // editor.body.style.fontFamily = 'sans-serif';
        editor.body.setAttribute('spellcheck','false');
        editor.body.setAttribute('contenteditable','true');
        editor.execCommand('defaultParagraphSeparator', false, "p");
    }

    function setStyle(style){
        editor.execCommand(style);
    }

    function editP(){
        let i = 0;
        editor.body.addEventListener('focus',function(){
            if(i > 0){return}

                let pi = document.createElement('p');
                pi.innerHTML = '&nbsp;';
                this.append(pi);

                i++;
        });
    }
    
    editP();
        
        editor.onselectionchange = function(){
            select = editor.getSelection();
            console.log(select)
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
            outH = editor.body.innerHTML;
            let n = outH.replace(/&nbsp;/gi, '');
            document.querySelector('.codearea').value = n;
        }

        buttons.link.addEventListener('click',function(e){
            createLinkActive();
            document.addEventListener('keydown',(e)=>{
                switch(e.keyCode) {
                    case 13 :
                        let joinLink = document.querySelector('.createlink').value;
                        editor.execCommand('createLink',false,joinLink);

                        createLinkHidden();
                        break;
                }
            });
        });

        buttons.code.addEventListener('click',function(){
            
            codeValue();
        
            document.addEventListener('keydown',() => {editor.body.innerHTML = document.querySelector('.codearea').value})
            
            visibleCode();
        });

        buttons.sp.addEventListener('click',function(){
            let i = 0, content = select.getRangeAt(i).toString();
            
            editor.execCommand('insertHTML',false,`<span class="tg-spoiler">${content}</span>`)
        });

        buttons.delete.addEventListener('click',codeValue);

        buttons.undo.addEventListener('click',codeValue);
    
