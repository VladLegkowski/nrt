import { applicationsByHostFn, mostSatisfyingAppsFn } from './applicationFns';
import {
  hostAppData,
  applicationsByHost,
  mostSatisfyingApps,
} from '../mocks/hostAppData';

describe('application by host functions', () => {
  describe('applicationsByHostFn', () => {
    it('returns expected object', () => {
      expect(applicationsByHostFn(hostAppData)).toMatchObject(
        applicationsByHost
      );
    });
  });

  describe('mostSatisfyingAppsFn', () => {
    it('returns expected object', () => {
      expect(
        mostSatisfyingAppsFn(applicationsByHostFn(hostAppData))
      ).toMatchObject(mostSatisfyingApps);
    });
  });
});
