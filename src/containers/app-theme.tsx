import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import ThemeConfig from '@themeConfig/index';

interface IProps {
  children: ReactNode;
}
interface IState {}

const AppTheme = (props: IProps, state: IState) => {
  const { children } = props;

  return (
    <ThemeProvider theme={ThemeConfig}>{children}</ThemeProvider>
  );
};

export default AppTheme;
