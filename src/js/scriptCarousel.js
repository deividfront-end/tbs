

function setupCarousel(carouselId, galleryId) {  
  const gallery = document.getElementById(galleryId);  
  const images = gallery.children;  
  let currentIndex = 0;  

  document.getElementById('next' + carouselId.charAt(carouselId.length - 1)).addEventListener('click', () => {  
      currentIndex = (currentIndex + 1) % images.length;  
      updateGallery();  
  });  

  document.getElementById('prev' + carouselId.charAt(carouselId.length - 1)).addEventListener('click', () => {  
      currentIndex = (currentIndex - 1 + images.length) % images.length;  
      updateGallery();  
  });  

  function updateGallery() {  
      const offset = -currentIndex * 100; // Move para a imagem atual  
      gallery.style.transform = `translateX(${offset}%)`;  
  }  
}  

// Inicializando cada carrossel  
setupCarousel('carousel1', 'gallery1');  
setupCarousel('carousel2', 'gallery2');  
setupCarousel('carousel3', 'gallery3');  