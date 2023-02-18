import React from 'react';
import { Outlet } from 'react-router-dom';
import { Checkbox } from '../shared/ui/choices/Checkbox';
import { H1 } from '../shared/ui/typography/H1';
import { H4 } from '../shared/ui/typography/H4';
import { Text } from '../shared/ui/typography/Text';
import { Header } from '../shared/ui/Header/Header';

import './index.css';

function App() {
  const [value, setValue] = React.useState(false);
  return (
    <div className="application">
      <Header>
        <H1>Apps by Host</H1>
        <H4>for user averylongemailadress@companyname.com</H4>
        <Checkbox checked={value} onChange={setValue}>
          <span>{value ? 'Show as an awesome grid' : 'Show as list'}</span>
        </Checkbox>
      </Header>
      <Text weight="bold">Test text</Text>
    </div>
  );
}

export { App };
