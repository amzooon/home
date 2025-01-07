document.addEventListener("DOMContentLoaded", function() {
    var images = [
        { src: "ico/PageIcon.png", width: "60px", height: "60px" },
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];
    var imageElement = document.getElementById("randomImage");
    imageElement.src = selectedImage.src;
    imageElement.style.width = selectedImage.width;
    imageElement.style.height = selectedImage.height;
});

const mediaFiles = [
    { type: 'sectionTitle', text: 'KYLE:' },        
    { type: 'image', src: 'img/kyle/1.jpg', name: 'image kyle 1.jpg' },
    { type: 'image', src: 'img/kyle/2.jpg', name: 'image kyle 2.jpg' },
    { type: 'image', src: 'img/kyle/3.jpg', name: 'image kyle 3.jpg' },
    { type: 'image', src: 'img/kyle/4.jpg', name: 'image kyle 4.jpg' },
    { type: 'image', src: 'img/kyle/5.jpg', name: 'image kyle 5.jpg' },
    { type: 'image', src: 'img/kyle/6.jpg', name: 'image kyle 6.jpg' },
    { type: 'image', src: 'img/kyle/7.jpg', name: 'image kyle 7.jpg' },
    { type: 'image', src: 'img/kyle/8.jpg', name: 'image kyle 8.jpg' },
    { type: 'image', src: 'img/kyle/9.jpg', name: 'image kyle 9.jpg' },
    { type: 'image', src: 'img/kyle/10.jpg', name: 'image kyle 10.jpg' },
    { type: 'image', src: 'img/kyle/11.jpg', name: 'image kyle 11.jpg' },
    { type: 'image', src: 'img/kyle/12.jpg', name: 'image kyle 12.jpg' },
    { type: 'image', src: 'img/kyle/13.jpg', name: 'image kyle 13.jpg' },
    { type: 'image', src: 'img/kyle/14.jpg', name: 'image kyle 14.jpg' },
    { type: 'image', src: 'img/kyle/15.jpg', name: 'image kyle 15.jpg' },
    { type: 'image', src: 'img/kyle/16.jpg', name: 'image kyle 16.jpg' },
    { type: 'image', src: 'img/kyle/17.jpg', name: 'image kyle 17.jpg' },
    { type: 'image', src: 'img/kyle/18.jpg', name: 'image kyle 18.jpg' },
    { type: 'video', src: 'img/kyle/1.mp4', name: 'video kyle 1.mp4', description: '' },
    { type: 'video', src: 'img/kyle/2.mp4', name: 'video kyle 2.mp4', description: '' },
    { type: 'video', src: 'img/kyle/3.mp4', name: 'video kyle 3.mp4', description: '' },
    { type: 'video', src: 'img/kyle/4.mp4', name: 'video kyle 4.mp4', description: '' },
    
    
    { type: 'divider' }, 
    
    
    { type: 'sectionTitle', text: 'CHARLIE:' },
    { type: 'video', src: 'img/charlie/1.mp4', name: 'video charlie 1.mp4', description: '' },
    { type: 'video', src: 'img/charlie/2.mp4', name: 'video charlie 2.mp4', description: '' },
    { type: 'video', src: 'img/charlie/3.mp4', name: 'video charlie 3.mp4', description: '' },
    { type: 'video', src: 'img/charlie/4.mp4', name: 'video charlie 4.mp4', description: '' },
    { type: 'video', src: 'img/charlie/5.mp4', name: 'video charlie 5.mp4', description: '' },
    { type: 'video', src: 'img/charlie/6.mp4', name: 'video charlie 6.mp4', description: '' },
    { type: 'video', src: 'img/charlie/7.mp4', name: 'video charlie 7.mp4', description: '' },
    { type: 'video', src: 'img/charlie/8.mp4', name: 'video charlie 8.mp4', description: '' },
    { type: 'video', src: 'img/charlie/9.mp4', name: 'video charlie 9.mp4', description: '' },
    { type: 'video', src: 'img/charlie/10.mp4', name: 'video charlie 10.mp4', description: '' },
    { type: 'video', src: 'img/charlie/11.mp4', name: 'video charlie 11.mp4', description: '' },
    { type: 'video', src: 'img/charlie/12.mp4', name: 'video charlie 12.mp4', description: '' },
    { type: 'video', src: 'img/charlie/13.mp4', name: 'video charlie 13.mp4', description: '' },
    
    
    { type: 'divider' }, 
    
    
    { type: 'sectionTitle', text: 'BRANDO:' },
    { type: 'image', src: 'img/brando/1.jpg', name: 'image brando 1.jpg' },
    { type: 'image', src: 'img/brando/2.jpg', name: 'image brando 2.jpg' },
    { type: 'image', src: 'img/brando/3.jpg', name: 'image brando 3.jpg' },
    { type: 'image', src: 'img/brando/4.jpg', name: 'image brando 4.jpg' },
    { type: 'image', src: 'img/brando/5.jpg', name: 'image brando 5.jpg' },
    { type: 'video', src: 'img/brando/1.mp4', name: 'video brando 1.mp4', description: '' },
    
    
    { type: 'divider' }, 
    
    
    { type: 'sectionTitle', text: 'KIERN:' },
    { type: 'image', src: 'img/kiern/1.jpg', name: 'image kiern 1.jpg' },
    { type: 'image', src: 'img/kiern/2.jpg', name: 'image kiern 2.jpg' },
    { type: 'image', src: 'img/kiern/3.jpg', name: 'image kiern 3.jpg' },
    { type: 'image', src: 'img/kiern/4.jpg', name: 'image kiern 4.jpg' },
    { type: 'image', src: 'img/kiern/5.jpg', name: 'image kiern 5.jpg' },
    { type: 'image', src: 'img/kiern/6.jpg', name: 'image kiern 6.jpg' },
    { type: 'image', src: 'img/kiern/7.jpg', name: 'image kiern 7.jpg' },
    { type: 'image', src: 'img/kiern/8.jpg', name: 'image kiern 8.jpg' },
    { type: 'image', src: 'img/kiern/9.jpg', name: 'image kiern 9.jpg' },
    { type: 'image', src: 'img/kiern/10.jpg', name: 'image kiern 10.jpg' },
    { type: 'image', src: 'img/kiern/11.jpg', name: 'image kiern 11.jpg' },
    { type: 'image', src: 'img/kiern/12.jpg', name: 'image kiern 12.jpg' },
    { type: 'image', src: 'img/kiern/13.jpg', name: 'image kiern 13.jpg' },
    { type: 'image', src: 'img/kiern/14.jpg', name: 'image kiern 14.jpg' },
    { type: 'image', src: 'img/kiern/15.jpg', name: 'image kiern 15.jpg' },
    { type: 'image', src: 'img/kiern/16.jpg', name: 'image kiern 16.jpg' },
    { type: 'image', src: 'img/kiern/17.jpg', name: 'image kiern 17.jpg' },
    { type: 'image', src: 'img/kiern/18.jpg', name: 'image kiern 18.jpg' },
    { type: 'image', src: 'img/kiern/19.jpg', name: 'image kiern 19.jpg' },
    { type: 'image', src: 'img/kiern/20.jpg', name: 'image kiern 20.jpg' },
    { type: 'image', src: 'img/kiern/21.jpg', name: 'image kiern 21.jpg' },
    { type: 'image', src: 'img/kiern/22.jpg', name: 'image kiern 22.jpg' },
    { type: 'image', src: 'img/kiern/23.jpg', name: 'image kiern 23.jpg' },
    { type: 'image', src: 'img/kiern/24.jpg', name: 'image kiern 24.jpg' },
    { type: 'image', src: 'img/kiern/25.jpg', name: 'image kiern 25.jpg' },
    { type: 'image', src: 'img/kiern/26.jpg', name: 'image kiern 26.jpg' },
    { type: 'image', src: 'img/kiern/27.jpg', name: 'image kiern 27.jpg' },
    { type: 'image', src: 'img/kiern/28.jpg', name: 'image kiern 28.jpg' },
    { type: 'image', src: 'img/kiern/29.jpg', name: 'image kiern 29.jpg' },
    
    
    { type: 'divider' }, 
    
    
    { type: 'sectionTitle', text: 'AI:' },
    { type: 'image', src: 'img/ai/1.png', name: 'image ai 1.png' },
    { type: 'image', src: 'img/ai/2.png', name: 'image ai 2.png' },
    { type: 'image', src: 'img/ai/3.png', name: 'image ai 3.png' },
    { type: 'image', src: 'img/ai/4.png', name: 'image ai 4.png' },
    { type: 'image', src: 'img/ai/5.png', name: 'image ai 5.png' },
    { type: 'image', src: 'img/ai/6.png', name: 'image ai 6.png' },
    { type: 'image', src: 'img/ai/7.png', name: 'image ai 7.png' },
    { type: 'image', src: 'img/ai/8.png', name: 'image ai 8.png' },
    { type: 'image', src: 'img/ai/9.png', name: 'image ai 9.png' },
    { type: 'image', src: 'img/ai/10.jpg', name: 'image ai 10.jpg' },
    
    
    { type: 'divider' }, 
    
    
    { type: 'sectionTitle', text: 'ART:' },
    { type: 'image', src: 'img/art/1.png', name: 'image art 1.png' },
    { type: 'image', src: 'img/art/2.png', name: 'image art 2.png' },
    { type: 'image', src: 'img/art/3.png', name: 'image art 3.png' },
    { type: 'image', src: 'img/art/4.png', name: 'image art 4.png' },
    { type: 'image', src: 'img/art/5.png', name: 'image art 5.png' },
    { type: 'image', src: 'img/art/6.png', name: 'image art 6.png' },
    { type: 'image', src: 'img/art/7.png', name: 'image art 7.png' },
    { type: 'image', src: 'img/art/8.png', name: 'image art 8.png' },
    { type: 'image', src: 'img/art/9.png', name: 'image art 9.png' },
    { type: 'image', src: 'img/art/10.png', name: 'image art 10.png' },
    { type: 'image', src: 'img/art/11.png', name: 'image art 11.png' },
    { type: 'image', src: 'img/art/12.png', name: 'image art 12.png' },
    { type: 'image', src: 'img/art/13.png', name: 'image art 13.png' },
    { type: 'image', src: 'img/art/14.png', name: 'image art 14.png' },
    { type: 'image', src: 'img/art/15.png', name: 'image art 15.png' },
    { type: 'image', src: 'img/art/16.png', name: 'image art 16.png' },
    
    
    { type: 'divider' }, 
    
    
    { type: 'sectionTitle', text: 'VIDEOS:' },
    { type: 'video', src: 'img/video/1.mp4', name: 'video1.mp4', description: '' },
    { type: 'video', src: 'img/video/2.mp4', name: 'video2.mp4', description: '' },
    { type: 'video', src: 'img/video/3.mp4', name: 'video3.mp4', description: '' },
    { type: 'video', src: 'img/video/4.mp4', name: 'video4.mp4', description: '' },
    { type: 'video', src: 'img/video/5.mp4', name: 'video5.mp4', description: '' },
    { type: 'video', src: 'img/video/6.mp4', name: 'video6.mp4', description: '' },
    { type: 'video', src: 'img/video/7.mp4', name: 'video7.mp4', description: '' },
    { type: 'video', src: 'img/video/8.mp4', name: 'video8.mp4', description: '' },
    { type: 'video', src: 'img/video/9.mp4', name: 'video9.mp4', description: '' },
    { type: 'video', src: 'img/video/10.mp4', name: 'video10.mp4', description: '' },
    { type: 'video', src: 'img/video/11.mp4', name: 'video11.mp4', description: '' },
    { type: 'video', src: 'img/video/12.mp4', name: 'video12.mp4', description: '' },
    { type: 'video', src: 'img/video/13.mp4', name: 'video13.mp4', description: '' },
    { type: 'video', src: 'img/video/14.mp4', name: 'video14.mp4', description: '' },
    { type: 'video', src: 'img/video/15.mp4', name: 'video15.mp4', description: '' },
    { type: 'video', src: 'img/video/16.mp4', name: 'video16.mp4', description: '' },
    { type: 'video', src: 'img/video/17.mp4', name: 'video17.mp4', description: '' },
    
    
    { type: 'divider' }, 


    { type: 'sectionTitle', text: 'BEST:' },
    { type: 'image', src: 'img/best/1.jpg', name: 'image best 1.jpg' },
    { type: 'image', src: 'img/best/2.jpg', name: 'image best 2.jpg' },
    { type: 'image', src: 'img/best/3.jpg', name: 'image best 3.jpg' },
    { type: 'image', src: 'img/best/4.jpg', name: 'image best 4.jpg' },
    { type: 'video', src: 'img/best/1.mp4', name: 'video1.mp4', description: '' },
    { type: 'video', src: 'img/best/2.mp4', name: 'video2.mp4', description: '' },
    { type: 'video', src: 'img/best/3.mp4', name: 'video3.mp4', description: '' },
    { type: 'video', src: 'img/best/4.mp4', name: 'video4.mp4', description: '' },
    { type: 'video', src: 'img/best/5.mp4', name: 'video5.mp4', description: '' },
    { type: 'video', src: 'img/best/6.mp4', name: 'video6.mp4', description: '' },
    { type: 'video', src: 'img/best/7.mp4', name: 'video7.mp4', description: '' },
    { type: 'video', src: 'img/best/8.mp4', name: 'video8.mp4', description: '' },
    { type: 'video', src: 'img/best/9.mp4', name: 'video9.mp4', description: '' },
    { type: 'video', src: 'img/best/10.mp4', name: 'video10.mp4', description: '' },
    { type: 'video', src: 'img/best/11.mp4', name: 'video11.mp4', description: '' },
    { type: 'video', src: 'img/best/12.mp4', name: 'video12.mp4', description: '' },
    { type: 'video', src: 'img/best/13.mp4', name: 'video13.mp4', description: '' },
    { type: 'video', src: 'img/best/14.mp4', name: 'video14.mp4', description: '' },
    { type: 'video', src: 'img/best/15.mp4', name: 'video15.mp4', description: '' },
    { type: 'video', src: 'img/best/16.mp4', name: 'video16.mp4', description: '' },
    { type: 'video', src: 'img/best/17.mp4', name: 'video17.mp4', description: '' },
    { type: 'video', src: 'img/best/18.mp4', name: 'video18.mp4', description: '' },
    { type: 'video', src: 'img/best/19.mp4', name: 'video19.mp4', description: '' },
    
    
    { type: 'divider' }, 
    
    
    { type: 'sectionTitle', text: 'ALTRO:' },
    { type: 'image', src: 'img/altro/1.jpg', name: 'image altro 1.jpg' },
    { type: 'image', src: 'img/altro/2.jpg', name: 'image altro 2.jpg' },
    { type: 'image', src: 'img/altro/3.jpg', name: 'image altro 3.jpg' },
    { type: 'image', src: 'img/altro/4.jpg', name: 'image altro 4.jpg' },
    { type: 'image', src: 'img/altro/5.jpg', name: 'image altro 5.jpg' },
    { type: 'image', src: 'img/altro/6.jpg', name: 'image altro 6.jpg' },
    { type: 'image', src: 'img/altro/7.jpg', name: 'image altro 7.jpg' },
    { type: 'image', src: 'img/altro/8.jpg', name: 'image altro 8.jpg' },
    { type: 'image', src: 'img/altro/9.jpg', name: 'image altro 9.jpg' },
    { type: 'image', src: 'img/altro/10.jpg', name: 'image altro 10.jpg' },
    { type: 'image', src: 'img/altro/11.jpg', name: 'image altro 11.jpg' },
    { type: 'image', src: 'img/altro/12.jpg', name: 'image altro 12.jpg' },
    { type: 'image', src: 'img/altro/13.jpg', name: 'image altro 13.jpg' },
    { type: 'image', src: 'img/altro/14.jpg', name: 'image altro 14.jpg' },
    { type: 'image', src: 'img/altro/15.jpg', name: 'image altro 15.jpg' },
    { type: 'image', src: 'img/altro/16.jpg', name: 'image altro 16.jpg' },
    { type: 'image', src: 'img/altro/17.jpg', name: 'image altro 17.jpg' },
    { type: 'image', src: 'img/altro/18.jpg', name: 'image altro 18.jpg' },
    { type: 'image', src: 'img/altro/19.jpg', name: 'image altro 19.jpg' },
    { type: 'image', src: 'img/altro/20.jpg', name: 'image altro 20.jpg' },
    { type: 'image', src: 'img/altro/21.jpg', name: 'image altro 21.jpg' },
    { type: 'image', src: 'img/altro/22.jpg', name: 'image altro 22.jpg' },
    { type: 'image', src: 'img/altro/23.jpg', name: 'image altro 23.jpg' },
    { type: 'image', src: 'img/altro/24.jpg', name: 'image altro 24.jpg' },
    { type: 'image', src: 'img/altro/25.jpg', name: 'image altro 25.jpg' },
    { type: 'image', src: 'img/altro/26.jpg', name: 'image altro 26.jpg' },
    { type: 'video', src: 'img/altro/1.mp4', name: 'video altro 1.mp4', description: '' },
    { type: 'video', src: 'img/altro/2.mp4', name: 'video altro 2.mp4', description: '' },
    { type: 'video', src: 'img/altro/3.mp4', name: 'video altro 3.mp4', description: '' },
    { type: 'video', src: 'img/altro/4.mp4', name: 'video altro 4.mp4', description: '' },
    { type: 'video', src: 'img/altro/5.mp4', name: 'video altro 5.mp4', description: '' },


    /*{ type: 'divider' }, 


    { type: 'sectionTitle', text: 'FIORI:' },        
    { type: 'image', src: 'img/fiori/1.jpg', name: 'image fiori 1.jpg' },
    { type: 'image', src: 'img/fiori/2.jpg', name: 'image fiori 2.jpg' },
    { type: 'image', src: 'img/fiori/3.jpg', name: 'image fiori 3.jpg' },
    { type: 'image', src: 'img/fiori/4.jpg', name: 'image fiori 4.jpg' },
    { type: 'image', src: 'img/fiori/5.jpg', name: 'image fiori 5.jpg' },
    { type: 'image', src: 'img/fiori/6.jpg', name: 'image fiori 6.jpg' },
    { type: 'image', src: 'img/fiori/7.jpg', name: 'image fiori 7.jpg' },
    { type: 'image', src: 'img/fiori/8.jpg', name: 'image fiori 8.jpg' },
    { type: 'image', src: 'img/fiori/9.jpg', name: 'image fiori 9.jpg' },
    { type: 'image', src: 'img/fiori/10.jpg', name: 'image fiori 10.jpg' },
    { type: 'image', src: 'img/fiori/11.jpg', name: 'image fiori 11.jpg' },
    { type: 'image', src: 'img/fiori/12.jpg', name: 'image fiori 12.jpg' },
    { type: 'image', src: 'img/fiori/13.jpg', name: 'image fiori 13.jpg' },
    { type: 'image', src: 'img/fiori/14.jpg', name: 'image fiori 14.jpg' },
    { type: 'image', src: 'img/fiori/15.jpg', name: 'image fiori 15.jpg' },
    { type: 'image', src: 'img/fiori/16.jpg', name: 'image fiori 16.jpg' },
    { type: 'image', src: 'img/fiori/17.jpg', name: 'image fiori 17.jpg' },
    { type: 'image', src: 'img/fiori/18.jpg', name: 'image fiori 18.jpg' },
    { type: 'image', src: 'img/fiori/19.jpg', name: 'image fiori 19.jpg' },*/
]    

const mediaGrid = document.getElementById('mediaGrid');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const modalImg = document.getElementById('modalImage');
const downloadButton = document.getElementById('downloadButton');
const closeSpan = document.getElementsByClassName('close')[0];

mediaFiles.forEach(file => {
if (file.type === 'divider') {
const hr = document.createElement('hr');
hr.style.border = '0';
hr.style.height = '15px';
hr.style.backgroundColor = '#000000bb';
hr.style.width = '100%';
hr.style.margin = '30px 0'; // Spazio sopra e sotto il divisore
hr.style.gridColumn = '1 / -1'; // Fa sì che l'elemento prenda tutta la larghezza
mediaGrid.appendChild(hr);
return; // Salta il resto del codice poiché non serve aggiungere altro per il divisore
}

if (file.type === 'sectionTitle') {
const sectionTitle = document.createElement('div');
sectionTitle.textContent = file.text;
sectionTitle.className = 'section-title'; // Usa la classe CSS definita
mediaGrid.appendChild(sectionTitle);
return; // Salta il resto del codice poiché non serve aggiungere altro per il titolo
}

const gridItem = document.createElement('div');
gridItem.classList.add('grid-item');

if (file.type === 'image') {
const img = document.createElement('img');
img.src = file.src;
img.alt = file.name;
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    downloadButton.href = this.src;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const maxModalWidth = windowWidth * 0.9;
    const maxModalHeight = windowHeight * 0.9;

    const imgAspectRatio = this.naturalWidth / this.naturalHeight;
    const modalAspectRatio = maxModalWidth / maxModalHeight;

    if (imgAspectRatio > modalAspectRatio) {
        modalImg.style.width = `${maxModalWidth}px`;
        modalImg.style.height = `${maxModalWidth / imgAspectRatio}px`;
    } else {
        modalImg.style.height = `${maxModalHeight}px`;
        modalImg.style.width = `${maxModalHeight * imgAspectRatio}px`;
    }

    modalContent.style.display = "flex";
    modalContent.style.justifyContent = "center";
    modalContent.style.alignItems = "center";
    modalContent.style.height = `${maxModalHeight}px`;
    modalContent.style.marginTop = "5%";
};
gridItem.appendChild(img);
} else if (file.type === 'video') {
const video = document.createElement('video');
video.src = file.src;
video.controls = true;
gridItem.appendChild(video);

if (file.description) {
    const description = document.createElement('p');
    description.textContent = file.description;
    description.style.color = 'white';
    gridItem.appendChild(description);
}
}

const downloadLink = document.createElement('a');
downloadLink.href = file.src;
downloadLink.download = file.name;
downloadLink.classList.add('download-link');
downloadLink.textContent = 'Download';
gridItem.appendChild(downloadLink);

mediaGrid.appendChild(gridItem);
});

closeSpan.onclick = function() {
modal.style.display = "none";
};

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
};

document.addEventListener("DOMContentLoaded", function() {
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
const mediaElement = item.querySelector('img, video');
if (mediaElement) {
    mediaElement.addEventListener('load', () => {
        // Eventuale logica da aggiungere se necessario quando l'immagine/video è caricato
    });
}
});
    if (file.type === 'divider') {
        const hr = document.createElement('hr');
        hr.style.border = '0';
        hr.style.height = '15px';
        hr.style.backgroundColor = '#000000bb';
        hr.style.width = '100%';
        hr.style.margin = '30px 0'; // Spazio sopra e sotto il divisore
        hr.style.gridColumn = '1 / -1'; // Fa sì che l'elemento prenda tutta la larghezza
        mediaGrid.appendChild(hr);
        return; // Salta il resto del codice poiché non serve aggiungere altro per il divisore
    }

    if (file.type === 'sectionTitle') {
        const sectionTitle = document.createElement('div');
        sectionTitle.textContent = file.text;
        sectionTitle.className = 'section-title'; // Usa la classe CSS definita
        mediaGrid.appendChild(sectionTitle);
        return; // Salta il resto del codice poiché non serve aggiungere altro per il titolo
    }

    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    if (file.type === 'image') {
        const img = document.createElement('img');
        img.src = file.src;
        img.alt = file.name;
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            downloadButton.href = this.src;

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const maxModalWidth = windowWidth * 0.9;
            const maxModalHeight = windowHeight * 0.9;

            const imgAspectRatio = this.naturalWidth / this.naturalHeight;
            const modalAspectRatio = maxModalWidth / maxModalHeight;

            if (imgAspectRatio > modalAspectRatio) {
                modalImg.style.width = `${maxModalWidth}px`;
                modalImg.style.height = `${maxModalWidth / imgAspectRatio}px`;
            } else {
                modalImg.style.height = `${maxModalHeight}px`;
                modalImg.style.width = `${maxModalHeight * imgAspectRatio}px`;
            }

            modalContent.style.display = "flex";
            modalContent.style.justifyContent = "center";
            modalContent.style.alignItems = "center";
            modalContent.style.height = `${maxModalHeight}px`;
            modalContent.style.marginTop = "5%";
        };
        gridItem.appendChild(img);
    } else if (file.type === 'video') {
        const video = document.createElement('video');
        video.src = file.src;
        video.controls = true;
        gridItem.appendChild(video);

        if (file.description) {
            const description = document.createElement('p');
            description.textContent = file.description;
            description.style.color = 'white';
            gridItem.appendChild(description);
        }
    }

    const downloadLink = document.createElement('a');
    downloadLink.href = file.src;
    downloadLink.download = file.name;
    downloadLink.classList.add('download-link');
    downloadLink.textContent = 'Download';
    gridItem.appendChild(downloadLink);

    mediaGrid.appendChild(gridItem);
});

closeSpan.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const mediaElement = item.querySelector('img, video');
        if (mediaElement) {
            mediaElement.addEventListener('load', () => {
                // Eventuale logica da aggiungere se necessario quando l'immagine/video è caricato
            });
        }
    });
});