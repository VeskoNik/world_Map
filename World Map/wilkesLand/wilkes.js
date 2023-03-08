function fill() {
    const body = document.querySelector('body');
    body.innerHTML = `
    <video autoplay muted loop id="myVideo">
    <source src="wilkes.mp4" type="video/mp4">
    </video>    `;
    const h1 = document.createElement("h1")
    h1.textContent = "Уилкс Земя";
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
      
            img.src = `wilkes.jpg` 
            section.appendChild(img)
            body.appendChild(section)
            button.textContent = 'Научи повече'
            button.addEventListener('click', onClick)
            body.appendChild(button)
     
  
    }
    function onClick(){
        
        img.remove();
     p.textContent = `Земя Уилкс (на английски: Wilkes Land) е територия от Източна Антарктида, простираща се между 65°45’ и 67°10’ ю.ш. и 100°30’ и 136°10’ и.д., покрай Индоокеанския сектор на Южния океан. На запад граничи със Земя кралица Мери, а на изток – със Земя Адели. Крайбрежните и участъци от запад на изток носят названията Бряг Нокс, Бряг Бад, Бряг Сабрина, Бряг БАНЗАРЕ и Бряг Клари.Бреговата линия на Земя Уилкс, с дължина около 1800 km, в общи линии е слабо разчленена, като западната ѝ част попада в акваторията на море Моусън. На запад се простира големия шелфов ледник Шакълтън, а в централните части – шелфовите ледници Московски университет и Воейков. Около 110° и.д. е разположен големия залив Винсенс, а на 128° и.д. – залива Порпес. Крайбрежните острови са малко, основно в крайната западна част, „зазидани“ в шелфовия ледник Шакълтън – Мил, Новосилски, Боумън.`
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