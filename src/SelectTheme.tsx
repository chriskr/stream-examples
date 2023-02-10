import React from 'react';
import { connect } from 'rxbeach/react';
import { options, selctedStoredTheme$, setTheme, Themes } from './themes';

const SelectTheme = ({ theme }: { theme: Themes }) => (
  <div className="select-theme-container">
    <select
      onChange={(event) => setTheme(event.currentTarget.value as Themes)}
      value={theme}
    >
      {options.map(({ name, value }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  </div>
);

const ConnectedSelectTheme = connect(SelectTheme, selctedStoredTheme$);

export default ConnectedSelectTheme;
