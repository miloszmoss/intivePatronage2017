class ScoreUI extends ScoreCounter {
  constructor(element, precision, initialValue) {
    super();
    this.element = element;
    this.counterField = document.querySelector(`#${element} .counter`);
    this.btnReset = document.querySelector(`#${element} .reset`);
    this.btnDown = document.querySelector(`#${element} .down`);
    this.btnSet = document.querySelector(`#${element} .set`);
    this.btnGet = document.querySelector(`#${element} .get`);
    this.btnUp = document.querySelector(`#${element} .up`);
    this.buttons = document.querySelectorAll('button');
    this.initialValue = initialValue;
    this.precision = precision;
    this.currentValue = 0;
    this.format = this.format.bind(this);
    this.initial = this.initial.bind(this);
    this.reset = this.reset.bind(this);
    this.down = this.down.bind(this);
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.up = this.up.bind(this);
  }
  init() {
    this.btnEvents(this.buttons);
    this.initial(this.initialValue);
    this.btnDown.addEventListener('click', this.down);
    this.btnUp.addEventListener('click', this.up);
    this.btnReset.addEventListener('click', this.reset);
    this.btnSet.addEventListener('click', this.set);
    this.btnGet.addEventListener('click', this.get);
    this.currentValue = this.initialValue;
  }
}

const counter1 = new ScoreUI('score-1', 3, 0);
counter1.init();

const counter2 = new ScoreUI('score-2', 3, 3);
counter2.init();

const counter3 = new ScoreUI('score-3', 3, 0);
counter3.init();
