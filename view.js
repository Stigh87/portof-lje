//view
viewSelector();
function viewSelector() {
  let html = ``;
  html = navBar();
  const app = document.getElementById('app');

switch (model.currentPage) {
    case 'Home':
      html += homeView();
      break;
    case 'TrePåRad':
      html += game1View();
      break;
    case 'TallPuzzle':
        html += game2View();
        break;
    case 'FirePåRad':
      html += game3View();
      break;
    case 'Minesveiper':
      html += game4View();
      break;
    default:
      html = errorPage();
}
app.innerHTML = html;
}

function navBar() {
let html = `
<div class="header">${model.header}</div>
  <div class="nav">
    <select id="mySelect" onchange="setStyle('s1', this.options[this.selectedIndex].value)">
      <option value="style1.css">Standard</option>
      <option value="style2.css">Dark</option>
    </select> <br>
    <div id="btnContainer"> 
      <button class="btn" onclick="changeShow('Home')">Hjem</button>
      <button class="btn" onclick="changeShow('TrePåRad')">Tre på rad</button>
      <button class="btn" onclick="changeShow('TallPuzzle')">Tall puzzle</button>
      <button class="btn" onclick="changeShow('FirePåRad')">Fire på rad</button>
      <button class="btn" onclick="changeShow('Minesveiper')">Minesveiper</button>
    </div>
  </div>
  `;
return html;
}

function homeView() {
  model.header ="Hjem";
  let html =`
  <div id="content">bla bla</div>
  `;
return html;
}

// function game1View() {
//   let html =`
//   <div id="header"Tre på rad</div>
//   <div id="content">3 på rad bla bla</div>
//   `;
// return html;
// }

// function game2View() {
//   let html =`
//   <div class="content">trallpuzzle bla bla</div>
//   `;
// return html;
// }

// function game3View() {
//   let html =`
//   <div class="content">fire på rad bla bla</div>
//   `;
// return html;
// }

// function game4View() {
//   let html =`
//   <div class="content"> minesveiper bla bla</div>
//   `;
// return html;
// }
function errorPage() {
  let html =`
  ERROR
  `;
return html;
}