const loadPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    //console.log(typeof posts)
    displayPost(posts);
}
loadPost();

const displayPost = posts => {
    
    const postDiv = document.getElementById('posts');

    posts.forEach(e => {
        const string = e.title;
        const postcard = document.createElement('div');
        postcard.classList = `bg-[#F3F3F5] p-6 rounded-2xl flex mb-5`;
        postcard.innerHTML = `
        <div class="avatar ${e.isActive ? 'online' : 'offline' } h-24">
            <div class="w-20 h-20 rounded-xl mt-4 mr-4">
                <img class=""
                    src="${e.image}" />
            </div>
        </div>
        <div class="mt-4 ml-4 lg:w-[596px]">
            <div class="flex font-medium">
                #<h5 class="mr-7">${e.category}</h5>
                Author: <p>${e.author.name}</p>
            </div>
            <h4 class="mul text-xl font-bold mt-4">${e.title}</h4>
            <p class="border-b-2 border-[#12132D40] border-dashed py-4 text-[#12132d75]">${e.description}</p>
            <div class="flex text-[#12132d75] mt-4">
                <div class="flex grow">
                    <img src="./images/Group 13.png" class="mr-3">
                <p>${e.comment_count}</p>
                <img src="./images/Group 16eye.png" class="mr-3 ml-9">
                <p>${e.view_count}</p>
                <img src="./images/Group 18time.png" class="mr-3 ml-9">
                <p>${e.posted_time} min</p>
                </div>
                <button class="btn-ghost rounded-2xl bt" onclick = "ok(${string})"><img src="./images/Group 40106read-sign.png"></button>
            </div>
        </div>
        `
        postDiv.appendChild(postcard);
    });

}


function ok(event){
    // document.getElementById('posts').addEventListener('click',function(event){
    //     const mnode = event.target.parentNode.parentNode.parentNode.childNodes;
    //     const title = mnode[3].innerText;
    //     const node = (event.target.parentNode.parentNode.childNodes);
    //     const cnode = node[1].childNodes;
    //     const view = cnode[7].innerText;
    //     console.log(mnode[3].innerText);
    // })
    console.log(event);
}

const loadLatestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = data;
    //console.log(typeof posts)
    displayLatestPost(posts);
}

loadLatestPost();

const displayLatestPost = posts => {

    const latestPostDiv = document.getElementById('latest-post');
    
    posts.forEach(element => {
        const postcard = document.createElement('div');
        postcard.classList = `card w-96 bg-base-100 shadow-xl`;
        postcard.innerHTML = `
        <figure class="bg-[#12132D0D] w-80 mx-auto mt-7 rounded-2xl">
        <img src="${element.cover_image}"/>
        </figure>
        <div class="card-body p-[1.5rem]">
            <div class="flex gap-2"><img src="./images/Framedate.png" alt=""> <p class="inter text-[#12132d7d] font-semibold">${element.author.posted_date ?? 'No publish date'}</p></div>
            <h2 class="card-title">
            ${element.title}
            </h2>
            <p class="text-[#12132D99] mb-4">${element.description}</p>
            <div class="card-actions flex">
            <img src="${element.profile_image}" alt="" width = "64px" class = "rounded-full">
            <div>
                <h6 class="font-bold mt-3">${element.author.name}</h6>
                <p class="text-[#12132D99]">${element.author.designation ?? 'unknown'}</p>
            </div>
            </div>
        </div>
        `
        latestPostDiv.appendChild(postcard)
    });
}