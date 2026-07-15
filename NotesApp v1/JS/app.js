import { demoNotes } from "./demoNotes.js";

// #region DOM-ELEMENTS
    const sidebar = document.getElementById('sidebar');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const sidebarOpenBtn = document.getElementById('sidebar-open-btn');

    const sidebarNav = document.getElementById('sidebar-nav');
    const dropdowns = document.querySelectorAll('.dropdown');
    const selects = document.querySelectorAll('.select');

    const noteList = document.getElementById('notes-list');
    const mainContent = document.getElementById('main-content');
    
    //note panel elements
    const notePanel = {
        element: document.getElementById('note-panel'),
        titleInput: document.getElementById('note-panel-title-input'),
        date: document.getElementById('note-panel-date'),
        noteEditContent: document.getElementById('note-edit-content'),
        noteReadContent: document.getElementById('note-read-content'),
        modeSwitch: document.getElementById('note-mode-switch'),
        editSwitch: document.getElementById('edit-switch-btn'),
        previewSwitch: document.getElementById('preview-switch-btn'),
        closeBtn: document.getElementById('note-panel-close-btn')
    }

    const newNoteBtn = document.getElementById('new-note-btn');
// #endregion
// #region STATE
    let selectedNote = null;
    let selectedNoteObj = null;
    const noteObj = {
        id: crypto.randomUUID(),
        notebookId: null,
        tags: ['test'],
        createdAt: new Date().toISOString(),
        updatedAt: null,
        compiledAt: null,
        title: "Note Obj Title Example",
        source: "## This is a test note obj",
        compiledHTML: "<h2>This is a test note obj</h2>"
    }
    const noteArry = demoNotes;
    // noteArry.push(noteObj);

// #endregion
// #region EVENTS
    //sidebar eventss
    sidebarCloseBtn.addEventListener('click', ()=>{
        sidebar.classList.add('close');
        sidebarOpenBtn.classList.add('visible');
    })
    sidebarOpenBtn.addEventListener('click', ()=>{
        sidebar.classList.remove('close');
        sidebarOpenBtn.classList.remove('visible');
    })

    //Collective Element Events
    sidebarNav.addEventListener('click', (e)=>{
        const clickedBtn = e.target.closest('.ui-btn');
        if(!clickedBtn) return;
        clickedBtn.classList.toggle('active');
    });
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', (e)=>{
            const dropdownToggle = e.target.closest('.dropdown-toggle');
            if(!dropdownToggle) return;
            dropdown.classList.toggle('active');
        });
    })
    selects.forEach((select) =>{
        select.addEventListener('click', (e)=>{
            const selectToggle = e.target.closest('.select-toggle');
            if(selectToggle){
                select.classList.toggle('active');
                return;
            }
        });
    });
    noteList.addEventListener('click', (e)=>{
        const clickedNote = e.target.closest('.note-item');
        if(!clickedNote) return;
        openNotePanel(clickedNote);
    })
    notePanel.modeSwitch.addEventListener('click', (e)=>{
        const clickedBtn = e.target.closest('.switch-btn');
        if(!clickedBtn) return;

        const activeClickedBtn = notePanel.modeSwitch.querySelector('.switch-btn.active');
        if(activeClickedBtn === clickedBtn) return;

        if(activeClickedBtn){
            activeClickedBtn.classList.remove('active');
        }

        clickedBtn.classList.add('active');
    })
    notePanel.editSwitch.addEventListener('click', ()=>{
        notePanel.element.classList.add('is-edit');
    })
    notePanel.previewSwitch.addEventListener('click', ()=>{
        notePanel.element.classList.remove('is-edit');
    })

    notePanel.closeBtn.addEventListener('click', ()=>{
        notePanel.element.classList.remove('is-open');
    })
    newNoteBtn.addEventListener('click', ()=>{
        console.log('popup called')
    })
// #endregion
// #region FUNCTIONS
    function initApp(){
        sidebarCloseBtn.click();
    }
    function findNoteObj(noteItem){
        return noteArry.find((noteObj) =>{
           return noteObj.id === noteItem.dataset.noteId;
        })
    }
    function openNotePanel(noteItem){
        const noteRect = noteItem.getBoundingClientRect();
        const mainReact = mainContent.getBoundingClientRect();

        let moveY = (noteRect.top - mainReact.top)- 10;
        let moveX = (noteRect.left - mainReact.left)- 10;
        let scaleX = noteRect.width/(mainReact.width - 20);
        let scaleY = noteRect.height/(mainReact.height - 20);

        notePanel.element.style.setProperty('--move-x', `${moveX}px`);
        notePanel.element.style.setProperty('--move-y', `${moveY}px`);
        notePanel.element.style.setProperty('--scale-x', `${scaleX}`);
        notePanel.element.style.setProperty('--scale-y', `${scaleY}`);

        let noteObj = findNoteObj(noteItem);
        notePanel.titleInput.value = noteObj.title;
        notePanel.date.textContent = noteObj.createdAt;
        notePanel.noteEditContent.value = noteObj.source;
        notePanel.noteReadContent.innerHTML = noteObj.compiledHTML;
        
        notePanel.element.classList.add('is-start');
        notePanel.element.classList.remove('is-open');

        notePanel.element.offsetHeight;

        notePanel.element.classList.remove('is-start');
        notePanel.element.classList.add('is-open');
        notePanel.previewSwitch.click();
    }
    function renderNote(noteObj){
        const noteItem = document.createElement('div');
        noteItem.classList.add("note-item");
        noteItem.dataset.noteId = noteObj.id;

        noteItem.innerHTML = `
            <span class="note-icon">
                <svg class="ui-icon-small">
                    <use href="#icon_note"></use>
                </svg>
            </span>
            <div class="note-details">
                <h3 class="note-title">Note Title Example</h3> 
                <p class="note-date">01 July 2026 10:41 am</p>
            </div>
            <button class="note-delete-btn">
                <svg class="ui-icon-big">
                    <use href="#icon_cancel"></use>
                </svg>
            </button>`;

        noteItem.querySelector('.note-title').textContent = noteObj.title;
        noteItem.querySelector('.note-date').textContent = noteObj.createdAt;
        return(noteItem);
    }
    function renderAllNotes(noteArry){
        noteArry.forEach((noteObj) =>{
            noteList.appendChild(renderNote(noteObj));
        });
    }
// #endregion

initApp();
renderAllNotes(noteArry);