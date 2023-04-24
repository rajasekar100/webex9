import { MyCustomPipePipe } from './my-custom-pipe.pipe';

describe('MyCustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyCustomPipePipe();
    expect(pipe).toBeTruthy();
  });
});
