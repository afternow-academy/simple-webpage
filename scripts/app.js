const styleButton = document.getElementById('style-btn');

styleButton.addEventListener('click', changeStyle);

function changeStyle() {
  const myPage = document.getElementById('my-page');

  if (myPage.className === 'light-style') {
    myPage.classList.remove('light-style');
    myPage.classList.add('dark-style');
  } else {
    myPage.classList.remove('dark-style');
    myPage.classList.add('light-style');
  }
}
