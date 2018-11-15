class ScoreCounter {
  constructor(element, precision, initialValue) {
    this.element = document.querySelector(`#${element}`);
    this.counterElement = document.querySelector(
      `#${this.element.id} .counter`
    );
    this.buttons = document.querySelectorAll('button');
    this.btnDown = document.querySelector(`#${this.element.id} .down`);
    this.btnUp = document.querySelector(`#${this.element.id} .up`);
    this.precision = precision;
    this.initialValue = initialValue;
    this.currentValue = 0;
    this.format = this.format.bind(this);
    this.down = this.down.bind(this);
    this.up = this.up.bind(this);
  }
  format(current) {
    return (current = String(current).padStart(this.precision, '0'));
  }
  get() {
    alert(`Counter ${this.element.id.split('-')[1]} = ${this.currentValue}`);
  }
  up() {
    const { counterElement } = this;
    counterElement.innerHTML = this.format((this.currentValue += 1));
  }
  down() {
    const { counterElement } = this;
    counterElement.innerHTML = this.format((this.currentValue -= 1));
  }
  reset() {
    this.currentValue = 0;
    this.counterElement.innerHTML = this.format(this.currentValue);
  }
  set(value) {
    this.currentValue = value;
    this.counterElement.innerHTML = this.format(this.currentValue);
  }
  init() {
    [...this.buttons].forEach(button =>
      button.addEventListener('click', e => {
        e.preventDefault();
      })
    );
    this.btnDown.addEventListener('click', this.down);
    this.btnUp.addEventListener('click', this.up);
    this.currentValue = this.initialValue;
    this.counterElement.innerHTML = this.currentValue;
  }
}

const counter1 = new ScoreCounter('score-1', 3, 0);
counter1.init();

const counter2 = new ScoreCounter('score-2', 4, 10);
counter2.init();
