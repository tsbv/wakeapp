const initModalHandler = () => {
  const modalNode = document.querySelector('.modal');
  const openBtnNode = document.querySelector('.sign-up-button');
  const toggleModal = (isVisible) => {
    modalNode.style.display = isVisible ? 'flex' : 'none';
  };
  openBtnNode.addEventListener('click', (event) => {
    event.preventDefault();
    toggleModal(true);
  });
  const handleOutsideClick = (event) => {
    if (event.target === modalNode) {
      toggleModal(false);
    }
  };
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      toggleModal(false);
    }
  });
  window.addEventListener('click', handleOutsideClick);
  window.addEventListener('touchend', handleOutsideClick);
};

export { initModalHandler };
