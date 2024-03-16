
//const welcome = document.getElementById('welcome');
//const welcText = 'HELLO!';

//for (let i = 0; i < welcText.length; i++) {
   // setTimeout(() => {
  //      welcome.innerText += welcText[i];
 //   }, i * 100);
//}

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
      divtxt("descr", "You can also chain this function with any number of consecutive actions."
      +" Now: wait for 2 seconds ...", 100)))
    .then(() => divtxt("welcome", "This promised-based approach REALLY lets you do it!! 👍🏻", 50, 2000))
    .then(() => (console.log("ready?"),"Yes! I am REALLY DONE now! 😁"))
    .then(console.log)


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



