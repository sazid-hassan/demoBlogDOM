
const getID = id => document.getElementById(id);

getID('card-post').style.display = 'none';
getID('full-post').style.display = 'none';




getID('submit').addEventListener('click', ()=>{
    const head = getID('post-head').value;
    // console.log(head);
    const content = getID('post-content').value;
    // console.log(content);
    getID('post-input').style.display = 'none';

    if(content.length > 150)
    {
        getID('card-head').innerText = head;
        getID('card-content').innerText = content.slice(0,150)+'...';
        getID('card-post').style.display = 'block';
    }
    else {
        getID('card-head').innerText = head;
        getID('card-content').innerText = content;
        getID('switcher').style.display = 'none';
        getID('card-post').style.display = 'block';
    }
})

getID('switcher').addEventListener('click', ()=>{
    getID('card-post').style.display = 'none';
    getID('full-post').style.display = 'block';
    getID('full-heading').innerText = getID('post-head').value;
    console.log(getID('post-head').value);
    getID('full-content').innerText = getID('post-content').value;

})
