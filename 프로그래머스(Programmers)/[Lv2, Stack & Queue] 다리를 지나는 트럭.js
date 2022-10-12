// link : https://school.programmers.co.kr/learn/courses/30/lessons/42583

class Bridge {
  #bridge = null;

  #length = 0;

  #weight = 0;

  constructor(length) {
    this.#bridge = new Array(length).fill(0);
    this.#length = length;
  }

  get length() {
    return this.#length;
  }

  get weight() {
    return this.#weight;
  }

  get bridge() {
    return this.#bridge;
  }

  get endOfBridge() {
    return this.#bridge[this.#length - 1];
  }

  isEmpty() {
    return this.#weight === 0;
  }

  getNextBridge(enteredCar) {
    this.#weight = this.#weight - this.endOfBridge + enteredCar;
    this.#bridge = [enteredCar, ...this.#bridge.slice(0, this.#length - 1)];
    return this;
  }
}

const solution = (bridge_length, weight, truck_weights) => {
  let bridge = new Bridge(bridge_length);
  let timer = 0;
  let passedCars = 0;

  truck_weights.push(0);
  while (!bridge.isEmpty() || passedCars !== truck_weights.length) {
    if (bridge.weight - bridge.endOfBridge + truck_weights[passedCars] <= weight) {
      bridge = bridge.getNextBridge(truck_weights[passedCars]);
      passedCars += 1;
    } else {
      bridge = bridge.getNextBridge(0);
    }
    timer += 1;
  }
  return timer;
};

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
console.log(undefined + 1);
console.log(solution(bridge_length, weight, truck_weights));
