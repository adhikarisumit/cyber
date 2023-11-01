function sendPostRequest(conversion) {
  let japaneseText = document.getElementById('japaneseText').value;

  document.getElementById('results').innerHTML = "<center>⌛ Cargando...</center>";

  fetch('https://japonesbasico.com/furigana/procesa.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      japaneseText: japaneseText,
      conversion: conversion,
      lang: 'en'
    })
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('results').innerHTML = data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
  
function pasteFromClipboard() {
  navigator.clipboard.readText().then(function(clipText) {
    document.getElementById("japaneseText").value = clipText;
  });
}

function hideFirstColumn() {
  var table = document.querySelector('#results table');
  var rows = table.getElementsByTagName('tr');
  
  for (var i = 0; i < rows.length; i++) {
  var cells = rows[i].getElementsByTagName('td');
  if (cells.length > 0) {
    cells[0].style.display = 'none';
  }
  }

  var button = document.getElementById('hideButton');
  button.style.display = 'none';
}

