// Github nima?
    //  dasturchilar uchun umumiy xosting 
// Github ustunliklari
    // Loyixa bilan jamoaviy ishlash
    // qanday qachon va  kim tomonidan va nima uchun ozgartirilganini ko'rsa bo'ladi 
    // va Portfolio ham qilishimiz mumkin 
// git config
    // git bilan configuratsiya qilish
        // git config -list - barcha sozlamalarni korsatadi
        // git config user.name - git foydalanuvchi username si
        // git config user.email - git foydalanuvchi emaili
// Git sozlamalarini ornatish
        // git config --global user.name "your name" - username kiritish 
        // git config --global user.email "your name" - email kiritish
                // --global - barcha narsada qollash, agar global qoymasek faqat osha loyxada ishlaydo
// Git Repository
    // Repository har bir loyixa bu  repository boladi, biz uni "papka" deb tushunishimiz mumkin
        // git init - yangi loyixa(har bir loyixa uchun 1 marta)
        // git status - ozgarishga uchragan xolatni bilish
            // yangi repository ochish
                //1) yangi loyixa uchun 1 papka ochamiz
                //2) git init
                //3) hohlasangiz git remote add origin "github repository manzil" - kiritish orqali repository manzilini ozgartirishingiz mumkin
//  Git add
    // git add - xotiraga olish uchun navbatga qoshish (loyihadagi yangi fayllar, ozgarishlar  va ochirishlarni xotiraga olish uchun navbatga qoshadi)
    // git add . (git add A/-all) - barcha ozgarishlar  
    // git add filename.txt - biror faylni olish

// git commit 
    // git commit - xotiraga olingan o'zgarishlarni saqlab oladi
    // -m - habar qoldirish ucun flag
    // git log - commitlar royxatini korish
        // Example: git commit -m "navbar added"
            // -m "anytext"s - bu description, siz bu yerda ushbu yangilanish haqida qisqa va chunarli soz yozishingi kerak (5-6 ta sozdan tashkil topgan gap
            // -m ga har xl narsalar yozmimiz, aniq malmot yozish kerak, misol uchun siz ozgarishlar tarixini kordingiz, korayotgan paytda nimani qoshganingizni yozgan bolsangiz bu sizga yordam beradi kodizni qayta ochishga
// fayl ozgarishlarini bekor qilish
    // git checkout -- <file> - faylda bolgan ozgarishlarn bekor qiladi
    // git checkout -- . - barcha faylda bolgan ozgarishlarni bekor qiladi

// git add - Bekor qilish
    // git reset -  staged - fayllarni unstaged qiladi lekin fayl qiymatlari ozgarmidi
    // git reset myFIle.txt - Faqat berilgan faylni unstage qiladi
// 
