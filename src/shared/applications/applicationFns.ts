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
  applicationsByHost: ApplicationsByHost
): ApplicationsByHost {
  const mostSatisfyingApps: ApplicationsByHost = {};
  const applicationsByHostKeys = Object.keys(applicationsByHost);

  for (let i = 0; i < applicationsByHostKeys.length; i++) {
    const apps = applicationsByHost[applicationsByHostKeys[i]];
    mostSatisfyingApps[applicationsByHostKeys[i]] = apps
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

function addAppToHostsFn(
  application: Application,
  applicationsByHost: ApplicationsByHost
) {
  const applicationsByHostUpdated = { ...applicationsByHost };

  for (let i = 0; i < application.host.length; i++) {
    if (applicationsByHostUpdated[application.host[i]] === undefined) {
      applicationsByHostUpdated[application.host[i]] = [];
    }

    applicationsByHostUpdated[application.host[i]].push(application);
    applicationsByHostUpdated[application.host[i]] = getTopAppsByHostFn(
      application.host[i],
      applicationsByHostUpdated
    );
  }

  return applicationsByHostUpdated;
}

function removeAppFromHostsFn(
  hostName: string,
  applicationsByHost: ApplicationsByHost
) {
  const applicationsByHostUpdated = { ...applicationsByHost };

  const applicationsByHostKeys = Object.keys(applicationsByHostUpdated);

  for (let i = 0; i < applicationsByHostKeys.length; i++) {}

  return applicationsByHostUpdated;
}

export {
  applicationsByHostFn,
  mostSatisfyingAppsFn,
  getTopAppsByHostFn,
  addAppToHostsFn,
  removeAppFromHostsFn,
};
