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
        // states and data
        const lines = str.split("\n");
        let html = "";
        let listStack = [];
        let insideCode = false;
        // functions
        function openList(listType, listAtrib, content){
            listStack.push(listType);
            html += `<${listType} ${listAtrib}><li>${content}`;
        }
        function closeList(){
            html += `</li></${listStack.at(-1)}>`;
            listStack.pop();
        }
        
        lines.forEach((line)=>{
            const lineDepth = getDepth(line);
            line = escapeHTML(line.trim());
            //pre inline parsing 
            if(insideCode){
                if(!line.startsWith("```")){
                    html += line+"\n";
                    return;
                }
                insideCode = false;
                html+= "</code></pre>";
                return;
            }
            if(line.startsWith("```")){
                insideCode = true;
                html+= "<pre><code>";
                return;
            }
            //post inline parsing
            line = parseInlineMarkdown(line);
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
            // nested list implemention 
            const orderedMatch = line.match(/^(\d+?)\.\s/);
            if(line.startsWith("- ")||orderedMatch){
                const listType = orderedMatch ? "ol" : "ul"
                const listStart =
                    orderedMatch && orderedMatch[1] !== "1"?
                    `start="${orderedMatch[1]}"`:
                    "";
                const text = 
                    orderedMatch?
                    line.slice(orderedMatch[0].length):
                    line.slice(2);

                // if list is not open
                if(!listStack.length){
                    openList(listType, listStart, text);
                    return;
                }
                
                // if list is open
                // if list item is same depth as list
                if(listStack.length === lineDepth){
                    if(listStack.at(-1) !== listType){
                        closeList();
                        openList(listType, listStart, text);
                        return;
                    }
                    html += `</li><li>${text}`;
                    return;
                }
                // if list item is deeper 
                if(listStack.length < lineDepth){
                    openList(listType, listStart, text);
                    return;
                }
                // if list item is shallower
                if(listStack.length > lineDepth){
                    while(listStack.length > lineDepth){
                        closeList();
                    }
                    if(listStack.at(-1) !== listType){
                        closeList();
                        openList(listType, listStart, text);
                        return;
                    }
                    html += `</li><li>${text}`;
                    return
                }
            }

            html+= `<p>${line}</p>`;
        });
        // if list is open close it 
        if(listStack.length){
            while(listStack.length){
                closeList();
            }
        }
        console.log(html)
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
        return Math.floor(spaces/4)+1;
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