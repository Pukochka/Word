    const simpleButtons = document.querySelectorAll('.simpleButtons');

    const buttons = {
        link : document.querySelector('#link'),
        sp : document.querySelector('#sp'),
        code : document.querySelector('#code')
    }

    let select;
    
    function designMode(){
        rich.document.designMode = 'On';
        rich.document.body.style.wordWrap = 'break-word';
        rich.document.body.style.fontFamily = 'sans-serif';
        rich.document.body.setAttribute('spellcheck','false');
        rich.document.body.setAttribute('contenteditable','true');
    }

    function setStyle(style){
        rich.document.execCommand(style);
    }

        rich.document.onselectionchange = function(){
            select = rich.document.getSelection();
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

        const visibleCode = () => document.querySelector('.codearea').classList.toggle('active')

        buttons.link.addEventListener('click',function(e){
            createLinkActive();
            document.addEventListener('keydown',(e)=>{
                switch(e.keyCode) {
                    case 13 :
                        let joinLink = document.querySelector('.createlink').value;
                        rich.document.execCommand('createLink',false,joinLink);
                        createLinkHidden();
                        break;
                }
            });
        });

        buttons.code.addEventListener('click',function(e){

            let outH = rich.document.body.innerHTML;
            document.querySelector('.codearea').textContent =`<p>${outH}</p>`;

            document.addEventListener('keydown',function(){
                rich.document.body.innerHTML = document.querySelector('.codearea').value;
            })
            visibleCode();
        });

        buttons.sp.addEventListener('click',function(){
            let i = 0 ;
            let content = select.getRangeAt(i).toString();
            
            rich.document.execCommand('insertHTML',false,`<span class="tg-spoiler">${content}</span>`)
        });
        
