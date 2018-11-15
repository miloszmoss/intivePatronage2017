{
  const box = document.querySelector('#myBox');
  box.innerHTML = 'Push';
  box.addEventListener('click', () => {
    const clickCount = document.querySelector('#clickCount');
    let value = Number(clickCount.innerHTML);
    clickCount.innerHTML = value + 1;
  });
}
