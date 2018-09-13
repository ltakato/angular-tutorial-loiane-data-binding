import { MeuFormModule } from './meu-form.module';

describe('MeuFormModule', () => {
  let meuFormModule: MeuFormModule;

  beforeEach(() => {
    meuFormModule = new MeuFormModule();
  });

  it('should create an instance', () => {
    expect(meuFormModule).toBeTruthy();
  });
});
