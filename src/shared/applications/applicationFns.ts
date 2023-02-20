import { Application, ApplicationsByHost } from './model';

function applicationsByHostFn(data: Application[]): ApplicationsByHost {
  const applicationsByHost: ApplicationsByHost = {};

  for (let i = 0; i < data.length; i++) {
    const app = data[i];
    for (let j = 0; j < app.host.length; j++) {
      if (applicationsByHost[app.host[j]] === undefined) {
        applicationsByHost[app.host[j]] = [];
      }
      applicationsByHost[app.host[j]].push(app);
    }
  }

  return applicationsByHost;
}

function mostSatisfyingAppsFn(
  appsByHost: ApplicationsByHost
): ApplicationsByHost {
  const mostSatisfyingApps: ApplicationsByHost = {};
  const applicationsByHostKeys = Object.keys(appsByHost);

  for (let k = 0; k < applicationsByHostKeys.length; k++) {
    const apps = appsByHost[applicationsByHostKeys[k]];
    mostSatisfyingApps[applicationsByHostKeys[k]] = apps
      .sort((a, b) => b.apdex - a.apdex)
      .slice(0, 5);
  }

  return mostSatisfyingApps;
}

function getTopAppsByHostFn(
  hostName: string,
  applicationsByHost: ApplicationsByHost
) {
  const hostIndex = applicationsByHost[hostName];

  if (hostIndex === undefined) {
    return [];
  }

  return hostIndex.sort((a, b) => b.apdex - a.apdex).slice(0, 25);
}

function addAppToHostFn(
  application: Application,
  applicationsByHost: ApplicationsByHost
) {}

export { applicationsByHostFn, mostSatisfyingAppsFn, getTopAppsByHostFn };
