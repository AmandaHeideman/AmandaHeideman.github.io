document.addEventListener("DOMContentLoaded", function (e){
    
    /* --HAMBURGERMENY-- */
    let hamburger = document.querySelector(".hamburger");
    let navLinks = document.querySelector(".nav-links");
    let nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        nav.classList.toggle("open");
    });

    /* --- PROJEKT I PORTFOLION--- */
    let projectDiv = document.getElementsByClassName("project");
    let projectArray = Array.from(projectDiv);

    //Gör att man både kan klicka på projekt och tabba sig fram och trycka enter för att komma in i projektet
    projectArray.forEach(element => element.addEventListener("keyup", function(e){
        if(e.code==="Enter"){
            showDetails(element);
        }
    }))
    projectArray.forEach(element => element.addEventListener("click", function(e){
        showDetails(element);
    }));

    function showDetails(element){
        //Visar detaljsida för respektive projekt
            
            let classArray = Array.from(element.classList);
    
            if(classArray.includes("yatzy")){
                //Kollar vilken klass projektet man tryckte på har
                projectArray.forEach(element => {
                    let classArray2 = Array.from(element.classList);
                    if(classArray2.includes("yatzy")==false){
                        //Gömmer de andra projekten
                        element.innerHTML="";
                        element.classList.add("hide");
                    }
                    else{
                        //Lägger till info om projektet
                        element.classList.add("show");
                        element.classList.remove("yatzy");
                        let text = document.createElement("p");
                        text.innerHTML = "Det första stora projektet på utbildningen var ett grupparbete där vi"+
                        " fick i uppgift att göra ett yatzy. Det började som ett enkelt litet projekt där vi skulle"+
                        " få fram en spelplan med hjälp av html och css, och växte efterhand som fler och fler funktioner"+
                        " skulle läggas till. Slutprodukten blev ett fullt fungerande yatzy, där man kunde välja"+
                        " hur många spelare man var, slå tärningar och välja var man ville spara dem. Programmet"+
                        " räknade ut vilka möjliga kombinationer man kunde få ifrån de slagna tärningar, och visade"+
                        " möjliga poäng för varje kategori på spelplanen.<br><br>"+
                        "Det här projektet fokuserade främst på javascript, där även den mesta html:en genererades"+
                        " utifrån hur många spelare som valts.";

                        //Lägger till bild
                        let fig = document.createElement("figure");
                        let img = document.createElement("img");
                        img.setAttribute("src", "/images/yatzy_game.PNG");
                        img.setAttribute("alt", "Skärmklipp av pågående spel");
                        let caption = document.createElement("figcaption");
                        caption.innerHTML = "Skärmklipp av pågående spel";
                        fig.appendChild(img).after(caption);

                        //Lägger till länkar
                        let github = document.createElement("a");
                        github.setAttribute("href", "https://github.com/fermentedcat/YatzyGruppen_2");
                        github.innerHTML = "&gt; Länk till GitHub-projektet";
                        
                        let game = document.createElement("a");
                        game.setAttribute("href", "https://amandaheideman.github.io/Yatzy_Group_Project");
                        game.innerHTML = "&gt; Länk till spelet";
    
                        let back = document.createElement("a");
                        back.setAttribute("href", "portfolio.html");
                        back.innerHTML = "&gt; Tillbaka";

                        element.appendChild(fig).after(text);
                        element.appendChild(github).after(game);
                        element.appendChild(back);
                    }
            
                })
            }
            //samma sak repeteras för de andra projekten
            else if(classArray.includes("quiz")){
                projectArray.forEach(element => {
                    let classArray2 = Array.from(element.classList);
                    if(classArray2.includes("quiz")==false){
                        element.innerHTML="";
                        element.classList.add("hide");
                    }
                    else{
                        element.classList.add("show");
                        element.classList.remove("quiz");
                        
                        //Lägger till info
                        let text = document.createElement("p");
                        text.innerHTML = "Quizet var ett individuellt projekt där vi skulle med"+
                        " hjälp av ett API (quizapi.io) hämta frågor till själva quizet. Spelaren"+
                        " skulle sen få välja mellan 5-10 frågor, som kunde ha ett eller flera rätta"+
                        " svar. När spelet var slut skulle spelarens poäng skrivas ut, och spelaren"+
                        " skulle få valet att spela igen. <br><br>"+
                        "Det här projektet var mest en övning i att använda och hatera klasser i javascript."+
                        " Vi fick också lära oss att använda fetch eftersom frågorna hämtades från ett API."
    
                        //Lägger till bild
                        let fig = document.createElement("figure");
                        let img = document.createElement("img");
                        img.setAttribute("src", "/images/quiz_color.png");
                        img.setAttribute("alt", "Skärmklipp av pågående spel");
                        let caption = document.createElement("figcaption");
                        caption.innerHTML = "Skärmklipp av pågående spel";
                        fig.appendChild(img).after(caption);
                        
                        //Länkar
                        let github = document.createElement("a");
                        github.setAttribute("href", "https://github.com/amandaheideman/quiz");
                        github.innerHTML = "&gt; Länk till GitHub-projektet";
    
                        let game = document.createElement("a");
                        game.setAttribute("href", "https://amandaheideman.github.io/Quiz/");
                        game.innerHTML = "&gt; Länk till quizet";
    
                        let back = document.createElement("a");
                        back.setAttribute("href", "portfolio.html");
                        back.innerHTML = "&gt; Tillbaka";
                        
                        element.appendChild(fig).after(text);
                        element.appendChild(github).after(game);
                        element.appendChild(back);
                    }
            
                })
            }
            else if(classArray.includes("ACME")){
                projectArray.forEach(element => {
                    let classArray2 = Array.from(element.classList);
                    if(classArray2.includes("ACME")==false){
                        element.innerHTML="";
                        element.classList.add("hide");
                    }
                    else{
                        element.classList.add("show");
                        element.classList.remove("ACME");
                        //Lägger till info
                        let text = document.createElement("p");
                        text.innerHTML = "ACME Events var ett grupparbete i kursen Frontend 2 -"+
                        " HTML och CSS. Projektet gick ut på att göra en hemsida som listar events."+
                        " Det skulle finnas en förstasida med ett par utvalda evenemang, en sida där"+
                        " evenemangen listas, en detaljsida för enskilda evenemang, samt en om oss-sida,"+
                        " där vi skulle beskriva den agila arbetsmetoden Scrum, som vi lärde oss att"+
                        " använda i det här projektet. Det skulle också finnas ett administrations-"+
                        " gränssnitt, som tillät en admin att CRUD:a (Create, Read, Update, Delete)"+
                        " evenemang. Man skulle också som användare kunna sortera evenemang efter exempelvis"+
                        " datum eller kategori. <br><br>"+
                        "I det här grupparbetet lärde vi oss att arbeta efter en grafisk profil, samt"+
                        " arbetsmetoden Scrum. Vi lärde oss också bla att använda local storage."
    
                        //Lägger till bild
                        let fig = document.createElement("figure");
                        let img = document.createElement("img");
                        img.setAttribute("src", "/images/ACME_site.png");
                        img.setAttribute("alt", "Skärmklipp av hemsidans evenemangslista");
                        img.setAttribute("class", "acmeImg")
                        let caption = document.createElement("figcaption");
                        caption.innerHTML = "Skärmklipp av hemsidans evenemangslista, där admin-verktygen syns";
                        fig.appendChild(img).after(caption);
                        
                        //Länkar
                        let github = document.createElement("a");
                        github.setAttribute("href", "https://github.com/Hano2001/ACME-Grupp-4");
                        github.innerHTML = "&gt; Länk till GitHub-projektet";
                        
                        let game = document.createElement("a");
                        game.setAttribute("href", "https://amandaheideman.github.io/ACME-Grupp-4/");
                        game.innerHTML = "&gt; Länk till sidan";
    
                        
                        let back = document.createElement("a");
                        back.setAttribute("href", "portfolio.html");
                        back.innerHTML = "&gt; Tillbaka";
                        
                        element.appendChild(text).after(fig);
                        element.appendChild(github).after(game);
                        element.appendChild(back);
                    }
            
                })
            }
            else if(classArray.includes("memory")){
                projectArray.forEach(element => {
                    let classArray2 = Array.from(element.classList);
                    if(classArray2.includes("memory")==false){
                        element.innerHTML="";
                        element.classList.add("hide");
                    }
                    else{
                        element.classList.add("show");
                        element.classList.remove("memory");

                        //Lägger till info
                        let text = document.createElement("p");
                        text.innerHTML = "Det här projektet var inte ett skolprojekt, utan ett litet "+
                        "mini-projekt jag gjorde lite snabbt på fritiden. Jag följde en Youtube-tutorial, "+
                        "Learn JavaScript by Building 7 Games av freeCodeCamp.org (länk längre ner), satte "+
                        "egna bilder som jag letade upp på nätet och skalade om, och la till extra som jag "+
                        "ville ha med, som en highscore, en slutbild, och en del CSS."
                        
                        //lägger till bild
                        let fig = document.createElement("figure");
                        let img = document.createElement("img");
                        img.setAttribute("src", "/images/memory_game.png");
                        img.setAttribute("alt", "Skärmklipp av pågående spel");
                        img.classList.add("memoryImg");
                        let caption = document.createElement("figcaption");
                        caption.innerHTML = "Skärmklipp av pågående spel";
                        fig.appendChild(img).after(caption);
    
                        //Länkar
                        let github = document.createElement("a");
                        github.setAttribute("href", "https://github.com/amandaheideman/memory");
                        github.innerHTML = "&gt; Länk till GitHub-projektet";
                        
                        let game = document.createElement("a");
                        game.setAttribute("href", "https://amandaheideman.github.io/Memory");
                        game.innerHTML = "&gt; Länk till spelet";

                        let youtube = document.createElement("a");
                        youtube.setAttribute("href", "https://www.youtube.com/watch?v=lhNdUVh3qCc");
                        youtube.innerHTML = "&gt; Länk till Youtube-tutorial";
    
                        let back = document.createElement("a");
                        back.setAttribute("href", "portfolio.html");
                        back.innerHTML = "&gt; Tillbaka";

                        element.appendChild(fig).after(text);
                        element.appendChild(github).after(game);
                        element.appendChild(youtube).after(back);
                    }
            
                })
            }
        
    }
    

});