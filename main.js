// fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
// .then(res => res.json())
// .then(data => console.log(data))

const loadLatestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = data;
    //console.log(posts)
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