let userDetailsCnt = document.getElementById('userDetails');

let userArray = [
    {
        profilURl: './image/user1.jpg',
        name: 'Amaan khan',
        email: 'aman1234@gmail.com',
    },
    {
        profilURl: './image/user2.jpg',
        name: 'Gani khan',
        email: 'gani1234@gmail.com',
    },
    {
        profilURl: './image/user3.png',
        name: 'Goldan khan',
        email: 'goldan1234@gmail.com',
    },
];

let html = userArray.map((user) => {
    return `
        <div class="user-card">
            <div class="img-box">
                <img src="${user.profilURl}" alt="User Image">
            </div>
            <div class="details-box">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
        </div>
    `;
}).join('');

userDetailsCnt.innerHTML = html;
