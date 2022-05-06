let container = document.createElement("div");
container.innerHTML = `<div class="container">
<div class="keyboard_wrapp">
    <div class="keyboard_lights"></div>
    <div class="keyboard_keys">
        <div class="row">
            <div class="keys toggleable" data-eng="\`" data-ru="Ё">\`</div>
            <div class="keys">1</div>
            <div class="keys">2</div>
            <div class="keys">3</div>
            <div class="keys">4</div>
            <div class="keys">5</div>
            <div class="keys">6</div>
            <div class="keys">7</div>
            <div class="keys">8</div>
            <div class="keys">9</div>
            <div class="keys">0</div>
            <div class="keys">-</div>
            <div class="keys">=</div>
            <div class="keys backspace_key">Backspace</div>
        </div>
        <div class="row">
            <div class="keys tab_key">Tab</div>
            <div class="keys toggleable" data-eng="Q" data-ru="Й">Q</div>
            <div class="keys toggleable" data-eng="W" data-ru="Ц">W</div>
            <div class="keys toggleable" data-eng="E" data-ru="У">E</div>
            <div class="keys toggleable" data-eng="R" data-ru="К">R</div>
            <div class="keys toggleable" data-eng="T" data-ru="Е">T</div>
            <div class="keys toggleable" data-eng="Y" data-ru="Н">Y</div>
            <div class="keys toggleable" data-eng="U" data-ru="Г">U</div>
            <div class="keys toggleable" data-eng="I" data-ru="Ш">I</div>
            <div class="keys toggleable" data-eng="O" data-ru="Щ">O</div>
            <div class="keys toggleable" data-eng="P" data-ru="З">P</div>
            <div class="keys toggleable" data-eng="{" data-ru="Х">{</div>
            <div class="keys toggleable" data-eng="}" data-ru="Ъ">}</div>
            <div class="keys slash_key toggleable" data-eng="\\" data-ru="\\">\\</div>
        </div>
        <div class="row">
            <div class="keys caps_lock_key">Caps Lock</div>
            <div class="keys toggleable" data-eng="A" data-ru="Ф">A</div>
            <div class="keys toggleable" data-eng="S" data-ru="Ы">S</div>
            <div class="keys toggleable" data-eng="D" data-ru="В">D</div>
            <div class="keys toggleable" data-eng="F" data-ru="А">F</div>
            <div class="keys toggleable" data-eng="G" data-ru="П">G</div>
            <div class="keys toggleable" data-eng="H" data-ru="Р">H</div>
            <div class="keys toggleable" data-eng="J" data-ru="О">J</div>
            <div class="keys toggleable" data-eng="K" data-ru="Л">K</div>
            <div class="keys toggleable" data-eng="L" data-ru="Д">L</div>
            <div class="keys toggleable" data-eng=";" data-ru="Ж">;</div>
            <div class="keys toggleable" data-eng='\"' data-ru="Э">\"</div>
            <div class="keys enter_key">Enter</div>
        </div>
        <div class="row">
            <div class="keys shift_key shift_left">Shift</div>
            <div class="keys toggleable" data-eng="Z" data-ru="Я">Z</div>
            <div class="keys toggleable" data-eng="X" data-ru="Ч">X</div>
            <div class="keys toggleable" data-eng="C" data-ru="С">C</div>
            <div class="keys toggleable" data-eng="V" data-ru="М">V</div>
            <div class="keys toggleable" data-eng="B" data-ru="И">B</div>
            <div class="keys toggleable" data-eng="N" data-ru="Т">N</div>
            <div class="keys toggleable" data-eng="M" data-ru="Ь">M</div>
            <div class="keys toggleable" data-eng="<" data-ru="Б"><</div>
            <div class="keys toggleable" data-eng=">" data-ru="Ю">></div>
            <div class="keys toggleable" data-eng="/" data-ru="/">/</div>
            <div class="keys toggleable" data-eng="?" data-ru=".">?</div>
            <div class="keys shift_key shift_right">Shift</div>
        </div>
        <div class="row">
            <div class="keys ctrl_key ctrl_left">Ctrl</div>
            <div class="keys win_key">Win</div>
            <div class="keys alt_key alt_left">Alt</div>
            <div class="keys space_key"></div>
            <div class="keys alt_key alt_right">Alt</div>
            <div class="keys">Fn</div>
            <div class="keys ctrl_key ctrl_right">Ctrl</div>
        </div>
    </div>
</div>
<input class="text" type="text">
</div>`;
document.body.append(container);
let keys = document.querySelectorAll(".keys");
let shifts = document.querySelectorAll(".shift_key");
for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute("keyname", keys[i].innerText);
  keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());

  switch (keys[i].innerText) {
    case "{":
      keys[i].setAttribute("lowerCaseName", "[");
      break;
    case "}":
      keys[i].setAttribute("lowerCaseName", "]");
      break;
    case "`":
      keys[i].setAttribute("lowerCaseName", "~");
      break;
    case "\\":
      keys[i].setAttribute("lowerCaseName", "|");
      break;
    case "<":
      keys[i].setAttribute("lowerCaseName", ",");
      break;
    case ">":
      keys[i].setAttribute("lowerCaseName", ".");
      break;
    case '"':
      keys[i].setAttribute("lowerCaseName", "'");
      break;
    case ";":
      keys[i].setAttribute("lowerCaseName", ":");
      break;
  }
}
let currentLang = "eng";
const toggleLang = () => {
  if (currentLang === "eng") {
    currentLang = "ru";
  } else {
    currentLang = "eng";
  }
};
const changeLang = (key) => {
  toggleLang();
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].classList.contains("toggleable")) {
      keys[i].innerText = keys[i].dataset[currentLang];
    }
  }
};
window.addEventListener("keydown", function (e) {
  if (e.shiftKey && e.ctrlKey) {
    changeLang();
  }
});
/*
//for(let i=0; i<shift_keys)
//window.addEventListener('keydown', function(e){console.log(e.key)})
const input = document.querySelector('input');
const textString = '`~1!2@3#4$5%6^7&8*9(0)-_=+qwertyuiop[]asdfghjkl;\'\zxcvbnm,./?><|":{}|йцукенгшщшзхъфывапролджэячсмитьбю';
window.addEventListener('keydown', function(e){input.value += e.key})

window.addEventListener('keydown', function(e){
    if(textString.includes(String(e.key))){input.value += e.key}
})
*/
const input = document.querySelector("input");
const textString =
  "`~1!2@3#4$5%6^7&8*9(0)-_=+qwertyuiop[]asdfghjkl;'zxcvbnm,./?><|\":{} |йцукенгшщшзхъфывапролджэячсмитьбю";
let spaceKey = document.querySelector(".space_key");
let shift_left = document.querySelector(".shift_left");
let shift_right = document.querySelector(".shift_right");
let caps_lock_key = document.querySelector(".caps_lock_key");
let toggle_circle = document.querySelector(".toggle_circle");
let night_mode = document.querySelector(".night_mode");
let body = document.querySelector("body");
let text_input = document.querySelector(".text");
let change_color = document.querySelector(".change_light_color");
let colors_input = document.querySelector(".colors_input");
let keyboard_lights = document.querySelector(".keyboard_lights");
let keyboard_wrapp = document.querySelector(".keyboard_wrapp");
window.addEventListener("keydown", function (e) {
  if (input !== document.activeElement) {
    if (textString.includes(String(e.key).toLowerCase())) {
      input.value += e.key;
    }
    if (e.key === "Enter" || e.key === "CapsLock")
      if (e.key === "Backspace") {
        input.value = input.value.slice(0, input.value.length - 1);
      }
  }
});

window.addEventListener("keydown", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName") ||
      e.key == keys[i].dataset.ru ||
      e.key.toUpperCase() == keys[i].dataset.ru
    ) {
      keys[i].classList.add("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (e.code == "ShiftLeft") {
      shift_right.classList.remove("active");
    }
    if (e.code == "ShiftRight") {
      shift_left.classList.remove("active");
    }
    if (e.code == "CapsLock") {
      caps_lock_key.classList.toggle("active");
    }
  }
});

window.addEventListener("keyup", function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute("keyname") ||
      e.key == keys[i].getAttribute("lowerCaseName") ||
      e.key == keys[i].dataset.ru ||
      e.key.toUpperCase() == keys[i].dataset.ru
    ) {
      keys[i].classList.remove("active");
      keys[i].classList.add("remove");
    }
    if (e.code == "Space") {
      spaceKey.classList.remove("active");
      spaceKey.classList.add("remove");
    }
    if (e.code == "ShiftLeft") {
      shift_right.classList.remove("active");
      shift_right.classList.remove("remove");
    }
    if (e.code == "ShiftRight") {
      shift_left.classList.remove("active");
      shift_left.classList.remove("remove");
    }
    setTimeout(() => {
      keys[i].classList.remove("remove");
    }, 200);
  }
});
