document.addEventListener('DOMContentLoaded', () => {
    // Initialize sparkles
    createSparkles();
    
    // Initialize interactive elements
    initPolaroids();
    initRugAlert();
    initSnapCounter();
    initMemeGenerator();
    initTypingText();
    initScrollEffects();
    
    // Initialize easter eggs
    initIdleClownNose();
    initScrollWarning();
    initFrogTrivia();
});

// Sparkles animation
function createSparkles() {
    const containers = document.querySelectorAll('.sparkles-container');
    
    containers.forEach(container => {
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 5 + 2;
            
            // Random color
            const colors = ['#ff61a8', '#61d4ff', '#a3ff61', '#ffeb3b', '#ffffff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Random animation delay
            const delay = Math.random() * 2;
            
            sparkle.style.left = `${posX}%`;
            sparkle.style.top = `${posY}%`;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.backgroundColor = color;
            sparkle.style.animationDelay = `${delay}s`;
            
            container.appendChild(sparkle);
        }
    });
    
    // Create new sparkles on scroll for hero section
    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('#hero .sparkles-container');
        if (heroSection && window.scrollY < window.innerHeight) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const size = Math.random() * 5 + 2;
            const colors = ['#ff61a8', '#61d4ff', '#a3ff61', '#ffeb3b', '#ffffff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            sparkle.style.left = `${posX}%`;
            sparkle.style.top = `${posY}%`;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.backgroundColor = color;
            
            heroSection.appendChild(sparkle);
            
            // Remove sparkle after animation
            setTimeout(() => {
                if (sparkle.parentNode === heroSection) {
                    heroSection.removeChild(sparkle);
                }
            }, 1500);
        }
    });
}

// Polaroid gallery interaction
function initPolaroids() {
    const polaroids = document.querySelectorAll('.polaroid');
    const memeContext = document.querySelector('.meme-context');
    
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            const memeText = polaroid.getAttribute('data-meme');
            memeContext.textContent = memeText;
            memeContext.style.opacity = '1';
            
            // Camera flash effect
            const flash = document.createElement('div');
            flash.style.position = 'fixed';
            flash.style.top = '0';
            flash.style.left = '0';
            flash.style.width = '100%';
            flash.style.height = '100%';
            flash.style.backgroundColor = 'white';
            flash.style.opacity = '0.8';
            flash.style.zIndex = '9998';
            flash.style.pointerEvents = 'none';
            document.body.appendChild(flash);
            
            // Play camera shutter sound
            const shutterSound = new Audio('data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAABLBQAAAL6QWkrJVYAAgBBaWpWQACANbJ3YWluZyBbUmVjb3JkZWQgYnkgUm95YWx0eSBGcmVlIFNvdW5kIEVmZmVjdHNdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            shutterSound.play();
            
            // Remove flash after a short delay
            setTimeout(() => {
                document.body.removeChild(flash);
            }, 150);
        });
        
        // Add lens distortion effect on hover
        polaroid.addEventListener('mousemove', (e) => {
            const x = (e.offsetX / polaroid.offsetWidth - 0.5) * 20;
            const y = (e.offsetY / polaroid.offsetHeight - 0.5) * 20;
            
            const img = polaroid.querySelector('img');
            img.style.transform = `scale(1.1) perspective(300px) rotateX(${y}deg) rotateY(${-x}deg)`;
            
            // Add color filter based on position
            const hue = Math.floor(x * 10 + 180);
            img.style.filter = `hue-rotate(${hue}deg) contrast(1.2)`;
        });
        
        polaroid.addEventListener('mouseleave', () => {
            const img = polaroid.querySelector('img');
            img.style.transform = '';
            img.style.filter = '';
        });
    });
    
    // Hide meme context when clicking elsewhere
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.polaroid') && !e.target.closest('.meme-context')) {
            memeContext.style.opacity = '0';
        }
    });
}

// Rug Alert interactive tool
function initRugAlert() {
    const rugAlertBtn = document.getElementById('rug-alert-btn');
    const rugResult = document.getElementById('rug-result');
    const coinInfo = document.querySelector('.coin-info');
    const snapRating = document.querySelector('.snap-rating');
    
    const coinNames = [
        'SafeMoonElonDoge',
        'BabyShiba1000x',
        'ElonTweetCoin',
        'UltraMegaSafeRocket',
        'DiamondHandsApe',
        'RugProofToken',
        'MoonLamboYacht',
        'TrustMeBro',
        'NotAScamCoin',
        'DefinitelyLegitToken'
    ];
    
    const ratings = [
        { rating: '99% Rug Risk', color: '#ff4d4d', description: 'Run away! This is definitely a rug!' },
        { rating: '87% Rug Risk', color: '#ff6b4d', description: 'Major red flags! Dev wallet has 80% of supply.' },
        { rating: '75% Rug Risk', color: '#ff884d', description: 'Hidden mint functions detected!' },
        { rating: '63% Rug Risk', color: '#ffa64d', description: 'Suspicious token distribution.' },
        { rating: '50% Rug Risk', color: '#ffc34d', description: 'Multiple concerning contract issues.' },
        { rating: '33% Rug Risk', color: '#9aff4d', description: 'Some concerns, but might be legitimate.' },
        { rating: '15% Rug Risk', color: '#4dff62', description: 'Mostly safe, but DYOR still applies.' },
        { rating: '5% Rug Risk', color: '#4dffb3', description: 'Looking good! Low risk detected.' }
    ];
    
    rugAlertBtn.addEventListener('click', () => {
        // Camera flash effect
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.backgroundColor = 'white';
        flash.style.opacity = '0.8';
        flash.style.zIndex = '9998';
        flash.style.pointerEvents = 'none';
        document.body.appendChild(flash);
        
        // Play camera shutter sound
        const shutterSound = new Audio('data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAABLBQAAAL6QWkrJVYAAgBBaWpWQACANbJ3YWluZyBbUmVjb3JkZWQgYnkgUm95YWx0eSBGcmVlIFNvdW5kIEVmZmVjdHNdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        shutterSound.play();
        
        // Remove flash after a short delay
        setTimeout(() => {
            document.body.removeChild(flash);
            
            // Random coin and rating
            const randomCoin = coinNames[Math.floor(Math.random() * coinNames.length)];
            const randomRating = ratings[Math.floor(Math.random() * ratings.length)];
            
            // Update UI
            coinInfo.innerHTML = `<h4>${randomCoin}</h4><p>Launched: Today</p><p>Holders: 15</p>`;
            snapRating.innerHTML = `<div class="rating-circle" style="background-color: ${randomRating.color}">${randomRating.rating}</div><p>${randomRating.description}</p>`;
            
            rugResult.classList.remove('hidden');
            
            // Animate rating
            const ratingCircle = document.querySelector('.rating-circle');
            ratingCircle.animate([
                { transform: 'scale(0)', opacity: 0 },
                { transform: 'scale(1.2)', opacity: 1 },
                { transform: 'scale(1)', opacity: 1 }
            ], {
                duration: 500,
                easing: 'ease-out'
            });
        }, 150);
    });
}

// SNAP Meter counter
function initSnapCounter() {
    const counter = document.getElementById('snap-counter');
    
    // Generate a random starting number between 50 and 150
    let count = Math.floor(Math.random() * 100) + 50;
    counter.textContent = count;
    
    // Increment the counter at random intervals
    const incrementCounter = () => {
        const randomIncrement = Math.floor(Math.random() * 3) + 1;
        count += randomIncrement;
        
        // Animate counter
        counter.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
        
        counter.textContent = count;
        
        // Schedule next increment
        const nextInterval = Math.random() * 10000 + 5000; // Between 5 and 15 seconds
        setTimeout(incrementCounter, nextInterval);
    };
    
    // Start counter increments
    setTimeout(incrementCounter, 3000);
}

// AI Auto-Meme Generator
function initMemeGenerator() {
    const generateBtn = document.getElementById('generate-meme-btn');
    const memeInput = document.getElementById('meme-input');
    const memeResult = document.getElementById('meme-result');
    
    const memeTemplates = [
        { text: "When you {action}", image: "👨‍💻😱📉" },
        { text: "Nobody:\nAbsolutely nobody:\nMe: {action}", image: "🐸📸🤡" },
        { text: "{action}\n\nBottom text", image: "💰🔥😂" },
        { text: "Dev: {action}", image: "🏃‍♂️💨💼" },
        { text: "Expectations: Lambo\nReality: {action}", image: "🚗→🛴" }
    ];
    
    generateBtn.addEventListener('click', () => {
        if (memeInput.value.trim() === '') {
            return;
        }
        
        // Loading effect
        memeResult.innerHTML = '<p>Generating meme...</p>';
        memeResult.classList.remove('hidden');
        
        setTimeout(() => {
            // Select random template
            const template = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
            
            // Create meme
            const userText = memeInput.value.trim();
            const memeText = template.text.replace('{action}', userText);
            
            // Display result
            memeResult.innerHTML = `
                <div class="generated-meme">
                    <div class="meme-emojis">${template.image}</div>
                    <div class="meme-text">${memeText.replace(/\n/g, '<br>')}</div>
                </div>
                <button id="regenerate-btn" class="tool-btn">Regenerate</button>
            `;
            
            // Style the generated meme
            const generatedMeme = memeResult.querySelector('.generated-meme');
            generatedMeme.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            generatedMeme.style.padding = '1.5rem';
            generatedMeme.style.borderRadius = '10px';
            generatedMeme.style.marginBottom = '1rem';
            
            const memeEmojis = memeResult.querySelector('.meme-emojis');
            memeEmojis.style.fontSize = '3rem';
            memeEmojis.style.textAlign = 'center';
            memeEmojis.style.marginBottom = '1rem';
            
            const memeTextElement = memeResult.querySelector('.meme-text');
            memeTextElement.style.fontSize = '1.2rem';
            memeTextElement.style.textAlign = 'center';
            memeTextElement.style.fontWeight = 'bold';
            
            // Add regenerate functionality
            const regenerateBtn = document.getElementById('regenerate-btn');
            regenerateBtn.addEventListener('click', () => {
                initMemeGenerator();
                generateBtn.click();
            });
        }, 1500);
    });
}

// Typing text animation for tokenomics
function initTypingText() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('li');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.animate([
                            { width: '0', opacity: '0' },
                            { width: '100%', opacity: '1' }
                        ], {
                            duration: 1000,
                            easing: 'steps(40, end)'
                        });
                    }, index * 500);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        observer.observe(typingText);
    }
}

// Scroll effects
function initScrollEffects() {
    // Parallax effect for sections
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Parallax for section backgrounds
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const offset = section.offsetTop;
            const height = section.offsetHeight;
            
            if (scrollY > offset - window.innerHeight && scrollY < offset + height) {
                const speed = 0.2;
                const yPos = (scrollY - offset) * speed;
                section.style.backgroundPosition = `center ${yPos}px`;
            }
        });
        
        // Animation for elements as they come into view
        const animateOnScroll = (elements, className) => {
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add(className);
                }
            });
        };
        
        // Animate different elements
        animateOnScroll(document.querySelectorAll('.story-panel'), 'animate__animated animate__fadeInUp');
        animateOnScroll(document.querySelectorAll('.polaroid'), 'animate__animated animate__zoomIn');
        animateOnScroll(document.querySelectorAll('.tool-card'), 'animate__animated animate__fadeInUp');
    });
    
    // Emoji rain on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const currentScrollTop = window.scrollY;
        
        // Only trigger emoji rain when scrolling down significantly
        if (currentScrollTop > lastScrollTop + 100) {
            createEmojiRain();
            lastScrollTop = currentScrollTop;
        }
    });
}

// Emoji rain effect
function createEmojiRain() {
    const emojis = ['😂', '📸', '📉', '🐸', '🤡', '💰', '🚀', '💎'];
    const body = document.body;
    
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement('div');
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        emoji.textContent = randomEmoji;
        emoji.style.position = 'fixed';
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.top = '-20px';
        emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
        emoji.style.opacity = '1';
        emoji.style.zIndex = '9997';
        emoji.style.pointerEvents = 'none';
        emoji.style.transition = 'transform 3s linear, opacity 3s linear';
        
        body.appendChild(emoji);
        
        // Random fall animation
        setTimeout(() => {
            emoji.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
            emoji.style.opacity = '0';
        }, 10);
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (emoji.parentNode === body) {
                body.removeChild(emoji);
            }
        }, 3000);
    }
}

// Idle clown nose easter egg
function initIdleClownNose() {
    let idleTimer;
    const clownNose = document.getElementById('clown-nose');
    
    const resetIdleTimer = () => {
        clearTimeout(idleTimer);
        clownNose.classList.add('hidden');
        
        idleTimer = setTimeout(() => {
            clownNose.classList.remove('hidden');
            
            // Animate hand placing clown nose
            const hand = document.createElement('div');
            hand.style.position = 'fixed';
            hand.style.width = '100px';
            hand.style.height = '100px';
            hand.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'><path fill=\'%23FFC9A3\' d=\'M384 0H128C57.308 0 0 57.308 0 128v256c0 70.692 57.308 128 128 128h256c70.692 0 128-57.308 128-128V128C512 57.308 454.692 0 384 0z\'/><path fill=\'%23FFBD86\' d=\'M512 128v256c0 70.692-57.308 128-128 128H128c-70.692 0-128-57.308-128-128V128C0 57.308 57.308 0 128 0h256c70.692 0 128 57.308 128 128z\'/><path fill=\'%23FF9A6C\' d=\'M407.864 239.312c-9.342-9.342-24.482-9.342-33.824 0l-76.728 76.728c-9.342 9.342-9.342 24.482 0 33.824 9.342 9.342 24.482 9.342 33.824 0l76.728-76.728c9.342-9.342 9.342-24.482 0-33.824z\'/><path fill=\'%23FF7A47\' d=\'M297.312 349.864c-9.342-9.342-9.342-24.482 0-33.824l76.728-76.728c9.342-9.342 24.482-9.342 33.824 0 9.342 9.342 9.342 24.482 0 33.824l-76.728 76.728c-9.342 9.342-24.482 9.342-33.824 0z\'/></svg>")';
            hand.style.backgroundSize = 'contain';
            hand.style.backgroundRepeat = 'no-repeat';
            hand.style.top = '50%';
            hand.style.left = '-100px';
            hand.style.transform = 'translateY(-50%)';
            hand.style.zIndex = '10000';
            hand.style.pointerEvents = 'none';
            
            document.body.appendChild(hand);
            
            // Animate hand coming in and placing nose
            hand.animate([
                { left: '-100px', transform: 'translateY(-50%)' },
                { left: '50%', transform: 'translate(-50%, -50%)' },
                { left: '50%', transform: 'translate(-50%, -50%)' },
                { left: '-100px', transform: 'translateY(-50%)' }
            ], {
                duration: 2000,
                easing: 'ease-in-out'
            });
            
            // Position clown nose in center of screen
            clownNose.style.top = '50%';
            clownNose.style.left = '50%';
            clownNose.style.transform = 'translate(-50%, -50%)';
            
            // Remove hand after animation
            setTimeout(() => {
                document.body.removeChild(hand);
            }, 2000);
        }, 30000); // 30 seconds of inactivity
    };
    
    // Reset timer on any user activity
    ['mousemove', 'keypress', 'scroll', 'click', 'touchstart'].forEach(event => {
        document.addEventListener(event, resetIdleTimer);
    });
    
    // Initialize timer
    resetIdleTimer();
    
    // Make clown nose follow cursor
    document.addEventListener('mousemove', (e) => {
        if (!clownNose.classList.contains('hidden')) {
            clownNose.style.top = `${e.clientY}px`;
            clownNose.style.left = `${e.clientX}px`;
            clownNose.style.transform = 'translate(-50%, -50%)';
        }
    });
}

// Scroll warning easter egg
function initScrollWarning() {
    const warningPopup = document.getElementById('warning-popup');
    let lastScrollTime = 0;
    let scrollEvents = 0;
    
    window.addEventListener('scroll', () => {
        const now = new Date().getTime();
        
        // Count rapid scroll events
        if (now - lastScrollTime < 100) {
            scrollEvents++;
            
            // Show warning after 5 rapid scrolls
            if (scrollEvents > 5) {
                warningPopup.classList.remove('hidden');
                
                // Hide warning after 3 seconds
                setTimeout(() => {
                    warningPopup.classList.add('hidden');
                    scrollEvents = 0;
                }, 3000);
            }
        } else {
            scrollEvents = 0;
        }
        
        lastScrollTime = now;
    });
}

// Frog trivia easter egg
function initFrogTrivia() {
    const frogTrivia = document.getElementById('frog-trivia');
    const triviaFacts = [
        "Did you know: 78% of rugs are unphotogenic?",
        "Fun fact: The average crypto trader becomes a clown 3.5 times per week.",
        "Ribbit insight: Most frogs can spot a rug from 100 miles away.",
        "Crypto fact: $SNAP cameras are powered by pure hopium.",
        "Meme study: 9 out of 10 rugs happen when nobody is looking."
    ];
    
    // Show random trivia every 2 minutes
    setInterval(() => {
        // Only show if user has been on the site for a while
        if (Math.random() < 0.3) { // 30% chance
            frogTrivia.textContent = triviaFacts[Math.floor(Math.random() * triviaFacts.length)];
            frogTrivia.classList.remove('hidden');
            
            // Hide trivia after 5 seconds
            setTimeout(() => {
                frogTrivia.classList.add('hidden');
            }, 5000);
        }
    }, 120000); // Every 2 minutes
}

// Reaction buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('emoji-btn')) {
        e.target.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.5)' },
            { transform: 'scale(1)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
        
        // Create floating emoji effect
        const emoji = document.createElement('div');
        emoji.textContent = e.target.textContent;
        emoji.style.position = 'absolute';
        emoji.style.fontSize = '2rem';
        emoji.style.left = `${e.target.offsetLeft + e.target.offsetWidth/2}px`;
        emoji.style.top = `${e.target.offsetTop}px`;
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '100';
        emoji.style.opacity = '1';
        emoji.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        
        e.target.parentNode.appendChild(emoji);
        
        // Animate floating up and fading
        setTimeout(() => {
            emoji.style.transform = 'translateY(-50px)';
            emoji.style.opacity = '0';
        }, 10);
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        }, 1000);
    }
}); 