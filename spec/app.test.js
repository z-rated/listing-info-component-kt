import { AppShallowSetup } from './shallowSetup';

describe('App', () => {
  it('should open modal', () => {
    const { enzymeWrapper, props } = AppShallowSetup();

    expect(enzymeWrapper.find('#modal').exists()).toBe(true);
  });
});