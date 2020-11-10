document.addEventListener("DOMContentLoaded", function (e){
    
    let projectDiv = document.getElementsByClassName("project");

    let projectArray = Array.from(projectDiv);

    projectArray.forEach(element => element.addEventListener("click", function(e){
        let classArray = Array.from(element.classList);

        if(classArray.includes("yatzy")){
            projectArray.forEach(element => {
                let classArray2 = Array.from(element.classList);
                if(classArray2.includes("yatzy")==false){
                    element.innerHTML="";
                    element.classList.add("hide");
                }
                else{
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

                    let github = document.createElement("a");
                    github.setAttribute("href", "https://github.com/fermentedcat/YatzyGruppen_2");
                    github.innerHTML = "Länk till GitHub-projektet";
                    
                    let game = document.createElement("a");
                    game.setAttribute("href", "https://amandaheideman.github.io/Yatzy_Group_Project");
                    game.innerHTML = "Länk till spelet";

                    element.appendChild(text);
                    element.appendChild(github).after(game);
                }
        
            })
        }
        else if(classArray.includes("quiz")){
            projectArray.forEach(element => {
                let classArray2 = Array.from(element.classList);
                if(classArray2.includes("quiz")==false){
                    element.innerHTML="";
                    element.classList.add("hide");
                }
                else{
                    element.classList.add("show");
                    console.log(element.classList);
                    let link = document.createElement("a");
                    link.innerHTML = "https://amandaheideman.github.io/Quiz/";
                    link.setAttribute("href", "https://amandaheideman.github.io/Quiz/");
                    element.appendChild(link);
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
                    console.log(element.classList);
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
                    console.log(element.classList);
                }
        
            })
        }
        
        
    }));

    /* document.addEventListener("click", function(e){
        console.log(e.target);
        console.log(document.getElementsByClassName("project"));
    }) */


})