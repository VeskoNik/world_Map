function fill() {
    const body = document.querySelector('body');
    const h1 = document.createElement("h1")
    h1.textContent = "Пермафрост";
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
        
        
            img.src = `permafrost.png` 
            section.appendChild(img)
            body.appendChild(section)
            button.textContent = 'Научи повече'
            button.addEventListener('click', onClick)
            body.appendChild(button)

  
    }
    function onClick(){
        
        img.remove();
        p.textContent = `Вечна замръзналост (също трайно замръзнала земя) е най-горната част на земната кора на местата, където температура ѝ от минимум 2 години до хилядолетия не надвишава 0 °C.[1] В англоезичната литература понятието се среща като permafrost (срещано и на български като пермафрост), в руската като вечная мерзлота, което е въведено през 1927 г. от съветския изследовател М. И. Сумгин.

        Площта на вечната замръзналост е около 35 милиона km². Разпространена е в северните части на Америка (Аляска, Канада), Европа, Азия, островите в Северния ледовит океан[2]. Вечна замръзналост се среща и под вода, в континенталните шелфове на континентите около Северния ледовит океан, части от които са били суша по време на последния ледников период.[3] Възможно е да се открие вечна замръзналост и в по-малките географски ширини, но на по-висока надморска височина. През 2009 г. в планината Килиманджаро, близо до екватора е открита вечна замръзналост.[4] В зоната на трайно замръзналата земя подземните води са замръзнали, а дълбочината на замръзналата кора понякога е над 1500 m.[1]
        
        Вечната замръзналост заема около 24% от земната суша в северното полукълбо и съдържа 0,022% от общото количество вода. Значителна част от нея е следствие от последния ледников период, като в днешно време бавно се топи.[1] Към 2100 г. ще бъде 4 пъти по-малка на площ от сега.`       
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
