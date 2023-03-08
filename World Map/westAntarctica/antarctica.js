function fill() {
    const body = document.querySelector('body');
    const h1 = document.createElement("h1")
    h1.textContent = "Западни антарктически ледници";
    body.appendChild(h1)
    const backBtn = document.createElement('button');
    backBtn.id = 'backBtn';
    backBtn.textContent = 'Назад';
    body.appendChild(backBtn)
    backBtn.addEventListener('click', backFunc);
    const img = document.createElement('img');
    const section = document.createElement("section");
    section.classList.add('fade')
    const button = document.createElement("button");
    const p = document.createElement('p');
    const button2 = document.createElement('button');
    button2.id = 'moreBtn'
    createEl();
    function createEl(){
      
        
            img.src = `antarctic.png` 
            section.appendChild(img)
            body.appendChild(section)
            button.textContent = 'Научи повече'
            button.addEventListener('click', onClick)
            body.appendChild(button)
    
    }
    function onClick(){
        
        img.remove();
       p.textContent = `Западният шелфов ледник (на немски: West-Schelfeis; на английски: West Ice Shelf) е деветият по големина (16 370 km²) шелфов ледник край бреговете на Антарктида. Заема част от крайбрежието на Източна Антарктида, край Брега Леополд и Астрид на Земя принцеса Елизабет, в акваторията на море Съдружество на запад и акваторията на море Дейвис на север и изток в Индоокеанския сектор на Южния океан. Простира се на протежение от 288 km между 81°20’ и.д. (залива Бариера) на запад и 87°40’ и.д. (залива Позадовски) на изток. Площ 16 370 km² (заедно с постоянно изменящата си конфигурация и територия северен полуостров Челюскинци площта му нараства до 26 010 km²), обем 9350 km³. От север в него се вдават заливите Николаев и Карелин. `       
       button.remove();
       button2.textContent = 'Още информация';
       
           section.appendChild(p);
           body.appendChild(button2)
       
       button2.addEventListener('click' , ()=>{
           location.href = 'https://bg.wikipedia.org/wiki/%D0%90%D0%BC%D0%B0%D0%B7%D0%BE%D0%BD%D1%81%D0%BA%D0%B0_%D0%B5%D0%BA%D0%B2%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%D0%BD%D0%B0_%D0%B3%D0%BE%D1%80%D0%B0'
       })

    }
    
    function backFunc(){

        let target = document.getElementById('moreBtn');
        if(target != null){
            p.remove();
            button2.remove();
            createEl();
            
        } else{
            location.href = '../index.html'
        }
    }
}
