const universe = document.querySelector('.universe');
const texts = ["Thavry ❤️", "I Love You ❤️", "I Miss You❤️", "My Heart❤️", "My Pricess🫶❤️","Thavry ❤️"];
const photos = [
  "photo/love_1.jpg",
  "photo/love_2.jpg",
  "photo/love_3.jpg",
  "photo/love_4.jpg",
  "photo/love_5.jpg"
];

function createFloatingText() {
  const text = document.createElement('div');
  text.className = 'love-text';
  text.innerText = texts[Math.floor(Math.random() * texts.length)];
  text.style.left = Math.random() * window.innerWidth + 'px';
  text.style.fontSize = 14 + Math.random() * 20 + 'px';
  text.style.animationDuration = 5 + Math.random() * 5 + 's';
  universe.appendChild(text);
  setTimeout(() => text.remove(), 10000);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  universe.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

function createPhoto() {
  const img = document.createElement('img');
  img.src = photos[Math.floor(Math.random() * photos.length)];
  img.className = 'love-photo';
  img.style.left = Math.random() * window.innerWidth + 'px';
  img.style.width = 80 + Math.random() * 70 + 'px';
  img.style.top = window.innerHeight + 'px';
  img.style.animationDuration = 10 + Math.random() * 10 + 's';
  universe.appendChild(img);
  setTimeout(() => img.remove(), 15000);
}

setInterval(createFloatingText, 300);
setInterval(createHeart, 500);
setInterval(createPhoto, 1500);

document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music) {
    music.play().catch(() => {});
  }
}, { once: true });
