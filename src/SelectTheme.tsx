import React from 'react';
import { connect } from 'rxbeach/react';
import { options, selectedTheme$, setTheme, Themes } from './themes';

const SelectTheme = ({ theme }: { theme: Themes }) => (
  <div className="select-theme-container">
    <select
      onChange={({ currentTarget: { value } }) => setTheme(value as Themes)}
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

const ConnectedSelectTheme = connect(SelectTheme, selectedTheme$);

export default ConnectedSelectTheme;
