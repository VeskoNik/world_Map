function fill() {

    const body = document.querySelector('body');
      body.innerHTML = `    <video autoplay muted loop id="myVideo">
    <source src="greenland.mp4" type="video/mp4">
    </video>    `;
    const h1 = document.createElement("h1")
    h1.textContent = "Ледниците на Гренландия";
    body.appendChild(h1)
    const section = document.createElement("section");
    section.classList.add('fade')
    const button = document.createElement("button");
    const img = document.createElement('img');
    setTimeout(() => {
        img.src = `greenland.jpeg`        
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
        p.textContent = `Гренландия (на гренландски: Kalaallit Nunaat; на датски: Grønland; букв. на български: „Земя на гренландците“, „Зелена земя“) е самоуправляваща се провинция, намираща се между Северния ледовит океан и Атлантическия океан. Тя представлява арктическа островна държава и е част от континента Северна Америка както в географски, така и в етнически смисъл. В политически и исторически план Гренландия е много по-тясно свързана с Европа и по-специално с Исландия, Дания и Норвегия. Страната е едновременно най-голямата зависима територия и най-големият остров. (Австралия и Антарктика са по-големи от Гренландия, но се считат за континенти, а не за острови.[1]) С население от 55 847 души (януари 2016) тя е една от най-рядко населените страни в света.

        През 1979 г. Дания предоставя на Гренландия известна автономия и я прави равнопоставен член на Кралство Дания. През 2008 г. Гренландия провежда референдум за по-голяма автономия. Това се осъществява през следващата година, като Дания запазва контрола над външната политика, отбраната, финансовата политика и осигурява годишна помощ от 3,4 млрд. датски крони или около 11 300 щатски долара на гренландец.`        
        section.appendChild(p)
        const button2 = document.createElement('button');
        button2.textContent = 'Още информация'
        button2.addEventListener('click', ()=>{
            location.href = 'https://bg.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D0%BD%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F'
        })
        body.appendChild(button2)
    }
}
