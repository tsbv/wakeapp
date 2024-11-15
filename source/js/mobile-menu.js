const handleMobileNav = () => {
  const navNode = document.querySelector('.nav');
  const navToggleNode = document.querySelector('.nav__toggle');
  navToggleNode.addEventListener('click', () => {
    navNode.classList.toggle('nav--opened');
    navNode.classList.toggle('nav--closed');
  });
};

export { handleMobileNav };
