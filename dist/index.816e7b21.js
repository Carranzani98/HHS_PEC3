window.addEventListener('load', ()=>{
    //Evento para desplegar la barra de navegación del menú
    const navButton = document.getElementById('responsive-bars');
    navButton.addEventListener('click', ()=>{
        const navItems = document.querySelectorAll('header nav ul li');
        console.log(navItems);
        navItems.forEach((navItem, index)=>{
            if (index != -1) navItem.classList.toggle('responsive-hidden');
        });
    });
    //Intercambio entre pestañas de categorías
    const categoryPersonalTab = document.getElementById('category-tab-personal');
    const categoryExtrasTab = document.getElementById('category-tab-extras');
    const categoryFilmsTab = document.getElementById('category-tab-films');
    const categoryPersonalContainer = document.getElementById('category-personal');
    const categoryExtrasContainer = document.getElementById('category-extras');
    const categoryFilmsContainer = document.getElementById('category-films');
    if (categoryPersonalTab) categoryPersonalTab.addEventListener('click', ()=>{
        categoryPersonalTab.classList.add('selected');
        categoryExtrasTab.classList.remove('selected');
        categoryFilmsTab.classList.remove('selected');
        categoryPersonalContainer.style.display = "block";
        categoryExtrasContainer.style.display = "none";
        categoryFilmsContainer.style.display = "none";
    });
    if (categoryExtrasTab) categoryExtrasTab.addEventListener('click', ()=>{
        categoryPersonalTab.classList.remove('selected');
        categoryExtrasTab.classList.add('selected');
        categoryFilmsTab.classList.remove('selected');
        categoryPersonalContainer.style.display = "none";
        categoryExtrasContainer.style.display = "block";
        categoryFilmsContainer.style.display = "none";
    });
    if (categoryFilmsTab) categoryFilmsTab.addEventListener('click', ()=>{
        categoryPersonalTab.classList.remove('selected');
        categoryExtrasTab.classList.remove('selected');
        categoryFilmsTab.classList.add('selected');
        categoryPersonalContainer.style.display = "none";
        categoryExtrasContainer.style.display = "none";
        categoryFilmsContainer.style.display = "block";
    });
});
window.addEventListener('click', (e)=>{
    //Evento para saber si se ha hecho fuera de la barra de navegación
    const header = document.getElementsByTagName('header')[0];
    let target = e.target;
    do {
        if (target == header) return;
        target = target.parentNode;
    }while (target)
    //Ocultar elementos de la barra de navegación
    const navItems = document.querySelectorAll('header nav ul li');
    navItems.forEach((navItem, index)=>{
        if (index != -1) navItem.classList.add('responsive-hidden');
    });
});

//# sourceMappingURL=index.816e7b21.js.map
