import Vue from 'vue';
import Component from './root.vue';
import expect from 'expect';

// Extend the component to get the constructor, which we can then initialize directly.
let Root = Vue.extend(Component);

// Setup the test harness. This will get cleaned out with every test.
let app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

describe('root', function() {

  beforeEach(function() {
    app.innerHTML = `<div id="scratch"></div>`;
  });

  afterEach(function() {
    app.innerHTML = '';
  });

  it('renders without problems', function() {
    let root = new Root().$mount('#scratch').$el;
    expect(root).toExist();
  });

  it('can display a Custom Element with children created during connectedCallback', function() {
    let root = new Root().$mount('#scratch').$el;
    let wc = app.querySelector('x-foo');
    expect(wc).toExist();
    let heading = wc.querySelector('h1');
    expect(heading).toExist();
    expect(heading.textContent).toEqual('Hello from x-foo');
  });

});

