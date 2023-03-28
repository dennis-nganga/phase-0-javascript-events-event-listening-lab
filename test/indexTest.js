const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.createElement('input');
    input.setAttribute('type', 'button');
    input.setAttribute('value', 'Click me');
    document.body.appendChild(input);
    sinon.spy(input, 'addEventListener');
  })

  afterEach(function() {
    input.addEventListener.restore();
    input.remove();
  })

  it("binds an event listener in addEventListener()", () => {
    input.addEventListener('click', function() {
      console.log('Button clicked!');
    });
    expect(input.addEventListener.calledOnce).to.be.true;
  })
})
