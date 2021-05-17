const list = document.querySelector('.brewery__list');

const setBackgroundImage = () => {
  const MAX = 8;  // максимальное количество фотографий в папке brewery
  let count = 0;
  list.querySelectorAll('.brewery__item').forEach(item => {
    if (count <= MAX) {
      item.style.backgroundImage = `url('images/brewery${count}.jpg')`;
      count++;
    } else {
      count = 0;
    };
  });
};

const toggleHoverClass = e => {
  if (e.target.closest('.brewery__info')) {
    e.target.closest('.brewery__info').classList.toggle('is-hover');
  };
};

list.addEventListener('click', e => toggleHoverClass(e));

// setBackgroundImage();
