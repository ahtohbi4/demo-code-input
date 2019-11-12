import React, { PureComponent } from 'react';
import memoize from 'memoize-one';

import './styles.css';

export default class InputCode extends PureComponent {
  static defaultProps = {
    length: 4,
  };

  get items() {
    return memoize((length) => Array(length).fill(''));
  }

  get values() {
    const { value } = this.props;

    return value.split('');
  }

  render() {
    const { disabled, length, onChange } = this.props;

    return (
      <label className="input-code">
        <input
         className="input-code__input"
         disabled={disabled}
         maxLength={length}

         onChange={onChange}
        />

        {this.items(length).map((v, i) => (
          <span key={i} className="input-code__symbol">
            {this.values[i]}
          </span>
        ))}
      </label>
    );
  }
}
