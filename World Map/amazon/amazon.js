function fillBody() {

    const body = document.querySelector('body');
    body.innerHTML = `
    <video autoplay muted loop id="myVideo">
    <source src="video.mp4" type="video/mp4">
    </video>    `;
    const h1 = document.createElement("h1")
    h1.textContent = "Амазонска екваториална гора";
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
     
        
            img.src = `amazon.webp` 
            section.appendChild(img)
            body.appendChild(section)
            button.textContent = 'Научи повече'
            button.addEventListener('click', onClick)
            body.appendChild(button)
        
  
    }
 
    function onClick(){
        img.remove()
        
        p.textContent = `Амазонската екваториална гора или просто Амазония (на испански: Amazonia, на португалски: Amazônia, Floresta Amazônica или Selva Amazônica), често наричана Амазонска джунгла, е огромен горски пояс от екваториални гори, разположен във водосборния басейн на река Амазонка в Южна Америка.

        Заема територия от около 5,5 милиона km², което я прави най-обширната екваториална гора на планетата. Обхваща територии от 8 държави – Бразилия, Колумбия, Перу, Венецуела, Еквадор, Боливия, Гвиана и Суринам, както и на Френска Гвиана (със статут на отвъдморски департамент на Република Франция).
        
        Амазонската екваториална гора притежава най-голямото биоразнообразие на планетата. Значителна част от територията и все още е слабо проучена. През Амазония протичат някои от най-дългите и пълноводни реки на Земята, сред които и най-пълноводната – Амазонка, която е дала наименованието на целия регион. Тя е и най-голямата гора в света.`
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
