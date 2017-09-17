import { Component, EventEmitter } from '@angular/core';

/**
 * Found at: https://medium.com/@cnunciato/a-simple-mock-component-for-angular-2-d79bd58a7b31
 * Examples:
 * MockComponent({ selector: 'some-component' });
 * MockComponent({ selector: 'some-component', inputs: ['some-input', 'some-other-input'] });
 */

export function MockComponent (options: Component): Component {

  const metadata: Component = {
    inputs: options.inputs,
    outputs: options.outputs || [],
    selector: options.selector,
    template: options.template || ''
  };

  class Mock { [key: string]: any; }

  metadata.outputs!.forEach((method: any) => {
    Mock.prototype[method] = new EventEmitter();
  });

  return Component(metadata)(Mock as any);
}
