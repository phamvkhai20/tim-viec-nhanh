import React from 'react'
import { Route } from 'react-router-dom';
import CommonLayout from '../../Layout/CommonLayout/Loadable';

const CommonRouter = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => (
          <CommonLayout>
            <Component {...props} />
          </CommonLayout>
        )}
      />
    );
  };
export default CommonRouter
