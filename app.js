const getID = id => document.getElementById(id);

//var heading = getID('post-head').value;
//var content = getID('post-content').value;

getID('full-post').style.display = 'none';
getID('card-post').style.display = 'none';

getID('submit').addEventListener('click', ()=> {
    const heading = getID('post-head').value;
    const content = getID('post-content').value;
    getID('card-head').innerText = heading;
    getID('card-content').innerText = content.slice(0,150)+'...';


    //Making disappear the input box
    getID('card-post').style.display = 'block';

    getID('input-form').style.display='none';

})


getID('switcher').addEventListener('click', ()=>{
    getID('full-post').style.display = 'block';
    getID('card-post').style.display = 'none';
    getID('full-post-heading').innerHTML = getID('post-head').value;
    console.log(getID('post-head').value)
    getID('full-post-content').innerHTML = getID('post-content').value;
    console.log(getID('post-content').value)

})

