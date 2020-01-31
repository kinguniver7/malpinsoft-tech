import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from "./Header";
import LeftDrawer from "./LeftDrawer";
import MainContent from "../content/MainContent";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#1976d2',
      },
    },
  });
  
  function ContentLayout(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">      
          <CssBaseline />
          <Header onClickDrawerToggle={handleDrawerToggle} />
          <LeftDrawer onClickDrawerToggle={handleDrawerToggle} mobileOpen = {mobileOpen} theme ={theme}/>
          <MainContent>{props.children}</MainContent>          
        </Container>
      </ThemeProvider>
    );
  }
  
  export default ContentLayout;