const getID = id => document.getElementById(id);

fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var joke = data.value;
        console.log(joke);

        getID('card-content').innerText = joke;
    })


getID('submit').addEventListener('click', ()=>{
    const head = getID('post-head').value;
    //console.log(head);
    const content = getID('post-content').value;
    console.log(content);

    const mainBody = getID('inner-body');
    getID('post-head').value = "";
    getID('post-content').value = "";


    const markUp = `
            <div class="container" id="card-post">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" id='card-head'>${head}</h5>
                <p class="card-text" id='card-content'>${content}</p>
            </div>
        </div>
    </div>
    `;

    mainBody.insertAdjacentHTML('beforeend', markUp);
})


