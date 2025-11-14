// State
let state = {
    selectedLanguage: 'english',
    score: 0,
    streak: 0,
    flashcardLevel: 1,
    quizLevel: 1,
    gameLevel: 1,
    currentCard: 0,
    isFlipped: false,
    learnedCards: [],
    quizScore: 0,
    currentQuestion: 0,
    selectedAnswer: null,
    gameScore: 0,
    gameTime: 0,
    lives: 3,
    messages: [
        { role: 'bot', text: 'Halo! Saya asisten belajar bahasa Anda. Tanyakan apa saja tentang bahasa, kosakata, atau cara membaca kata! 👋' }
    ]
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
const vocabulary = {
    english: {
        1: [
            { word: 'Hello', translation: 'Halo', pronunciation: 'hə-ˈlō', example: 'Hello, how are you?' },
            { word: 'Thank you', translation: 'Terima kasih', pronunciation: 'θæŋk juː', example: 'Thank you very much!' },
            { word: 'Good', translation: 'Bagus', pronunciation: 'ɡʊd', example: 'This is good!' },
            { word: 'Yes', translation: 'Ya', pronunciation: 'jes', example: 'Yes, I agree.' },
            { word: 'No', translation: 'Tidak', pronunciation: 'noʊ', example: 'No, thank you.' },
            { word: 'Please', translation: 'Tolong', pronunciation: 'pliːz', example: 'Please help me.' },
            { word: 'Welcome', translation: 'Selamat datang', pronunciation: 'ˈwel.kəm', example: 'Welcome to my home!' },
            { word: 'Goodbye', translation: 'Selamat tinggal', pronunciation: 'ɡʊdˈbaɪ', example: 'Goodbye, see you!' },
            { word: 'Sorry', translation: 'Maaf', pronunciation: 'ˈsɒr.i', example: 'Sorry for being late.' },
            { word: 'Love', translation: 'Cinta', pronunciation: 'lʌv', example: 'I love you!' }
        ],
        2: [
            { word: 'Beautiful', translation: 'Indah', pronunciation: 'ˈbjuː.tɪ.fəl', example: 'What a beautiful day!' },
            { word: 'Friend', translation: 'Teman', pronunciation: 'frend', example: 'She is my best friend.' },
            { word: 'Learn', translation: 'Belajar', pronunciation: 'lɜːrn', example: 'I learn English every day.' },
            { word: 'Happy', translation: 'Bahagia', pronunciation: 'ˈhæp.i', example: 'I am so happy today!' },
            { word: 'Important', translation: 'Penting', pronunciation: 'ɪmˈpɔːr.tənt', example: 'This is very important.' },
            { word: 'Wonderful', translation: 'Menakjubkan', pronunciation: 'ˈwʌn.də.fəl', example: 'What a wonderful surprise!' },
            { word: 'Knowledge', translation: 'Pengetahuan', pronunciation: 'ˈnɒl.ɪdʒ', example: 'Knowledge is power.' },
            { word: 'Journey', translation: 'Perjalanan', pronunciation: 'ˈdʒɜː.ni', example: 'Life is a journey.' },
            { word: 'Success', translation: 'Kesuksesan', pronunciation: 'səkˈses', example: 'Success requires hard work.' },
            { word: 'Dream', translation: 'Mimpi', pronunciation: 'driːm', example: 'Follow your dreams!' }
        ],
        3: [
            { word: 'Magnificent', translation: 'Luar biasa', pronunciation: 'mæɡˈnɪf.ɪ.sənt', example: 'A magnificent view!' },
            { word: 'Enthusiastic', translation: 'Antusias', pronunciation: 'ɪnˌθuː.ziˈæs.tɪk', example: 'She was enthusiastic!' },
            { word: 'Achievement', translation: 'Pencapaian', pronunciation: 'əˈtʃiːv.mənt', example: 'Great achievement.' },
            { word: 'Perseverance', translation: 'Ketekunan', pronunciation: 'ˌpɜː.sɪˈvɪə.rəns', example: 'Success needs perseverance.' },
            { word: 'Extraordinary', translation: 'Luar biasa', pronunciation: 'ɪkˈstrɔːr.dɪ.ner.i', example: 'Extraordinary performance!' },
            { word: 'Determination', translation: 'Tekad', pronunciation: 'dɪˌtɜː.mɪˈneɪ.ʃən', example: 'His determination is inspiring.' },
            { word: 'Philosophical', translation: 'Filosofis', pronunciation: 'ˌfɪl.əˈsɒf.ɪ.kəl', example: 'A philosophical discussion.' },
            { word: 'Remarkable', translation: 'Luar biasa', pronunciation: 'rɪˈmɑː.kə.bəl', example: 'Remarkable progress!' },
            { word: 'Sophisticated', translation: 'Canggih', pronunciation: 'səˈfɪs.tɪ.keɪ.tɪd', example: 'Sophisticated technology.' },
            { word: 'Unprecedented', translation: 'Belum pernah terjadi', pronunciation: 'ʌnˈpres.ɪ.den.tɪd', example: 'Unprecedented success!' }
        ]
    },

    // ===============================
    // INDONESIA
    // ===============================
    indonesia: {
        1: [
            { word: 'Halo', translation: 'Hello', pronunciation: 'ha-lo', example: 'Halo, apa kabar?' },
            { word: 'Terima kasih', translation: 'Thank you', pronunciation: 'te-ri-ma ka-sih', example: 'Terima kasih banyak.' },
            { word: 'Bagus', translation: 'Good', pronunciation: 'ba-gus', example: 'Itu bagus sekali.' },
            { word: 'Ya', translation: 'Yes', pronunciation: 'ya', example: 'Ya, benar.' },
            { word: 'Tidak', translation: 'No', pronunciation: 'ti-dak', example: 'Tidak, terima kasih.' },
            { word: 'Tolong', translation: 'Please', pronunciation: 'to-long', example: 'Tolong bantu saya.' },
            { word: 'Selamat datang', translation: 'Welcome', pronunciation: 'se-la-mat da-tang', example: 'Selamat datang di rumahku.' },
            { word: 'Selamat tinggal', translation: 'Goodbye', pronunciation: 'se-la-mat ting-gal', example: 'Selamat tinggal, sampai jumpa.' },
            { word: 'Maaf', translation: 'Sorry', pronunciation: 'ma-af', example: 'Maaf saya terlambat.' },
            { word: 'Cinta', translation: 'Love', pronunciation: 'cin-ta', example: 'Aku cinta kamu.' }
        ],
        2: [
            { word: 'Indah', translation: 'Beautiful', pronunciation: 'in-dah', example: 'Hari ini sangat indah.' },
            { word: 'Teman', translation: 'Friend', pronunciation: 'te-man', example: 'Dia teman baikku.' },
            { word: 'Belajar', translation: 'Learn', pronunciation: 'be-la-jar', example: 'Saya belajar setiap hari.' },
            { word: 'Bahagia', translation: 'Happy', pronunciation: 'ba-ha-gi-a', example: 'Saya merasa bahagia.' },
            { word: 'Penting', translation: 'Important', pronunciation: 'pen-ting', example: 'Ini sangat penting.' },
            { word: 'Menakjubkan', translation: 'Wonderful', pronunciation: 'me-nak-jub-kan', example: 'Tempat ini menakjubkan.' },
            { word: 'Pengetahuan', translation: 'Knowledge', pronunciation: 'pe-na-hu-an', example: 'Pengetahuan adalah kekuatan.' },
            { word: 'Perjalanan', translation: 'Journey', pronunciation: 'per-ja-la-nan', example: 'Hidup adalah perjalanan.' },
            { word: 'Kesuksesan', translation: 'Success', pronunciation: 'ke-suk-se-san', example: 'Kesuksesan butuh usaha.' },
            { word: 'Mimpi', translation: 'Dream', pronunciation: 'mim-pi', example: 'Kejar mimpimu.' }
        ],
        3: [
            { word: 'Luar biasa', translation: 'Magnificent', pronunciation: 'lu-ar bi-a-sa', example: 'Pemandangan ini luar biasa.' },
            { word: 'Antusias', translation: 'Enthusiastic', pronunciation: 'an-tu-si-as', example: 'Dia sangat antusias.' },
            { word: 'Pencapaian', translation: 'Achievement', pronunciation: 'pen-ca-pai-an', example: 'Ini pencapaian besar.' },
            { word: 'Ketekunan', translation: 'Perseverance', pronunciation: 'ke-te-ku-nan', example: 'Ketekunan membawa hasil.' },
            { word: 'Istimewa', translation: 'Extraordinary', pronunciation: 'is-ti-me-wa', example: 'Hasilnya istimewa.' },
            { word: 'Tekad', translation: 'Determination', pronunciation: 'te-kad', example: 'Tekadnya kuat.' },
            { word: 'Filosofis', translation: 'Philosophical', pronunciation: 'fi-lo-so-fis', example: 'Pembahasan filosofis.' },
            { word: 'Mengesankan', translation: 'Remarkable', pronunciation: 'meng-es-kan', example: 'Pekerjaannya mengesankan.' },
            { word: 'Canggih', translation: 'Sophisticated', pronunciation: 'cang-gih', example: 'Teknologinya canggih.' },
            { word: 'Belum pernah terjadi', translation: 'Unprecedented', pronunciation: 'be-lum pe-nah ter-ja-di', example: 'Ini belum pernah terjadi.' }
        ]
    },

    // =====================================================
    // KOREA (한국어)
    // =====================================================
    korea: {
        1: [
            { word: '안녕 (Annyeong)', translation: 'Hello', pronunciation: 'an-nyong', example: '안녕! 잘 지내?' },
            { word: '감사합니다 (Gamsahamnida)', translation: 'Thank you', pronunciation: 'gam-sa-ham-ni-da', example: '정말 감사합니다!' },
            { word: '좋다 (Jota)', translation: 'Good', pronunciation: 'jo-ta', example: '이거 좋다!' },
            { word: '네 (Ne)', translation: 'Yes', pronunciation: 'ne', example: '네, 맞아요.' },
            { word: '아니요 (Aniyo)', translation: 'No', pronunciation: 'a-ni-yo', example: '아니요, 괜찮아요.' },
            { word: '제발 (Jebal)', translation: 'Please', pronunciation: 'je-bal', example: '제발 도와주세요.' },
            { word: '어서오세요 (Eoseo-oseyo)', translation: 'Welcome', pronunciation: 'eo-seo-o-se-yo', example: '우리 집에 어서오세요!' },
            { word: '안녕히 가세요 (Annyeonghi gaseyo)', translation: 'Goodbye', pronunciation: 'an-nyong-hi ga-se-yo', example: '안녕히 가세요!' },
            { word: '미안해 (Mianhae)', translation: 'Sorry', pronunciation: 'mi-an-hae', example: '미안해, 늦었어.' },
            { word: '사랑 (Sarang)', translation: 'Love', pronunciation: 'sa-rang', example: '너를 사랑해.' }
        ],
        2: [
            { word: '아름답다 (Areumdapda)', translation: 'Beautiful', pronunciation: 'a-reum-dap-da', example: '정말 아름답다!' },
            { word: '친구 (Chingu)', translation: 'Friend', pronunciation: 'chin-gu', example: '그녀는 내 친구야.' },
            { word: '배우다 (Baeuda)', translation: 'Learn', pronunciation: 'bae-u-da', example: '나는 한국어를 배우고 있어.' },
            { word: '행복하다 (Haengbokhada)', translation: 'Happy', pronunciation: 'haeng-bok-ha-da', example: '오늘 너무 행복해!' },
            { word: '중요하다 (Jungyohada)', translation: 'Important', pronunciation: 'jung-yo-ha-da', example: '이건 정말 중요해.' },
            { word: '멋지다 (Meotjida)', translation: 'Wonderful', pronunciation: 'meot-ji-da', example: '정말 멋지다!' },
            { word: '지식 (Jisik)', translation: 'Knowledge', pronunciation: 'ji-sik', example: '지식은 힘이다.' },
            { word: '여행 (Yeohaeng)', translation: 'Journey', pronunciation: 'yeo-haeng', example: '인생은 여행이다.' },
            { word: '성공 (Seonggong)', translation: 'Success', pronunciation: 'seong-gong', example: '성공은 노력에서 온다.' },
            { word: '꿈 (Kkum)', translation: 'Dream', pronunciation: 'kkum', example: '꿈을 따라가라!' }
        ],
        3: [
            { word: '웅장하다 (Ungjanghada)', translation: 'Magnificent', pronunciation: 'ung-jang-ha-da', example: '웅장한 풍경이다.' },
            { word: '열정적이다 (Yeoljungjeogida)', translation: 'Enthusiastic', pronunciation: 'yeol-jeong-jeo-gi-da', example: '그녀는 정말 열정적이야!' },
            { word: '업적 (Eopjeok)', translation: 'Achievement', pronunciation: 'eop-jeok', example: '큰 업적을 이루었다.' },
            { word: '인내 (Innae)', translation: 'Perseverance', pronunciation: 'in-nae', example: '성공엔 인내가 필요하다.' },
            { word: '비범하다 (Bibeomhada)', translation: 'Extraordinary', pronunciation: 'bi-beom-ha-da', example: '비범한 재능이다.' },
            { word: '결단력 (Gyeoldanryeok)', translation: 'Determination', pronunciation: 'gyeol-dan-ryeok', example: '강한 결단력이다.' },
            { word: '철학적 (Cheolhakjeok)', translation: 'Philosophical', pronunciation: 'cheol-hak-jeok', example: '철학적 토론을 했다.' },
            { word: '놀랍다 (Nollaapda)', translation: 'Remarkable', pronunciation: 'nol-lap-da', example: '정말 놀랍다!' },
            { word: '정교하다 (Jeonggyohada)', translation: 'Sophisticated', pronunciation: 'jeong-gyo-ha-da', example: '정교한 기술이다.' },
            { word: '전례 없다 (Jeollye eopda)', translation: 'Unprecedented', pronunciation: 'jeol-rye eop-da', example: '전례 없는 성공이다.' }
        ]
    },

    // =====================================================
    // CHINESE (Mandarin)
    // =====================================================
    china: {
        1: [
            { word: '你好 (Nǐ hǎo)', translation: 'Hello', pronunciation: 'ni hao', example: '你好，你好吗？' },
            { word: '谢谢 (Xièxiè)', translation: 'Thank you', pronunciation: 'shie-shie', example: '谢谢你的帮助。' },
            { word: '好 (Hǎo)', translation: 'Good', pronunciation: 'hao', example: '很好！' },
            { word: '是 (Shì)', translation: 'Yes', pronunciation: 'shi', example: '是的，我同意。' },
            { word: '不 (Bù)', translation: 'No', pronunciation: 'bu', example: '不，谢谢。' },
            { word: '请 (Qǐng)', translation: 'Please', pronunciation: 'ching', example: '请帮帮我。' },
            { word: '欢迎 (Huānyíng)', translation: 'Welcome', pronunciation: 'huan-ying', example: '欢迎来到我家。' },
            { word: '再见 (Zàijiàn)', translation: 'Goodbye', pronunciation: 'zai-jian', example: '再见，明天见！' },
            { word: '对不起 (Duìbuqǐ)', translation: 'Sorry', pronunciation: 'dwei-bu-chi', example: '对不起，我迟到了。' },
            { word: '爱 (Ài)', translation: 'Love', pronunciation: 'ai', example: '我爱你。' }
        ],
        2: [
            { word: '美丽 (Měilì)', translation: 'Beautiful', pronunciation: 'mei-li', example: '多么美丽的一天！' },
            { word: '朋友 (Péngyǒu)', translation: 'Friend', pronunciation: 'peng-yo', example: '他是我最好的朋友。' },
            { word: '学习 (Xuéxí)', translation: 'Learn', pronunciation: 'shweh-shee', example: '我每天学习中文。' },
            { word: '快乐 (Kuàilè)', translation: 'Happy', pronunciation: 'kwai-le', example: '我今天很快乐！' },
            { word: '重要 (Zhòngyào)', translation: 'Important', pronunciation: 'jong-yao', example: '这非常重要。' },
            { word: '精彩 (Jīngcǎi)', translation: 'Wonderful', pronunciation: 'jing-tsai', example: '精彩的表演！' },
            { word: '知识 (Zhīshi)', translation: 'Knowledge', pronunciation: 'jir-shi', example: '知识就是力量。' },
            { word: '旅程 (Lǚchéng)', translation: 'Journey', pronunciation: 'lyu-cheng', example: '生活是一段旅程。' },
            { word: '成功 (Chénggōng)', translation: 'Success', pronunciation: 'cheng-gong', example: '成功需要努力。' },
            { word: '梦想 (Mèngxiǎng)', translation: 'Dream', pronunciation: 'mung-syang', example: '追随你的梦想！' }
        ],
        3: [
            { word: '壮丽 (Zhuànglì)', translation: 'Magnificent', pronunciation: 'jwang-li', example: '壮丽的景色。' },
            { word: '热情 (Rèqíng)', translation: 'Enthusiastic', pronunciation: 'ruh-ching', example: '她非常热情。' },
            { word: '成就 (Chéngjiù)', translation: 'Achievement', pronunciation: 'cheng-jyo', example: '伟大的成就。' },
            { word: '毅力 (Yìlì)', translation: 'Perseverance', pronunciation: 'yi-li', example: '成功需要毅力。' },
            { word: '非凡 (Fēifán)', translation: 'Extraordinary', pronunciation: 'fei-fan', example: '非凡的表现。' },
            { word: '决心 (Juéxīn)', translation: 'Determination', pronunciation: 'jyweh-sin', example: '他的决心令人敬佩。' },
            { word: '哲学的 (Zhéxué de)', translation: 'Philosophical', pronunciation: 'jer-shweh de', example: '一次哲学的讨论。' },
            { word: '显著 (Xiǎnzhù)', translation: 'Remarkable', pronunciation: 'syen-joo', example: '显著的进步。' },
            { word: '复杂 (Fùzá)', translation: 'Sophisticated', pronunciation: 'foo-dza', example: '复杂的技术。' },
            { word: '前所未有 (Qiánsuǒ wèiyǒu)', translation: 'Unprecedented', pronunciation: 'chyensuowei-yo', example: '前所未有的成功。' }
        ]
    },

    // =====================================================
    // MALAYSIA
    // =====================================================
    malaysia: {
        1: [
            { word: 'Helo', translation: 'Hello', pronunciation: 'he-lo', example: 'Helo, apa khabar?' },
            { word: 'Terima kasih', translation: 'Thank you', pronunciation: 'te-ri-ma ka-sih', example: 'Terima kasih banyak.' },
            { word: 'Bagus', translation: 'Good', pronunciation: 'ba-gus', example: 'Itu sangat bagus.' },
            { word: 'Ya', translation: 'Yes', pronunciation: 'ya', example: 'Ya, betul.' },
            { word: 'Tidak', translation: 'No', pronunciation: 'ti-dak', example: 'Tidak, terima kasih.' },
            { word: 'Tolong', translation: 'Please', pronunciation: 'to-long', example: 'Tolong bantu saya.' },
            { word: 'Selamat datang', translation: 'Welcome', pronunciation: 'se-la-mat da-tang', example: 'Selamat datang ke rumah saya.' },
            { word: 'Selamat tinggal', translation: 'Goodbye', pronunciation: 'se-la-mat ting-gal', example: 'Selamat tinggal!' },
            { word: 'Maaf', translation: 'Sorry', pronunciation: 'ma-af', example: 'Maaf kerana lewat.' },
            { word: 'Cinta', translation: 'Love', pronunciation: 'cin-ta', example: 'Saya cinta awak.' }
        ],
        2: [
            { word: 'Indah', translation: 'Beautiful', pronunciation: 'in-dah', example: 'Pemandangan ini sangat indah.' },
            { word: 'Kawan', translation: 'Friend', pronunciation: 'ka-wan', example: 'Dia kawan baik saya.' },
            { word: 'Belajar', translation: 'Learn', pronunciation: 'be-la-jar', example: 'Saya belajar setiap hari.' },
            { word: 'Bahagia', translation: 'Happy', pronunciation: 'ba-ha-gi-a', example: 'Saya berasa bahagia.' },
            { word: 'Penting', translation: 'Important', pronunciation: 'pen-ting', example: 'Ini sangat penting.' },
            { word: 'Hebat', translation: 'Wonderful', pronunciation: 'he-bat', example: 'Itu memang hebat!' },
            { word: 'Ilmu', translation: 'Knowledge', pronunciation: 'il-mu', example: 'Ilmu adalah kuasa.' },
            { word: 'Perjalanan', translation: 'Journey', pronunciation: 'per-ja-la-nan', example: 'Hidup adalah perjalanan.' },
            { word: 'Kejayaan', translation: 'Success', pronunciation: 'ke-ja-ya-an', example: 'Kejayaan perlukan usaha.' },
            { word: 'Impian', translation: 'Dream', pronunciation: 'im-pi-an', example: 'Kejar impian anda.' }
        ],
        3: [
            { word: 'Mengagumkan', translation: 'Magnificent', pronunciation: 'meng-a-gum-kan', example: 'Pemandangannya mengagumkan.' },
            { word: 'Bersemangat', translation: 'Enthusiastic', pronunciation: 'ber-se-ma-ngat', example: 'Dia sangat bersemangat.' },
            { word: 'Pencapaian', translation: 'Achievement', pronunciation: 'pen-ca-pa-ian', example: 'Ini satu pencapaian besar.' },
            { word: 'Ketabahan', translation: 'Perseverance', pronunciation: 'ke-ta-ba-han', example: 'Ketabahan membawa kejayaan.' },
            { word: 'Luar biasa', translation: 'Extraordinary', pronunciation: 'lu-ar bi-a-sa', example: 'Ini luar biasa!' },
            { word: 'Tekad', translation: 'Determination', pronunciation: 'te-kad', example: 'Dia ada tekad yang kuat.' },
            { word: 'Falsafah', translation: 'Philosophical', pronunciation: 'fal-sa-fah', example: 'Perbincangan falsafah.' },
            { word: 'Mengagumkan', translation: 'Remarkable', pronunciation: 'meng-a-gum-kan', example: 'Pencapaian itu mengagumkan.' },
            { word: 'Canggih', translation: 'Sophisticated', pronunciation: 'cang-gih', example: 'Teknologinya sangat canggih.' },
            { word: 'Belum pernah berlaku', translation: 'Unprecedented', pronunciation: 'be-lum per-nah ber-la-ku', example: 'Ini belum pernah berlaku.' }
        ]
    },

    // =====================================================
    // SINGAPORE (Singapore English)
    // =====================================================
    singapore: {
        1: [
            { word: 'Hello lah', translation: 'Hello', pronunciation: 'he-lo la', example: 'Hello lah, how are you?' },
            { word: 'Thank you', translation: 'Terima kasih', pronunciation: 'teng-kiu', example: 'Thank you ah!' },
            { word: 'Good', translation: 'Bagus', pronunciation: 'gud', example: 'Very good lah!' },
            { word: 'Yes', translation: 'Ya', pronunciation: 'yes', example: 'Yes can!' },
            { word: 'No', translation: 'Tidak', pronunciation: 'noh', example: 'No cannot.' },
            { word: 'Please', translation: 'Tolong', pronunciation: 'plees', example: 'Please help me can?' },
            { word: 'Welcome', translation: 'Selamat datang', pronunciation: 'wel-kum', example: 'Welcome to Singapore!' },
            { word: 'Bye', translation: 'Selamat tinggal', pronunciation: 'bai', example: 'Bye, see you lah!' },
            { word: 'Sorry ah', translation: 'Maaf', pronunciation: 'so-ri ah', example: 'Sorry ah, my mistake.' },
            { word: 'Love', translation: 'Cinta', pronunciation: 'lav', example: 'I love Singapore food lah!' }
        ],
        2: [
            { word: 'Beautiful', translation: 'Indah', pronunciation: 'byu-ti-ful', example: 'Singapore night view very beautiful.' },
            { word: 'Friend', translation: 'Teman', pronunciation: 'fren', example: 'He is my good friend lah.' },
            { word: 'Learn', translation: 'Belajar', pronunciation: 'lern', example: 'I learn new things every day.' },
            { word: 'Happy', translation: 'Bahagia', pronunciation: 'ha-pi', example: 'I feel very happy today.' },
            { word: 'Important', translation: 'Penting', pronunciation: 'im-por-tent', example: 'This is very important lah.' },
            { word: 'Wonderful', translation: 'Menakjubkan', pronunciation: 'won-der-ful', example: 'What a wonderful surprise!' },
            { word: 'Knowledge', translation: 'Pengetahuan', pronunciation: 'nol-lej', example: 'Knowledge is power, lah!' },
            { word: 'Journey', translation: 'Perjalanan', pronunciation: 'jer-ni', example: 'Life is a journey.' },
            { word: 'Success', translation: 'Kesuksesan', pronunciation: 'sak-ses', example: 'Success needs effort.' },
            { word: 'Dream', translation: 'Mimpi', pronunciation: 'drim', example: 'Chase your dreams lah!' }
        ],
        3: [
            { word: 'Magnificent', translation: 'Luar biasa', pronunciation: 'mag-ni-fi-cent', example: 'The view is magnificent.' },
            { word: 'Enthusiastic', translation: 'Antusias', pronunciation: 'en-thu-si-as-tik', example: 'She is very enthusiastic.' },
            { word: 'Achievement', translation: 'Pencapaian', pronunciation: 'a-chiv-ment', example: 'A great achievement.' },
            { word: 'Perseverance', translation: 'Ketekunan', pronunciation: 'per-se-ver-ens', example: 'Perseverance brings success.' },
            { word: 'Extraordinary', translation: 'Luar biasa', pronunciation: 'ex-tra-or-di-na-ri', example: 'Extraordinary performance!' },
            { word: 'Determination', translation: 'Tekad', pronunciation: 'di-ter-mi-ne-shen', example: 'Strong determination is needed.' },
            { word: 'Philosophical', translation: 'Filosofis', pronunciation: 'fi-lo-so-fi-cal', example: 'A philosophical talk.' },
            { word: 'Remarkable', translation: 'Mengesankan', pronunciation: 'ri-mar-ka-bel', example: 'Remarkable progress.' },
            { word: 'Sophisticated', translation: 'Canggih', pronunciation: 'so-fi-sti-ke-tid', example: 'Sophisticated system.' },
            { word: 'Unprecedented', translation: 'Belum pernah terjadi', pronunciation: 'an-pre-si-den-ted', example: 'Unprecedented growth.' }
        ]
    },

    // =====================================================
    // SPANISH (Español)
    // =====================================================
    spanish: {
        1: [
            { word: 'Hola', translation: 'Hello', pronunciation: 'o-la', example: 'Hola, ¿cómo estás?' },
            { word: 'Gracias', translation: 'Thank you', pronunciation: 'gra-sias', example: '¡Muchas gracias!' },
            { word: 'Bueno', translation: 'Good', pronunciation: 'bwe-no', example: 'Esto es bueno.' },
            { word: 'Sí', translation: 'Yes', pronunciation: 'si', example: 'Sí, estoy de acuerdo.' },
            { word: 'No', translation: 'Tidak', pronunciation: 'no', example: 'No, gracias.' },
            { word: 'Por favor', translation: 'Please', pronunciation: 'por fa-bor', example: 'Por favor, ayúdame.' },
            { word: 'Bienvenido', translation: 'Welcome', pronunciation: 'byen-ve-ni-do', example: 'Bienvenido a mi casa.' },
            { word: 'Adiós', translation: 'Goodbye', pronunciation: 'a-dios', example: 'Adiós, nos vemos.' },
            { word: 'Lo siento', translation: 'Sorry', pronunciation: 'lo syen-to', example: 'Lo siento por llegar tarde.' },
            { word: 'Amor', translation: 'Love', pronunciation: 'a-mor', example: '¡Te amo!' }
        ],
        2: [
            { word: 'Hermoso', translation: 'Beautiful', pronunciation: 'er-mo-so', example: '¡Qué día tan hermoso!' },
            { word: 'Amigo', translation: 'Friend', pronunciation: 'a-mi-go', example: 'Él es mi mejor amigo.' },
            { word: 'Aprender', translation: 'Learn', pronunciation: 'a-pren-der', example: 'Aprendo español cada día.' },
            { word: 'Feliz', translation: 'Happy', pronunciation: 'fe-lis', example: 'Estoy muy feliz hoy.' },
            { word: 'Importante', translation: 'Important', pronunciation: 'im-por-tan-te', example: 'Esto es muy importante.' },
            { word: 'Maravilloso', translation: 'Wonderful', pronunciation: 'ma-ra-vi-yo-so', example: '¡Es maravilloso!' },
            { word: 'Conocimiento', translation: 'Knowledge', pronunciation: 'ko-no-si-myen-to', example: 'El conocimiento es poder.' },
            { word: 'Viaje', translation: 'Journey', pronunciation: 'bya-he', example: 'La vida es un viaje.' },
            { word: 'Éxito', translation: 'Success', pronunciation: 'ek-si-to', example: 'El éxito requiere trabajo duro.' },
            { word: 'Sueño', translation: 'Dream', pronunciation: 'swe-nyo', example: 'Sigue tus sueños.' }
        ],
        3: [
            { word: 'Magnífico', translation: 'Magnificent', pronunciation: 'mag-ni-fi-co', example: '¡Una vista magnífica!' },
            { word: 'Entusiasta', translation: 'Enthusiastic', pronunciation: 'en-tu-sias-ta', example: 'Ella estaba muy entusiasta.' },
            { word: 'Logro', translation: 'Achievement', pronunciation: 'lo-gro', example: 'Un gran logro.' },
            { word: 'Perseverancia', translation: 'Perseverance', pronunciation: 'per-se-ve-ran-sia', example: 'El éxito necesita perseverancia.' },
            { word: 'Extraordinario', translation: 'Extraordinary', pronunciation: 'ex-tra-or-di-na-rio', example: 'Un rendimiento extraordinario.' },
            { word: 'Determinación', translation: 'Determination', pronunciation: 'de-ter-mi-na-sion', example: 'Su determinación es inspiradora.' },
            { word: 'Filosófico', translation: 'Philosophical', pronunciation: 'fi-lo-so-fi-co', example: 'Una conversación filosófica.' },
            { word: 'Notable', translation: 'Remarkable', pronunciation: 'no-ta-ble', example: 'Un progreso notable.' },
            { word: 'Sofisticado', translation: 'Sophisticated', pronunciation: 'so-fis-ti-ka-do', example: 'Tecnología sofisticada.' },
            { word: 'Sin precedentes', translation: 'Unprecedented', pronunciation: 'sin pre-ce-den-tes', example: 'Un éxito sin precedentes.' }
        ]
    },

    // =====================================================
    // FRENCH (Français)
    // =====================================================
    french: {
        1: [
            { word: 'Bonjour', translation: 'Hello', pronunciation: 'bon-jour', example: 'Bonjour, comment ça va ?' },
            { word: 'Merci', translation: 'Thank you', pronunciation: 'mer-si', example: 'Merci beaucoup !' },
            { word: 'Bon', translation: 'Good', pronunciation: 'bon', example: 'C’est très bon.' },
            { word: 'Oui', translation: 'Yes', pronunciation: 'wi', example: 'Oui, je suis d’accord.' },
            { word: 'Non', translation: 'No', pronunciation: 'non', example: 'Non, merci.' },
            { word: 'S’il vous plaît', translation: 'Please', pronunciation: 'sil vu ple', example: 'S’il vous plaît, aidez-moi.' },
            { word: 'Bienvenue', translation: 'Welcome', pronunciation: 'byan-ve-nu', example: 'Bienvenue chez moi.' },
            { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'o rev-war', example: 'Au revoir, à bientôt.' },
            { word: 'Pardon', translation: 'Sorry', pronunciation: 'par-don', example: 'Pardon pour le retard.' },
            { word: 'Amour', translation: 'Love', pronunciation: 'a-mur', example: 'Je t’aime.' }
        ],
        2: [
            { word: 'Magnifique', translation: 'Beautiful', pronunciation: 'mag-ni-fik', example: 'Quelle journée magnifique !' },
            { word: 'Ami', translation: 'Friend', pronunciation: 'a-mi', example: 'Il est mon meilleur ami.' },
            { word: 'Apprendre', translation: 'Learn', pronunciation: 'a-pran-dre', example: 'J’apprends le français.' },
            { word: 'Heureux', translation: 'Happy', pronunciation: 'o-reu', example: 'Je suis très heureux.' },
            { word: 'Important', translation: 'Important', pronunciation: 'am-por-tan', example: 'C’est très important.' },
            { word: 'Merveilleux', translation: 'Wonderful', pronunciation: 'mer-vey-eu', example: 'C’est merveilleux !' },
            { word: 'Connaissance', translation: 'Knowledge', pronunciation: 'ko-nes-ans', example: 'La connaissance est le pouvoir.' },
            { word: 'Voyage', translation: 'Journey', pronunciation: 'vwa-yaj', example: 'La vie est un voyage.' },
            { word: 'Succès', translation: 'Success', pronunciation: 'suk-se', example: 'Le succès demande du travail.' },
            { word: 'Rêve', translation: 'Dream', pronunciation: 'rev', example: 'Suis tes rêves.' }
        ],
        3: [
            { word: 'Splendide', translation: 'Magnificent', pronunciation: 'splon-did', example: 'Une vue splendide !' },
            { word: 'Enthousiaste', translation: 'Enthusiastic', pronunciation: 'an-tu-zias-t', example: 'Elle est très enthousiaste.' },
            { word: 'Accomplissement', translation: 'Achievement', pronunciation: 'a-kom-plis-man', example: 'Un grand accomplissement.' },
            { word: 'Persévérance', translation: 'Perseverance', pronunciation: 'per-se-ve-rans', example: 'La persévérance mène au succès.' },
            { word: 'Extraordinaire', translation: 'Extraordinary', pronunciation: 'ex-tra-or-di-ner', example: 'Une performance extraordinaire.' },
            { word: 'Détermination', translation: 'Determination', pronunciation: 'de-ter-mi-na-sion', example: 'Sa détermination est inspirante.' },
            { word: 'Philosophique', translation: 'Philosophical', pronunciation: 'fi-lo-zo-fik', example: 'Une discussion philosophique.' },
            { word: 'Remarquable', translation: 'Remarkable', pronunciation: 're-mar-ka-ble', example: 'Un progrès remarquable.' },
            { word: 'Sophistiqué', translation: 'Sophisticated', pronunciation: 'so-fis-ti-ke', example: 'Un système sophistiqué.' },
            { word: 'Sans précédent', translation: 'Unprecedented', pronunciation: 'son pre-ce-don', example: 'Un succès sans précédent.' }
        ]
    }
};
}

const quizData = {
    english: {
        1: [
            { word: 'Hello', translation: 'Halo', pronunciation: 'hə-ˈlō', example: 'Hello, how are you?' },
            { word: 'Thank you', translation: 'Terima kasih', pronunciation: 'θæŋk juː', example: 'Thank you very much!' },
            { word: 'Good', translation: 'Bagus', pronunciation: 'ɡʊd', example: 'This is good!' },
            { word: 'Yes', translation: 'Ya', pronunciation: 'jes', example: 'Yes, I agree.' },
            { word: 'No', translation: 'Tidak', pronunciation: 'noʊ', example: 'No, thank you.' },
            { word: 'Please', translation: 'Tolong', pronunciation: 'pliːz', example: 'Please help me.' },
            { word: 'Welcome', translation: 'Selamat datang', pronunciation: 'ˈwel.kəm', example: 'Welcome to my home!' },
            { word: 'Goodbye', translation: 'Selamat tinggal', pronunciation: 'ɡʊdˈbaɪ', example: 'Goodbye, see you!' },
            { word: 'Sorry', translation: 'Maaf', pronunciation: 'ˈsɒr.i', example: 'Sorry for being late.' },
            { word: 'Love', translation: 'Cinta', pronunciation: 'lʌv', example: 'I love you!' }
        ],
        2: [
            { word: 'Beautiful', translation: 'Indah', pronunciation: 'ˈbjuː.tɪ.fəl', example: 'What a beautiful day!' },
            { word: 'Friend', translation: 'Teman', pronunciation: 'frend', example: 'She is my best friend.' },
            { word: 'Learn', translation: 'Belajar', pronunciation: 'lɜːrn', example: 'I learn English every day.' },
            { word: 'Happy', translation: 'Bahagia', pronunciation: 'ˈhæp.i', example: 'I am so happy today!' },
            { word: 'Important', translation: 'Penting', pronunciation: 'ɪmˈpɔːr.tənt', example: 'This is very important.' },
            { word: 'Wonderful', translation: 'Menakjubkan', pronunciation: 'ˈwʌn.də.fəl', example: 'What a wonderful surprise!' },
            { word: 'Knowledge', translation: 'Pengetahuan', pronunciation: 'ˈnɒl.ɪdʒ', example: 'Knowledge is power.' },
            { word: 'Journey', translation: 'Perjalanan', pronunciation: 'ˈdʒɜː.ni', example: 'Life is a journey.' },
            { word: 'Success', translation: 'Kesuksesan', pronunciation: 'səkˈses', example: 'Success requires hard work.' },
            { word: 'Dream', translation: 'Mimpi', pronunciation: 'driːm', example: 'Follow your dreams!' }
        ],
        3: [
            { word: 'Magnificent', translation: 'Luar biasa', pronunciation: 'mæɡˈnɪf.ɪ.sənt', example: 'A magnificent view!' },
            { word: 'Enthusiastic', translation: 'Antusias', pronunciation: 'ɪnˌθuː.ziˈæs.tɪk', example: 'She was enthusiastic!' },
            { word: 'Achievement', translation: 'Pencapaian', pronunciation: 'əˈtʃiːv.mənt', example: 'Great achievement.' },
            { word: 'Perseverance', translation: 'Ketekunan', pronunciation: 'ˌpɜː.sɪˈvɪə.rəns', example: 'Success needs perseverance.' },
            { word: 'Extraordinary', translation: 'Luar biasa', pronunciation: 'ɪkˈstrɔːr.dɪ.ner.i', example: 'Extraordinary performance!' },
            { word: 'Determination', translation: 'Tekad', pronunciation: 'dɪˌtɜː.mɪˈneɪ.ʃən', example: 'His determination is inspiring.' },
            { word: 'Philosophical', translation: 'Filosofis', pronunciation: 'ˌfɪl.əˈsɒf.ɪ.kəl', example: 'A philosophical discussion.' },
            { word: 'Remarkable', translation: 'Luar biasa', pronunciation: 'rɪˈmɑː.kə.bəl', example: 'Remarkable progress!' },
            { word: 'Sophisticated', translation: 'Canggih', pronunciation: 'səˈfɪs.tɪ.keɪ.tɪd', example: 'Sophisticated technology.' },
            { word: 'Unprecedented', translation: 'Belum pernah terjadi', pronunciation: 'ʌnˈpres.ɪ.den.tɪd', example: 'Unprecedented success!' }
        ]
    },

    // ===============================
    // INDONESIA
    // ===============================
    indonesia: {
        1: [
            { word: 'Halo', translation: 'Hello', pronunciation: 'ha-lo', example: 'Halo, apa kabar?' },
            { word: 'Terima kasih', translation: 'Thank you', pronunciation: 'te-ri-ma ka-sih', example: 'Terima kasih banyak.' },
            { word: 'Bagus', translation: 'Good', pronunciation: 'ba-gus', example: 'Itu bagus sekali.' },
            { word: 'Ya', translation: 'Yes', pronunciation: 'ya', example: 'Ya, benar.' },
            { word: 'Tidak', translation: 'No', pronunciation: 'ti-dak', example: 'Tidak, terima kasih.' },
            { word: 'Tolong', translation: 'Please', pronunciation: 'to-long', example: 'Tolong bantu saya.' },
            { word: 'Selamat datang', translation: 'Welcome', pronunciation: 'se-la-mat da-tang', example: 'Selamat datang di rumahku.' },
            { word: 'Selamat tinggal', translation: 'Goodbye', pronunciation: 'se-la-mat ting-gal', example: 'Selamat tinggal, sampai jumpa.' },
            { word: 'Maaf', translation: 'Sorry', pronunciation: 'ma-af', example: 'Maaf saya terlambat.' },
            { word: 'Cinta', translation: 'Love', pronunciation: 'cin-ta', example: 'Aku cinta kamu.' }
        ],
        2: [
            { word: 'Indah', translation: 'Beautiful', pronunciation: 'in-dah', example: 'Hari ini sangat indah.' },
            { word: 'Teman', translation: 'Friend', pronunciation: 'te-man', example: 'Dia teman baikku.' },
            { word: 'Belajar', translation: 'Learn', pronunciation: 'be-la-jar', example: 'Saya belajar setiap hari.' },
            { word: 'Bahagia', translation: 'Happy', pronunciation: 'ba-ha-gi-a', example: 'Saya merasa bahagia.' },
            { word: 'Penting', translation: 'Important', pronunciation: 'pen-ting', example: 'Ini sangat penting.' },
            { word: 'Menakjubkan', translation: 'Wonderful', pronunciation: 'me-nak-jub-kan', example: 'Tempat ini menakjubkan.' },
            { word: 'Pengetahuan', translation: 'Knowledge', pronunciation: 'pe-na-hu-an', example: 'Pengetahuan adalah kekuatan.' },
            { word: 'Perjalanan', translation: 'Journey', pronunciation: 'per-ja-la-nan', example: 'Hidup adalah perjalanan.' },
            { word: 'Kesuksesan', translation: 'Success', pronunciation: 'ke-suk-se-san', example: 'Kesuksesan butuh usaha.' },
            { word: 'Mimpi', translation: 'Dream', pronunciation: 'mim-pi', example: 'Kejar mimpimu.' }
        ],
        3: [
            { word: 'Luar biasa', translation: 'Magnificent', pronunciation: 'lu-ar bi-a-sa', example: 'Pemandangan ini luar biasa.' },
            { word: 'Antusias', translation: 'Enthusiastic', pronunciation: 'an-tu-si-as', example: 'Dia sangat antusias.' },
            { word: 'Pencapaian', translation: 'Achievement', pronunciation: 'pen-ca-pai-an', example: 'Ini pencapaian besar.' },
            { word: 'Ketekunan', translation: 'Perseverance', pronunciation: 'ke-te-ku-nan', example: 'Ketekunan membawa hasil.' },
            { word: 'Istimewa', translation: 'Extraordinary', pronunciation: 'is-ti-me-wa', example: 'Hasilnya istimewa.' },
            { word: 'Tekad', translation: 'Determination', pronunciation: 'te-kad', example: 'Tekadnya kuat.' },
            { word: 'Filosofis', translation: 'Philosophical', pronunciation: 'fi-lo-so-fis', example: 'Pembahasan filosofis.' },
            { word: 'Mengesankan', translation: 'Remarkable', pronunciation: 'meng-es-kan', example: 'Pekerjaannya mengesankan.' },
            { word: 'Canggih', translation: 'Sophisticated', pronunciation: 'cang-gih', example: 'Teknologinya canggih.' },
            { word: 'Belum pernah terjadi', translation: 'Unprecedented', pronunciation: 'be-lum pe-nah ter-ja-di', example: 'Ini belum pernah terjadi.' }
        ]
    },

    // =====================================================
    // KOREA (한국어)
    // =====================================================
    korea: {
        1: [
            { word: '안녕 (Annyeong)', translation: 'Hello', pronunciation: 'an-nyong', example: '안녕! 잘 지내?' },
            { word: '감사합니다 (Gamsahamnida)', translation: 'Thank you', pronunciation: 'gam-sa-ham-ni-da', example: '정말 감사합니다!' },
            { word: '좋다 (Jota)', translation: 'Good', pronunciation: 'jo-ta', example: '이거 좋다!' },
            { word: '네 (Ne)', translation: 'Yes', pronunciation: 'ne', example: '네, 맞아요.' },
            { word: '아니요 (Aniyo)', translation: 'No', pronunciation: 'a-ni-yo', example: '아니요, 괜찮아요.' },
            { word: '제발 (Jebal)', translation: 'Please', pronunciation: 'je-bal', example: '제발 도와주세요.' },
            { word: '어서오세요 (Eoseo-oseyo)', translation: 'Welcome', pronunciation: 'eo-seo-o-se-yo', example: '우리 집에 어서오세요!' },
            { word: '안녕히 가세요 (Annyeonghi gaseyo)', translation: 'Goodbye', pronunciation: 'an-nyong-hi ga-se-yo', example: '안녕히 가세요!' },
            { word: '미안해 (Mianhae)', translation: 'Sorry', pronunciation: 'mi-an-hae', example: '미안해, 늦었어.' },
            { word: '사랑 (Sarang)', translation: 'Love', pronunciation: 'sa-rang', example: '너를 사랑해.' }
        ],
        2: [
            { word: '아름답다 (Areumdapda)', translation: 'Beautiful', pronunciation: 'a-reum-dap-da', example: '정말 아름답다!' },
            { word: '친구 (Chingu)', translation: 'Friend', pronunciation: 'chin-gu', example: '그녀는 내 친구야.' },
            { word: '배우다 (Baeuda)', translation: 'Learn', pronunciation: 'bae-u-da', example: '나는 한국어를 배우고 있어.' },
            { word: '행복하다 (Haengbokhada)', translation: 'Happy', pronunciation: 'haeng-bok-ha-da', example: '오늘 너무 행복해!' },
            { word: '중요하다 (Jungyohada)', translation: 'Important', pronunciation: 'jung-yo-ha-da', example: '이건 정말 중요해.' },
            { word: '멋지다 (Meotjida)', translation: 'Wonderful', pronunciation: 'meot-ji-da', example: '정말 멋지다!' },
            { word: '지식 (Jisik)', translation: 'Knowledge', pronunciation: 'ji-sik', example: '지식은 힘이다.' },
            { word: '여행 (Yeohaeng)', translation: 'Journey', pronunciation: 'yeo-haeng', example: '인생은 여행이다.' },
            { word: '성공 (Seonggong)', translation: 'Success', pronunciation: 'seong-gong', example: '성공은 노력에서 온다.' },
            { word: '꿈 (Kkum)', translation: 'Dream', pronunciation: 'kkum', example: '꿈을 따라가라!' }
        ],
        3: [
            { word: '웅장하다 (Ungjanghada)', translation: 'Magnificent', pronunciation: 'ung-jang-ha-da', example: '웅장한 풍경이다.' },
            { word: '열정적이다 (Yeoljungjeogida)', translation: 'Enthusiastic', pronunciation: 'yeol-jeong-jeo-gi-da', example: '그녀는 정말 열정적이야!' },
            { word: '업적 (Eopjeok)', translation: 'Achievement', pronunciation: 'eop-jeok', example: '큰 업적을 이루었다.' },
            { word: '인내 (Innae)', translation: 'Perseverance', pronunciation: 'in-nae', example: '성공엔 인내가 필요하다.' },
            { word: '비범하다 (Bibeomhada)', translation: 'Extraordinary', pronunciation: 'bi-beom-ha-da', example: '비범한 재능이다.' },
            { word: '결단력 (Gyeoldanryeok)', translation: 'Determination', pronunciation: 'gyeol-dan-ryeok', example: '강한 결단력이다.' },
            { word: '철학적 (Cheolhakjeok)', translation: 'Philosophical', pronunciation: 'cheol-hak-jeok', example: '철학적 토론을 했다.' },
            { word: '놀랍다 (Nollaapda)', translation: 'Remarkable', pronunciation: 'nol-lap-da', example: '정말 놀랍다!' },
            { word: '정교하다 (Jeonggyohada)', translation: 'Sophisticated', pronunciation: 'jeong-gyo-ha-da', example: '정교한 기술이다.' },
            { word: '전례 없다 (Jeollye eopda)', translation: 'Unprecedented', pronunciation: 'jeol-rye eop-da', example: '전례 없는 성공이다.' }
        ]
    },

    // =====================================================
    // CHINESE (Mandarin)
    // =====================================================
    china: {
        1: [
            { word: '你好 (Nǐ hǎo)', translation: 'Hello', pronunciation: 'ni hao', example: '你好，你好吗？' },
            { word: '谢谢 (Xièxiè)', translation: 'Thank you', pronunciation: 'shie-shie', example: '谢谢你的帮助。' },
            { word: '好 (Hǎo)', translation: 'Good', pronunciation: 'hao', example: '很好！' },
            { word: '是 (Shì)', translation: 'Yes', pronunciation: 'shi', example: '是的，我同意。' },
            { word: '不 (Bù)', translation: 'No', pronunciation: 'bu', example: '不，谢谢。' },
            { word: '请 (Qǐng)', translation: 'Please', pronunciation: 'ching', example: '请帮帮我。' },
            { word: '欢迎 (Huānyíng)', translation: 'Welcome', pronunciation: 'huan-ying', example: '欢迎来到我家。' },
            { word: '再见 (Zàijiàn)', translation: 'Goodbye', pronunciation: 'zai-jian', example: '再见，明天见！' },
            { word: '对不起 (Duìbuqǐ)', translation: 'Sorry', pronunciation: 'dwei-bu-chi', example: '对不起，我迟到了。' },
            { word: '爱 (Ài)', translation: 'Love', pronunciation: 'ai', example: '我爱你。' }
        ],
        2: [
            { word: '美丽 (Měilì)', translation: 'Beautiful', pronunciation: 'mei-li', example: '多么美丽的一天！' },
            { word: '朋友 (Péngyǒu)', translation: 'Friend', pronunciation: 'peng-yo', example: '他是我最好的朋友。' },
            { word: '学习 (Xuéxí)', translation: 'Learn', pronunciation: 'shweh-shee', example: '我每天学习中文。' },
            { word: '快乐 (Kuàilè)', translation: 'Happy', pronunciation: 'kwai-le', example: '我今天很快乐！' },
            { word: '重要 (Zhòngyào)', translation: 'Important', pronunciation: 'jong-yao', example: '这非常重要。' },
            { word: '精彩 (Jīngcǎi)', translation: 'Wonderful', pronunciation: 'jing-tsai', example: '精彩的表演！' },
            { word: '知识 (Zhīshi)', translation: 'Knowledge', pronunciation: 'jir-shi', example: '知识就是力量。' },
            { word: '旅程 (Lǚchéng)', translation: 'Journey', pronunciation: 'lyu-cheng', example: '生活是一段旅程。' },
            { word: '成功 (Chénggōng)', translation: 'Success', pronunciation: 'cheng-gong', example: '成功需要努力。' },
            { word: '梦想 (Mèngxiǎng)', translation: 'Dream', pronunciation: 'mung-syang', example: '追随你的梦想！' }
        ],
        3: [
            { word: '壮丽 (Zhuànglì)', translation: 'Magnificent', pronunciation: 'jwang-li', example: '壮丽的景色。' },
            { word: '热情 (Rèqíng)', translation: 'Enthusiastic', pronunciation: 'ruh-ching', example: '她非常热情。' },
            { word: '成就 (Chéngjiù)', translation: 'Achievement', pronunciation: 'cheng-jyo', example: '伟大的成就。' },
            { word: '毅力 (Yìlì)', translation: 'Perseverance', pronunciation: 'yi-li', example: '成功需要毅力。' },
            { word: '非凡 (Fēifán)', translation: 'Extraordinary', pronunciation: 'fei-fan', example: '非凡的表现。' },
            { word: '决心 (Juéxīn)', translation: 'Determination', pronunciation: 'jyweh-sin', example: '他的决心令人敬佩。' },
            { word: '哲学的 (Zhéxué de)', translation: 'Philosophical', pronunciation: 'jer-shweh de', example: '一次哲学的讨论。' },
            { word: '显著 (Xiǎnzhù)', translation: 'Remarkable', pronunciation: 'syen-joo', example: '显著的进步。' },
            { word: '复杂 (Fùzá)', translation: 'Sophisticated', pronunciation: 'foo-dza', example: '复杂的技术。' },
            { word: '前所未有 (Qiánsuǒ wèiyǒu)', translation: 'Unprecedented', pronunciation: 'chyensuowei-yo', example: '前所未有的成功。' }
        ]
    },

    // =====================================================
    // MALAYSIA
    // =====================================================
    malaysia: {
        1: [
            { word: 'Helo', translation: 'Hello', pronunciation: 'he-lo', example: 'Helo, apa khabar?' },
            { word: 'Terima kasih', translation: 'Thank you', pronunciation: 'te-ri-ma ka-sih', example: 'Terima kasih banyak.' },
            { word: 'Bagus', translation: 'Good', pronunciation: 'ba-gus', example: 'Itu sangat bagus.' },
            { word: 'Ya', translation: 'Yes', pronunciation: 'ya', example: 'Ya, betul.' },
            { word: 'Tidak', translation: 'No', pronunciation: 'ti-dak', example: 'Tidak, terima kasih.' },
            { word: 'Tolong', translation: 'Please', pronunciation: 'to-long', example: 'Tolong bantu saya.' },
            { word: 'Selamat datang', translation: 'Welcome', pronunciation: 'se-la-mat da-tang', example: 'Selamat datang ke rumah saya.' },
            { word: 'Selamat tinggal', translation: 'Goodbye', pronunciation: 'se-la-mat ting-gal', example: 'Selamat tinggal!' },
            { word: 'Maaf', translation: 'Sorry', pronunciation: 'ma-af', example: 'Maaf kerana lewat.' },
            { word: 'Cinta', translation: 'Love', pronunciation: 'cin-ta', example: 'Saya cinta awak.' }
        ],
        2: [
            { word: 'Indah', translation: 'Beautiful', pronunciation: 'in-dah', example: 'Pemandangan ini sangat indah.' },
            { word: 'Kawan', translation: 'Friend', pronunciation: 'ka-wan', example: 'Dia kawan baik saya.' },
            { word: 'Belajar', translation: 'Learn', pronunciation: 'be-la-jar', example: 'Saya belajar setiap hari.' },
            { word: 'Bahagia', translation: 'Happy', pronunciation: 'ba-ha-gi-a', example: 'Saya berasa bahagia.' },
            { word: 'Penting', translation: 'Important', pronunciation: 'pen-ting', example: 'Ini sangat penting.' },
            { word: 'Hebat', translation: 'Wonderful', pronunciation: 'he-bat', example: 'Itu memang hebat!' },
            { word: 'Ilmu', translation: 'Knowledge', pronunciation: 'il-mu', example: 'Ilmu adalah kuasa.' },
            { word: 'Perjalanan', translation: 'Journey', pronunciation: 'per-ja-la-nan', example: 'Hidup adalah perjalanan.' },
            { word: 'Kejayaan', translation: 'Success', pronunciation: 'ke-ja-ya-an', example: 'Kejayaan perlukan usaha.' },
            { word: 'Impian', translation: 'Dream', pronunciation: 'im-pi-an', example: 'Kejar impian anda.' }
        ],
        3: [
            { word: 'Mengagumkan', translation: 'Magnificent', pronunciation: 'meng-a-gum-kan', example: 'Pemandangannya mengagumkan.' },
            { word: 'Bersemangat', translation: 'Enthusiastic', pronunciation: 'ber-se-ma-ngat', example: 'Dia sangat bersemangat.' },
            { word: 'Pencapaian', translation: 'Achievement', pronunciation: 'pen-ca-pa-ian', example: 'Ini satu pencapaian besar.' },
            { word: 'Ketabahan', translation: 'Perseverance', pronunciation: 'ke-ta-ba-han', example: 'Ketabahan membawa kejayaan.' },
            { word: 'Luar biasa', translation: 'Extraordinary', pronunciation: 'lu-ar bi-a-sa', example: 'Ini luar biasa!' },
            { word: 'Tekad', translation: 'Determination', pronunciation: 'te-kad', example: 'Dia ada tekad yang kuat.' },
            { word: 'Falsafah', translation: 'Philosophical', pronunciation: 'fal-sa-fah', example: 'Perbincangan falsafah.' },
            { word: 'Mengagumkan', translation: 'Remarkable', pronunciation: 'meng-a-gum-kan', example: 'Pencapaian itu mengagumkan.' },
            { word: 'Canggih', translation: 'Sophisticated', pronunciation: 'cang-gih', example: 'Teknologinya sangat canggih.' },
            { word: 'Belum pernah berlaku', translation: 'Unprecedented', pronunciation: 'be-lum per-nah ber-la-ku', example: 'Ini belum pernah berlaku.' }
        ]
    },

    // =====================================================
    // SINGAPORE (Singapore English)
    // =====================================================
    singapore: {
        1: [
            { word: 'Hello lah', translation: 'Hello', pronunciation: 'he-lo la', example: 'Hello lah, how are you?' },
            { word: 'Thank you', translation: 'Terima kasih', pronunciation: 'teng-kiu', example: 'Thank you ah!' },
            { word: 'Good', translation: 'Bagus', pronunciation: 'gud', example: 'Very good lah!' },
            { word: 'Yes', translation: 'Ya', pronunciation: 'yes', example: 'Yes can!' },
            { word: 'No', translation: 'Tidak', pronunciation: 'noh', example: 'No cannot.' },
            { word: 'Please', translation: 'Tolong', pronunciation: 'plees', example: 'Please help me can?' },
            { word: 'Welcome', translation: 'Selamat datang', pronunciation: 'wel-kum', example: 'Welcome to Singapore!' },
            { word: 'Bye', translation: 'Selamat tinggal', pronunciation: 'bai', example: 'Bye, see you lah!' },
            { word: 'Sorry ah', translation: 'Maaf', pronunciation: 'so-ri ah', example: 'Sorry ah, my mistake.' },
            { word: 'Love', translation: 'Cinta', pronunciation: 'lav', example: 'I love Singapore food lah!' }
        ],
        2: [
            { word: 'Beautiful', translation: 'Indah', pronunciation: 'byu-ti-ful', example: 'Singapore night view very beautiful.' },
            { word: 'Friend', translation: 'Teman', pronunciation: 'fren', example: 'He is my good friend lah.' },
            { word: 'Learn', translation: 'Belajar', pronunciation: 'lern', example: 'I learn new things every day.' },
            { word: 'Happy', translation: 'Bahagia', pronunciation: 'ha-pi', example: 'I feel very happy today.' },
            { word: 'Important', translation: 'Penting', pronunciation: 'im-por-tent', example: 'This is very important lah.' },
            { word: 'Wonderful', translation: 'Menakjubkan', pronunciation: 'won-der-ful', example: 'What a wonderful surprise!' },
            { word: 'Knowledge', translation: 'Pengetahuan', pronunciation: 'nol-lej', example: 'Knowledge is power, lah!' },
            { word: 'Journey', translation: 'Perjalanan', pronunciation: 'jer-ni', example: 'Life is a journey.' },
            { word: 'Success', translation: 'Kesuksesan', pronunciation: 'sak-ses', example: 'Success needs effort.' },
            { word: 'Dream', translation: 'Mimpi', pronunciation: 'drim', example: 'Chase your dreams lah!' }
        ],
        3: [
            { word: 'Magnificent', translation: 'Luar biasa', pronunciation: 'mag-ni-fi-cent', example: 'The view is magnificent.' },
            { word: 'Enthusiastic', translation: 'Antusias', pronunciation: 'en-thu-si-as-tik', example: 'She is very enthusiastic.' },
            { word: 'Achievement', translation: 'Pencapaian', pronunciation: 'a-chiv-ment', example: 'A great achievement.' },
            { word: 'Perseverance', translation: 'Ketekunan', pronunciation: 'per-se-ver-ens', example: 'Perseverance brings success.' },
            { word: 'Extraordinary', translation: 'Luar biasa', pronunciation: 'ex-tra-or-di-na-ri', example: 'Extraordinary performance!' },
            { word: 'Determination', translation: 'Tekad', pronunciation: 'di-ter-mi-ne-shen', example: 'Strong determination is needed.' },
            { word: 'Philosophical', translation: 'Filosofis', pronunciation: 'fi-lo-so-fi-cal', example: 'A philosophical talk.' },
            { word: 'Remarkable', translation: 'Mengesankan', pronunciation: 'ri-mar-ka-bel', example: 'Remarkable progress.' },
            { word: 'Sophisticated', translation: 'Canggih', pronunciation: 'so-fi-sti-ke-tid', example: 'Sophisticated system.' },
            { word: 'Unprecedented', translation: 'Belum pernah terjadi', pronunciation: 'an-pre-si-den-ted', example: 'Unprecedented growth.' }
        ]
    },

    // =====================================================
    // SPANISH (Español)
    // =====================================================
    spanish: {
        1: [
            { word: 'Hola', translation: 'Hello', pronunciation: 'o-la', example: 'Hola, ¿cómo estás?' },
            { word: 'Gracias', translation: 'Thank you', pronunciation: 'gra-sias', example: '¡Muchas gracias!' },
            { word: 'Bueno', translation: 'Good', pronunciation: 'bwe-no', example: 'Esto es bueno.' },
            { word: 'Sí', translation: 'Yes', pronunciation: 'si', example: 'Sí, estoy de acuerdo.' },
            { word: 'No', translation: 'Tidak', pronunciation: 'no', example: 'No, gracias.' },
            { word: 'Por favor', translation: 'Please', pronunciation: 'por fa-bor', example: 'Por favor, ayúdame.' },
            { word: 'Bienvenido', translation: 'Welcome', pronunciation: 'byen-ve-ni-do', example: 'Bienvenido a mi casa.' },
            { word: 'Adiós', translation: 'Goodbye', pronunciation: 'a-dios', example: 'Adiós, nos vemos.' },
            { word: 'Lo siento', translation: 'Sorry', pronunciation: 'lo syen-to', example: 'Lo siento por llegar tarde.' },
            { word: 'Amor', translation: 'Love', pronunciation: 'a-mor', example: '¡Te amo!' }
        ],
        2: [
            { word: 'Hermoso', translation: 'Beautiful', pronunciation: 'er-mo-so', example: '¡Qué día tan hermoso!' },
            { word: 'Amigo', translation: 'Friend', pronunciation: 'a-mi-go', example: 'Él es mi mejor amigo.' },
            { word: 'Aprender', translation: 'Learn', pronunciation: 'a-pren-der', example: 'Aprendo español cada día.' },
            { word: 'Feliz', translation: 'Happy', pronunciation: 'fe-lis', example: 'Estoy muy feliz hoy.' },
            { word: 'Importante', translation: 'Important', pronunciation: 'im-por-tan-te', example: 'Esto es muy importante.' },
            { word: 'Maravilloso', translation: 'Wonderful', pronunciation: 'ma-ra-vi-yo-so', example: '¡Es maravilloso!' },
            { word: 'Conocimiento', translation: 'Knowledge', pronunciation: 'ko-no-si-myen-to', example: 'El conocimiento es poder.' },
            { word: 'Viaje', translation: 'Journey', pronunciation: 'bya-he', example: 'La vida es un viaje.' },
            { word: 'Éxito', translation: 'Success', pronunciation: 'ek-si-to', example: 'El éxito requiere trabajo duro.' },
            { word: 'Sueño', translation: 'Dream', pronunciation: 'swe-nyo', example: 'Sigue tus sueños.' }
        ],
        3: [
            { word: 'Magnífico', translation: 'Magnificent', pronunciation: 'mag-ni-fi-co', example: '¡Una vista magnífica!' },
            { word: 'Entusiasta', translation: 'Enthusiastic', pronunciation: 'en-tu-sias-ta', example: 'Ella estaba muy entusiasta.' },
            { word: 'Logro', translation: 'Achievement', pronunciation: 'lo-gro', example: 'Un gran logro.' },
            { word: 'Perseverancia', translation: 'Perseverance', pronunciation: 'per-se-ve-ran-sia', example: 'El éxito necesita perseverancia.' },
            { word: 'Extraordinario', translation: 'Extraordinary', pronunciation: 'ex-tra-or-di-na-rio', example: 'Un rendimiento extraordinario.' },
            { word: 'Determinación', translation: 'Determination', pronunciation: 'de-ter-mi-na-sion', example: 'Su determinación es inspiradora.' },
            { word: 'Filosófico', translation: 'Philosophical', pronunciation: 'fi-lo-so-fi-co', example: 'Una conversación filosófica.' },
            { word: 'Notable', translation: 'Remarkable', pronunciation: 'no-ta-ble', example: 'Un progreso notable.' },
            { word: 'Sofisticado', translation: 'Sophisticated', pronunciation: 'so-fis-ti-ka-do', example: 'Tecnología sofisticada.' },
            { word: 'Sin precedentes', translation: 'Unprecedented', pronunciation: 'sin pre-ce-den-tes', example: 'Un éxito sin precedentes.' }
        ]
    },

    // =====================================================
    // FRENCH (Français)
    // =====================================================
    french: {
        1: [
            { word: 'Bonjour', translation: 'Hello', pronunciation: 'bon-jour', example: 'Bonjour, comment ça va ?' },
            { word: 'Merci', translation: 'Thank you', pronunciation: 'mer-si', example: 'Merci beaucoup !' },
            { word: 'Bon', translation: 'Good', pronunciation: 'bon', example: 'C’est très bon.' },
            { word: 'Oui', translation: 'Yes', pronunciation: 'wi', example: 'Oui, je suis d’accord.' },
            { word: 'Non', translation: 'No', pronunciation: 'non', example: 'Non, merci.' },
            { word: 'S’il vous plaît', translation: 'Please', pronunciation: 'sil vu ple', example: 'S’il vous plaît, aidez-moi.' },
            { word: 'Bienvenue', translation: 'Welcome', pronunciation: 'byan-ve-nu', example: 'Bienvenue chez moi.' },
            { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'o rev-war', example: 'Au revoir, à bientôt.' },
            { word: 'Pardon', translation: 'Sorry', pronunciation: 'par-don', example: 'Pardon pour le retard.' },
            { word: 'Amour', translation: 'Love', pronunciation: 'a-mur', example: 'Je t’aime.' }
        ],
        2: [
            { word: 'Magnifique', translation: 'Beautiful', pronunciation: 'mag-ni-fik', example: 'Quelle journée magnifique !' },
            { word: 'Ami', translation: 'Friend', pronunciation: 'a-mi', example: 'Il est mon meilleur ami.' },
            { word: 'Apprendre', translation: 'Learn', pronunciation: 'a-pran-dre', example: 'J’apprends le français.' },
            { word: 'Heureux', translation: 'Happy', pronunciation: 'o-reu', example: 'Je suis très heureux.' },
            { word: 'Important', translation: 'Important', pronunciation: 'am-por-tan', example: 'C’est très important.' },
            { word: 'Merveilleux', translation: 'Wonderful', pronunciation: 'mer-vey-eu', example: 'C’est merveilleux !' },
            { word: 'Connaissance', translation: 'Knowledge', pronunciation: 'ko-nes-ans', example: 'La connaissance est le pouvoir.' },
            { word: 'Voyage', translation: 'Journey', pronunciation: 'vwa-yaj', example: 'La vie est un voyage.' },
            { word: 'Succès', translation: 'Success', pronunciation: 'suk-se', example: 'Le succès demande du travail.' },
            { word: 'Rêve', translation: 'Dream', pronunciation: 'rev', example: 'Suis tes rêves.' }
        ],
        3: [
            { word: 'Splendide', translation: 'Magnificent', pronunciation: 'splon-did', example: 'Une vue splendide !' },
            { word: 'Enthousiaste', translation: 'Enthusiastic', pronunciation: 'an-tu-zias-t', example: 'Elle est très enthousiaste.' },
            { word: 'Accomplissement', translation: 'Achievement', pronunciation: 'a-kom-plis-man', example: 'Un grand accomplissement.' },
            { word: 'Persévérance', translation: 'Perseverance', pronunciation: 'per-se-ve-rans', example: 'La persévérance mène au succès.' },
            { word: 'Extraordinaire', translation: 'Extraordinary', pronunciation: 'ex-tra-or-di-ner', example: 'Une performance extraordinaire.' },
            { word: 'Détermination', translation: 'Determination', pronunciation: 'de-ter-mi-na-sion', example: 'Sa détermination est inspirante.' },
            { word: 'Philosophique', translation: 'Philosophical', pronunciation: 'fi-lo-zo-fik', example: 'Une discussion philosophique.' },
            { word: 'Remarquable', translation: 'Remarkable', pronunciation: 're-mar-ka-ble', example: 'Un progrès remarquable.' },
            { word: 'Sophistiqué', translation: 'Sophisticated', pronunciation: 'so-fis-ti-ke', example: 'Un système sophistiqué.' },
            { word: 'Sans précédent', translation: 'Unprecedented', pronunciation: 'son pre-ce-don', example: 'Un succès sans précédent.' }
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
    const progress = ((state.currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('question-number').textContent = 
        `Pertanyaan ${state.currentQuestion + 1} / ${questions.length}`;
    document.getElementById('quiz-score').textContent = state.quizScore;
    document.getElementById('question-text').textContent = question.question;
    
    // Update progress bar
    const quizHeader = document.querySelector('.quiz-header');
    quizHeader.style.setProperty('--progress-width', `${progress}%`);
    
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
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.correct) {
            btn.classList.add('correct');
            if (isCorrect) {
                // Efek partisipal untuk jawaban benar
                btn.innerHTML += ' ✨';
            }
        } else if (i === index && !isCorrect) {
            btn.classList.add('wrong');
            btn.innerHTML += ' ❌';
        }
    });
    
    if (isCorrect) {
        state.quizScore++;
        updateScore(state.quizLevel * 20);
        // Efek suara atau animasi bisa ditambahkan di sini
        setTimeout(() => {
            document.getElementById('quiz-score').textContent = state.quizScore;
        }, 200);
    }
    
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
    const percentage = (state.quizScore / questions.length) * 100;
    
    document.getElementById('quiz-question').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    
    document.getElementById('final-score').textContent = 
        `${state.quizScore} / ${questions.length}`;
    
    let message = '';
    let shouldLevelUp = false;
    
    if (percentage === 100) {
        message = '🎉 SEMPURNA! Anda Master Level Ini! 🏆';
        shouldLevelUp = true;
    } else if (percentage >= 80) {
        message = '⭐ LUAR BIASA! Anda Menguasai Materi! 🚀';
        shouldLevelUp = true;
    } else if (percentage >= 60) {
        message = '👍 BAGUS! Sudah Cukup Baik! 💪';
        shouldLevelUp = true;
    } else if (percentage >= 40) {
        message = '📚 TERUS BELAJAR! Hampir Sampai! 🔥';
    } else {
        message = '💪 JANGAN MENYERAH! Coba Lagi! 🌟';
    }
    
    document.getElementById('result-message').textContent = message;
    
    // Auto level up jika score >= 60% dan masih ada level berikutnya
    if (shouldLevelUp && state.quizLevel < 3) {
        setTimeout(() => {
            state.quizLevel++;
            const confetti = `
                🎊 SELAMAT! NAIK KE LEVEL ${state.quizLevel}! 🎊
                
                ${state.quizLevel === 2 ? '🌟 Kini Anda Intermediate!' : '🏆 Kini Anda Advanced!'}
                
                Siap tantangan yang lebih seru?
            `;
            alert(confetti);
        }, 1000);
    }
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
    
    const requiredScore = 7; // Perlu 7 dari 10 untuk naik level
    let message = `🎮 GAME SELESAI! 🎮\n\nSkor Anda: ${state.gameScore}\n\n`;
    
    if (state.gameScore >= requiredScore && state.gameLevel < 3) {
        message += `🎉 HEBAT! Anda naik ke Level ${state.gameLevel + 1}! 🚀\n\n`;
        message += state.gameLevel === 1 ? '🌟 Sekarang Intermediate!' : '🏆 Sekarang Advanced!';
        state.gameLevel++;
    } else if (state.gameScore >= requiredScore) {
        message += '🏆 MANTAP! Anda sudah di level tertinggi! 👑';
    } else if (state.gameScore >= 5) {
        message += '💪 BAGUS! Terus berlatih untuk naik level! 🔥';
    } else {
        message += '🌟 JANGAN MENYERAH! Practice makes perfect! 💫';
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
