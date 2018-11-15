{
  const box = document.querySelector('#clickCount');
  setInterval(() => {
    box.innerHTML = 0;
    console.log('clear count');
  }, 30000);
}
