class scoreCounter {
  constructor(element, precision, initialValue) {
    this.element = document.querySelector(`#${element}`);
    this.counterElement = document.querySelector(
      `#${this.element.id} .counter`
    );
    this.precision = precision;
    this.initialValue = initialValue;
    this.currentValue = 0;
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
    this.currentValue = this.initialValue;
    this.counterElement.innerHTML = this.currentValue;
    this.up();
    this.set(40);
  }
}

const counter1 = new scoreCounter('score-1', 3, 0);
counter1.init();
