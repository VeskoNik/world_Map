function fill() {

    const body = document.querySelector('body');
      body.innerHTML = `    <video autoplay muted loop id="myVideo">
    <source src="arctic.mp4" type="video/mp4">
    </video>    `;
    const h1 = document.createElement("h1")
    h1.textContent = "Арктика";
    body.appendChild(h1)
    const section = document.createElement("section");
    section.classList.add('fade')
    const button = document.createElement("button");
    const img = document.createElement('img');
    setTimeout(() => {
        img.src = `arctic.jpg`        
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
        p.textContent = `Арктика (на гръцки: ἄρκτος, мечка) е северната полярна област на Земята, включваща краищата на материците Евразия и Северна Америка, почти целия Северен ледовит океан с островите (освен крайбрежните острови на Норвегия), а така също и прилежащите части на Атлантическия и Тихия океан. Южната граница на Арктика съвпада със северната граница на тундрата.

        Площ около 27 млн. кв. км. Понякога ограничават Арктика от юг със Северния полярен кръг (66° 33′ с. ш.), като в този случай нейната площ е 21 млн. кв. км. Площта на моретата и океаните е 14,8 млн. кв. км, а максималната дълбочина е 5571 м.`        
        section.appendChild(p)
        const button2 = document.createElement('button');
        button2.textContent = 'Още информация'
        button2.addEventListener('click', ()=>{
            window.open('https://bg.wikipedia.org/wiki/Арктика','_blank')
        })
        body.appendChild(button2)
    }
}
