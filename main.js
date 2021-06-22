const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt, molestiae earum suscipit quaerat eligendi. Reiciendis autem aliquid incidunt facere."
    },
    {
        id: 2,
        name: "anna johson",
        job: "graphic artist",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt, molestiae earum suscipit quaerat eligendi. Reiciendis autem aliquid incidunt facere."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt, molestiae earum suscipit quaerat eligendi. Reiciendis autem aliquid incidunt facere."
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt, molestiae earum suscipit quaerat eligendi. Reiciendis autem aliquid incidunt facere."
    }
]

 let author = document.querySelector('#author');
 let job = document.querySelector('#job');
 let comment = document.querySelector('#comment');
 let img = document.querySelector('#person-img');

 let leftButton = document.querySelector('#left');
 let rightButton = document.querySelector('#right');
 let random = document.querySelector('#random');

let currentItem =1;


window.addEventListener('DOMContentLoaded', () => {
    showperson();

});

showperson = () => {
    let item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    comment.textContent = item.text;
};

rightButton.addEventListener('click', () => {
    currentItem ++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showperson();
});

leftButton.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showperson();
});

random.addEventListener('click', () =>{
    currentItem = randomNumber();
    showperson();
    console.log(currentItem);
});

randomNumber = () =>{
    let number = Math.floor(Math.random() * reviews.length);
    return number;
};

