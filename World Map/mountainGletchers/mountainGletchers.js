function fill() {
    debugger
    const body = document.querySelector('body');
    const h1 = document.createElement("h1")
    h1.textContent = "Планински Глетчери(Ледници)";
    body.appendChild(h1)
    setTimeout(() => {
        const section = document.createElement("section");
        section.classList.add('fade')
        const p = document.createElement('p');
        p.textContent = `Лѐдникът (още глѐтчер от немската дума: Gletscher) представлява голяма, бавноподвижна ледена маса, която се образува от слоеве пресован сняг и е подложена на постепенни деформации под действието на гравитацията.

        Ледниците се изучават от науката глациология. Те образуват криосферата на Земята и са най-големият резервоар на прясна вода в твърдо състояние. Те покриват огромни площи в полярните области, докато в тропиците заемат само най-високите части на планините. Другаде в Слънчевата система – на Марс – полярните шапки на полюсите съперничат на земните.
        
        Ледниците са сред най-мощните релефоформиращи сили в света. Днес те се срещат само в полярните области и по високите планински върхове, но все още покриват една десета от сушата. Огромните ледени полета на Гренландия и Антарктида са известни като континентални ледници. Те постоянно се движат от своя център към периферията, където ледът се разтопява или се отчупва и пада в морето, образувайки айсберги.`        
        section.appendChild(p)
        body.appendChild(section)
    }, 1000);
    setTimeout(() => {
        const button = document.createElement("button");
        
        button.textContent = 'Научи повече'
        button.addEventListener('click', ()=>{
            location.href = 'https://bg.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA'
        })
        body.appendChild(button)

    }, 5000)

}