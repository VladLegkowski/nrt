import {
  applicationsByHostFn,
  mostSatisfyingAppsFn,
  getTopAppsByHostFn,
  addAppToHostsFn,
} from './applicationFns';
import {
  mocks,
  applicationsByHost,
  mostSatisfyingApps,
  topAppsByHost,
  application,
  addAppToHost,
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
        addAppToHostsFn(application, applicationsByHostFn(mocks))
      ).toMatchObject(addAppToHost);
    });
  });
});
