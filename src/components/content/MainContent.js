import React from 'react';
//import PropTypes from 'prop-types';
import NavBreadcrumb from "../common/NavBreadcrumb";
import { Divider } from '@material-ui/core';


const MainContent = (props) =>{

    return (
        <main className="main-content">
            <div className="main-content__nav-breadcrumb">
            <NavBreadcrumb />      
            <Divider className="nav-breadcrumb__divider"/>      
            </div>           
          {props.children}
        </main>
    )
}

export default MainContent;