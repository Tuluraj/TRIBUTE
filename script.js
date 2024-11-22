// script.js
// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Get person ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const personId = urlParams.get("id");
  
    // Get person data from localStorage
    const personData = JSON.parse(localStorage.getItem("selectedPerson"));
  
    if (personData) {
      displayPersonDetails(personData);
    } else {
      // Handle case where data isn't available
      window.location.href = "index.html";
    }
  });
  
  // Display person details
  function displayPersonDetails(person) {
    // Update hero section
    document.getElementById("person-name").textContent = person.name;
    document.getElementById("person-years").textContent = person.years;
  
    // Set hero background image
    document.getElementById(
      "hero-section"
    ).style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${person.image}')`;
  
    // Update basic information
    document.getElementById("person-description").textContent =
      person.description;
    document.getElementById(
      "birth-place"
    ).textContent = `Birth Place: ${person.detailedInfo.birthPlace}`;
    document.getElementById(
      "education"
    ).textContent = `Education: ${person.detailedInfo.education}`;
  
    // Update career timeline
    const timelineContainer = document.getElementById("career-timeline");
    timelineContainer.innerHTML = "";
    person.detailedInfo.career.forEach((career) => {
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item";
      timelineItem.textContent = career;
      timelineContainer.appendChild(timelineItem);
    });
  
    // Update awards
    const awardsContainer = document.getElementById("awards-list");
    awardsContainer.innerHTML = "";
    person.detailedInfo.awards.forEach((award) => {
      const li = document.createElement("li");
      li.textContent = award;
      awardsContainer.appendChild(li);
    });
  
    // Update contributions
    const contributionsContainer = document.getElementById("contributions-list");
    contributionsContainer.innerHTML = "";
    person.detailedInfo.contributions.forEach((contribution) => {
      const li = document.createElement("li");
      li.textContent = contribution;
      contributionsContainer.appendChild(li);
    });
  
    // Update Famous Quotes
    const quotesContainer = document.getElementById("quotes-list");
    quotesContainer.innerHTML = "";
    person.detailedInfo.quotes.forEach((quote) => {
      const li = document.createElement("li");
      li.textContent = quote;
      quotesContainer.appendChild(li);
    });
  
    // images gallery
    const galleryGrid = document.getElementById("gallery-grid");
    galleryGrid.innerHTML = ""; // Clear existing images
  
    const galleryImages = person.detailedInfo.galleryImages || [];
  
    if (galleryImages.length > 0) {
      galleryImages.forEach((imageUrl, index) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "gallery-image-wrapper";
  
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = `${person.name} - Image ${index + 1}`;
        image.loading = "lazy"; // Lazy loading for performance
  
        // Add click event to open image in modal
        image.addEventListener("click", () => openImageModal(imageUrl));
  
        imageWrapper.appendChild(image);
        galleryGrid.appendChild(imageWrapper);
      });
    } else {
      galleryGrid.innerHTML = "<p>No images available for this personality.</p>";
    }
  
    // Related personalities section
    const relatedGrid = document.getElementById("related-grid");
    relatedGrid.innerHTML = "";
  
    const related = personalities
      .filter(
        (p) =>
          p.id !== person.id &&
          (p.category === person.category ||
            Math.abs(
              parseInt(p.years.split("-")[0]) -
                parseInt(person.years.split("-")[0])
            ) < 50)
      )
      .slice(0, 3);
  
    if (related.length === 0) {
      relatedGrid.innerHTML = "<p>No related personalities found.</p>";
    } else {
      related.forEach((p) => {
        const relatedCard = document.createElement("div");
        relatedCard.className = "related-card";
        relatedCard.addEventListener("click", () => {
          localStorage.setItem("selectedPerson", JSON.stringify(p));
          window.location.href = `detail.html?id=${p.id}`;
        });
  
        relatedCard.innerHTML = `
          <div class="related-image">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
          </div>
          <div class="related-info">
            <div class="related-name">${p.name}</div>
            <div class="related-years">${p.years}</div>
            <div class="related-category">${p.category}</div>
          </div>
        `;
        relatedGrid.appendChild(relatedCard);
      });
    }
  }
  

// Function to open image modal
// Function to open image modal
function openImageModal(imageUrl) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const overlay = document.getElementById("modal-overlay");
  
  // Prevent default behavior if called from an anchor tag
  event.preventDefault();
  
  modalImage.src = imageUrl;
  modal.style.display = "block";
  overlay.style.display = "block";
  
  // Store current scroll position before adding modal-open class
  const scrollPosition = window.scrollY;
  
  // Add modal-open class to body
  document.body.classList.add('modal-open');
  
  // Apply the scroll position to the body
  document.body.style.top = `-${scrollPosition}px`;
  
  // Add overlay click handler
  overlay.addEventListener('click', closeModal);
}

// Function to close image modal
function closeModal() {
  const modal = document.getElementById("image-modal");
  const overlay = document.getElementById("modal-overlay");
  
  modal.style.display = "none";
  overlay.style.display = "none";
  
  // Remove modal-open class from body
  document.body.classList.remove('modal-open');
  
  // Get the scroll position from body's top property
  const scrollPosition = Math.abs(parseInt(document.body.style.top, 10));
  
  // Reset body position
  document.body.style.top = '';
  
  // Restore scroll position
  window.scrollTo(0, scrollPosition);
}

// Add keyboard support for closing modal
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
      closeModal();
  }
});

// Prevent click events from bubbling through the modal
document.getElementById("image-modal").addEventListener('click', (event) => {
  event.stopPropagation();
});

// For preview images, update the click handlers
document.querySelectorAll('.preview-image').forEach(preview => {
  preview.addEventListener('click', (event) => {
      event.preventDefault();
      openImageModal(preview.getAttribute('data-full-img') || preview.src);
  });
});

// Add to initialization
document.addEventListener("DOMContentLoaded", () => {
  // ... existing initialization code
  displayRelated(currentPerson);
});

// Filter related personalities (same category or era)
const related = personalities
  .filter(
    (p) =>
      p.id !== person.id &&
      (p.category === person.category ||
        Math.abs(
          parseInt(p.years.split("-")[0]) - parseInt(person.years.split("-")[0])
        ) < 50)
  )
  .slice(0, 3);

related.forEach((p) => {
  const relatedCard = document.createElement("div");
  relatedCard.className = "related-card";
  relatedCard.onclick = () => (window.location.href = `detail.html?id=${p.id}`);
  relatedCard.innerHTML = `
            <div class="related-image">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="related-info">
                <div class="related-name">${p.name}</div>
                <div class="related-category">${p.category}</div>
            </div>
        `;
  relatedGrid.appendChild(relatedCard);
});

// Tributes functionality
let tributes = JSON.parse(localStorage.getItem("tributes") || "{}");

function submitTribute(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector("input").value;
  const message = form.querySelector("textarea").value;
  const date = new Date().toLocaleDateString();

  if (!tributes[currentPerson.id]) {
    tributes[currentPerson.id] = [];
  }

  tributes[currentPerson.id].unshift({
    name,
    message,
    date,
  });

  localStorage.setItem("tributes", JSON.stringify(tributes));
  displayTributes(currentPerson);
  form.reset();
}

function displayTributes(person) {
  const tributesList = document.getElementById("tributes-list");
  tributesList.innerHTML = "";

  const personTributes = tributes[person.id] || [];

  personTributes.forEach((tribute) => {
    const tributeCard = document.createElement("div");
    tributeCard.className = "tribute-card";
    tributeCard.innerHTML = `
            <div class="tribute-author">${tribute.name}</div>
            <div class="tribute-date">${tribute.date}</div>
            <div class="tribute-message">${tribute.message}</div>
        `;
    tributesList.appendChild(tributeCard);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Get person ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const personId = parseInt(urlParams.get("id"));

  // Find the person in the data
  currentPerson = personalities.find((p) => p.id === personId);

  if (!currentPerson) {
    window.location.href = "index.html";
    return;
  }

  // Initialize all sections
  displayPersonDetails(currentPerson);
  addQuotesToData(currentPerson);
  displayQuotes(currentPerson);
  displayGallery(currentPerson);
  displayRelated(currentPerson);
  displayTributes(currentPerson);

  // Set up form submission
  document
    .getElementById("tribute-form")
    .addEventListener("submit", submitTribute);
});

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("image-modal");
  if (event.target === modal) {
    closeModal();
  }
};

// Keyboard navigation for modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Add loading state for images
function addImageLoadingState() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s";
  });
}

// Add error handling for image loading
function handleImageError() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.src = "/assets/placeholder.png"; // Replace with your placeholder image
    });
  });
}

// Initialize image handling
addImageLoadingState();
handleImageError();


// Unchanged 