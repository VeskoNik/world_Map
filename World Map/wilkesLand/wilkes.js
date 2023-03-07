function fill() {

    const body = document.querySelector('body');
      body.innerHTML = `    <video autoplay muted loop id="myVideo">
    <source src="wilkes.mp4" type="video/mp4">
    </video>    `;
    const h1 = document.createElement("h1")
    h1.textContent = "Уилкс Земя";
    body.appendChild(h1)
    const section = document.createElement("section");
    section.classList.add('fade')
    const button = document.createElement("button");
    const img = document.createElement('img');
    setTimeout(() => {
        img.src = `wilkes.jpg`        
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
        p.textContent = `Земя Уилкс (на английски: Wilkes Land) е територия от Източна Антарктида, простираща се между 65°45’ и 67°10’ ю.ш. и 100°30’ и 136°10’ и.д., покрай Индоокеанския сектор на Южния океан. На запад граничи със Земя кралица Мери, а на изток – със Земя Адели. Крайбрежните и участъци от запад на изток носят названията Бряг Нокс, Бряг Бад, Бряг Сабрина, Бряг БАНЗАРЕ и Бряг Клари.Бреговата линия на Земя Уилкс, с дължина около 1800 km, в общи линии е слабо разчленена, като западната ѝ част попада в акваторията на море Моусън. На запад се простира големия шелфов ледник Шакълтън, а в централните части – шелфовите ледници Московски университет и Воейков. Около 110° и.д. е разположен големия залив Винсенс, а на 128° и.д. – залива Порпес. Крайбрежните острови са малко, основно в крайната западна част, „зазидани“ в шелфовия ледник Шакълтън – Мил, Новосилски, Боумън.`

        section.appendChild(p)
        const button2 = document.createElement('button');
        button2.textContent = 'Още информация'
        button2.addEventListener('click', ()=>{
            window.open('https://bg.wikipedia.org/wiki/Земя_Уилкс','_blank')
        })
        body.appendChild(button2)
    }
}
