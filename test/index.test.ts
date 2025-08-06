import { helloWorld } from '../src/index';

test('helloWorld returns "Hello, World!"', () => {
    expect(helloWorld()).toBe("Hello, World!");
});