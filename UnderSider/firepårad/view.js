//view
show();
function show() {
    let appDiv = document.getElementById('app');
    let html = '';

    html += `<div id="winner">${info}</div>`;
    html += `<div class="mainBoard ${disable1}">`;
    for (let element of board ){
        html += `<div id="${element.id}" onclick="trykk(this, ${element.i})" 
                  class="${element.class}"></div>`;
    }
    
    
    
    html += `</div><br></hr>
    
    <div id="nav">
        <div id="rød" class="score">Rød: ${rød}</div>        
        <div id="gul" class="score">Gul: ${gul}</div>
    </div>    
       <div id="btns"> 
        <button id="btn" ${disable} onclick="newGame()">Nytt Spill</button>
        <button id="btn" class="btn2" onclick="reset()">Omstart</button>
       </div> 
    `;
    appDiv.innerHTML = html;
}