import React from 'react';
import { Card } from '../enteties/card/Card';
import { Checkbox } from '../shared/ui/choices/Checkbox';
import { ClickableRow } from '../feature/clickable-row/ClickableRow';
import { H1 } from '../shared/ui/typography/H1/H1';
import { H4 } from '../shared/ui/typography/H4/H4';
import { Header } from '../shared/ui/header/Header';
import { List } from '../enteties/list/List';
import { Text } from '../shared/ui/typography/Text/Text';
import hostsData from '../../public/host-app-data.json';
import styles from './App.module.css';

interface Application {
  name: string;
  contributors: string[];
  version: number;
  apdex: number;
  host: string[];
}

interface ApplicationsByHost {
  [key: string]: Application[];
}
function App() {
  const [value, setValue] = React.useState(false);

  const applicationsByHost: ApplicationsByHost = {};

  for (let i = 0; i < hostsData.length; i++) {
    const app = hostsData[i];
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

  return (
    <div className={styles.application}>
      <Header>
        <H1>Apps by Host</H1>
        <H4>for user averylongemailadress@companyname.com</H4>
        <Checkbox checked={value} onChange={setValue}>
          <Text>{value ? 'Show as an awesome grid' : 'Show as list'}</Text>
        </Checkbox>
      </Header>
      <List layout={!value ? 'grid' : 'list'}>
        {Object.keys(applicationsByHost).map((host) => {
          return (
            <Card key={host}>
              <Text weight="bold">{host}</Text>
              <ul>
                {mostSatisfyingApps[host].map((application) => {
                  return (
                    <li key={host.concat(application.name)}>
                      <ClickableRow releaseNumber={application.version}>
                        <Text variant="subtle" opaque>
                          {application.apdex}
                        </Text>
                        <Text variant="subtle">{application.name}</Text>
                      </ClickableRow>
                    </li>
                  );
                })}
              </ul>
            </Card>
          );
        })}
      </List>
    </div>
  );
}

export { App };
