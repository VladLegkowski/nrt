import { ApplicationsByHost, Application } from './model';

function appsInfoFn(data: Application[]) {
  const applicationsByHost: ApplicationsByHost = {};
  const mostSatisfyingApps: ApplicationsByHost = {};

  // applicationsByHost
  for (let i = 0; i < data.length; i++) {
    const app = data[i];
    for (let j = 0; j < app.host.length; j++) {
      if (applicationsByHost[app.host[j]] === undefined) {
        applicationsByHost[app.host[j]] = [];
      }
      applicationsByHost[app.host[j]].push(app);
    }
  }

  // mostSatisfyingApps
  for (let k = 0; k < Object.keys(applicationsByHost).length; k++) {
    const apps = applicationsByHost[Object.keys(applicationsByHost)[k]];
    const sortedApps = apps.sort((a, b) => b.apdex - a.apdex).slice(0, 5);
    if (mostSatisfyingApps[Object.keys(applicationsByHost)[k]] === undefined) {
      mostSatisfyingApps[Object.keys(applicationsByHost)[k]] = [];
    }
    mostSatisfyingApps[Object.keys(applicationsByHost)[k]] = sortedApps;
  }

  return { mostSatisfyingApps, applicationsByHost };
}

export { appsInfoFn };
