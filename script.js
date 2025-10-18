const validNames = [
    "Đinh Tuyết Nhung",
    "Đỗ Mai Phương",
    "Trần Thị Minh Hiền",
    "Bùi Ngọc Bảo Linh"
];

document.addEventListener('DOMContentLoaded', () => {
    // Add floating hearts randomly
    setInterval(createHeart, 1500);
    
    // Initialize the card as hidden
    document.getElementById('wishCard').style.display = 'none';
    
    // Initialize input field
    const input = document.getElementById('nameInput');
    input.addEventListener('input', checkName);
});

function checkName() {
    const input = document.getElementById('nameInput');
    const card = document.getElementById('wishCard');
    const nameSpan = document.getElementById('selectedName');
    const errorMessage = document.getElementById('errorMessage');
    const wishes = document.querySelector('.wishes');
    
    const enteredName = input.value.trim();
    
    // Check if the entered name exactly matches any valid name
    const matchedName = validNames.find(name => 
        name === enteredName
    );
    
    if (matchedName) {
        // Hide input section with fade out animation
        const inputSection = document.querySelector('.input-section');
        inputSection.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            inputSection.style.display = 'none';
        }, 500);
        
        // Show the card with animation
        card.style.display = 'block';
        card.style.animation = 'fadeIn 1s ease-in';
        
        // Update the name with the correctly cased version
        nameSpan.textContent = matchedName;
        
        // Clear error message
        errorMessage.textContent = '';
        
        // Clear any existing interval
        if (window.wishInterval) {
            clearInterval(window.wishInterval);
        }
        
        // Update wishes based on name
        if (matchedName === "Đinh Tuyết Nhung") {
            const specialWishes = [
                '"Dù cô ấy nhỏ bé, nhưng cô ấy mạnh mẽ phi thường." ✨',
                '"Mong em sống như một bài thơ – ngọt ngào trong từng câu chữ, kiêu hãnh trong từng dấu lặng." 🌸',
                '"Em không cần hoàn hảo, chỉ cần đủ mạnh mẽ để giữ lấy niềm tin, đủ dịu dàng để yêu thương chính mình." 💝',
                '"Phụ nữ là phép màu giữa đời thường – mong em mãi là điều kỳ diệu trong mắt những người thương em." ❤️',
                '"Như một trang thơ mùa xuân, em là khởi đầu của những điều đẹp nhất." 🌺'
            ];
            const randomWish = specialWishes[Math.floor(Math.random() * specialWishes.length)];
            wishes.innerHTML = `<span>${randomWish}</span>`;
            setInterval(createRainFromWish, 2000);
        } else if (matchedName === "Đỗ Mai Phương") {
            const specialWishes = [
                '"Không có nét quyến rũ nào sánh bằng sự dịu dàng của trái tim." 💖',
                '"A woman should be two things: who and what she wants." ✨',
                '"Chúc em như một đoá hồng trong trang sách cổ – dẫu năm tháng có úa phai, hương vẫn còn mãi." 🌹',
                '"Chúc bạn luôn là phiên bản tuyệt vời nhất của chính mình – không cần hoàn hảo, chỉ cần không ngừng tiến về phía trước." 🌟',
                '"Hãy sống như đóa hoa dại – mạnh mẽ giữa bão giông, dịu dàng giữa đời thường." 🌸'
            ];
            const randomWish = specialWishes[Math.floor(Math.random() * specialWishes.length)];
            wishes.innerHTML = `<span>${randomWish}</span>`;
        } else if (matchedName === "Trần Thị Minh Hiền") {
            const specialWishes = [
                '"Bạn không cần là nàng thơ của ai cả, chỉ cần là phiên bản hạnh phúc nhất của chính mình – Mình tin, đó mới là điều đẹp nhất." 🦋',
                '"Chúc bạn luôn thành công, luôn xinh đẹp – và luôn nhớ rằng phụ nữ không cần chạy theo chuẩn mực, họ chính là chuẩn mực." ✨',
                '"Gửi đến những người phụ nữ tuyệt vời: chúc các bạn luôn được yêu thương, được tôn trọng, và được là chính mình – vì không ai có thể thay thế ánh sáng mà các bạn mang đến cho thế giới này." 💫',
                '"Không cần ai tặng hoa, vì chính em là bông hoa đẹp nhất." 🌺',
                '"Không phải hoa nào cũng cần nắng – có bông nở rực giữa giông gió." 🌸'
            ];
            const randomWish = specialWishes[Math.floor(Math.random() * specialWishes.length)];
            wishes.innerHTML = `<span>${randomWish}</span>`;
        } else if (matchedName === "Bùi Ngọc Bảo Linh") {
            const specialWishes = [
                '"Một chút dịu dàng cho ngày thêm ấm, một chút yêu thương cho lòng thêm vui." 🌸',
                '"Cứ mỉm cười nhé, vì đó là cách em làm dịu cả thế giới này." ✨',
                '"Ngọt ngào không phải là điều em cố tạo ra – mà là cách em tồn tại." 🌺',
                '"Nếu cuộc đời là bản nhạc, em chính là giai điệu khiến người ta muốn nghe lại mãi." 🎵',
                '"Chúc bạn 20/10 luôn xinh đẹp, rạng rỡ và hạnh phúc — vì bạn xứng đáng với tất cả những điều tuyệt vời nhất." 💖'
            ];
            const randomWish = specialWishes[Math.floor(Math.random() * specialWishes.length)];
            wishes.innerHTML = `<span>${randomWish}</span>`;
        }
        
        const generalWishes = [
            {
                message: 'Chúc cô bạn đáng yêu có một ngày 20/10 thật ngọt ngào, tràn ngập hoa, quà và nụ cười tươi như nắng! Chúc bạn nhỏ luôn hạnh phúc nhé!',
                emoji: '☀️🌷'
            },
            {
                message: '20/10 vui vẻ nha cô gái! Chúc bạn luôn tự tin, xinh đẹp và tỏa sáng như chính năng lượng tích cực bạn mang đến. Chúc bạn nhỏ luôn hạnh phúc nhé!',
                emoji: '💫✨'
            },
            {
                message: 'Ngày 20/10 chúc bạn xinh hơn hoa, vui hơn lễ hội và được "bao" thật nhiều quà dễ thương. Chúc bạn nhỏ luôn hạnh phúc nhé!',
                emoji: '🎁🌹'
            },
            {
                message: 'Chúc bạn có một 20/10 thật chill, thật vui, và thật nhiều điều bất ngờ đáng yêu. Chúc bạn nhỏ luôn hạnh phúc nhé!',
                emoji: '🎀💝'
            },
            {
                message: 'Không chỉ hôm nay mà mỗi ngày đều là "Ngày Phụ nữ" – vì bạn xứng đáng được yêu thương như thế. Chúc bạn nhỏ luôn hạnh phúc nhé!',
                emoji: '💞💕'
            },
            {
                message: 'Gửi đến bạn lời chúc ngọt ngào nhất: Luôn rạng rỡ, luôn yêu đời và luôn được là chính mình. Chúc bạn nhỏ luôn hạnh phúc nhé!',
                emoji: '🌸💖'
            }
        ];

        // Get personalized wishes based on name
        function getPersonalizedWishes(name) {
            const happyWish = "Chúc bạn nhỏ luôn hạnh phúc nhé!";
            if (name === "Đinh Tuyết Nhung") {
                return [
                    { message: "Dù cô ấy nhỏ bé, nhưng cô ấy mạnh mẽ phi thường.", emoji: "✨", wish: happyWish },
                    { message: "Mong em sống như một bài thơ – ngọt ngào trong từng câu chữ, kiêu hãnh trong từng dấu lặng.", emoji: "🌸", wish: happyWish },
                    { message: "Em không cần hoàn hảo, chỉ cần đủ mạnh mẽ để giữ lấy niềm tin, đủ dịu dàng để yêu thương chính mình.", emoji: "💝", wish: happyWish },
                    { message: "Phụ nữ là phép màu giữa đời thường – mong em mãi là điều kỳ diệu trong mắt những người thương em.", emoji: "❤️", wish: happyWish },
                    { message: "Như một trang thơ mùa xuân, em là khởi đầu của những điều đẹp nhất.", emoji: "🌺", wish: happyWish }
                ];
            } else if (name === "Đỗ Mai Phương") {
                return [
                    { message: "Không có nét quyến rũ nào sánh bằng sự dịu dàng của trái tim.", emoji: "💖", wish: happyWish },
                    { message: "A woman should be two things: who and what she wants.", emoji: "✨", wish: happyWish },
                    { message: "Chúc em như một đoá hồng trong trang sách cổ – dẫu năm tháng có úa phai, hương vẫn còn mãi.", emoji: "🌹", wish: happyWish },
                    { message: "Chúc bạn luôn là phiên bản tuyệt vời nhất của chính mình – không cần hoàn hảo, chỉ cần không ngừng tiến về phía trước.", emoji: "🌟", wish: happyWish },
                    { message: "Hãy sống như đóa hoa dại – mạnh mẽ giữa bão giông, dịu dàng giữa đời thường.", emoji: "🌸", wish: happyWish }
                ];
            } else if (name === "Trần Thị Minh Hiền") {
                return [
                    { message: "Bạn không cần là nàng thơ của ai cả, chỉ cần là phiên bản hạnh phúc nhất của chính mình – Mình tin, đó mới là điều đẹp nhất.", emoji: "🦋", wish: happyWish },
                    { message: "Chúc bạn luôn thành công, luôn xinh đẹp – và luôn nhớ rằng phụ nữ không cần chạy theo chuẩn mực, họ chính là chuẩn mực.", emoji: "✨", wish: happyWish },
                    { message: "Gửi đến những người phụ nữ tuyệt vời: chúc các bạn luôn được yêu thương, được tôn trọng, và được là chính mình.", emoji: "💫", wish: happyWish },
                    { message: "Không cần ai tặng hoa, vì chính em là bông hoa đẹp nhất.", emoji: "🌺", wish: happyWish },
                    { message: "Không phải hoa nào cũng cần nắng – có bông nở rực giữa giông gió.", emoji: "🌸", wish: happyWish }
                ];
            } else if (name === "Bùi Ngọc Bảo Linh") {
                return [
                    { message: "Một chút dịu dàng cho ngày thêm ấm, một chút yêu thương cho lòng thêm vui.", emoji: "🌸", wish: happyWish },
                    { message: "Cứ mỉm cười nhé, vì đó là cách em làm dịu cả thế giới này.", emoji: "✨", wish: happyWish },
                    { message: "Ngọt ngào không phải là điều em cố tạo ra – mà là cách em tồn tại.", emoji: "🌺", wish: happyWish },
                    { message: "Nếu cuộc đời là bản nhạc, em chính là giai điệu khiến người ta muốn nghe lại mãi.", emoji: "🎵", wish: happyWish },
                    { message: "Chúc bạn 20/10 luôn xinh đẹp, rạng rỡ và hạnh phúc — vì bạn xứng đáng với tất cả những điều tuyệt vời nhất.", emoji: "💖", wish: happyWish }
                ];
            }
            return null;
        }

        // Start continuous falling wishes animation
        function createFallingWish() {
            const wishElement = document.createElement('div');
            wishElement.className = 'falling-wish';
            
            // Get personalized wishes if a name is selected
            const selectedName = document.getElementById('selectedName').textContent;
            const personalWishes = getPersonalizedWishes(selectedName);
            
            // Choose between personal and general wishes
            const wishList = personalWishes || generalWishes;
            const randomWish = wishList[Math.floor(Math.random() * wishList.length)];
            
            wishElement.innerHTML = `
                <div class="emoji">${randomWish.emoji}</div>
                <div class="message">${randomWish.message}${randomWish.wish ? '<br>' + randomWish.wish : ''}</div>
            `;
            
            // Random horizontal position and speed
            const randomX = Math.random() * (window.innerWidth - 300); // Keep away from edges
            const randomDuration = Math.random() * 8 + 17; // Random duration between 17-25 seconds
            
            wishElement.style.left = randomX + 'px';
            wishElement.style.transform = `rotate(${Math.random() * 4 - 2}deg)`; // Slight random rotation
            wishElement.style.animationDuration = `${randomDuration}s`;
            
            document.body.appendChild(wishElement);
            
            // Remove the wish after animation completes
            setTimeout(() => {
                wishElement.remove();
            }, randomDuration * 1000);
        }
        
        // Create multiple wishes at start
        for(let i = 0; i < 5; i++) {
            setTimeout(() => createFallingWish(), i * 800);
        }

        // Create new wishes continuously with multiple wishes at once
        window.wishInterval = setInterval(() => {
            // Create 2-3 wishes each time
            const wishCount = Math.floor(Math.random() * 2) + 2;
            for(let i = 0; i < wishCount; i++) {
                setTimeout(() => createFallingWish(), i * 500);
            }
        }, 3000); // Create new batch every 3 seconds
    } else {
        // Hide the card
        card.style.display = 'none';
        
        // Show error message if name is entered but invalid
        if (enteredName) {
            errorMessage.innerHTML = 'BỚT ẢO TƯỞNG ĐI MÁ! 🤣';
            createLaughingEmojis();
        } else {
            errorMessage.textContent = '';
        }
    }

}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.color = `rgb(255, ${Math.random() * 64 + 64}, ${Math.random() * 128 + 128})`;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createRaindrop(x, emoji) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.textContent = emoji;
    raindrop.style.left = x + 'px';
    raindrop.style.top = '0px';
    raindrop.style.fontSize = Math.random() * 14 + 12 + 'px';
    raindrop.style.animationDuration = Math.random() * 2 + 2 + 's';
    
    document.body.appendChild(raindrop);
    
    // Remove raindrop after animation
    setTimeout(() => {
        raindrop.remove();
    }, 4000);
}

function createRainFromWish() {
    const wishElement = document.querySelector('.wishes span');
    if (wishElement) {
        const rect = wishElement.getBoundingClientRect();
        const emojis = ['✨', '💫', '🌸', '💖', '✨', '🌺', '💝', '🦋', '🎵'];
        
        // Create multiple raindrops at random positions under the wish
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const randomX = rect.left + Math.random() * rect.width;
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                createRaindrop(randomX, randomEmoji);
            }, i * 200); // Stagger the creation of raindrops
        }
    }
}

function createLaughingEmojis() {
    const emojis = ['🤣', '😂', '😆', '😝', '🤪'];
    const container = document.querySelector('.container');
    const inputSection = document.querySelector('.input-section');
    const rect = inputSection.getBoundingClientRect();
    
    // Create multiple emojis
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'laughing-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random position around the input section
            const randomX = rect.left + (Math.random() * rect.width * 1.5) - rect.width * 0.25;
            const randomY = rect.top + (Math.random() * rect.height * 1.5) - rect.height * 0.25;
            
            emoji.style.left = randomX + 'px';
            emoji.style.top = randomY + 'px';
            
            document.body.appendChild(emoji);
            
            // Remove after animation
            setTimeout(() => {
                emoji.remove();
            }, 2000);
        }, i * 100);
    }
}

// Add this style to the document
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: fixed;
        top: -20px;
        animation: floatUp 5s linear;
        z-index: 1000;
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);