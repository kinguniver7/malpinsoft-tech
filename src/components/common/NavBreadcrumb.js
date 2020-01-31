import React from 'react';
//import PropTypes from 'prop-types';

import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';

const StyledBreadcrumb = withStyles(theme => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.',event);
  }

const NavBreadcrumb = ()=> {

    return(
        <Breadcrumbs aria-label="breadcrumb" >
        <StyledBreadcrumb
            component="a"
            href="#"
            label="Web"
            onClick={handleClick}
        />
        <StyledBreadcrumb component="a" href="#" label="React" onClick={handleClick} />
        <StyledBreadcrumb label="Глава 1. Введение в React" onClick={handleClick} />
    </Breadcrumbs>
    )

}

export default NavBreadcrumb;