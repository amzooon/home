const mediaFiles = [
    { type: 'image', src: 'img/kyle/1.jpg', name: 'image1 a.jpg' },
    { type: 'image', src: 'img/kyle/2.jpg', name: 'image2 a.jpg' },
    { type: 'image', src: 'img/kyle/3.jpg', name: 'image3 a.jpg' },
    { type: 'image', src: 'img/kyle/4.jpg', name: 'image4 a.jpg' },
    { type: 'image', src: 'img/kyle/5.jpg', name: 'image5.jpg' },
    { type: 'image', src: 'img/kyle/6.jpg', name: 'image6.jpg' },
    { type: 'image', src: 'img/kyle/7.jpg', name: 'image7.jpg' },
    { type: 'image', src: 'img/kyle/8.jpg', name: 'image8.jpg' },
    { type: 'image', src: 'img/kyle/9.jpg', name: 'image9.jpg' },
    { type: 'image', src: 'img/kyle/10.jpg', name: 'image10.jpg' },
    { type: 'image', src: 'img/kyle/11.jpg', name: 'image11.jpg' },
    { type: 'image', src: 'img/kyle/12.jpg', name: 'image12.jpg' },
    { type: 'image', src: 'img/kyle/13.jpg', name: 'image13.jpg' },
    { type: 'image', src: 'img/kyle/14.jpg', name: 'image14.jpg' },
    { type: 'image', src: 'img/kyle/15.jpg', name: 'image15.jpg' },
    { type: 'image', src: 'img/kyle/16.jpg', name: 'image16.jpg' },
    { type: 'image', src: 'img/kyle/52.jpg', name: 'image52.jpg' },
    { type: 'video', src: 'img/video/22.mp4', name: 'video22.mp4', description: '' },
    { type: 'video', src: 'img/video/23.mp4', name: 'video23.mp4', description: '' },
    { type: 'video', src: 'img/video/87.mp4', name: 'video87.mp4', description: '' },
    { type: 'image', src: 'img/brando/17.jpg', name: 'image17.jpg' },
    { type: 'image', src: 'img/brando/18.jpg', name: 'image18.jpg' },
    { type: 'image', src: 'img/brando/19.jpg', name: 'image19.jpg' },
    { type: 'image', src: 'img/brando/20.jpg', name: 'image20.jpg' },
    { type: 'image', src: 'img/brando/21.jpg', name: 'image21.jpg' },
    { type: 'video', src: 'img/brando/66.mp4', name: 'video66.mp4', description: '' },
    { type: 'image', src: 'img/kiern/67.jpg', name: 'image67.jpg' },
    { type: 'image', src: 'img/kiern/68.jpg', name: 'image68.jpg' },
    { type: 'image', src: 'img/kiern/69.jpg', name: 'image69.jpg' },
    { type: 'image', src: 'img/kiern/70.jpg', name: 'image70.jpg' },
    { type: 'image', src: 'img/kiern/71.jpg', name: 'image71.jpg' },
    { type: 'image', src: 'img/kiern/72.jpg', name: 'image72.jpg' },
    { type: 'image', src: 'img/kiern/73.jpg', name: 'image73.jpg' },
    { type: 'image', src: 'img/kiern/74.jpg', name: 'image74.jpg' },
    { type: 'image', src: 'img/kiern/75.jpg', name: 'image75.jpg' },
    { type: 'image', src: 'img/kiern/76.jpg', name: 'image76.jpg' },
    { type: 'image', src: 'img/kiern/77.jpg', name: 'image77.jpg' },
    { type: 'image', src: 'img/kiern/78.jpg', name: 'image78.jpg' },
    { type: 'image', src: 'img/kiern/79.jpg', name: 'image79.jpg' },
    { type: 'image', src: 'img/kiern/82.jpg', name: 'image82.jpg' },
    { type: 'image', src: 'img/kyle/53.jpg', name: 'image53.jpg' },
    { type: 'video', src: 'img/video/54.mp4', name: 'video54.mp4', description: '' },
    { type: 'image', src: 'img/ai/24.png', name: 'image24.png' },
    { type: 'image', src: 'img/ai/25.png', name: 'image25.png' },
    { type: 'image', src: 'img/ai/26.png', name: 'image26.png' },
    { type: 'image', src: 'img/ai/27.png', name: 'image27.png' },
    { type: 'image', src: 'img/ai/28.png', name: 'image28.png' },
    { type: 'image', src: 'img/ai/29.png', name: 'image29.png' },
    { type: 'image', src: 'img/ai/30.png', name: 'image30.png' },
    { type: 'image', src: 'img/ai/31.png', name: 'image31.png' },
    { type: 'image', src: 'img/ai/32.png', name: 'image32.png' },
    { type: 'image', src: 'img/ai/33.jpg', name: 'image33.jpg' },
    { type: 'image', src: 'img/art/34.png', name: 'image34.png' },
    { type: 'image', src: 'img/art/35.png', name: 'image35.png' },
    { type: 'image', src: 'img/art/36.png', name: 'image36.png' },
    { type: 'image', src: 'img/art/37.png', name: 'image37.png' },
    { type: 'image', src: 'img/art/38.png', name: 'image38.png' },
    { type: 'image', src: 'img/art/39.png', name: 'image39.png' },
    { type: 'image', src: 'img/art/40.png', name: 'image40.png' },
    { type: 'image', src: 'img/art/41.png', name: 'image41.png' },
    { type: 'image', src: 'img/art/42.png', name: 'image42.png' },
    { type: 'image', src: 'img/art/43.png', name: 'image43.png' },
    { type: 'image', src: 'img/art/44.png', name: 'image44.png' },
    { type: 'image', src: 'img/art/45.png', name: 'image45.png' },
    { type: 'image', src: 'img/art/46.png', name: 'image46.png' },
    { type: 'image', src: 'img/art/47.png', name: 'image47.png' },
    { type: 'image', src: 'img/art/48.png', name: 'image48.png' },
    { type: 'image', src: 'img/art/49.png', name: 'image49.png' },
    { type: 'image', src: 'img/ai/50.png', name: 'image50.png' },
    { type: 'image', src: 'img/ai/51.png', name: 'image51.png' },
    { type: 'image', src: 'img/ai/83.jpg', name: 'image83.jpg' },
    { type: 'image', src: 'img/ai/84.jpg', name: 'image84.jpg' },
    { type: 'video', src: 'img/video/55.mp4', name: 'video55.mp4', description: '' },
    { type: 'video', src: 'img/video/80.mp4', name: 'video80.mp4', description: '' },
    { type: 'video', src: 'img/video/81.mp4', name: 'video81.mp4', description: '' },
    { type: 'video', src: 'img/video/56.mp4', name: 'video56.mp4', description: '' },
    { type: 'video', src: 'img/video/57.mp4', name: 'video57.mp4', description: '' },
    { type: 'video', src: 'img/video/58.mp4', name: 'video58.mp4', description: '' },
    { type: 'video', src: 'img/video/59.mp4', name: 'video59.mp4', description: '' },
    { type: 'video', src: 'img/video/60.mp4', name: 'video60.mp4', description: '' },
    { type: 'video', src: 'img/video/61.mp4', name: 'video61.mp4', description: '' },
    { type: 'video', src: 'img/video/62.mp4', name: 'video62.mp4', description: '' },
    { type: 'video', src: 'img/video/63.mp4', name: 'video63.mp4', description: '' },
    { type: 'video', src: 'img/video/64.mp4', name: 'video64.mp4', description: '' },
    { type: 'video', src: 'img/video/65.mp4', name: 'video65.mp4', description: '' },
    { type: 'video', src: 'img/video/86.mp4', name: 'video86.mp4', description: '' },
];

const mediaGrid = document.getElementById('mediaGrid');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const modalImg = document.getElementById('modalImage');
const downloadButton = document.getElementById('downloadButton');
const closeSpan = document.getElementsByClassName('close')[0];

mediaFiles.forEach(file => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    if (file.type === 'image') {
        const img = document.createElement('img');
        img.src = file.src;
        img.alt = file.name;
        img.onclick = function(){
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
