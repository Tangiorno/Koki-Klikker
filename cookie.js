var container = document.querySelector('#cookie-container');
var button = document.createElement('button');
var compteur = 0;
var level = document.createElement('p');

var image = document.createElement('img');
image.src = './cookie.jpg';
image.alt = 'Button Image';
button.appendChild(image);

button.addEventListener('click', function() {
    compteur++;
    document.getElementById('count').textContent = compteur;
    switch (compteur) {
        case 1:
            document.getElementById('level-display').textContent = "Beginner Koki Klikker";
            break;
        case 100:
            document.getElementById('level-display').textContent = "Novice Koki Klikker";
            break;
        case 300:
            document.getElementById('level-display').textContent = "Specialist Koki Klikker";
            document.getElementById('specialist').src = './specialist.gif';
            break;
        case 750:
            document.getElementById('level-display').textContent = "Expert Koki Klikker";
            break;
        case 1200:
            document.getElementById('level-display').textContent = "Master Koki Klikker";
            break;
        case 2000:
            document.getElementById('level-display').textContent = "Champion Koki Klikker";
            break;
        case 3000:
            document.getElementById('level-display').textContent = "King of Koki Klikkers";
            break;
        case 5000:
            document.getElementById('level-display').textContent = "Supreme Leader of Koki Klikkers";
            break;
        case 8000:
            document.getElementById('level-display').textContent = "God-Like Koki Klikker";
            break;
        case 12500:
            document.getElementById('level-display').textContent = "Infinite Power of Koki Klikking";
            break;
        case 20000:
            document.getElementById('level-display').textContent = "WTF IS THIS ???? GET A LIFE DUDE";
            image.src ="./koki.jpg";
            break;
    }
});

container.appendChild(button);