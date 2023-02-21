import {
  applicationsByHostFn,
  mostSatisfyingAppsFn,
  getTopAppsByHostFn,
  addAppToHostsFn,
  removeAppFromHostsFn,
} from './applicationFns';
import {
  mocks,
  applicationsByHost,
  mostSatisfyingApps,
  topAppsByHost,
  applicationAdd,
  applicationRemove,
  addAppToHost,
  removeAppToHost,
} from '../mocks/mocks';

describe('application by host functions', () => {
  describe('applicationsByHostFn', () => {
    it('returns expected object', () => {
      expect(applicationsByHostFn(mocks)).toMatchObject(applicationsByHost);
    });
  });

  describe('mostSatisfyingAppsFn', () => {
    it('returns expected object', () => {
      expect(mostSatisfyingAppsFn(applicationsByHostFn(mocks))).toMatchObject(
        mostSatisfyingApps
      );
    });
  });

  describe('getTopAppsByHostFn', () => {
    it('returns expected object', () => {
      expect(
        getTopAppsByHostFn(
          '7e6272f7-098e.dakota.biz',
          applicationsByHostFn(mocks)
        )
      ).toMatchObject(topAppsByHost);
    });
  });

  describe('addAppToHostsFn', () => {
    it('returns expected object', () => {
      expect(
        addAppToHostsFn(applicationAdd, applicationsByHostFn(mocks))
      ).toMatchObject(addAppToHost);
    });
  });

  describe('removeAppFromHostsFn', () => {
    it('returns expected object', () => {
      expect(
        removeAppFromHostsFn(applicationRemove, applicationsByHostFn(mocks))
      ).toMatchObject(removeAppToHost);
    });
  });
});
