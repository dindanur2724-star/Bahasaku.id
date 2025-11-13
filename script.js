// State
let state = {
    activeTab: 'home',
    selectedLanguage: 'english',
    score: 0,
    streak: 0,
    userLevel: 1,
    
    // Flashcard
    currentCard: 0,
    isFlipped: false,
    learnedCards: [],
    flashcardLevel: 1,
    
    // Quiz
    quizStarted: false,
    currentQuestion: 0,
    selectedAnswer: null,
    quizScore: 0,
    showResult: false,
    quizLevel: 1,
    
    // Game
    selectedGame: null,
    gameScore: 0,
    gameTime: 60,
    gameStarted: false,
    currentWord: '',
    userInput: '',
    gameLevel: 1,
    lives: 3,
    gameOptions: [],
    correctAnswer: '',
    gameTimer: null,
    
    // Chat
    messages: [
        { role: 'bot', text: 'Halo! Saya asisten belajar bahasa Anda. Tanyakan apa saja tentang bahasa, kosakata, atau cara membaca kata! 👋' }
    ],
    isTyping: false
};

// Data
const languages = [
    { id: 'english', name: 'English', flag: '🇬🇧' },
    { id: 'indonesian', name: 'Indonesia', flag: '🇮🇩' },
    { id: 'japanese', name: '日本語', flag: '🇯🇵' },
    { id: 'korean', name: '한국어', flag: '🇰🇷' },
    { id: 'chinese', name: '中文', flag: '🇨🇳' },
    { id: 'malay', name: 'Melayu', flag: '🇲🇾' },
    { id: 'singapore', name: 'Singlish', flag: '🇸🇬' },
    { id: 'spanish', name: 'Español', flag: '🇪🇸' },
    { id: 'french', name: 'Français', flag: '🇫🇷' }
];

const flashcardData = {
    english: {
        1: [
            { word: 'Hello', translation: 'Halo', pronunciation: 'hə-ˈlō', example: 'Hello, how are you?' },
            { word: 'Thank you', translation: 'Terima kasih', pronunciation: 'θæŋk juː', example: 'Thank you very much!' },
            { word: 'Good', translation: 'Bagus', pronunciation: 'ɡʊd', example: 'This is good!' },
            { word: 'Yes', translation: 'Ya', pronunciation: 'jes', example: 'Yes, I agree.' },
            { word: 'No', translation: 'Tidak', pronunciation: 'noʊ', example: 'No, thank you.' }
        ],
        2: [
            { word: 'Beautiful', translation: 'Indah', pronunciation: 'ˈbjuː.tɪ.fəl', example: 'What a beautiful day!' },
            { word: 'Friend', translation: 'Teman', pronunciation: 'frend', example: 'She is my best friend.' },
            { word: 'Learn', translation: 'Belajar', pronunciation: 'lɜːrn', example: 'I learn English every day.' },
            { word: 'Happy', translation: 'Bahagia', pronunciation: 'ˈhæp.i', example: 'I am so happy today!' },
            { word: 'Important', translation: 'Penting', pronunciation: 'ɪmˈpɔːr.tənt', example: 'This is very important.' }
        ],
        3: [
            { word: 'Magnificent', translation: 'Luar biasa', pronunciation: 'mæɡˈnɪf.ɪ.sənt', example: 'A magnificent view!' },
            { word: 'Enthusiastic', translation: 'Antusias', pronunciation: 'ɪnˌθuː.ziˈæs.tɪk', example: 'She was enthusiastic!' },
            { word: 'Achievement', translation: 'Pencapaian', pronunciation: 'əˈtʃiːv.mənt', example: 'Great achievement.' },
            { word: 'Perseverance', translation: 'Ketekunan', pronunciation: 'ˌpɜː.sɪˈvɪə.rəns', example: 'Success needs perseverance.' },
            { word: 'Extraordinary', translation: 'Luar biasa', pronunciation: 'ɪkˈstrɔːr.dɪ.ner.i', example: 'Extraordinary performance!' }
        ]
    },
    japanese: {
        1: [
            { word: 'こんにちは', translation: 'Halo', pronunciation: 'kon-ni-chi-wa', example: 'こんにちは、元気ですか？' },
            { word: 'ありがとう', translation: 'Terima kasih', pronunciation: 'a-ri-ga-to-u', example: 'ありがとうございます' },
            { word: 'はい', translation: 'Ya', pronunciation: 'hai', example: 'はい、そうです' },
            { word: 'いいえ', translation: 'Tidak', pronunciation: 'i-i-e', example: 'いいえ、違います' },
            { word: 'おはよう', translation: 'Selamat pagi', pronunciation: 'o-ha-yo-u', example: 'おはようございます' }
        ],
        2: [
            { word: '美しい', translation: 'Indah', pronunciation: 'u-tsu-ku-shi-i', example: '美しい景色' },
            { word: '友達', translation: 'Teman', pronunciation: 'to-mo-da-chi', example: '彼は私の友達です' },
            { word: '勉強', translation: 'Belajar', pronunciation: 'ben-kyou', example: '毎日勉強します' },
            { word: '幸せ', translation: 'Bahagia', pronunciation: 'shi-a-wa-se', example: '幸せな気持ち' },
            { word: '大切', translation: 'Penting', pronunciation: 'tai-se-tsu', example: '大切な友達' }
        ],
        3: [
            { word: '素晴らしい', translation: 'Luar biasa', pronunciation: 'su-ba-ra-shi-i', example: '素晴らしい経験' },
            { word: '感動的', translation: 'Mengharukan', pronunciation: 'kan-dou-te-ki', example: '感動的な映画' },
            { word: '挑戦', translation: 'Tantangan', pronunciation: 'chou-sen', example: '新しい挑戦' },
            { word: '努力', translation: 'Usaha', pronunciation: 'do-ryo-ku', example: '努力が大切' },
            { word: '成功', translation: 'Sukses', pronunciation: 'sei-kou', example: '成功への道' }
        ]
    }
};

const quizData = {
    english: {
        1: [
            { question: 'Apa arti "Hello" dalam Bahasa Indonesia?', options: ['Selamat tinggal', 'Halo', 'Tolong', 'Maaf'], correct: 1 },
            { question: 'Terjemahkan "Terima kasih" ke Bahasa Inggris', options: ['Hello', 'Thank you', 'Goodbye', 'Please'], correct: 1 },
            { question: 'Apa arti dari "Good"?', options: ['Jelek', 'Bagus', 'Besar', 'Kecil'], correct: 1 },
            { question: 'Pilih terjemahan "Ya" dalam Bahasa Inggris', options: ['No', 'Maybe', 'Yes', 'Can'], correct: 2 }
        ],
        2: [
            { question: 'Apa arti "Beautiful"?', options: ['Jelek', 'Indah', 'Besar', 'Kecil'], correct: 1 },
            { question: 'Terjemahkan "Belajar" ke Bahasa Inggris', options: ['Play', 'Work', 'Learn', 'Sleep'], correct: 2 },
            { question: 'Apa arti dari "Friend"?', options: ['Musuh', 'Teman', 'Keluarga', 'Guru'], correct: 1 },
            { question: 'Pilih arti "Happy"', options: ['Sedih', 'Marah', 'Bahagia', 'Lelah'], correct: 2 }
        ],
        3: [
            { question: 'Apa arti "Magnificent"?', options: ['Sederhana', 'Luar biasa', 'Biasa', 'Jelek'], correct: 1 },
            { question: 'Terjemahkan "Ketekunan" ke Bahasa Inggris', options: ['Laziness', 'Perseverance', 'Happiness', 'Sadness'], correct: 1 },
            { question: 'Apa arti "Enthusiastic"?', options: ['Malas', 'Lelah', 'Antusias', 'Bosan'], correct: 2 },
            { question: 'Pilih arti "Achievement"', options: ['Kegagalan', 'Pencapaian', 'Masalah', 'Pertanyaan'], correct: 1 }
        ]
    },
    japanese: {
        1: [
            { question: 'Apa arti "ありがとう"?', options: ['Halo', 'Selamat tinggal', 'Terima kasih', 'Maaf'], correct: 2 },
            { question: 'Pilih terjemahan "はい"', options: ['Tidak', 'Ya', 'Mungkin', 'Tolong'], correct: 1 },
            { question: 'Apa bahasa Jepang dari "Halo"?', options: ['さようなら', 'こんにちは', 'おやすみ', 'ありがとう'], correct: 1 }
        ],
        2: [
            { question: 'Apa arti "勉強"?', options: ['Bermain', 'Bekerja', 'Belajar', 'Tidur'], correct: 2 },
            { question: 'Pilih arti "美しい"', options: ['Jelek', 'Besar', 'Indah', 'Kecil'], correct: 2 },
            { question: 'Terjemahkan "友達"', options: ['Musuh', 'Keluarga', 'Teman', 'Guru'], correct: 2 }
        ],
        3: [
            { question: 'Apa arti "素晴らしい"?', options: ['Biasa', 'Jelek', 'Luar biasa', 'Sederhana'], correct: 2 },
            { question: 'Pilih arti "努力"', options: ['Kemalasan', 'Usaha', 'Kegagalan', 'Keberuntungan'], correct: 1 }
        ]
    }
};

const games = [
    { 
        id: 'speed-typing', 
        name: 'Speed Typing', 
        color: 'linear-gradient(to right, #eab308, #f97316)',
        description: 'Ketik kata secepat mungkin!',
        maxTime: 60
    },
    { 
        id: 'word-match', 
        name: 'Word Match', 
        color: 'linear-gradient(to right, #3b82f6, #06b6d4)',
        description: 'Cocokkan kata dengan artinya!',
        maxTime: 90
    },
    { 
        id: 'guess-word', 
        name: 'Guess the Word', 
        color: 'linear-gradient(to right, #9333ea, #ec4899)',
        description: 'Tebak kata dari terjemahannya!',
        maxTime: 120
    },
    { 
        id: 'reverse-translate', 
        name: 'Reverse Translate', 
        color: 'linear-gradient(to right, #22c55e, #14b8a6)',
        description: 'Terjemahkan Indonesia ke bahasa asing!',
        maxTime: 90
    },
    { 
        id: 'rapid-fire', 
        name: 'Rapid Fire', 
        color: 'linear-gradient(to right, #ef4444, #ec4899)',
        description: 'Jawab cepat sebanyak mungkin!',
        maxTime: 45
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderLanguageGrid();
    renderGamesGrid();
    setupEventListeners();
    updateFlashcard();
    renderChatMessages();
}

function setupEventListeners() {
    // Nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });
    
    // Logo upload
    document.getElementById('logo').addEventListener('click', () => {
        document.getElementById('logo-upload').click();
    });
    
    document.getElementById('logo-upload').addEventListener('change', handleLogoUpload);
    
    // Flashcard
    document.getElementById('flashcard').addEventListener('click', flipCard);
}

function switchTab(tabName) {
    state.activeTab = tabName;
    
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function handleLogoUpload(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            document.getElementById('logo').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function updateScore(points) {
    state.score += points;
    document.getElementById('score').textContent = state.score;
}

function updateStreak() {
    state.streak++;
    document.getElementById('streak').textContent = state.streak;
}

// Language Grid
function renderLanguageGrid() {
    const grid = document.getElementById('language-grid');
    grid.innerHTML = languages.map(lang => `
        <div class="language-card ${lang.id === state.selectedLanguage ? 'active' : ''}" 
             onclick="selectLanguage('${lang.id}')">
            <div class="flag">${lang.flag}</div>
            <h4>${lang.name}</h4>
        </div>
    `).join('');
}

function selectLanguage(langId) {
    state.selectedLanguage = langId;
    state.currentCard = 0;
    state.learnedCards = [];
    renderLanguageGrid();
    updateFlashcard();
}

// Flashcard
function updateFlashcard() {
    const cards = flashcardData[state.selectedLanguage]?.[state.flashcardLevel];
    if (!cards) return;
    
    const card = cards[state.currentCard];
    document.querySelector('.card-word').textContent = card.word;
    document.querySelector('.card-translation').textContent = card.translation;
    document.querySelector('.card-pronunciation').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        ${card.pronunciation}
    `;
    document.querySelector('.card-example').textContent = card.example;
    
    document.getElementById('card-progress').textContent = `Kartu ${state.currentCard + 1} dari ${cards.length}`;
    document.getElementById('learned-btn-text').textContent = `Sudah Paham (+${state.flashcardLevel * 10}pts)`;
    
    updateLevelBadge('flashcard-level-badge', state.flashcardLevel);
    updateProgress();
}

function flipCard() {
    state.isFlipped = !state.isFlipped;
    document.getElementById('card-front').style.display = state.isFlipped ? 'none' : 'block';
    document.getElementById('card-back').style.display = state.isFlipped ? 'block' : 'none';
}

function nextCard() {
    const cards = flashcardData[state.selectedLanguage]?.[state.flashcardLevel];
    state.isFlipped = false;
    state.currentCard = (state.currentCard + 1) % cards.length;
    document.getElementById('card-front').style.display = 'block';
    document.getElementById('card-back').style.display = 'none';
    updateFlashcard();
}

function markAsLearned() {
    if (!state.learnedCards.includes(state.currentCard)) {
        state.learnedCards.push(state.currentCard);
        updateScore(state.flashcardLevel * 10);
        updateStreak();
        
        const cards = flashcardData[state.selectedLanguage]?.[state.flashcardLevel];
        if (state.learnedCards.length >= cards.length && state.flashcardLevel < 3) {
            setTimeout(() => {
                alert(`Selamat! Anda naik ke Level ${state.flashcardLevel + 1}! 🎉`);
                state.flashcardLevel++;
                state.learnedCards = [];
                state.currentCard = 0;
                updateFlashcard();
            }, 500);
        }
    }
    nextCard();
}

function updateProgress() {
    const cards = flashcardData[state.selectedLanguage]?.[state.flashcardLevel];
    const progress = (state.learnedCards.length / cards.length) * 100;
    
    document.getElementById('progress-level').textContent = state.flashcardLevel;
    document.getElementById('learned-count').textContent = state.learnedCards.length;
    document.getElementById('total-cards').textContent = cards.length;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function updateLevelBadge(elementId, level) {
    const element = document.getElementById(elementId);
    const names = { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced' };
    element.textContent = `Level ${level} - ${names[level]}`;
    element.className = `level-badge level-${level}`;
}

// Quiz
function startQuiz() {
    state.quizStarted = true;
    state.currentQuestion = 0;
    state.quizScore = 0;
    state.showResult = false;
    state.selectedAnswer = null;
    
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-question').style.display = 'block';
    
    renderQuestion();
}

function renderQuestion() {
    const questions = quizData[state.selectedLanguage]?.[state.quizLevel];
    const question = questions[state.currentQuestion];
    
    document.getElementById('question-number').textContent = 
        `Pertanyaan ${state.currentQuestion + 1} / ${questions.length}`;
    document.getElementById('quiz-score').textContent = state.quizScore;
    document.getElementById('question-text').textContent = question.question;
    
    updateLevelBadge('quiz-level-badge-game', state.quizLevel);
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <button class="option-btn" onclick="selectAnswer(${index})">${option}</button>
    `).join('');
}

function selectAnswer(index) {
    if (state.selectedAnswer !== null) return;
    
    state.selectedAnswer = index;
    const questions = quizData[state.selectedLanguage]?.[state.quizLevel];
    const question = questions[state.currentQuestion];
    const isCorrect = question.correct === index;
    
    if (isCorrect) {
        state.quizScore++;
        updateScore(state.quizLevel * 20);
    }
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    document.getElementById('quiz-score').textContent = state.quizScore;
    document.getElementById('next-question-btn').style.display = 'block';
}

function nextQuestion() {
    const questions = quizData[state.selectedLanguage]?.[state.quizLevel];
    
    if (state.currentQuestion < questions.length - 1) {
        state.currentQuestion++;
        state.selectedAnswer = null;
        document.getElementById('next-question-btn').style.display = 'none';
        renderQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const questions = quizData[state.selectedLanguage]?.[state.quizLevel];
    
    document.getElementById('quiz-question').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    
    document.getElementById('final-score').textContent = 
        `${state.quizScore} / ${questions.length}`;
    
    let message = '';
    if (state.quizScore === questions.length) {
        message = 'Sempurna! Anda menguasai level ini! 🎉';
    } else if (state.quizScore >= questions.length * 0.8) {
        message = 'Luar biasa! Anda siap ke level berikutnya! 👍';
        if (state.quizLevel < 3) {
            setTimeout(() => {
                alert(`Luar biasa! Anda naik ke Level ${state.quizLevel + 1}! 🎉`);
                state.quizLevel++;
            }, 1000);
        }
    } else if (state.quizScore >= questions.length * 0.5) {
        message = 'Bagus! Terus belajar! 📚';
    } else {
        message = 'Tetap semangat! Coba lagi! 💪';
    }
    
    document.getElementById('result-message').textContent = message;
}

function resetQuiz() {
    state.quizStarted = false;
    state.showResult = false;
    
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
    document.getElementById('quiz-start-level').textContent = state.quizLevel;
    updateLevelBadge('quiz-level-badge', state.quizLevel);
}

// Games
function renderGamesGrid() {
    const grid = document.getElementById('games-grid');
    grid.innerHTML = games.map(game => `
        <div class="game-card" onclick="startGame('${game.id}')">
            <div class="game-icon" style="background: ${game.color}">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    ${getGameIcon(game.id)}
                </svg>
            </div>
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <div class="game-time">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${game.maxTime} detik
            </div>
        </div>
    `).join('');
}

function getGameIcon(gameId) {
    const icons = {
        'speed-typing': '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
        'word-match': '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
        'guess-word': '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        'reverse-translate': '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
        'rapid-fire': '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>'
    };
    return icons[gameId] || '';
}

function startGame(gameId) {
    state.selectedGame = gameId;
    state.gameStarted = true;
    const game = games.find(g => g.id === gameId);
    state.gameTime = game.maxTime;
    state.gameScore = 0;
    state.userInput = '';
    state.lives = 3;
    
    document.getElementById('game-selection').style.display = 'none';
    document.getElementById('game-play').style.display = 'block';
    document.getElementById('game-title').textContent = game.name;
    
    updateGameStats();
    startGameTimer();
    renderGameContent();
}

function startGameTimer() {
    if (state.gameTimer) clearInterval(state.gameTimer);
    
    state.gameTimer = setInterval(() => {
        state.gameTime--;
        document.getElementById('game-time').textContent = `${state.gameTime}s`;
        
        if (state.gameTime <= 0) {
            endGame();
        }
    }, 1000);
}

function updateGameStats() {
    document.getElementById('game-time').textContent = `${state.gameTime}s`;
    document.getElementById('game-score-display').textContent = state.gameScore;
    
    const livesContainer = document.getElementById('game-lives');
    livesContainer.innerHTML = Array(state.lives).fill('').map(() => `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    `).join('');
}

function renderGameContent() {
    const content = document.getElementById('game-content');
    
    if (state.selectedGame === 'speed-typing') {
        const cards = flashcardData[state.selectedLanguage]?.[state.gameLevel] || 
                     flashcardData[state.selectedLanguage]?.[1];
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        state.currentWord = randomCard.word;
        
        content.innerHTML = `
            <div class="game-word-display">
                <p>Ketik kata ini secepat mungkin:</p>
                <div class="game-word">${state.currentWord}</div>
            </div>
            <input type="text" class="game-input" id="game-input" placeholder="Ketik di sini..." autofocus>
            <button class="btn btn-primary" style="width: 100%;" onclick="checkWord()">Cek Jawaban</button>
        `;
        
        document.getElementById('game-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkWord();
        });
    } else {
        generateGameQuestion();
    }
}

function generateGameQuestion() {
    const cards = flashcardData[state.selectedLanguage]?.[state.gameLevel] || 
                 flashcardData[state.selectedLanguage]?.[1];
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    
    if (state.selectedGame === 'reverse-translate') {
        state.currentWord = randomCard.translation;
        state.correctAnswer = randomCard.word;
        
        const wrongAnswers = cards
            .filter(c => c.word !== randomCard.word)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(c => c.word);
        
        state.gameOptions = [randomCard.word, ...wrongAnswers].sort(() => 0.5 - Math.random());
    } else {
        state.currentWord = randomCard.word;
        state.correctAnswer = randomCard.translation;
        
        const wrongAnswers = cards
            .filter(c => c.translation !== randomCard.translation)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(c => c.translation);
        
        state.gameOptions = [randomCard.translation, ...wrongAnswers].sort(() => 0.5 - Math.random());
    }
    
    const content = document.getElementById('game-content');
    content.innerHTML = `
        <div class="game-word-display" style="background: linear-gradient(to right, #ddd6fe, #fbcfe8);">
            <p>${state.selectedGame === 'reverse-translate' ? 'Pilih terjemahan dalam bahasa asing:' : 'Pilih terjemahan yang benar:'}</p>
            <div class="game-word">${state.currentWord}</div>
        </div>
        <div class="game-options">
            ${state.gameOptions.map(option => `
                <button class="game-option-btn" onclick="checkGameAnswer('${option}')">${option}</button>
            `).join('')}
        </div>
    `;
}

function checkWord() {
    const input = document.getElementById('game-input');
    const userAnswer = input.value.toLowerCase().trim();
    const correctAnswer = state.currentWord.toLowerCase().trim();
    
    if (userAnswer === correctAnswer) {
        state.gameScore++;
        updateScore(state.gameLevel * 15);
        updateGameStats();
        renderGameContent();
    } else if (userAnswer !== '') {
        state.lives--;
        updateGameStats();
        if (state.lives <= 0) {
            endGame();
        } else {
            input.value = '';
        }
    }
}

function checkGameAnswer(answer) {
    if (answer === state.correctAnswer) {
        state.gameScore++;
        updateScore(state.gameLevel * 15);
        updateGameStats();
        generateGameQuestion();
    } else {
        state.lives--;
        updateGameStats();
        if (state.lives <= 0) {
            endGame();
        } else {
            generateGameQuestion();
        }
    }
}

function endGame() {
    if (state.gameTimer) clearInterval(state.gameTimer);
    state.gameStarted = false;
    
    const requiredScore = state.gameLevel * 10;
    let message = `Game Selesai!\n\nSkor Anda: ${state.gameScore}\n\n`;
    
    if (state.gameScore >= requiredScore && state.gameLevel < 3) {
        message += `Hebat! Anda naik ke Level ${state.gameLevel + 1}! 🎮`;
        state.gameLevel++;
    } else if (state.gameScore >= requiredScore / 2) {
        message += 'Bagus! Terus berlatih! 💪';
    } else {
        message += 'Jangan menyerah! Coba lagi! 🔥';
    }
    
    alert(message);
    backToGameSelection();
}

function backToGameSelection() {
    if (state.gameTimer) clearInterval(state.gameTimer);
    state.selectedGame = null;
    state.gameStarted = false;
    
    document.getElementById('game-play').style.display = 'none';
    document.getElementById('game-selection').style.display = 'block';
    updateLevelBadge('game-level-badge', state.gameLevel);
}

// Chat
function renderChatMessages() {
    const container = document.getElementById('chat-messages');
    container.innerHTML = state.messages.map(msg => `
        <div class="message ${msg.role}">
            <div class="message-content">${msg.text}</div>
        </div>
    `).join('');
    
    if (state.isTyping) {
        container.innerHTML += `
            <div class="message bot">
                <div class="message-content">
                    <div class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    state.messages.push({ role: 'user', text: message });
    input.value = '';
    state.isTyping = true;
    
    renderChatMessages();
    
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        state.messages.push({ role: 'bot', text: botResponse });
        state.isTyping = false;
        updateScore(5);
        renderChatMessages();
    }, 1500);
}

function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('cara baca') || lowerMessage.includes('pronunciation') || lowerMessage.includes('bagaimana membaca')) {
        if (lowerMessage.includes('hello')) {
            return 'Kata "hello" dibaca: hə-ˈlō (he-LO) dengan penekanan pada suku kata kedua. 🔊';
        } else if (lowerMessage.includes('beautiful')) {
            return 'Kata "beautiful" dibaca: ˈbjuː.tɪ.fəl (BYOO-ti-ful) dengan 3 suku kata. 🔊';
        } else if (lowerMessage.includes('こんにちは')) {
            return '"こんにちは" dibaca: kon-ni-chi-wa. Sapaan formal dalam bahasa Jepang. 🔊';
        } else {
            return 'Untuk mengetahui cara membaca, tanyakan: "Bagaimana cara membaca [kata]?" 😊';
        }
    } else if (lowerMessage.includes('arti') || lowerMessage.includes('meaning')) {
        if (lowerMessage.includes('hello')) {
            return '"Hello" = "Halo". Kata sapaan umum. Contoh: "Hello, how are you?" 👋';
        } else if (lowerMessage.includes('thank you')) {
            return '"Thank you" = "Terima kasih". Ungkapan rasa terima kasih. 🙏';
        } else if (lowerMessage.includes('beautiful')) {
            return '"Beautiful" = "Indah/Cantik". Menggambarkan sesuatu yang menarik. 🌸';
        } else {
            return 'Tanyakan: "Apa arti [kata]?" dan saya akan jelaskan! 📚';
        }
    } else if (lowerMessage.includes('tips') || lowerMessage.includes('cara belajar')) {
        return 'Tips: 1) Konsisten 15-30 menit/hari, 2) Praktik dengan native speaker, 3) Tonton film dengan subtitle, 4) Gunakan flashcard, 5) Jangan takut salah! 💪';
    } else if (lowerMessage.includes('level')) {
        return `Anda di Level ${state.userLevel}! Terus berlatih untuk naik level. Keep going! 🎯`;
    } else if (lowerMessage.includes('halo') || lowerMessage.includes('hi')) {
        return 'Halo! Senang berbincang! Apa yang ingin dipelajari hari ini? 😊';
    } else if (lowerMessage.includes('terima kasih') || lowerMessage.includes('thanks')) {
        return 'Sama-sama! Senang membantu. Tanya lagi kapan saja! 🌟';
    } else {
        const responses = [
            'Pertanyaan menarik! Tanyakan lebih spesifik: "Apa arti X?" atau "Bagaimana cara membaca Y?" 🤔',
            'Saya siap membantu! Tanyakan arti kata, cara baca, tips belajar, atau grammar. 📖',
            'Bagus! Terus semangat! Jika ada yang sulit, jangan ragu bertanya! 💡',
            'Excellent! Belajar bahasa itu journey menyenangkan. Keep practicing! 🚀'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}
