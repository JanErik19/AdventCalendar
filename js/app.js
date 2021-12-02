const btn = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');
const calendarDay = 24;

btn.addEventListener('click', (event) => {
    console.log('test')

    for(let i = 0; i < calendarDay; i++){
        const calendarDoor = document.createElement('div');
        calendarDoor.classList.add('image');
        const calendarDoorText = document.createElement('div');
        calendarDoorText.classList.add('text');

        calendarDoor.style.gridArea = `day${i+1}`;
        calendarDoorText.innerHTML = i + 1;

        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);

        let picNumber = i+1;
        let picPath = `./images/pic${picNumber}.jpg`;

        calendarDoorText.addEventListener('click', (event)=>{
            event.target.parentNode.style.backgroundImage = `url("${picPath}")`;
            event.target.style.opacity = 0;
            event.target.style.backgroundColor = '#fff';
        });

    }

    event.preventDefault();
});

const countdown = document.querySelector('.countdown');
const targetDate = new Date('Dec 24, 2021, 00:00:01').getTime();
const interval = setInterval(() => {

    const now = new Date().getTime();

    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft/(1000*60*60*24));
    const hours = Math.floor(timeLeft % (1000*60*60*24) / (1000*60*60));
    const minutes = Math.floor(timeLeft % (1000*60*60) / (1000*60));
    const seconds = Math.floor(timeLeft % (1000*60) / (1000));

    countdown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${minutes} minutit</span></div>
    <div><span>${seconds} sekundit</span></div>
    `;
}, 1000);