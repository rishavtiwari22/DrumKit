
let btn = document.querySelectorAll('button');

btn.forEach(b => b.addEventListener('click', (e) => {
    let buton = e.target;
    let attr = buton.getAttribute('class');
    document.getElementById(attr).play();
    })
)

document.addEventListener('keypress', (e) => {
    if (e.key === 'w'){
        document.getElementById('w').play()
    }else if (e.key === 's'){
        document.getElementById('s').play()
    }else if (e.key === 'a'){
        document.getElementById('a').play()
    }else if (e.key === 'd'){
        document.getElementById('d').play()
    }else if (e.key === 'j'){
        document.getElementById('j').play()
    }else if (e.key === 'k'){
        document.getElementById('k').play()
    }else if (e.key === 'l'){
        document.getElementById('l').play()
    }
});


let head = document.getElementsByClassName('img');
head.addEventListener('click', (e) => {
    console.log(e.target)
    document.getElementById('img').play()
});
