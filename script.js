// ===== TYPING TEST DATA =====
const paragraphs = [
  "The quick brown fox jumps over the lazy dog near the riverbank where wildflowers bloom in the early morning sunlight. Birds sing their melodious songs as the gentle breeze carries the sweet fragrance of jasmine across the meadow. Children play freely in the open fields while their parents watch from the shade of ancient oak trees that have stood for centuries.",

  "Technology has revolutionized the way we communicate and interact with the world around us. From smartphones to artificial intelligence, every innovation brings new possibilities and challenges. The digital age demands that we adapt quickly, learn continuously, and embrace change as a constant companion in our professional and personal lives.",

  "Programming is both an art and a science that requires creativity, logical thinking, and persistent problem solving. Every line of code tells a story of human ingenuity and the desire to build something meaningful. Whether you are creating a simple website or a complex machine learning algorithm, the fundamentals of clean code and good design remain essential.",

  "The ocean stretches endlessly toward the horizon where sky meets water in a seamless blend of blue. Waves crash rhythmically against the shore, leaving patterns in the sand that disappear with each new tide. Seagulls circle overhead, their calls mixing with the sound of wind and surf to create nature's own symphony of peace and tranquility.",

  "Education is the most powerful weapon which you can use to change the world. Knowledge opens doors that were previously locked and creates opportunities where none existed before. The pursuit of learning should never end, for every book read and every skill acquired makes us better equipped to face the challenges of tomorrow with confidence and wisdom.",

  "In the world of competitive typing, speed and accuracy go hand in hand like two sides of the same coin. Professional typists can reach speeds of over one hundred words per minute while maintaining near perfect accuracy. This level of skill requires daily practice, proper finger placement, and the discipline to prioritize correctness over raw speed during training sessions.",

  "The universe is vast beyond human comprehension, filled with billions of galaxies each containing billions of stars. Our planet Earth is but a tiny speck in this cosmic ocean, yet it harbors the most complex phenomenon known to science: life. From the smallest bacteria to the largest whales, every living creature is connected through the intricate web of evolution.",

  "Coffee shops have become the modern workspace for freelancers, writers, and digital nomads around the globe. The ambient noise of conversations, the aroma of freshly ground beans, and the warmth of a good cup provide the perfect environment for creative work. Many successful startups were born in these humble spaces where ideas flow as freely as the espresso.",

  "Music transcends language barriers and speaks directly to the human soul in ways that words alone cannot achieve. A beautiful melody can evoke memories long forgotten, bring tears to the eyes of the strongest person, or fill an entire stadium with pure joy. From classical symphonies to modern electronic beats, music remains humanitys most universal form of expression.",

  "Climate change represents one of the greatest challenges facing humanity in the twenty first century. Rising temperatures, melting ice caps, and extreme weather events demand immediate action from governments, corporations, and individuals alike. Every small step toward sustainability matters, whether it is reducing plastic use, choosing renewable energy, or simply planting a tree in your backyard.",

  "The art of cooking transforms simple ingredients into extraordinary experiences that nourish both body and soul. A skilled chef understands the chemistry of flavors, the importance of timing, and the visual appeal of presentation. Every culture has its own culinary traditions passed down through generations, creating a rich tapestry of tastes that connects us to our heritage and each other.",

  "Artificial intelligence is reshaping industries from healthcare to transportation, creating new possibilities that seemed like science fiction just a decade ago. Machine learning algorithms can now diagnose diseases, drive cars, compose music, and even write poetry. As these technologies advance, society must grapple with ethical questions about privacy, employment, and the very nature of human creativity.",

  "Mountain villages hidden among rolling hills often preserve traditions that have vanished from crowded modern cities. Stone houses, narrow pathways, and terraced farms reflect a slower rhythm of life shaped by nature and community. Visitors who spend time in these peaceful places often return home with a renewed appreciation for simplicity, patience, and human connection.",

  "Reading books remains one of the most powerful habits a person can develop throughout life. A single novel can transport the mind to distant lands, while a well researched nonfiction work can change the way we see the world forever. Those who read widely and consistently gain not only knowledge, but also empathy, imagination, and the ability to think with greater depth.",

  "A sunrise over the countryside can feel like a quiet miracle unfolding in real time. The sky slowly shifts from deep indigo to warm shades of gold, pink, and orange as the earth wakes gently from darkness. Farmers begin their work, birds greet the day with cheerful calls, and the cool morning air carries a freshness that inspires calm and gratitude.",

  "Sports teach lessons that extend far beyond the boundaries of the playing field. Athletes learn discipline, teamwork, resilience, and the importance of maintaining focus under pressure. Whether in victory or defeat, the true value of sports lies in the character they build and the lifelong habits of persistence and commitment they encourage in those who participate.",

  "Travel broadens the mind by exposing people to unfamiliar customs, languages, and ways of life. Walking through a bustling street market in a foreign city or sharing a meal with local families can teach more than any textbook ever could. The best journeys are not only about seeing new places, but also about understanding different perspectives and returning home transformed.",

  "Gardening is a quiet but rewarding practice that teaches patience, observation, and respect for natural cycles. Seeds planted in hope eventually rise through the soil with surprising strength, reminding us that growth often happens unseen before it becomes visible. Tending plants daily creates a rhythm of care that can be deeply calming in a fast and distracted world.",

  "Cinema has the remarkable ability to combine image, sound, dialogue, and emotion into a single unforgettable experience. A great film can entertain audiences while also challenging assumptions, revealing hidden truths, or shining light on social realities. Through careful storytelling and visual craft, directors and actors can create worlds that remain in the memory long after the credits roll.",

  "Urban life moves at a relentless pace, filled with the constant sound of traffic, conversation, and construction. Yet even in the middle of towering buildings and crowded streets, moments of quiet beauty can still be found. A small park bench beneath a flowering tree, a golden sunset reflected in glass windows, or the laughter of strangers can soften the hardest city day.",

  "A well organized workspace can significantly improve concentration, productivity, and peace of mind. When tools are easy to find and distractions are minimized, the brain can focus more fully on meaningful tasks. Clean desks, thoughtful lighting, and intentional routines may seem like small details, but together they create an environment where better thinking and better work can happen naturally.",

  "Language is more than a tool for communication; it is also a mirror of culture, identity, and history. Every phrase, proverb, and poetic expression carries traces of the people who shaped it over generations. Learning a new language not only opens practical opportunities, but also invites us into a richer understanding of how others see the world and describe human experience.",

  "Entrepreneurship begins with the courage to solve a problem that others overlook or avoid. Building a business requires vision, discipline, adaptability, and the ability to make decisions even when certainty is impossible. Many successful founders face repeated setbacks before reaching stability, but their persistence often turns simple ideas into products and services that improve countless lives.",

  "Rainy afternoons create a special kind of atmosphere that invites reflection and stillness. The steady rhythm of raindrops on rooftops and windows can make busy thoughts slow down for a while. Wrapped in a blanket with a warm drink and a good book, many people find that gloomy weather carries its own quiet comfort and beauty.",

  "Health is often appreciated fully only after it has been challenged or temporarily lost. Simple habits like sleeping well, eating balanced meals, moving the body regularly, and managing stress can have profound long term effects. True wellness is not built through dramatic changes alone, but through steady daily choices that support both physical strength and mental clarity.",

  "The history of architecture reveals how human beings have always shaped spaces to reflect their needs, beliefs, and aspirations. From ancient temples and stone fortresses to modern skyscrapers and eco friendly homes, buildings tell stories about the societies that created them. Great architecture balances function and beauty, proving that practical structures can also inspire wonder.",

  "Writing is a craft that rewards clarity, patience, and revision. First drafts often capture raw thought, but it is through careful editing that ideas become sharp, persuasive, and memorable. Whether composing a short email or a long essay, strong writing depends on choosing words with intention and arranging them in ways that guide the reader smoothly from one idea to the next.",

  "Forests are among the most important ecosystems on Earth, providing oxygen, shelter, biodiversity, and climate stability on a massive scale. Walking through a dense woodland often reveals a hidden world of moss covered stones, birdsong, filtered light, and ancient roots spreading silently below the soil. Protecting forests is not only an environmental priority, but also a responsibility to future generations.",

  "The process of learning a musical instrument teaches more than technical skill alone. It develops discipline, listening ability, emotional expression, and the patience to improve one note at a time. Beginners may struggle with awkward hand positions and missed rhythms, but persistence gradually turns effort into fluency and transforms sound into something deeply personal and rewarding.",

  "Digital marketing has become essential for businesses that want to connect with modern audiences in meaningful ways. Search engines, social media, email campaigns, and content strategy all play a role in building visibility and trust. Success in this field depends not only on creativity, but also on understanding data, human behavior, and the changing platforms through which people discover information.",

  "Friendship is one of the most valuable forms of support a person can experience in life. True friends celebrate success without envy, offer honesty without cruelty, and remain present during times of uncertainty or pain. In a world where many interactions are brief and superficial, lasting friendship reminds us that loyalty, laughter, and mutual care still matter deeply.",

  "Space exploration represents one of humanitys boldest attempts to understand the unknown. Rockets, satellites, and telescopes have allowed us to study distant planets, observe black holes, and search for signs of life beyond Earth. Each mission expands our knowledge while also reminding us how much remains mysterious in the vast and silent universe beyond our atmosphere.",

  "Public speaking can feel intimidating even for intelligent and experienced individuals. Standing before an audience requires not only knowledge of the subject, but also confidence, structure, and the ability to connect with listeners in real time. With practice, preparation, and honest self reflection, anyone can become a stronger speaker capable of informing, persuading, and inspiring others.",

  "Local markets often reveal the true heartbeat of a community more clearly than tourist attractions ever can. Vendors call out the names of fresh fruits, spices, handmade goods, and traditional snacks while neighbors exchange news and familiar smiles. These lively spaces are not just places of trade, but also centers of culture, memory, and everyday human interaction.",

  "Time management is less about controlling every minute and more about using attention wisely. People often feel busy not because they lack time, but because their focus is scattered across too many priorities at once. Setting clear goals, breaking large tasks into smaller steps, and protecting moments of uninterrupted concentration can lead to far better results with less stress.",

  "Photography captures fleeting moments and preserves them long after the scene itself has passed. A single image can hold emotion, movement, atmosphere, and narrative in a way that words may struggle to express. Great photographers do more than record what is visible; they notice angles, light, and timing that reveal something deeper about the subject and the moment.",

  "Libraries remain sacred spaces for curiosity, concentration, and discovery in every generation. Rows of books on countless subjects invite readers to explore ideas beyond their usual boundaries and interests. Even in an age dominated by screens and short attention spans, libraries continue to offer something rare and precious: the quiet freedom to learn without interruption.",

  "Exercise is one of the most effective ways to improve both physical health and mental well being. A brisk walk, a session of strength training, or even a few minutes of stretching can lift mood, increase energy, and reduce stress. Over time, consistent movement supports better sleep, stronger immunity, and a more resilient body capable of meeting daily demands.",

  "Design is present in nearly every object and experience we encounter, from mobile apps and furniture to public spaces and packaging. Good design often feels invisible because it works so naturally that users hardly notice the thought behind it. The best designers combine aesthetics with usability, creating solutions that are not only attractive but also intuitive and deeply functional.",

  "History helps us understand how present realities were shaped by past decisions, conflicts, inventions, and ideas. Nations rise and fall, technologies change, and social values evolve, yet patterns of human ambition and struggle often repeat in surprising ways. Studying history encourages humility because it reminds us that our own era, however advanced it may seem, is only one chapter in a much longer story.",

  "The discipline of saving money may appear simple, but it requires foresight, restraint, and long term thinking. Small amounts set aside regularly can grow into security, opportunity, or support during difficult times. Financial stability is rarely built overnight; it is usually the result of patient habits, thoughtful planning, and the ability to distinguish needs from temporary desires.",

  "Wildlife documentaries reveal the extraordinary intelligence, beauty, and struggle found throughout the natural world. From the migration of birds across continents to the survival strategies of insects in a forest floor, each creature plays a role in a larger ecological balance. Observing animals closely can deepen respect for life and strengthen our resolve to protect fragile habitats from harm.",

  "Teamwork becomes truly effective when people share a clear purpose and trust one another enough to communicate openly. Strong teams are not defined by the absence of disagreement, but by the ability to resolve differences respectfully and move forward together. In workplaces, classrooms, and communities, collaboration often achieves results that no individual could reach alone.",

  "The smell of fresh rain on dry earth has a way of awakening memory and emotion almost instantly. It can remind people of childhood evenings, long journeys, quiet villages, or moments of reflection by an open window. Sensory experiences like this reveal how deeply the human mind connects place, weather, and feeling in subtle but lasting ways.",

  "Modern education increasingly recognizes that students learn in different ways and at different speeds. Some thrive through visual explanation, others through discussion, practice, or hands on discovery. The most effective teachers do not simply deliver information; they create environments where curiosity is welcomed, mistakes become learning opportunities, and each student feels capable of growth.",

  "Bicycles represent a simple and elegant form of transportation that combines freedom, exercise, and efficiency. Riding through city streets or countryside roads gives travelers a closer connection to their surroundings than driving ever can. With no engine noise and no fuel required, cycling offers a reminder that sometimes the most practical solutions are also the most sustainable.",

  "The best user experiences are often built on careful attention to small details that many people never consciously notice. Smooth transitions, clear buttons, readable text, and fast loading times all contribute to whether a product feels effortless or frustrating. Behind every polished website or app lies a long process of testing, refinement, and empathy for the people who will use it.",

  "Festivals bring communities together through color, music, food, and shared celebration. Streets fill with lights, homes welcome guests, and traditions come alive in ways that strengthen social bonds across generations. Beyond their joyful atmosphere, festivals also preserve identity by passing stories, rituals, and values from elders to younger people in memorable and meaningful forms.",

  "Patience is often underestimated in a culture that celebrates speed, immediacy, and instant success. Yet many of the most worthwhile achievements in life require slow progress, repeated effort, and the willingness to wait without giving up. Patience does not mean inaction; it means continuing to move forward even when results are not yet visible.",

  "Remote work has transformed professional life by giving many employees greater flexibility over where and how they perform their tasks. This shift offers benefits such as reduced commuting time and increased autonomy, but it also introduces challenges related to communication, focus, and work life balance. Success in remote environments depends on clear expectations, strong habits, and thoughtful collaboration.",

  "Nature trails winding through hills, forests, and valleys offer more than physical exercise alone. They create space to think clearly, breathe deeply, and reconnect with a world that operates beyond deadlines and notifications. Many people find that a long walk in nature restores perspective by reminding them that not every problem must be solved at the speed of technology.",

  "Innovation rarely appears fully formed in a single moment of brilliance. More often it emerges through experimentation, failure, feedback, and gradual refinement over time. The willingness to test new ideas, learn from mistakes, and adapt quickly is what turns promising concepts into practical breakthroughs that can serve real human needs.",

  "A meaningful career is built not only on income or status, but also on growth, purpose, and alignment with personal values. People tend to feel most fulfilled when their work challenges them, uses their strengths, and contributes something worthwhile to others. While no path is completely free of difficulty, intentional career choices can create a stronger sense of direction and satisfaction.",

  "The night sky has inspired philosophers, sailors, scientists, and dreamers for thousands of years. Looking up at distant stars can make everyday worries seem smaller while also stirring curiosity about existence itself. Even in a technologically advanced age, the simple act of stargazing continues to awaken wonder in people of all backgrounds and beliefs.",

  "Strong communication is one of the most valuable skills in any relationship, team, or organization. It involves more than speaking clearly; it also requires listening with attention, asking thoughtful questions, and understanding what remains unsaid. Misunderstandings often grow in silence, while trust grows when people feel heard, respected, and informed.",

  "Small habits repeated consistently can shape the direction of an entire life. Drinking more water, reading a few pages each day, practicing a skill for fifteen minutes, or taking a daily walk may seem minor in isolation. Yet over months and years, these actions compound into meaningful change that often exceeds the power of occasional dramatic effort.",

  "The craft of storytelling has always helped human beings make sense of their experiences and pass wisdom across generations. Stories entertain, teach, warn, and inspire because they connect facts with emotion in memorable ways. Whether spoken around a fire, printed in a novel, or streamed on a screen, stories remain one of our oldest and most powerful tools for understanding life.",
];

// ===== DOM ELEMENTS =====
const textDisplay = document.getElementById('textDisplay');
const typingInput = document.getElementById('typingInput');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const mistakesDisplay = document.getElementById('mistakes');
const timerDisplay = document.getElementById('timer');
const restartBtn = document.getElementById('restartBtn');
const newTextBtn = document.getElementById('newTextBtn');
const resultModal = document.getElementById('resultModal');
const resultClose = document.getElementById('resultClose');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const finalWpm = document.getElementById('finalWpm');
const finalAccuracy = document.getElementById('finalAccuracy');
const finalMistakes = document.getElementById('finalMistakes');
const finalChars = document.getElementById('finalChars');
const timerBtns = document.querySelectorAll('.timer-btn');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// ===== STATE VARIABLES =====
let currentText = '';
let timeLeft = 30;
let selectedTime = 30;
let timer = null;
let isTyping = false;
let charIndex = 0;
let mistakes = 0;
let totalTyped = 0;
let isTestActive = false;

// ===== INITIALIZE =====
function init() {
    loadNewParagraph();
    setupEventListeners();
}

// ===== LOAD PARAGRAPH =====
function loadNewParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    currentText = paragraphs[randomIndex];
    renderText();
    resetTest();
}

// ===== RENDER TEXT WITH SPANS =====
function renderText() {
    textDisplay.innerHTML = '';
    currentText.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.classList.add('char');
        span.textContent = char;
        if (index === 0) {
            span.classList.add('current');
        }
        textDisplay.appendChild(span);
    });
}

// ===== RESET TEST =====
function resetTest() {
    clearInterval(timer);
    timer = null;
    isTyping = false;
    isTestActive = false;
    charIndex = 0;
    mistakes = 0;
    totalTyped = 0;
    timeLeft = selectedTime;
    typingInput.value = '';
    typingInput.disabled = false;
    typingInput.focus();
    updateStats();
    timerDisplay.textContent = timeLeft + 's';
    
    // Reset char styling
    const chars = textDisplay.querySelectorAll('.char');
    chars.forEach((char, index) => {
        char.classList.remove('correct', 'incorrect', 'current');
        if (index === 0) {
            char.classList.add('current');
        }
    });
}

// ===== START TIMER =====
function startTimer() {
    if (isTyping) return;
    isTyping = true;
    isTestActive = true;
    
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft + 's';
        
        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

// ===== END TEST =====
function endTest() {
    clearInterval(timer);
    timer = null;
    isTestActive = false;
    typingInput.disabled = true;
    
    // Calculate final results
    const timeElapsed = selectedTime - timeLeft;
    const minutes = timeElapsed / 60;
    const wordsTyped = totalTyped / 5;
    const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
    const accuracy = totalTyped > 0 ? Math.round(((totalTyped - mistakes) / totalTyped) * 100) : 100;
    
    // Show result modal
    finalWpm.textContent = wpm;
    finalAccuracy.textContent = accuracy + '%';
    finalMistakes.textContent = mistakes;
    finalChars.textContent = totalTyped;
    resultModal.classList.add('active');
}

// ===== HANDLE TYPING =====
function handleTyping() {
    const inputValue = typingInput.value;
    const chars = textDisplay.querySelectorAll('.char');
    
    // Start timer on first keystroke
    if (!isTyping && inputValue.length > 0) {
        startTimer();
    }
    
    // Get current input length
    const inputLength = inputValue.length;
    
    // Reset all characters from current position forward
    // and recalculate from scratch for accuracy
    let currentMistakes = 0;
    
    chars.forEach((charSpan, index) => {
        charSpan.classList.remove('correct', 'incorrect', 'current');
        
        if (index < inputLength) {
            if (inputValue[index] === currentText[index]) {
                charSpan.classList.add('correct');
            } else {
                charSpan.classList.add('incorrect');
                currentMistakes++;
            }
        } else if (index === inputLength) {
            charSpan.classList.add('current');
        }
    });
    
    // Update state
    charIndex = inputLength;
    mistakes = currentMistakes;
    totalTyped = inputLength;
    
    // Update live stats
    updateStats();
    
    // Auto-scroll text display
    if (inputLength > 0 && inputLength < chars.length) {
        const currentChar = chars[inputLength];
        if (currentChar) {
            const displayRect = textDisplay.getBoundingClientRect();
            const charRect = currentChar.getBoundingClientRect();
            if (charRect.top > displayRect.bottom - 40) {
                textDisplay.scrollTop += 30;
            }
        }
    }
    
    // Check if text is completed
    if (inputLength >= currentText.length) {
        endTest();
    }
}

// ===== UPDATE LIVE STATS =====
function updateStats() {
    // Calculate WPM
    const timeElapsed = selectedTime - timeLeft;
    const minutes = timeElapsed / 60;
    const wordsTyped = totalTyped / 5;
    const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
    
    // Calculate accuracy
    const accuracy = totalTyped > 0 ? Math.round(((totalTyped - mistakes) / totalTyped) * 100) : 100;
    
    // Update displays
    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = accuracy + '%';
    mistakesDisplay.textContent = mistakes;
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Typing input
    typingInput.addEventListener('input', handleTyping);
    
    // Prevent paste
    typingInput.addEventListener('paste', (e) => {
        e.preventDefault();
    });
    
    // Timer buttons
    timerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            timerBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTime = parseInt(btn.dataset.time);
            timeLeft = selectedTime;
            timerDisplay.textContent = timeLeft + 's';
            resetTest();
        });
    });
    
    // Restart button
    restartBtn.addEventListener('click', () => {
        resetTest();
        renderText();
    });
    
    // New text button
    newTextBtn.addEventListener('click', loadNewParagraph);
    
    // Result modal close
    resultClose.addEventListener('click', () => {
        resultModal.classList.remove('active');
    });
    
    // Try again button
    tryAgainBtn.addEventListener('click', () => {
        resultModal.classList.remove('active');
        loadNewParagraph();
    });
    
    // Close modal on backdrop click
    resultModal.addEventListener('click', (e) => {
        if (e.target === resultModal) {
            resultModal.classList.remove('active');
        }
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked one if it wasn't already active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Privacy Policy Modal
    document.getElementById('privacyLink').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('privacyModal').classList.add('active');
    });
    
    // Terms of Service Modal
    document.getElementById('termsLink').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('termsModal').classList.add('active');
    });
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.modal;
            document.getElementById(modalId).classList.remove('active');
        });
    });
    
    // Close modals on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple form validation feedback
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #4ecdc4, #44bd9e)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            e.target.reset();
        }, 3000);
    });
    
    // Keyboard shortcut - Tab to restart
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && document.activeElement === typingInput) {
            e.preventDefault();
            resetTest();
            renderText();
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            resultModal.classList.remove('active');
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Add scroll animations to cards
    const animateElements = document.querySelectorAll(
        '.feature-card, .benefit-card, .step-card, .faq-item, .highlight-item, .contact-info-card'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });
});
