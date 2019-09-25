import React, { Fragment } from 'react';
import spinner from './spinner.gif';

//load spinner
export default () => (
  <Fragment>
    <img
      src={spinner}
      //put spinner in middle
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block'
      }}
      alt="Loading..."
    />
  </Fragment>
);
