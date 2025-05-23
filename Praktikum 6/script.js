const carouselImages = document.getElementById('carousel-images');
const totalImages = carouselImages.children.length;
let index = 0;

function updateCarousel() {
  const offset = -index * 600; // Asumsikan tiap gambar 600px
  carouselImages.style.transform = `translateX(${offset}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (index < totalImages - 1) {
    index++;
  } else {
    index = 0; // kembali ke awal
  }
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = totalImages - 1; // kembali ke akhir
  }
  updateCarousel();
});
