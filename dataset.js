// dataset.js
// Data structure for personalities
const personalities = [
    {
        id: 1,
        name: "Dr. APJ Abdul Kalam",
        years: "1931-2015",
        category: "Science",
        image: "/assets/apj_kalam/apj.webp",
        achievements: "Missile Man of India, 11th President of India",
        description: "Renowned scientist who served as the 11th President of India",
        detailedInfo: {
            birthPlace: "Rameswaram, Tamil Nadu",
            education: "Aerospace Engineering from Madras Institute of Technology",
            career: [
                "ISRO Scientist (1969-1972)",
                "Project Director at ISRO (1972-1982)",
                "DRDO Director (1982-1992)",
                "Chief Scientific Adviser to PM (1992-1999)",
                "President of India (2002-2007)"
            ],
            awards: [
                "Bharat Ratna (1997)",
                "Padma Vibhushan (1990)",
                "Padma Bhushan (1981)",
                "Von Braun Award (2013)"
            ],
            contributions: [
                "Development of India's first satellite launch vehicle (SLV-III)",
                "Development of Agni and Prithvi missiles",
                "Pokhran-II nuclear tests",
                "India Vision 2020",
                "Wings of Fire autobiography"
            ],
            quotes: [
                "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
                "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
                "To succeed in your mission, you must have single-minded devotion to your goal."
            ],
            galleryImages: [
                "/assets/apj_kalam/apj1.png",
                "/assets/apj_kalam/apj2.webp",
                "/assets/apj_kalam/apj3.webp",
            ]
        }
    },
    {
        id: 2,
        name: "Mahatma Gandhi",
        years: "1869-1948",
        category: "Freedom Fighter",
        image: "/assets/m_gandhi/m-gandhi11.jpg",
        achievements: "Father of the Nation, Led Non-Violence Movement",
        description: "Leader of Indian independence movement through non-violent civil disobedience",
        detailedInfo: {
            birthPlace: "Porbandar, Gujarat",
            education: "Law degree from Inner Temple, London",
            career: [
                "Lawyer in South Africa (1893-1915)",
                "Indian National Congress Leader (1915-1947)",
                "Freedom Movement Leader (1915-1947)",
                "Social Reformer (1915-1948)"
            ],
            awards: [
                "Father of the Nation",
                "Time Magazine Person of the Year (1930)",
                "Kaiser-i-Hind Medal"
            ],
            contributions: [
                "Non-Violence Movement",
                "Quit India Movement",
                "Salt Satyagraha",
                "Champaran Satyagraha",
                "Social Reform for Untouchables"
            ],
            quotes: [
                "Be the change you wish to see in the world.",
                "An eye for an eye only ends up making the whole world blind.",
                "Live as if you were to die tomorrow. Learn as if you were to live forever."
            ],
            galleryImages: [
                "/assets/m_gandhi/m-gandhi1.jpg",
                "/assets/m_gandhi/m-gandhi2.jpg",
                "/assets/m_gandhi/m-gandhi3.webp",
            ]
        }
    },
    {
        id: 3,
        name: "Mother Teresa",
        years: "1910-1997",
        category: "Humanitarian",
        image: "/assets/m_teresa/m-teresa.jpg",
        achievements: "Nobel Peace Prize, Bharat Ratna",
        description: "Founded the Missionaries of Charity, served the poor in Calcutta",
        detailedInfo: {
            birthPlace: "Skopje, Macedonia",
            education: "Sisters of Loreto",
            career: [
                "Teacher at Loreto Convent (1931-1948)",
                "Founder of Missionaries of Charity (1950)",
                "Humanitarian Worker (1948-1997)"
            ],
            awards: [
                "Nobel Peace Prize (1979)",
                "Bharat Ratna (1980)",
                "Ramon Magsaysay Award (1962)",
                "Templeton Prize (1973)"
            ],
            contributions: [
                "Founded Missionaries of Charity",
                "Established homes for AIDS patients",
                "Created centers for blind and disabled",
                "Disaster relief work worldwide",
                "Care for refugees and homeless"
            ],
            quotes: [
                "Spread love wherever you go.",
                "Do small things with great love.",
                "The best way to find yourself is to lose yourself in the service of others."
            ],
            galleryImages: [
                "/assets/m_teresa/m-teresa1.jpg",
                "/assets/m_teresa/m-teresa2.jpg",
                "/assets/m_teresa/m-teresa3.jpg",
            ]
        }
    },
    {
        id: 4,
        name: "Subhas Chandra Bose",
        years: "1897-1945",
        category: "Freedom Fighter",
        image: "/assets/sc_bose/sc-bose.jpg",
        achievements: "Founder of Indian National Army, Revolutionary Leader",
        description: "Prominent Indian nationalist who led the Indian National Army against British rule",
        detailedInfo: {
            birthPlace: "Cuttack, Odisha",
            education: "University of Calcutta, Cambridge University",
            career: [
                "Indian National Congress Leader",
                "Founder of Forward Bloc",
                "Commander of Indian National Army"
            ],
            awards: [
                "Posthumous recognition for revolutionary activities"
            ],
            contributions: [
                "Formed Indian National Army (Azad Hind Fauj)",
                "Radical approach to Indian Independence",
                "Inspired nationalist movement",
                "Challenged British colonial rule"
            ],
            quotes: [
                "Give me blood, and I shall give you freedom!",
                "Freedom is not given, it is taken.",
                "Patriotism cannot be divorced from morality."
            ],
            galleryImages: [
                "/assets/sc_bose/sc-bose1.jpg",
                "/assets/sc_bose/sc-bose2.avif",
                "/assets/sc_bose/sc-bose3.jpg",
            ]
        }
    },
    {
        id: 5,
        name: "Rabindranath Tagore",
        years: "1861-1941",
        category: "Literature",
        image: "/assets/r_tagore/r-tagore.jpg",
        achievements: "First Non-European Nobel Laureate in Literature",
        description: "Polymath, poet, writer, composer, philosopher, and social reformer",
        detailedInfo: {
            birthPlace: "Kolkata, West Bengal",
            education: "Brief studies in England",
            career: [
                "Writer",
                "Poet",
                "Composer",
                "Philosopher",
                "Artist"
            ],
            awards: [
                "Nobel Prize in Literature (1913)",
                "Knighthood (1915, later renounced)"
            ],
            contributions: [
                "Wrote national anthems of India and Bangladesh",
                "Founded Visva-Bharati University",
                "Pioneered Bengali literature",
                "Influential in Indian Renaissance"
            ],
            quotes: [
                "Let me not pray to be sheltered from dangers but to be fearless in facing them.",
                "Trees are the earth's endless effort to speak to the listening heaven.",
                "Faith is the bird that feels the light when the dawn is still dark."
            ],
            galleryImages: [
                "/assets/r_tagore/r-tagore4.jpg",
                "/assets/r_tagore/r-tagore2.jpg",
                "/assets/r_tagore/r-tagore3.jpg",
            ]
        }
    },
    {
        id: 6,
        name: "Dr. B.R. Ambedkar",
        years: "1891-1956",
        category: "Social Reformer",
        image: "/assets/Br_ambedkar/dr-ambedkar.jpg",
        achievements: "Chief Architect of Indian Constitution, Dalit Rights Activist",
        description: "Jurist, economist, politician, and social reformer who fought against social discrimination",
        detailedInfo: {
            birthPlace: "Mhow, Madhya Pradesh",
            education: "Columbia University, London School of Economics",
            career: [
                "Lawyer",
                "Economist",
                "Politician",
                "Social Reformer",
                "Chairman of Constitution Drafting Committee"
            ],
            awards: [
                "Bharat Ratna (1990, posthumously)"
            ],
            contributions: [
                "Drafted Indian Constitution",
                "Fought against caste discrimination",
                "Advocated for Dalit rights",
                "Converted to Buddhism",
                "Established social equality principles"
            ],
            quotes: [
                "Education is the most powerful weapon which you can use to change the world.",
                "I measure the progress of a community by the degree of progress which women have achieved.",
                "Cultivation of mind should be the ultimate aim of human existence."
            ],
            galleryImages: [
                "/assets/Br_ambedkar/dr-ambedkar1.avif",
                "/assets/Br_ambedkar/dr-ambedkar2.jpg",
                "/assets/Br_ambedkar/dr-ambedkar3.jpg",
            ]
        }
    },
    {
        id: 7,
        name: "Sardar Vallabhbhai Patel",
        years: "1875-1950",
        category: "Freedom Fighter",
        image: "/assets/sb_patel/sb-patel.webp",
        achievements: "Iron Man of India, First Deputy Prime Minister",
        description: "Key leader in Indian independence movement, instrumental in integration of princely states",
        detailedInfo: {
            birthPlace: "Nadiad, Gujarat",
            education: "Law from Middle Temple, London",
            career: [
                "Lawyer",
                "Indian National Congress Leader",
                "First Deputy Prime Minister of India"
            ],
            awards: [
                "Bharat Ratna (1991, posthumously)"
            ],
            contributions: [
                "Unified India after independence",
                "Integrated 562 princely states",
                "Played crucial role in Indian independence",
                "Nicknamed 'Sardar' (Leader)"
            ],
            quotes: [
                "Unity is the essence of success.",
                "Manpower without unity is not worth even a drop of water.",
                "Every citizen of India must remember that he is an Indian and every Indian must remember that he is an Indian first."
            ],
            galleryImages: [
                "/assets/sb_patel/sb-patel1.jpg",
                "/assets/sb_patel/sb-patel2.jpg",
                "/assets/sb_patel/sb-patel3.webp",
            ]
        }
    },
    {
        id: 8,
        name: "Sarojini Naidu",
        years: "1879-1949",
        category: "Freedom Fighter",
        image: "/assets/s_naidu/s-naidu.jpg",
        achievements: "First Woman President of Indian National Congress",
        description: "Poet, political activist, and freedom fighter known as 'Nightingale of India'",
        detailedInfo: {
            birthPlace: "Hyderabad",
            education: "King's College, London",
            career: [
                "Poet",
                "Political Activist",
                "Freedom Fighter",
                "First Woman President of Indian National Congress"
            ],
            awards: [
                "Bharat Ratna (posthumously)"
            ],
            contributions: [
                "Active in Indian Independence Movement",
                "Fought for women's rights",
                "Prominent speaker and poet",
                "First woman governor of an Indian state"
            ],
            quotes: [
                "When the grass is cut, the snake will be crushed.",
                "We want deeper sincerity of motive, a greater courage in speech and earnestness in action.",
                "A country's greatness depends not on the power of its military might, but on the strength of its moral fiber."
            ],
            galleryImages: [
                "/assets/s_naidu/s-naidu1.jpg",
                "/assets/s_naidu/s-naidu2.webp",
                "/assets/s_naidu/s-naidu3.webp",
            ]
        }
    },
    {
        id: 9,
        name: "C.V. Raman",
        years: "1888-1970",
        category: "Science",
        image: "/assets/cv_raman/cv-raman.jpg",
        achievements: "First Indian Nobel Laureate in Science",
        description: "Physicist who made groundbreaking discoveries in light scattering",
        detailedInfo: {
            birthPlace: "Tiruchirappalli, Tamil Nadu",
            education: "Presidency College, Madras",
            career: [
                "Physicist",
                "Professor",
                "Researcher"
            ],
            awards: [
                "Nobel Prize in Physics (1930)",
                "Bharat Ratna (1954)"
            ],
            contributions: [
                "Discovered Raman Effect",
                "Pioneered research in light scattering",
                "Established Indian Institute of Science",
                "Promoted scientific research in India"
            ],
            quotes: [
                "Science is the great antidote to the poison of enthusiasm and superstition.",
                "The scientific worker will not take the day's work into his study and brood over it.",
                "The true wealth of a nation is its scholars and scientists."
            ],
            galleryImages: [
                "/assets/cv_raman/cv-raman1.jpg",
                "/assets/cv_raman/cv-raman2.png",
                "/assets/cv_raman/cv-raman3.webp",
            ]
        }
    },
    {
        id: 10,
        name: "Lal Bahadur Shastri",
        years: "1904-1966",
        category: "Political Leader",
        image: "/assets/lal_shastri/lal-shastri.jpg",
        achievements: "Second Prime Minister of India, Led Green Revolution",
        description: "Successor to Jawaharlal Nehru, known for his simplicity and integrity",
        detailedInfo: {
            birthPlace: "Mughalsarai, Uttar Pradesh",
            education: "Kashi Vidyapeeth",
            career: [
                "Freedom Fighter",
                "Prime Minister of India (1964-1966)",
                "Minister in Nehru's Cabinet"
            ],
            awards: [
                "Bharat Ratna (posthumously)"
            ],
            contributions: [
                "Initiated Green Revolution",
                "Slogan 'Jai Jawan Jai Kisan'",
                "Led India during Indo-Pakistan War (1965)",
                "Promoted self-reliance and agricultural development"
            ],
            quotes: [
                "The country is more important than the individual.",
                "Real success is not in always standing on the peak of the mountain, but in getting out of the pit.",
                "We believe in peace and peaceful development, but we are not prepared to accept threats to our integrity and independence."
            ],
            galleryImages: [
                "/assets/lal_shastri/lal-shastri1.webp",
                "/assets/lal_shastri/lal-shastri2.jpg",
                "/assets/lal_shastri/lal-shastri3.png",
            ]
        }
    }
];

// Display quotes
function displayQuotes(person) {
    const quotesContainer = document.getElementById('quotes-list');
    quotesContainer.innerHTML = '';
    
    person.quotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <p class="quote-text">${quote}</p>
        `;
        quotesContainer.appendChild(quoteCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const categories = ['all', ...new Set(personalities.map(p => p.category))];
    initializeCategories(categories);
    displayPersonalities(personalities);
    setupSearchAndFilter();
});

// Initialize category buttons
function initializeCategories(categories) {
    const categoriesContainer = document.getElementById('categories');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn' + (category === 'all' ? ' active' : '');
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        button.dataset.category = category;
        categoriesContainer.appendChild(button);
    });
}

// Display personalities in grid
function displayPersonalities(personsToShow) {
    const grid = document.getElementById('personalities-grid');
    grid.innerHTML = '';

    personsToShow.forEach(person => {
        const card = createPersonCard(person);
        grid.appendChild(card);
    });
}

// Create individual person card
function createPersonCard(person) {
    const card = document.createElement('div');
    card.className = 'person-card';
    card.innerHTML = `
        <div class="card-image">
            <img src="${person.image}" alt="${person.name}">
        </div>
        <div class="card-content">
            <div class="card-header">
                <h2 class="person-name">${person.name}</h2>
                <span class="person-years">${person.years}</span>
            </div>
            <span class="person-category">${person.category}</span>
            <p class="person-description">${person.description}</p>
            <div class="achievements">
                <h3 class="achievements-title">Key Achievements:</h3>
                <p>${person.achievements}</p>
            </div>
        </div>
    `;

    // Add click event to redirect to detail page
    card.addEventListener('click', () => {
        localStorage.setItem('selectedPerson', JSON.stringify(person));
        window.location.href = `detail.html?id=${person.id}`;
    });

    return card;
}

// Setup search and filter functionality
function setupSearchAndFilter() {
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        filterPersonalities(searchTerm, activeCategory);
    });

    // Category filter functionality
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const searchTerm = searchInput.value.toLowerCase();
            filterPersonalities(searchTerm, button.dataset.category);
        });
    });
}

// Filter personalities based on search term and category
function filterPersonalities(searchTerm, category) {
    let filtered = personalities;

    if (category !== 'all') {
        filtered = filtered.filter(person => person.category === category);
    }

    if (searchTerm) {
        filtered = filtered.filter(person =>
            person.name.toLowerCase().includes(searchTerm) ||
            person.description.toLowerCase().includes(searchTerm) ||
            person.achievements.toLowerCase().includes(searchTerm)
        );
    }

    displayPersonalities(filtered);
}