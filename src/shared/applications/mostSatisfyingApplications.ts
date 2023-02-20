import { ApplicationsByHost } from './model';
import data from '../../../public/host-app-data.json';

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
const mostSatisfyingApps: ApplicationsByHost = {};

for (let k = 0; k < Object.keys(applicationsByHost).length; k++) {
  const apps = applicationsByHost[Object.keys(applicationsByHost)[k]];
  const sortedApps = apps.sort((a, b) => b.apdex - a.apdex).slice(0, 5);
  if (mostSatisfyingApps[Object.keys(applicationsByHost)[k]] === undefined) {
    mostSatisfyingApps[Object.keys(applicationsByHost)[k]] = [];
  }
  mostSatisfyingApps[Object.keys(applicationsByHost)[k]] = sortedApps;
}

export { mostSatisfyingApps };
