const handlePreloader = () => {
  const preloaderNode = document.querySelector('.preloader');
  window.addEventListener('load', () => {
    preloaderNode.classList.add('preloader--hidden');
    preloaderNode.addEventListener('transitionend', () => {
      preloaderNode.remove();
    });
  });
};

export { handlePreloader };
