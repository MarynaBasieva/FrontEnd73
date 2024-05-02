async function getReasponse(){
    let response = await fetch('http://localhost:8888/photo.json');
    let content = await response.json(); 
    content = content.splice(0,10);
    //console.log(content);

    let list = document.querySelector('.posts');

    let key;
    for(key in content){
        list.innerHTML +=`
            <li class="post">
                <h2>${content[key].title}</h2>
                <img src="${content[key].url}" width="500" />
            </li>
        `;
    }
}
getReasponse();
