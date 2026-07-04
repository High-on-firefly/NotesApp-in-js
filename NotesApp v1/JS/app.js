// #region DOM-ELEMENTS
    const sidebar = document.getElementById('sidebar');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const sidebarNav = document.getElementById('sidebar-nav');
    const dropdowns = document.querySelectorAll('.dropdown');
    const selects = document.querySelectorAll('.select');
// #endregion
    sidebarCloseBtn.addEventListener('click', ()=>{
        sidebar.classList.add('close');
    })
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
            console.log(select);
            const selectToggle = e.target.closest('.select-toggle');
            if(!selectToggle) return;
            select.classList.toggle('active');
        });
    });


