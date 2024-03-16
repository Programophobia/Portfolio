

function divtxt(id, txt, ms, wait = 0) {
    const div = document.getElementById(id);
    return new Promise((res, rej) => {
      setTimeout(() => { // optional initial timeout, when wait>0
        div.textContent = "";
        const a = txt.split(""),
          iv = setInterval(() => {
            if (a.length)
              div.textContent += a.shift();
            else {
              clearInterval(iv);
              res(txt);
            }
          }, ms);
      }, wait);
    });
  }
  divtxt("welcome", "It's nice to meet You", 100)
    .then(prevText => (console.log(prevText + ' is done.'),
      divtxt("descr", "JUST A BIT ABOUT BELOW", 100)))
    .then(() => divtxt("welcome", "Thank you for visiting!!", 50, 2000))
    


function printAbout(msg) {
    const paragrapf = document.createElement('p');
    paragrapf.innerHTML = msg;
    document.getElementById('box-show').appendChild(paragrapf)

}

printAbout('Internet, online courses, books')

function moreAbout(msg) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = msg;
    document.getElementById('box-show-1').appendChild(paragraph)
}

moreAbout('01001100 01101001 01100010 01101001 01100101 00100000 01100110 01110010 01111001 01110100 01101011 01101001')


function lastAbout (msg) {
    const paragrapf = document.createElement('p');
    paragrapf.innerHTML = msg;
    document.getElementById('box-show-2').appendChild(paragrapf);
    
}

lastAbout('At a very beginning of the path')



