function fill() {

    const body = document.querySelector('body');
      body.innerHTML = `    <video autoplay muted loop id="myVideo">
    <source src="antarctic.mp4" type="video/mp4">
    </video>    `;
    const h1 = document.createElement("h1")
    h1.textContent = "Западни антарктически ледници";
    body.appendChild(h1)
    const section = document.createElement("section");
    section.classList.add('fade')
    const button = document.createElement("button");
    const img = document.createElement('img');
    setTimeout(() => {
        img.src = `antarctic.png`        
        section.appendChild(img)
        body.appendChild(section)
    }, 1000);
    setTimeout(() => {
        
        
        button.textContent = 'Научи повече'
        button.addEventListener('click', onClick)
        body.appendChild(button)

    }, 5000)
    function onClick(){
        button.remove();
        img.remove();
        const p = document.createElement('p');
        p.textContent = `Западният шелфов ледник (на немски: West-Schelfeis; на английски: West Ice Shelf) е деветият по големина (16 370 km²) шелфов ледник край бреговете на Антарктида. Заема част от крайбрежието на Източна Антарктида, край Брега Леополд и Астрид на Земя принцеса Елизабет, в акваторията на море Съдружество на запад и акваторията на море Дейвис на север и изток в Индоокеанския сектор на Южния океан. Простира се на протежение от 288 km между 81°20’ и.д. (залива Бариера) на запад и 87°40’ и.д. (залива Позадовски) на изток. Площ 16 370 km² (заедно с постоянно изменящата си конфигурация и територия северен полуостров Челюскинци площта му нараства до 26 010 km²), обем 9350 km³. От север в него се вдават заливите Николаев и Карелин. `       
        
        section.appendChild(p)
        const button2 = document.createElement('button');
        button2.textContent = 'Още информация'
        button2.addEventListener('click', ()=>{
            window.open('https://bg.wikipedia.org/wiki/Западен_шелфов_ледник','_blank')
        })
        body.appendChild(button2)
    }
}
