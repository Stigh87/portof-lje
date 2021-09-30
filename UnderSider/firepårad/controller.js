// Controller
function trykk(element, i) {
    if (element.classList.contains('red')) return; 
    if (element.classList.contains('yellow')) return;
    checkCol(element, i);
    element.classList.remove('empty');
    turn = 1 - turn;
    checkWin()
}

function checkCol(element, i) {
    let newI = [0]
    if ((board[i].class == 'empty')) {
        newI = board[i];}
    if ((i < 35) && (board[i+7].class == 'empty')) {
        newI = board[i+7];
    }
    if ((i < 28) && (board[i+14].class == 'empty')) {
        newI = board[i+14];
    }
    if ((i < 21) && (board[i+21].class == 'empty')) {
        newI = board[i+21];
    }
    if ((i < 14) && (board[i+28].class == 'empty')) {
        newI = board[i+28];
    }
    if ((i < 7) && (board[i+35].class == 'empty')) {
        newI = board[i+35];
    }
        if (turn === 0) { 
            newI.class = 'red';
            element.classList.add('red');
        }
        if (turn === 1) {
            newI.class = 'yellow';
            element.classList.add('yellow');  
        }
checkTurn()
show();        
}

function checkTurn() {
    if (turn != 0) info="Rød sin tur";
    if (turn != 1) info="Gul sin tur"; 
}

function newGame() {
    board = [];
    tiles = "empty";
    if (turn == 0) info="Rød starter";
    if (turn == 1) info="Gul starter";
    for (let i = 0; i <= ((width * height)-1); i++) {
        let object = {
            id: "rute"+i,
            class: tiles,
            i: i,
          }
          board.push(object);

    }
    disable = "disabled";
    disable1 = "";
show();   
}

function reset() {
    board = [];
    tiles = "empty";
    disable = "";
    turn = 0;
    rød = 0;
    gul = 0;
    info = "Trykk Nytt Spill for å starte";
    disable1 = "";
show();  
}

function checkWin() {
    //vertikal
        // øverste kolonner ned
        if ((((board[0].class =='red') && (board[7].class =='red') && (board[14].class =='red') && (board[21].class =='red'))) ||
        (((board[1].class =='red') && (board[8].class =='red') && (board[15].class =='red') && (board[22].class =='red'))) ||
        (((board[2].class =='red') && (board[9].class =='red') && (board[16].class =='red') && (board[23].class =='red'))) ||
        (((board[3].class =='red') && (board[10].class =='red') && (board[17].class =='red') && (board[24].class =='red'))) ||
        (((board[4].class =='red') && (board[11].class =='red') && (board[18].class =='red') && (board[25].class =='red'))) ||
        (((board[5].class =='red') && (board[12].class =='red') && (board[19].class =='red') && (board[26].class =='red'))) ||
        (((board[6].class =='red') && (board[13].class =='red') && (board[20].class =='red') && (board[27].class =='red'))) ||
        // andre rad kolonner ned
        (((board[7].class =='red') && (board[14].class =='red') && (board[21].class =='red') && (board[28].class =='red'))) ||
        (((board[8].class =='red') && (board[15].class =='red') && (board[22].class =='red') && (board[29].class =='red'))) ||
        (((board[9].class =='red') && (board[16].class =='red') && (board[23].class =='red') && (board[30].class =='red'))) ||
        (((board[10].class =='red') && (board[17].class =='red') && (board[24].class =='red') && (board[31].class =='red'))) ||
        (((board[11].class =='red') && (board[18].class =='red') && (board[25].class =='red') && (board[32].class =='red'))) ||
        (((board[12].class =='red') && (board[19].class =='red') && (board[26].class =='red') && (board[33].class =='red'))) ||
        (((board[13].class =='red') && (board[20].class =='red') && (board[27].class =='red') && (board[34].class =='red'))) ||    
        // tredje rad kolonner ned
        (((board[14].class =='red') && (board[21].class =='red') && (board[28].class =='red') && (board[35].class =='red'))) ||
        (((board[15].class =='red') && (board[22].class =='red') && (board[29].class =='red') && (board[36].class =='red'))) ||
        (((board[16].class =='red') && (board[23].class =='red') && (board[30].class =='red') && (board[37].class =='red'))) ||
        (((board[17].class =='red') && (board[24].class =='red') && (board[31].class =='red') && (board[38].class =='red'))) ||
        (((board[18].class =='red') && (board[25].class =='red') && (board[32].class =='red') && (board[39].class =='red'))) ||
        (((board[19].class =='red') && (board[26].class =='red') && (board[33].class =='red') && (board[40].class =='red'))) ||
        (((board[20].class =='red') && (board[27].class =='red') && (board[34].class =='red') && (board[41].class =='red'))) ||    
    // horisontal
        // første fra venstre rad bort
        (((board[0].class =='red') && (board[1].class =='red') && (board[2].class =='red') && (board[3].class =='red'))) ||
        (((board[7].class =='red') && (board[8].class =='red') && (board[9].class =='red') && (board[10].class =='red'))) ||
        (((board[14].class =='red') && (board[15].class =='red') && (board[16].class =='red') && (board[17].class =='red'))) ||
        (((board[21].class =='red') && (board[22].class =='red') && (board[23].class =='red') && (board[24].class =='red'))) ||
        (((board[28].class =='red') && (board[29].class =='red') && (board[30].class =='red') && (board[31].class =='red'))) ||
        (((board[35].class =='red') && (board[36].class =='red') && (board[37].class =='red') && (board[38].class =='red'))) ||
        // andre fra venstre rad bort
        (((board[1].class =='red') && (board[2].class =='red') && (board[3].class =='red') && (board[4].class =='red'))) ||
        (((board[8].class =='red') && (board[9].class =='red') && (board[10].class =='red') && (board[11].class =='red'))) ||
        (((board[15].class =='red') && (board[16].class =='red') && (board[17].class =='red') && (board[18].class =='red'))) ||
        (((board[22].class =='red') && (board[23].class =='red') && (board[24].class =='red') && (board[25].class =='red'))) ||
        (((board[29].class =='red') && (board[30].class =='red') && (board[31].class =='red') && (board[32].class =='red'))) ||
        (((board[36].class =='red') && (board[37].class =='red') && (board[38].class =='red') && (board[39].class =='red'))) ||
        // tredje fra venstre rad bort
        (((board[2].class =='red') && (board[3].class =='red') && (board[4].class =='red') && (board[5].class =='red'))) ||
        (((board[9].class =='red') && (board[10].class =='red') && (board[11].class =='red') && (board[12].class =='red'))) ||
        (((board[16].class =='red') && (board[17].class =='red') && (board[18].class =='red') && (board[19].class =='red'))) ||
        (((board[23].class =='red') && (board[24].class =='red') && (board[25].class =='red') && (board[26].class =='red'))) ||
        (((board[30].class =='red') && (board[31].class =='red') && (board[32].class =='red') && (board[33].class =='red'))) ||
        (((board[37].class =='red') && (board[38].class =='red') && (board[39].class =='red') && (board[40].class =='red'))) ||
        // fjerde fra venstre rad bort
        (((board[3].class =='red') && (board[4].class =='red') && (board[5].class =='red') && (board[6].class =='red'))) ||
        (((board[10].class =='red') && (board[11].class =='red') && (board[12].class =='red') && (board[13].class =='red'))) ||
        (((board[17].class =='red') && (board[18].class =='red') && (board[19].class =='red') && (board[20].class =='red'))) ||
        (((board[24].class =='red') && (board[25].class =='red') && (board[26].class =='red') && (board[27].class =='red'))) ||
        (((board[31].class =='red') && (board[32].class =='red') && (board[33].class =='red') && (board[34].class =='red'))) ||
        (((board[38].class =='red') && (board[39].class =='red') && (board[40].class =='red') && (board[41].class =='red'))) ||
    //diagonalt
        // første rad skrå høyre
        (((board[0].class =='red') && (board[8].class =='red') && (board[16].class =='red') && (board[24].class =='red'))) ||
        (((board[1].class =='red') && (board[9].class =='red') && (board[17].class =='red') && (board[25].class =='red'))) ||
        (((board[2].class =='red') && (board[10].class =='red') && (board[18].class =='red') && (board[26].class =='red'))) ||
        (((board[3].class =='red') && (board[11].class =='red') && (board[19].class =='red') && (board[27].class =='red'))) || 
        // andre rad skrå høyre
        (((board[7].class =='red') && (board[15].class =='red') && (board[23].class =='red') && (board[31].class =='red'))) ||
        (((board[8].class =='red') && (board[16].class =='red') && (board[24].class =='red') && (board[32].class =='red'))) ||
        (((board[9].class =='red') && (board[17].class =='red') && (board[25].class =='red') && (board[33].class =='red'))) ||
        (((board[10].class =='red') && (board[18].class =='red') && (board[26].class =='red') && (board[34].class =='red'))) || 
        // tredje rad skrå høyre
        (((board[14].class =='red') && (board[22].class =='red') && (board[30].class =='red') && (board[38].class =='red'))) ||
        (((board[15].class =='red') && (board[23].class =='red') && (board[31].class =='red') && (board[39].class =='red'))) ||
        (((board[16].class =='red') && (board[24].class =='red') && (board[32].class =='red') && (board[40].class =='red'))) ||
        (((board[17].class =='red') && (board[25].class =='red') && (board[33].class =='red') && (board[41].class =='red'))) || 
        // første rad skrå venstre
        (((board[3].class =='red') && (board[9].class =='red') && (board[15].class =='red') && (board[21].class =='red'))) ||
        (((board[4].class =='red') && (board[10].class =='red') && (board[16].class =='red') && (board[22].class =='red'))) ||
        (((board[5].class =='red') && (board[11].class =='red') && (board[17].class =='red') && (board[23].class =='red'))) ||
        (((board[6].class =='red') && (board[12].class =='red') && (board[18].class =='red') && (board[24].class =='red'))) ||
        // andre rad skrå venstre
        (((board[10].class =='red') && (board[16].class =='red') && (board[22].class =='red') && (board[28].class =='red'))) ||
        (((board[11].class =='red') && (board[17].class =='red') && (board[23].class =='red') && (board[29].class =='red'))) ||
        (((board[12].class =='red') && (board[18].class =='red') && (board[24].class =='red') && (board[30].class =='red'))) ||
        (((board[13].class =='red') && (board[19].class =='red') && (board[25].class =='red') && (board[31].class =='red'))) ||
        // tredje rad skrå venstre
        (((board[17].class =='red') && (board[23].class =='red') && (board[29].class =='red') && (board[35].class =='red'))) ||
        (((board[18].class =='red') && (board[24].class =='red') && (board[30].class =='red') && (board[36].class =='red'))) ||
        (((board[19].class =='red') && (board[25].class =='red') && (board[31].class =='red') && (board[37].class =='red'))) ||
        (((board[20].class =='red') && (board[26].class =='red') && (board[32].class =='red') && (board[38].class =='red')))) {
    
        info = "RØD har vunnet";
        rød++;
        disable = "";
        turn = 0;
        disable1 = "stopp";
        }
        else if //vertikal
        // øverste kolonner ned
        ((((board[0].class =='yellow') && (board[7].class =='yellow') && (board[14].class =='yellow') && (board[21].class =='yellow'))) ||
        (((board[1].class =='yellow') && (board[8].class =='yellow') && (board[15].class =='yellow') && (board[22].class =='yellow'))) ||
        (((board[2].class =='yellow') && (board[9].class =='yellow') && (board[16].class =='yellow') && (board[23].class =='yellow'))) ||
        (((board[3].class =='yellow') && (board[10].class =='yellow') && (board[17].class =='yellow') && (board[24].class =='yellow'))) ||
        (((board[4].class =='yellow') && (board[11].class =='yellow') && (board[18].class =='yellow') && (board[25].class =='yellow'))) ||
        (((board[5].class =='yellow') && (board[12].class =='yellow') && (board[19].class =='yellow') && (board[26].class =='yellow'))) ||
        (((board[6].class =='yellow') && (board[13].class =='yellow') && (board[20].class =='yellow') && (board[27].class =='yellow'))) ||
        // andre rad kolonner ned
        (((board[7].class =='yellow') && (board[14].class =='yellow') && (board[21].class =='yellow') && (board[28].class =='yellow'))) ||
        (((board[8].class =='yellow') && (board[15].class =='yellow') && (board[22].class =='yellow') && (board[29].class =='yellow'))) ||
        (((board[9].class =='yellow') && (board[16].class =='yellow') && (board[23].class =='yellow') && (board[30].class =='yellow'))) ||
        (((board[10].class =='yellow') && (board[17].class =='yellow') && (board[24].class =='yellow') && (board[31].class =='yellow'))) ||
        (((board[11].class =='yellow') && (board[18].class =='yellow') && (board[25].class =='yellow') && (board[32].class =='yellow'))) ||
        (((board[12].class =='yellow') && (board[19].class =='yellow') && (board[26].class =='yellow') && (board[33].class =='yellow'))) ||
        (((board[13].class =='yellow') && (board[20].class =='yellow') && (board[27].class =='yellow') && (board[34].class =='yellow'))) ||    
        // tredje rad kolonner ned
        (((board[14].class =='yellow') && (board[21].class =='yellow') && (board[28].class =='yellow') && (board[35].class =='yellow'))) ||
        (((board[15].class =='yellow') && (board[22].class =='yellow') && (board[29].class =='yellow') && (board[36].class =='yellow'))) ||
        (((board[16].class =='yellow') && (board[23].class =='yellow') && (board[30].class =='yellow') && (board[37].class =='yellow'))) ||
        (((board[17].class =='yellow') && (board[24].class =='yellow') && (board[31].class =='yellow') && (board[38].class =='yellow'))) ||
        (((board[18].class =='yellow') && (board[25].class =='yellow') && (board[32].class =='yellow') && (board[39].class =='yellow'))) ||
        (((board[19].class =='yellow') && (board[26].class =='yellow') && (board[33].class =='yellow') && (board[40].class =='yellow'))) ||
        (((board[20].class =='yellow') && (board[27].class =='yellow') && (board[34].class =='yellow') && (board[41].class =='yellow'))) ||    
        // horisontal
        // første fra venstre rad bort
        (((board[0].class =='yellow') && (board[1].class =='yellow') && (board[2].class =='yellow') && (board[3].class =='yellow'))) ||
        (((board[7].class =='yellow') && (board[8].class =='yellow') && (board[9].class =='yellow') && (board[10].class =='yellow'))) ||
        (((board[14].class =='yellow') && (board[15].class =='yellow') && (board[16].class =='yellow') && (board[17].class =='yellow'))) ||
        (((board[21].class =='yellow') && (board[22].class =='yellow') && (board[23].class =='yellow') && (board[24].class =='yellow'))) ||
        (((board[28].class =='yellow') && (board[29].class =='yellow') && (board[30].class =='yellow') && (board[31].class =='yellow'))) ||
        (((board[35].class =='yellow') && (board[36].class =='yellow') && (board[37].class =='yellow') && (board[38].class =='yellow'))) ||
        // andre fra venstre rad bort
        (((board[1].class =='yellow') && (board[2].class =='yellow') && (board[3].class =='yellow') && (board[4].class =='yellow'))) ||
        (((board[8].class =='yellow') && (board[9].class =='yellow') && (board[10].class =='yellow') && (board[11].class =='yellow'))) ||
        (((board[15].class =='yellow') && (board[16].class =='yellow') && (board[17].class =='yellow') && (board[18].class =='yellow'))) ||
        (((board[22].class =='yellow') && (board[23].class =='yellow') && (board[24].class =='yellow') && (board[25].class =='yellow'))) ||
        (((board[29].class =='yellow') && (board[30].class =='yellow') && (board[31].class =='yellow') && (board[32].class =='yellow'))) ||
        (((board[36].class =='yellow') && (board[37].class =='yellow') && (board[38].class =='yellow') && (board[39].class =='yellow'))) ||
        // tredje fra venstre rad bort
        (((board[2].class =='yellow') && (board[3].class =='yellow') && (board[4].class =='yellow') && (board[5].class =='yellow'))) ||
        (((board[9].class =='yellow') && (board[10].class =='yellow') && (board[11].class =='yellow') && (board[12].class =='yellow'))) ||
        (((board[16].class =='yellow') && (board[17].class =='yellow') && (board[18].class =='yellow') && (board[19].class =='yellow'))) ||
        (((board[23].class =='yellow') && (board[24].class =='yellow') && (board[25].class =='yellow') && (board[26].class =='yellow'))) ||
        (((board[30].class =='yellow') && (board[31].class =='yellow') && (board[32].class =='yellow') && (board[33].class =='yellow'))) ||
        (((board[37].class =='yellow') && (board[38].class =='yellow') && (board[39].class =='yellow') && (board[40].class =='yellow'))) ||
        // fjerde fra venstre rad bort
        (((board[3].class =='yellow') && (board[4].class =='yellow') && (board[5].class =='yellow') && (board[6].class =='yellow'))) ||
        (((board[10].class =='yellow') && (board[11].class =='yellow') && (board[12].class =='yellow') && (board[13].class =='yellow'))) ||
        (((board[17].class =='yellow') && (board[18].class =='yellow') && (board[19].class =='yellow') && (board[20].class =='yellow'))) ||
        (((board[24].class =='yellow') && (board[25].class =='yellow') && (board[26].class =='yellow') && (board[27].class =='yellow'))) ||
        (((board[31].class =='yellow') && (board[32].class =='yellow') && (board[33].class =='yellow') && (board[34].class =='yellow'))) ||
        (((board[38].class =='yellow') && (board[39].class =='yellow') && (board[40].class =='yellow') && (board[41].class =='yellow'))) ||
        //diagonalt
        // første rad skrå høyre
        (((board[0].class =='yellow') && (board[8].class =='yellow') && (board[16].class =='yellow') && (board[24].class =='yellow'))) ||
        (((board[1].class =='yellow') && (board[9].class =='yellow') && (board[17].class =='yellow') && (board[25].class =='yellow'))) ||
        (((board[2].class =='yellow') && (board[10].class =='yellow') && (board[18].class =='yellow') && (board[26].class =='yellow'))) ||
        (((board[3].class =='yellow') && (board[11].class =='yellow') && (board[19].class =='yellow') && (board[27].class =='yellow'))) || 
        // andre rad skrå høyre
        (((board[7].class =='yellow') && (board[15].class =='yellow') && (board[23].class =='yellow') && (board[31].class =='yellow'))) ||
        (((board[8].class =='yellow') && (board[16].class =='yellow') && (board[24].class =='yellow') && (board[32].class =='yellow'))) ||
        (((board[9].class =='yellow') && (board[17].class =='yellow') && (board[25].class =='yellow') && (board[33].class =='yellow'))) ||
        (((board[10].class =='yellow') && (board[18].class =='yellow') && (board[26].class =='yellow') && (board[34].class =='yellow'))) || 
        // tredje rad skrå høyre
        (((board[14].class =='yellow') && (board[22].class =='yellow') && (board[30].class =='yellow') && (board[38].class =='yellow'))) ||
        (((board[15].class =='yellow') && (board[23].class =='yellow') && (board[31].class =='yellow') && (board[39].class =='yellow'))) ||
        (((board[16].class =='yellow') && (board[24].class =='yellow') && (board[32].class =='yellow') && (board[40].class =='yellow'))) ||
        (((board[17].class =='yellow') && (board[25].class =='yellow') && (board[33].class =='yellow') && (board[41].class =='yellow'))) || 
        // første rad skrå venstre
        (((board[3].class =='yellow') && (board[9].class =='yellow') && (board[15].class =='yellow') && (board[21].class =='yellow'))) ||
        (((board[4].class =='yellow') && (board[10].class =='yellow') && (board[16].class =='yellow') && (board[22].class =='yellow'))) ||
        (((board[5].class =='yellow') && (board[11].class =='yellow') && (board[17].class =='yellow') && (board[23].class =='yellow'))) ||
        (((board[6].class =='yellow') && (board[12].class =='yellow') && (board[18].class =='yellow') && (board[24].class =='yellow'))) ||
        // andre rad skrå venstre
        (((board[10].class =='yellow') && (board[16].class =='yellow') && (board[22].class =='yellow') && (board[28].class =='yellow'))) ||
        (((board[11].class =='yellow') && (board[17].class =='yellow') && (board[23].class =='yellow') && (board[29].class =='yellow'))) ||
        (((board[12].class =='yellow') && (board[18].class =='yellow') && (board[24].class =='yellow') && (board[30].class =='yellow'))) ||
        (((board[13].class =='yellow') && (board[19].class =='yellow') && (board[25].class =='yellow') && (board[31].class =='yellow'))) ||
        // tredje rad skrå venstre
        (((board[17].class =='yellow') && (board[23].class =='yellow') && (board[29].class =='yellow') && (board[35].class =='yellow'))) ||
        (((board[18].class =='yellow') && (board[24].class =='yellow') && (board[30].class =='yellow') && (board[36].class =='yellow'))) ||
        (((board[19].class =='yellow') && (board[25].class =='yellow') && (board[31].class =='yellow') && (board[37].class =='yellow'))) ||
        (((board[20].class =='yellow') && (board[26].class =='yellow') && (board[32].class =='yellow') && (board[38].class =='yellow')))) {
        info = "GUL har vunnet";
        gul++;
        disable = "";
        turn = 1;
        disable1 = "stopp";
        }
     
    show();
    }
    