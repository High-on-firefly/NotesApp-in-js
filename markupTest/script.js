// #region DOM ELEMENTS
    const sourceArea = document.querySelector(".source-area"); 
    const compileArea = document.querySelector(".compile-area"); 
// #endregion

// #region EVENTS
    sourceArea.addEventListener("input", ()=>{
        saveSource();
        compileArea.innerHTML = parseMarkdown(sourceArea.value);
    });
// #endregion

// #region functions
    function parseMarkdown(str){
        const lines = str.split("\n");
        let html = "";
        let listDepth = [];
        let insideList = false;

        lines.forEach((line)=>{

            let lineDepth = getDepth(line);
            line = parseInlineMarkdown(escapeHTML(line.trim()));
            
            if(line.startsWith("### ")){
                let text = line.slice(4);
                html += `<h3>${text}</h3>`;
                return;
            }
            if(line.startsWith("## ")){
                let text = line.slice(3);
                html += `<h2>${text}</h2>`;
                return;
            }
            if(line.startsWith("# ")){
                let text = line.slice(2);
                html += `<h1>${text}</h1>`;
                return;
            }
            if(line.startsWith("- ")){
                let text = line.slice(2);

                if(!insideList){
                    insideList = true;
                    listDepth.push(lineDepth);
                    html += `<ul><li>${text}`;
                    return;
                }
                if(insideList){
                    if(listDepth[listDepth.length -1] === lineDepth){
                        html += `</li><li>${text}`;
                        listDepth.push(lineDepth);
                        return;
                    }
                    if(listDepth[listDepth.length -1] < lineDepth){
                        html += `<ul><li>${text}`;
                        listDepth.push(lineDepth);
                        return;
                    }
                return;
                }
            }
            if(insideList === true){
                html += "</li></ul></li></ul>";
                insideList = false;
                return;
            }
            html+= `<p>${line}</p>`;
        });
        console.log(listDepth);       
        console.log(html);       
        return html;
    }

    function parseInlineMarkdown(str){
        return str.
            replace(/\*\*(.*?)\*\*/g, "<b>$1</b>").
            replace(/\*(.*?)\*/g, "<i>$1</i>").
            replace(/`(.*?)`/g, "<code>$1</code>")
    }
    function getDepth(str){
        const spaces = str.match(/^ */)[0].length;
        return Math.floor(spaces/4);
    }
    function escapeHTML(str){
        return str
            .replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;");
    }
    function saveSource(){
        localStorage.setItem("sourceStr", sourceArea.value);
    }
    function loadSource(){
        return localStorage.getItem("sourceStr");
    }
    function initApp(){
        sourceArea.value = loadSource();
        compileArea.innerHTML = parseMarkdown(sourceArea.value);
    }
// #endregion

initApp();