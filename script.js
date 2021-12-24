const pixels = document.querySelectorAll('.pixel');

// Primeira cor selecionada: black.
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {
    pixels[i].style.backgroundColor = 'black';
  });
}

const black = document.getElementById('black');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

// Remover a classe select e adicionar a classe select ao elemento que receber o evento (clique)
function changeSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', changeSelected);
color2.addEventListener('click', changeSelected);
color3.addEventListener('click', changeSelected);
color4.addEventListener('click', changeSelected);

// Ao clicar no pixel alterar a cor para a mesma que foi selecionada na paleta
color2.style.backgroundColor = 'red';
color3.style.backgroundColor = 'green';
color4.style.backgroundColor = 'blue';

color2.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));
color3.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));
color4.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));

function changeColor2() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = color2.style.backgroundColor;
    });
  }
}

function changeColor3() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = color3.style.backgroundColor;
    });
  }
}

function changeColor4() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = color4.style.backgroundColor;
    });
  }
}

color2.addEventListener('click', changeColor2);
color3.addEventListener('click', changeColor3);
color4.addEventListener('click', changeColor4);

function changeBlack() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = 'black';
    });
  }
}
black.addEventListener('click', changeBlack);

const clearBoardButton = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const buttonVqv = document.getElementById('generate-board');

clearBoardButton.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

function removeAllPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (const p of pixels) {
    p.remove();
  }
}

function changeSizeBoard() {
  removeAllPixels();

  const pixelsBoard = document.querySelector('#pixel-board');

  let n = 0;
  if (input.value === '') {
    alert('Board inválido!');
    n = 5;
  } else if (input.value < 5) {
    n = 5;
    input.value = 5;
  } else if (input.value > 50) {
    n = 50;
    input.value = 50;
  } else {
    n = input.value;
  }

  pixelsBoard.style.width = 0;
  pixelsBoard.style.height = 0;
  pixelsBoard.style.width = (parseInt(pixelsBoard.style.width) + n * 42) + 'px';
  pixelsBoard.style.height = (parseInt(pixelsBoard.style.height) + n * 42) + 'px';

  const nBoard = n * n;
  for (let i = 0; i < nBoard; i += 1) {
    const pixelAdded = document.createElement('div');
    pixelAdded.className = 'pixel';
    pixelsBoard.appendChild(pixelAdded);
  }
  // Primeira cor selecionada: black.
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = 'black';
    });
  }

  // Ao clicar no pixel alterar a cor para a mesma que foi selecionada na paleta
  color2.style.backgroundColor = 'red';
  color3.style.backgroundColor = 'green';
  color4.style.backgroundColor = 'blue';

  color2.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));
  color3.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));
  color4.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));

  function change2() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = color2.style.backgroundColor;
      });
    }
  }
  function change3() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = color3.style.backgroundColor;
      });
    }
  }
  function change4() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = color4.style.backgroundColor;
      });
    }
  }

  color2.addEventListener('click', change2);
  color3.addEventListener('click', change3);
  color4.addEventListener('click', change4);
  function blackFirst() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', function () {
        pixels[i].style.backgroundColor = 'black';
      });
    }
  }
  black.addEventListener('click', blackFirst);

  clearBoardButton.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
buttonVqv.addEventListener('click', changeSizeBoard);

const buttonChangeColors = document.getElementById('change-colors');

function changePalette () {
  color2.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));
  color3.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));
  color4.style.backgroundColor = '#' + (Math.floor(Math.random() * 1000000));
}

buttonChangeColors.addEventListener('click', changePalette);
