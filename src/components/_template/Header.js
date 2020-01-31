import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import imgIdea from '../../assets/img/bg_idea.png';


const Header =(props) => {

    const MainLinkList = props.navigation.mainMenu.items.map((item) => {            
        return <Button key={item.patch} to={item.patch} component={Link}>{item.name}</Button>
    })

    const classes = makeStyles(theme => ({
        toolbar: theme.mixins.toolbar,
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
              display: 'none',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            
            border: 'solid #e1e1e1',
            borderWidth:'1px',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(1),
              width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        signUp:{
            whiteSpace:'nowrap',
            marginRight: theme.spacing(2), 
        },
         
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 120,
                '&:focus': {
                width: 200,
                },
            },
        },
        toolbarSecondary: {
            justifyContent: 'center',
            overflowX: 'auto',
        }
    }))();

    return (
        <>
        <AppBar color="default" position="fixed" className="app-bar">
            <Toolbar  className={`header-top-toolbar ${classes.toolbar}`}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.onClickDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <img src={imgIdea} alt="" className="img-idea"/>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                >
                    Malpinsoft.com                
                </Typography>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">                    
                    {MainLinkList}    
                </ButtonGroup>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

const mapStateToProps = store => {
    return {
        navigation: store.navigation
    }
  }

export default connect(mapStateToProps)(Header);