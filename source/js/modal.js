const initModalHandler = () => {
  const modalNode = document.querySelector('.modal');
  const openBtnNode = document.querySelector('.sign-up-button')
  const closeBtnNode = document.querySelector('.modal__close-button');
  openBtnNode.addEventListener('click', (event) => {
    event.preventDefault();
    modalNode.style.display = 'block';
  });
  closeBtnNode.addEventListener('click', (event) => {
    event.preventDefault();
    modalNode.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    if (event.target == modalNode) {
      modalNode.style.display = 'none';
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalNode.style.display = "none";
    }
  });
};

export { initModalHandler };
