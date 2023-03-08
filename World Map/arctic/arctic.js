function fill() {

    const body = document.querySelector('body');
    
    const h1 = document.createElement("h1")
    h1.textContent = "Арктика";
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
  
        
            img.src = `arctic.jpg` 
            section.appendChild(img)
            body.appendChild(section)
            button.textContent = 'Научи повече'
            button.addEventListener('click', onClick)
            body.appendChild(button)
    
  
    }
    function onClick(){
        button.remove();
        img.remove();
    
        p.textContent = `Арктика (на гръцки: ἄρκτος, мечка) е северната полярна област на Земята, включваща краищата на материците Евразия и Северна Америка, почти целия Северен ледовит океан с островите (освен крайбрежните острови на Норвегия), а така също и прилежащите части на Атлантическия и Тихия океан. Южната граница на Арктика съвпада със северната граница на тундрата.

        Площ около 27 млн. кв. км. Понякога ограничават Арктика от юг със Северния полярен кръг (66° 33′ с. ш.), като в този случай нейната площ е 21 млн. кв. км. Площта на моретата и океаните е 14,8 млн. кв. км, а максималната дълбочина е 5571 м.`        
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
