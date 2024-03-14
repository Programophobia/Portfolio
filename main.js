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

moreAbout('01001100 01110101 01100010 01101001 00100000 01100110 01110010 01111001 01110100 01101011 01101001')


function lastAbout (msg) {
    const paragrapf = document.createElement('p');
    paragrapf.innerHTML = msg;
    document.getElementById('box-show-2').appendChild(paragrapf);
    
}

lastAbout('At a very beginning of the path')
