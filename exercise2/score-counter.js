class ScoreCounter {
  format(current) {
    console.log(current);

    return (current = String(current).padStart(this.precision, '0'));
  }
  initial(value) {
    const { counterField } = this;
    counterField.innerHTML = this.format(value);
  }
  get() {
    alert(`Counter ${this.element.split('-')[1]} = ${this.currentValue}`);
  }
  up() {
    const { counterField } = this;
    counterField.innerHTML = this.format((this.currentValue += 1));
  }
  down() {
    const { counterField } = this;
    counterField.innerHTML = this.format((this.currentValue -= 1));
  }
  reset() {
    this.currentValue = 0;
    this.counterField.innerHTML = this.format(this.currentValue);
  }
  set() {
    const inputValue = document.querySelector(`#${this.element} .value`).value;
    this.counterField.innerHTML = this.format(inputValue);
  }
  btnEvents(buttons) {
    [...buttons].forEach(button =>
      button.addEventListener('click', e => {
        e.preventDefault();
      }),
    );
  }
}
