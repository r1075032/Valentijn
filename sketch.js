
        // Page navigation
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
        }

        // Create floating hearts for question page
        function createFloatingHearts() {
            const container = document.getElementById('floatingHearts');
            if (!container) return;
            
            for (let i = 0; i < 15; i++) {
                const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                heart.classList.add('floating-heart');
                heart.setAttribute('viewBox', '0 0 24 24');
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.width = (20 + Math.random() * 30) + 'px';
                heart.style.height = (20 + Math.random() * 30) + 'px';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.animationDuration = (8 + Math.random() * 4) + 's';
                
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
                
                heart.appendChild(path);
                container.appendChild(heart);
            }
        }

        // Create confetti hearts for yes page
        function createConfettiHearts() {
            const container = document.getElementById('confettiHearts');
            if (!container) return;
            
            for (let i = 0; i < 30; i++) {
                const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                heart.classList.add('confetti-heart');
                heart.setAttribute('viewBox', '0 0 24 24');
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '-10%';
                heart.style.width = (15 + Math.random() * 25) + 'px';
                heart.style.height = (15 + Math.random() * 25) + 'px';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heart.style.animationDuration = (3 + Math.random() * 2) + 's';
                
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');
                
                heart.appendChild(path);
                container.appendChild(heart);
            }
        }

        // Create floating love words for gift 1 page
        function createFloatingWords() {
            const container = document.getElementById('floatingWords');
            if (!container) return;
            
            const words = [
                'Mooi', 'Lief', 'Geweldig', 'Bijzonder', 'Uniek',
                'Grappig', 'Slim', 'Zorgzaam', 'Liefdevol', 'Perfect',
                'Stralend', 'Prachtig', 'Speciaal', 'Geweldig', 'Inspirerend',
                'Creatief', 'Sterk', 'Vriendelijk', 'Schattig', 'Verrukkelijk'
            ];
            
            words.forEach((word, i) => {
                const wordEl = document.createElement('div');
                wordEl.classList.add('love-word');
                wordEl.textContent = word;
                wordEl.style.left = Math.random() * 90 + '%';
                wordEl.style.top = Math.random() * 90 + '%';
                wordEl.style.fontSize = (14 + Math.random() * 10) + 'px';
                wordEl.style.animationDelay = Math.random() * 3 + 's';
                wordEl.style.animationDuration = (6 + Math.random() * 4) + 's';
                container.appendChild(wordEl);
            });
        }

        // Initialize animations
        createFloatingHearts();
        createConfettiHearts();
        createFloatingWords();