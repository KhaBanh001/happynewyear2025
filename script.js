$(function () {
  $('body').sakura({
    newOn: 300,
  });
});

// Hàm random mà không trùng
function getRandomPosition(positions) {
  // Chọn ngẫu nhiên một chỉ số trong mảng
  const index = Math.floor(Math.random() * positions.length);
  const position = positions[index];

  // Loại bỏ vị trí đã chọn khỏi mảng
  positions.splice(index, 1);

  return position;
}

document.addEventListener('DOMContentLoaded', () => {
  const lixiItems = document.querySelectorAll('.lixi');

  // Mảng chứa URL hình ảnh cho bao lì xì
  const lixiImages = [
    'lixi-1.png',
    'lixi-2.png',
    'lixi-3.png',
    'lixi-4.png',
    'lixi-5.png',
    'lixi-6.png',
  ];

  const positions = [
    { left: 72.61, top: 17.0 },
    { left: 47.17, top: 29.9 },
    { left: 29.5, top: 37.9 },
    { left: 49.06, top: 72.2 },
    { left: 77.28, top: 65.0 },
    { left: 8.17, top: 61.4 },
  ];

  // Ví dụ sử dụng
  let availablePositions = [...positions]; // Tạo bản sao của mảng để giữ nguyên mảng gốc
  let availableImages = [...lixiImages];

  lixiItems.forEach((lixi) => {
    const img = lixi.querySelector('img');

    // Random vị trí
    const randomPosition = getRandomPosition(availablePositions);
    const randomX = randomPosition.left;
    const randomY = randomPosition.top;

    lixi.style.left = `${randomX}%`;
    lixi.style.top = `${randomY}%`;

    // Random ảnh
    const randomPositionImage = getRandomPosition(availableImages);
    img.src = './assets/img/' + randomPositionImage;
  });
});

function handleClickLixi() {
  // Mảng chứa message cho chúc mừng
  const chucMungMessages = [
    `Chúc bạn như Trịnh Trần Phương Tuấn.
        TRỊNH trọng kính chúc, xuân mới bình an
        TRẦN đời may mắn, hạnh phúc ngập tràn
        PHƯƠNG hướng sáng suốt, dẫn lối thành công
        TUẤN tài thịnh vượng, vạn sự như mơ
        `,
    'Chúc bạn năm mới tiền vô như suối, tiền ra cho mình😏',
    'Ngàn lời động viên không bằng lời khuyên của anh Huấn. Chúc các bạn năm mới cần cù và siêng năng, có làm và có ăn, vạn sự như ý tỷ sự như mơ vạn vạn bất ngờ, mạnh khoẻ và bình an bạn nhớ😳🎆',
    `Chúc bạn như Trịnh Trần Phương Tuấn.
        TRỊNH trọng kính chúc, xuân mới bình an
        TRẦN đời may mắn, hạnh phúc ngập tràn
        PHƯƠNG hướng sáng suốt, dẫn lối thành công
        TUẤN tài thịnh vượng, vạn sự như mơ
        `,
    'Chúc bạn năm mới tiền vô như suối, tiền ra cho mình😏',
    'Ngàn lời động viên không bằng lời khuyên của anh Huấn. Chúc các bạn năm mới cần cù và siêng năng, có làm và có ăn, vạn sự như ý tỷ sự như mơ vạn vạn bất ngờ, mạnh khoẻ và bình an bạn nhớ😳🎆',
  ];

  // Mảng chứa message cho bao lì xì
  const lixiMessages = [
    'Mình xin lì xì 💲',
    'Xin 10k nhé 💵',
    'Xin 20k nhé 💶',
    'Xin 30k nhé 💷',
    'Xin 50k nhé 💸',
  ];

  // file qr
  const filePathQR = './assets/qr.JPG';
  // có qr hay không
  const showQR = true;

  let availableMessages = [...chucMungMessages];
  let availableLixiMessages = [...lixiMessages];

  const lixiItems = document.querySelectorAll('.lixi');
  const card = document.querySelector('.card');
  const messageElement = document.getElementById('message');
  const imageElement = document.getElementById('image');

  function closeCurrentCard() {
    const card = document.querySelector('.card');
    card.style.display = 'none';
    messageElement.style.display = 'none';
    imageElement.style.display = 'none';
  }

  function showCard(message, lixiMessage, hasQR) {
    closeCurrentCard();

    card.style.display = 'flex';
    messageElement.style.display = 'block';
    messageElement.textContent = message;

    if (hasQR) {
      messageElement.textContent = lixiMessage;
      imageElement.style.display = 'block';
      imageElement.src = filePathQR;
      return;
    }
  }

  lixiItems.forEach((lixi) => {
    lixi.addEventListener('click', function () {
      if (availableMessages.length > 0) {
        const message = getRandomPosition(availableMessages);
        const hasQR = showQR ? Math.random() < 0.4 : false; // 60% chance for QR
        if (hasQR) {
          const lixiMessage = getRandomPosition(availableLixiMessages);
          showCard(message, lixiMessage, hasQR);
        } else {
          showCard(message, null, hasQR);
        }

        // Disable clicked li xi
        this.style.opacity = '0.5';
        this.style.pointerEvents = 'none';
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!card.contains(event.target) && !event.target.closest('.lixi')) {
      closeCurrentCard();
    }
  });
}

function handleMusic() {
  // Thêm vào cuối file
  const musicBtn = document.querySelector('.music-toggle');
  const audio = document.getElementById('bgMusic');

  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      musicBtn.textContent = '🔊';
    } else {
      audio.pause();
      musicBtn.textContent = '🔈';
    }
  });
}

handleClickLixi();
handleMusic();
