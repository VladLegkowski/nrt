import React from 'react';
import { ApplicationsByHost } from '../../shared/applications/model';
import { Card } from '../../enteties/card/Card';
import { Checkbox } from '../../shared/ui/choices/Checkbox';
import { ClickableRow } from '../../feature/clickable-row/ClickableRow';
import { H1 } from '../../shared/ui/typography/H1/H1';
import { H4 } from '../../shared/ui/typography/H4/H4';
import { Header } from '../../shared/ui/header/Header';
import { Layout } from '../../enteties/list/Layout';
import { Text } from '../../shared/ui/typography/Text/Text';

type AppsByHostProps = {
  hostAppData: {
    mostSatisfyingApps: ApplicationsByHost;
    applicationsByHost: ApplicationsByHost;
  };
};
function AppsByHost(props: AppsByHostProps) {
  const {
    hostAppData: { mostSatisfyingApps, applicationsByHost },
  } = props;
  const [value, setValue] = React.useState(false);

  return (
    <>
      <Header>
        <H1>Apps by Host</H1>
        <H4>for user averylongemailadress@companyname.com</H4>
        <Checkbox checked={value} onChange={setValue}>
          <Text>{value ? 'Show as an awesome grid' : 'Show as list'}</Text>
        </Checkbox>
      </Header>
      <Layout layout={!value ? 'grid' : 'list'}>
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
      </Layout>
    </>
  );
}

export { AppsByHost };
