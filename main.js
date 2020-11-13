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

                        element.appendChild(back);
                        element.appendChild(fig).after(text);
                        element.appendChild(github).after(game);
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
                        " hjälp av ett API hämta frågor till själva quizet. "
    
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
                        
                        element.appendChild(text);
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
                        
                        // element.appendChild(text);
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
    
                        //Länkar
                        let github = document.createElement("a");
                        github.setAttribute("href", "https://github.com/amandaheideman/memory");
                        github.innerHTML = "&gt; Länk till GitHub-projektet";
                        
                        let game = document.createElement("a");
                        game.setAttribute("href", "https://amandaheideman.github.io/Memory");
                        game.innerHTML = "&gt; Länk till spelet";
    
                        let back = document.createElement("a");
                        back.setAttribute("href", "portfolio.html");
                        back.innerHTML = "&gt; Tillbaka";

                        //element.appendChild(text);
                        element.appendChild(github).after(game);
                        element.appendChild(back);
                    }
            
                })
            }
        
    }
    

});