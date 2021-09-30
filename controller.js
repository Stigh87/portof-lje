// Controller

// Funksjon for å endre kilde til stylesheet 
function setStyle (linkID, sourceLoc) {
    var theLink = document.getElementById(linkID);
    theLink.href = sourceLoc;
  }

function changeShow(selectedPage){
  model.currentPage = selectedPage;
  model.header = selectedPage;
  viewSelector();
}