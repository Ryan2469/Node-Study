const id = document.querySelector('#id'),
    psword = document.querySelector('#psword'),
    loginBut = document.querySelector('#but');  

    loginBut.addEventListener("click", login);

function login () {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    
    console.log(req);

    fetch("/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });
}


    