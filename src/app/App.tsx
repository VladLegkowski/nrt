import React from 'react';
import { Outlet } from 'react-router-dom';
import { Checkbox } from '../shared/ui/choices/Checkbox';
import { H1 } from '../shared/ui/typography/H1/H1';
import { H4 } from '../shared/ui/typography/H4/H4';
import { Text } from '../shared/ui/typography/Text/Text';
import { Header } from '../shared/ui/header/Header';
import { Row } from '../feature/row/Row';
import { Card } from '../enteties/card/Card';
import { List } from '../enteties/list/List';
import styles from './App.module.css';

function App() {
  const [value, setValue] = React.useState(false);

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
        <Card>
          <Text weight="bold">7e6272f7-098e.dakota.biz</Text>
          <ul>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
          </ul>
        </Card>
        <Card>
          <Text weight="bold">7e6272f7-098e.dakota.biz</Text>
          <ul>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
            <li>
              <Row releaseNumber={7}>
                <Text variant="subtle" opaque>
                  99
                </Text>
                <Text variant="subtle">
                  Small Fresh Pants - Kautzer - Boyer, and Sons
                </Text>
              </Row>
            </li>
          </ul>
        </Card>
      </List>
    </div>
  );
}

export { App };
