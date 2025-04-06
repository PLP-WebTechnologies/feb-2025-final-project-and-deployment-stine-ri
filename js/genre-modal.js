document.addEventListener('DOMContentLoaded', function() {
    const genreCards = document.querySelectorAll('.genre-card');
    const modal = document.querySelector('.genre-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-genre-title');
    const modalDramas = document.getElementById('modal-dramas');

    // K-Drama data by genre
    const dramaData = {
        romance: [
            { title: 'Crash Landing on You', image: 'images/crash-landing.jpg', year: 2019 },
            { title: 'What\'s Wrong with Secretary Kim', image: 'images/secretary-kim.jpg', year: 2018 },
            { title: 'Guardian: The Lonely and Great God', image: 'images/goblin.jpg', year: 2016 },
            { title: 'Descendants of the Sun', image: 'images/descendants.jpg', year: 2016 },
            { title: 'My Love from the Star', image: 'images/my-love.jpg', year: 2013 }
        ],
        thriller: [
            { title: 'Squid Game', image: 'images/squid-game.jpg', year: 2021 },
            { title: 'Stranger', image: 'images/stranger.jpg', year: 2017 },
            { title: 'Flower of Evil', image: 'images/flower-evil.jpg', year: 2020 },
            { title: 'Signal', image: 'images/signal.jpg', year: 2016 },
            { title: 'Voice', image: 'images/voice.jpg', year: 2017 }
        ],
        comedy: [
            { title: 'Welcome to Waikiki', image: 'images/waikiki.jpg', year: 2018 },
            { title: 'The Sound of Your Heart', image: 'images/sound-heart.jpg', year: 2016 },
            { title: 'Pegasus Market', image: 'images/pegasus.jpg', year: 2019 },
            { title: 'Psychopath Diary', image: 'images/psychopath.jpg', year: 2019 },
            { title: 'The Fiery Priest', image: 'images/fiery-priest.jpg', year: 2019 }
        ],
        historical: [
            { title: 'Mr. Sunshine', image: 'images/mr-sunshine.jpg', year: 2018 },
            { title: 'Moon Lovers: Scarlet Heart Ryeo', image: 'images/moon-lovers.jpg', year: 2016 },
            { title: 'The Crowned Clown', image: 'images/crowned-clown.jpg', year: 2019 },
            { title: 'Hwarang', image: 'images/hwarang.jpg', year: 2016 },
            { title: 'The Red Sleeve', image: 'images/red-sleeve.jpg', year: 2021 }
        ],
        fantasy: [
            { title: 'Hotel del Luna', image: 'images/hotel-deluna.jpg', year: 2019 },
            { title: 'A Korean Odyssey', image: 'images/odyssey.jpg', year: 2017 },
            { title: 'The King: Eternal Monarch', image: 'images/king-eternal.jpg', year: 2020 },
            { title: 'Legend of the Blue Sea', image: 'images/blue-sea.jpg', year: 2016 },
            { title: 'Tale of the Nine Tailed', image: 'images/nine-tailed.jpg', year: 2020 }
        ],
        drama: [
            { title: 'Itaewon Class', image: 'images/itaewon.jpg', year: 2020 },
            { title: 'Sky Castle', image: 'images/sky-castle.jpg', year: 2018 },
            { title: 'My Mister', image: 'images/my-mister.jpg', year: 2018 },
            { title: 'Reply 1988', image: 'images/reply-1988.jpg', year: 2015 },
            { title: 'Prison Playbook', image: 'images/prison-playbook.jpg', year: 2017 }
        ]
    };

    // Open modal when genre card is clicked
    genreCards.forEach(card => {
        card.addEventListener('click', function() {
            const genre = this.dataset.genre;
            openModal(genre);
        });
    });

    // Close modal
    closeModal.addEventListener('click', closeModalFunc);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunc();
        }
    });

    function openModal(genre) {
        modalTitle.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
        modalDramas.innerHTML = '';

        // Add dramas to modal
        dramaData[genre].forEach(drama => {
            const dramaElement = document.createElement('div');
            dramaElement.className = 'modal-drama';
            dramaElement.innerHTML = `
                <img src="${drama.image}" alt="${drama.title}">
                <h4>${drama.title} (${drama.year})</h4>
            `;
            modalDramas.appendChild(dramaElement);
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});