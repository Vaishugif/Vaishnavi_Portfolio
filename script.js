// Typed.js Animation for Hero Title
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed-text', {
    strings: [
      'Vaishnavi Mahajan',
      'a UI/UX Designer',
      'a Creative Thinker',
      'a Problem Solver'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
});

// Animated Changing Role Text
const roles = [
  'UI/UX Designer',
  'Creative Thinker',
  'Problem Solver',
  'Design Enthusiast'
];

let roleIndex = 0;
const roleElement = document.getElementById('changing-role');

function changeRole() {
  if (roleElement) {
    roleElement.style.opacity = '0.5';
    setTimeout(() => {
      roleElement.textContent = roles[roleIndex];
      roleElement.style.opacity = '1';
      roleIndex = (roleIndex + 1) % roles.length;
    }, 300);
  }
}

if (roleElement) {
  setInterval(changeRole, 3000);
  changeRole();
}

// Modal Functions for App Design Gallery
function openAppModal() {
  const modal = document.getElementById('appModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  // Auto-expand gallery when modal opens
  setTimeout(() => {
    const galleryContainer = document.getElementById('appGalleryContainer');
    const title = modal.querySelector('.case-study-title');
    const gallery = document.getElementById('appGallery');
    if (galleryContainer) {
      galleryContainer.style.maxHeight = '800px';
      if (title) title.classList.add('expanded');
      // Initialize arrow states
      updateArrowStates('appGallery', 'appLeftArrow', 'appRightArrow');
      // Add scroll listener
      if (gallery) {
        gallery.addEventListener('scroll', () => {
          updateArrowStates('appGallery', 'appLeftArrow', 'appRightArrow');
        });
      }
    }
  }, 100);
}

function closeAppModal() {
  document.getElementById('appModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Toggle App Gallery
function toggleAppGallery(event) {
  event.stopPropagation();
  const galleryContainer = document.getElementById('appGalleryContainer');
  const title = event.target.closest('.case-study-title');
  
  if (galleryContainer.style.maxHeight === '0px' || !galleryContainer.style.maxHeight) {
    galleryContainer.style.maxHeight = '800px';
    if (title) title.classList.add('expanded');
    // Scroll gallery to start
    setTimeout(() => {
      const gallery = galleryContainer.querySelector('.modal-gallery');
      if (gallery) gallery.scrollLeft = 0;
    }, 100);
  } else {
    galleryContainer.style.maxHeight = '0';
    if (title) title.classList.remove('expanded');
  }
}

// Modal Functions for Shaya Organics Website
function openShayaModal() {
  const modal = document.getElementById('shayaModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  // Auto-expand gallery when modal opens
  setTimeout(() => {
    const galleryContainer = document.getElementById('shayaGalleryContainer');
    const title = modal.querySelector('.case-study-title');
    if (galleryContainer) {
      galleryContainer.style.maxHeight = '800px';
      if (title) title.classList.add('expanded');
      // Scroll gallery to start
      setTimeout(() => {
        const gallery = galleryContainer.querySelector('.modal-gallery');
        if (gallery) gallery.scrollLeft = 0;
      }, 100);
    }
  }, 100);
}

function closeShayaModal() {
  document.getElementById('shayaModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Toggle Shaya Gallery
function toggleShayaGallery(event) {
  event.stopPropagation();
  const galleryContainer = document.getElementById('shayaGalleryContainer');
  const title = event.target.closest('.case-study-title');
  
  if (galleryContainer.style.maxHeight === '0px' || !galleryContainer.style.maxHeight) {
    galleryContainer.style.maxHeight = '800px';
    if (title) title.classList.add('expanded');
    // Scroll gallery to start
    setTimeout(() => {
      const gallery = galleryContainer.querySelector('.modal-gallery');
      if (gallery) gallery.scrollLeft = 0;
    }, 100);
  } else {
    galleryContainer.style.maxHeight = '0';
    if (title) title.classList.remove('expanded');
  }
}

// Modal Functions for Restaurant Website
function openRestaurantModal() {
  const modal = document.getElementById('restaurantModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  // Auto-expand gallery when modal opens
  setTimeout(() => {
    const galleryContainer = document.getElementById('restaurantGalleryContainer');
    const title = modal.querySelector('.case-study-title');
    if (galleryContainer) {
      galleryContainer.style.maxHeight = '800px';
      if (title) title.classList.add('expanded');
      // Scroll gallery to start
      setTimeout(() => {
        const gallery = galleryContainer.querySelector('.modal-gallery');
        if (gallery) gallery.scrollLeft = 0;
      }, 100);
    }
  }, 100);
}

function closeRestaurantModal() {
  document.getElementById('restaurantModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Toggle Restaurant Gallery
function toggleRestaurantGallery(event) {
  event.stopPropagation();
  const galleryContainer = document.getElementById('restaurantGalleryContainer');
  const title = event.target.closest('.case-study-title');
  
  if (galleryContainer.style.maxHeight === '0px' || !galleryContainer.style.maxHeight) {
    galleryContainer.style.maxHeight = '800px';
    if (title) title.classList.add('expanded');
    // Scroll gallery to start
    setTimeout(() => {
      const gallery = galleryContainer.querySelector('.modal-gallery');
      if (gallery) gallery.scrollLeft = 0;
    }, 100);
  } else {
    galleryContainer.style.maxHeight = '0';
    if (title) title.classList.remove('expanded');
  }
}

// Close modals when clicking outside the content
window.onclick = function(event) {
  const appModal = document.getElementById('appModal');
  const shayaModal = document.getElementById('shayaModal');
  const restaurantModal = document.getElementById('restaurantModal');
  
  if (event.target == appModal) {
    closeAppModal();
  }
  if (event.target == shayaModal) {
    closeShayaModal();
  }
  if (event.target == restaurantModal) {
    closeRestaurantModal();
  }
}

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeAppModal();
    closeShayaModal();
    closeRestaurantModal();
  }
});

// Gallery scroll snap and smooth scrolling
document.querySelectorAll('.modal-gallery').forEach(gallery => {
  gallery.addEventListener('scroll', function() {
    // Smooth scroll behavior already handled by CSS
  });
  
  // Keyboard navigation for gallery
  document.addEventListener('keydown', function(e) {
    if (gallery.closest('.modal').style.display === 'block') {
      if (e.key === 'ArrowLeft') {
        gallery.scrollBy({ left: -340, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        gallery.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }
  });
});

// Gallery Scroll Arrow Functions
function scrollAppGalleryLeft() {
  console.log('scrollAppGalleryLeft called');
  const gallery = document.getElementById('appGallery');
  console.log('Gallery element:', gallery);
  if (gallery) {
    console.log('Current scrollLeft:', gallery.scrollLeft);
    gallery.scrollLeft -= 240;
    console.log('New scrollLeft:', gallery.scrollLeft);
  } else {
    console.error('appGallery not found');
  }
}

function scrollAppGalleryRight() {
  console.log('scrollAppGalleryRight called');
  const gallery = document.getElementById('appGallery');
  console.log('Gallery element:', gallery);
  if (gallery) {
    console.log('Current scrollLeft:', gallery.scrollLeft);
    gallery.scrollLeft += 240;
    console.log('New scrollLeft:', gallery.scrollLeft);
  } else {
    console.error('appGallery not found');
  }
}

function scrollEcommerceGalleryLeft() {
  console.log('scrollEcommerceGalleryLeft called');
  const gallery = document.getElementById('ecommerceGallery');
  console.log('Gallery element:', gallery);
  if (gallery) {
    console.log('Current scrollLeft:', gallery.scrollLeft);
    gallery.scrollLeft -= 240;
    console.log('New scrollLeft:', gallery.scrollLeft);
  } else {
    console.error('ecommerceGallery not found');
  }
}

function scrollEcommerceGalleryRight() {
  console.log('scrollEcommerceGalleryRight called');
  const gallery = document.getElementById('ecommerceGallery');
  console.log('Gallery element:', gallery);
  if (gallery) {
    console.log('Current scrollLeft:', gallery.scrollLeft);
    gallery.scrollLeft += 240;
    console.log('New scrollLeft:', gallery.scrollLeft);
  } else {
    console.error('ecommerceGallery not found');
  }
}

// Update arrow visibility based on scroll position
function updateArrowStates(galleryId, leftArrowId, rightArrowId) {
  const gallery = document.getElementById(galleryId);
  const leftArrow = document.getElementById(leftArrowId);
  const rightArrow = document.getElementById(rightArrowId);
  
  if (!gallery || !leftArrow || !rightArrow) return;
  
  const scrollLeft = gallery.scrollLeft;
  const maxScroll = gallery.scrollWidth - gallery.clientWidth;
  
  leftArrow.classList.toggle('disabled', scrollLeft <= 0);
  rightArrow.classList.toggle('disabled', scrollLeft >= maxScroll - 10);
}

// Attach click event listeners to scroll arrows
document.addEventListener('DOMContentLoaded', function() {
  const appLeftArrow = document.getElementById('appLeftArrow');
  const appRightArrow = document.getElementById('appRightArrow');
  const ecommerceLeftArrow = document.getElementById('ecommerceLeftArrow');
  const ecommerceRightArrow = document.getElementById('ecommerceRightArrow');
  
  if (appLeftArrow) {
    appLeftArrow.addEventListener('click', scrollAppGalleryLeft);
  }
  if (appRightArrow) {
    appRightArrow.addEventListener('click', scrollAppGalleryRight);
  }
  if (ecommerceLeftArrow) {
    ecommerceLeftArrow.addEventListener('click', scrollEcommerceGalleryLeft);
  }
  if (ecommerceRightArrow) {
    ecommerceRightArrow.addEventListener('click', scrollEcommerceGalleryRight);
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// EmailJS Configuration and Form Submission
(function () {
  emailjs.init("hFb-6OO-2-iOKEQWM"); // Public Key
})();

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const submitBtn = contactForm.querySelector('.btn-send');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Sending...';

      emailjs
        .sendForm(
          "service_mccxtew",    // Service ID
          "template_oetdh0j",   // Template ID
          this
        )
        .then(
          function () {
            alert("Message sent successfully! I'll get back to you soon.");
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          },
          function (error) {
            console.error("FAILED...", error);
            alert("Message failed to send. Please try again or contact me directly.");
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }
        );
    });
  }
});

// Enhanced Cursor with Glow - Initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector(".cursor");
  const cursorGlow = document.querySelector(".cursor-glow");

  // Check if cursor elements exist
  if (cursor && cursorGlow) {
    console.log("Cursor elements found, initializing custom cursor...");
    console.log("Cursor element:", cursor);
    console.log("Cursor glow element:", cursorGlow);
    
    // Initial position
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
      cursorGlow.style.left = mouseX + "px";
      cursorGlow.style.top = mouseY + "px";
    });

    // Cursor Click Animation
    document.addEventListener("click", function(e) {
      cursor.classList.add("clicked");
      setTimeout(() => {
        cursor.classList.remove("clicked");
      }, 600);

      // Ripple effect on click
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "10px";
      ripple.style.height = "10px";
      ripple.style.background = "rgba(0, 212, 255, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.pointerEvents = "none";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.zIndex = "9997";
      ripple.style.animation = "ripple-effect 0.6s ease-out";
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  } else {
    console.warn("Cursor elements not found!");
    if (!cursor) console.warn("- .cursor element not found");
    if (!cursorGlow) console.warn("- .cursor-glow element not found");
  }
});

// Add ripple animation to CSS dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple-effect {
    0% {
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    100% {
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Cursor Hover Effects on Interactive Elements
document.querySelectorAll("a, button, .card, input, textarea").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
    cursor.style.borderColor = "#00d4ff";
    cursor.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.6)";
    cursorGlow.style.width = "80px";
    cursorGlow.style.height = "80px";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderColor = "#00d4ff";
    cursor.style.boxShadow = "none";
    cursorGlow.style.width = "50px";
    cursorGlow.style.height = "50px";
  });
});

// Scroll Animations (Fade in sections)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth Horizontal Scroll for Project Grid
const projectGrid = document.querySelector('.grid');
if (projectGrid) {
  let isDown = false;
  let startX;
  let scrollLeft;

  projectGrid.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - projectGrid.offsetLeft;
    scrollLeft = projectGrid.scrollLeft;
    projectGrid.style.cursor = 'grabbing';
  });

  projectGrid.addEventListener('mouseleave', () => {
    isDown = false;
    projectGrid.style.cursor = 'grab';
  });

  projectGrid.addEventListener('mouseup', () => {
    isDown = false;
    projectGrid.style.cursor = 'grab';
  });

  projectGrid.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectGrid.offsetLeft;
    const walk = (x - startX) * 2;
    projectGrid.scrollLeft = scrollLeft - walk;
  });

  // Add keyboard arrow navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      projectGrid.scrollBy({ left: -380, behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      projectGrid.scrollBy({ left: 380, behavior: 'smooth' });
    }
  });
}

// Parallax effect on mouse move
document.addEventListener("mousemove", (e) => {
  const blobs = document.querySelectorAll(".blob");
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  blobs.forEach((blob, index) => {
    const speed = (index + 1) * 10;
    blob.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
  });
});
