function fill() {
    const body = document.querySelector('body');
    body.innerHTML = `
    <video autoplay muted loop id="myVideo">
    <source src="coralReefs.mp4" type="video/mp4">
    </video>    `;
    const h1 = document.createElement("h1")
    h1.textContent = "Коралови Рифове";
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

        
            img.src = `corals.jpg` 
            section.appendChild(img)
            body.appendChild(section)
            button.textContent = 'Научи повече'
            button.addEventListener('click', onClick)
            body.appendChild(button)

  
    }
    function onClick(){
       
        img.remove();
        p.textContent = `Коралов риф се нарича геологическа структура, образувана от колонии от коралови полипи и някои видове водорасли, можещи да извличат калциев карбонат от морската вода. Образуват се в плитчините на тропическите морета. Общата площ на кораловите рифове в света превишава 27 млн. км2. Намират се основно в Тихия и Индийския океан.

        Коралите отделят твърд карбонатен екзоскелет, който поддържа и защитава корала. Повечето рифове растат най-добре в топли, плитки, чисти, слънчеви и вълнисти води. Кораловите рифове се образуват преди около 485 милиона години, в зората на ранен ордовик, замествайки микробните рифове на камбрия.
        
        Плитките коралови рифове образуват едни от най-разнообразните екосистеми на Земята. Те заемат по-малко от 0,1% от общата площ на световните океани, но представляват дом за поне 25% от всички морски видове, включително риби, мекотели, червеи, ракообразни, бодлокожи, водни гъби, опашнохордови и мешести. Кораловите рифове процъфтяват в океански води с малко хранителни вещества. Срещат се най-често в плитки тропични води, но дълбоководни и студеноводни коралови рифове също съществуват, макар и в по-малък мащаб.`        
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