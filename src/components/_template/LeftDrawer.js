import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import TreeMenu from '../content/TreeMenu';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const AuthHeader = () =>{
    return (
        <div className="left-drawer__auth-block">
            <div className="auth-block__sign-up">
            <Button variant="outlined" color="primary" size="small" className="sign-up">
                Sign up
            </Button>
            </div>                
        </div>
    );
}

const LeftDrawer = (props) => {
    const {theme, mobileOpen} = props;

    return (
        <>
          <nav>
            <Hidden smUp implementation="css">
            <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={props.onClickDrawerToggle}                
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                <AuthHeader/>
                <Divider className="left-drawer__auth-header_divider"/>   
                <TreeMenu/>
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                className="left-drawer"
                variant="permanent"
                open
            >
                <AuthHeader/>
                <Divider className="left-drawer__auth-header_divider"/>                
                <TreeMenu/>
            </Drawer>
            </Hidden>
          </nav>
      
        </>
    );
}
export default LeftDrawer;

LeftDrawer.propTypes = {
    theme: PropTypes.shape({
        direction: PropTypes.string,
    }),   
    mobileOpen: PropTypes.bool
}