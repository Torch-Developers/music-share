import React, {useState, useEffect} from 'react';

import {AppBar, Button, Drawer, IconButton, makeStyles, MenuItem, Toolbar, Typography, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles(() => ({
    nav: {
        backgroundColor: "#010000",
        paddingRight: "15px",
        paddingLeft: "50px",
        "@media(max-width: 900px)": {
            paddingLeft: 0,
        }
    },
    brand: {
        fontFamily: "Roboto",
        fontWeight: 600,
        color: "#ffffff",
        textAlign: "left",
    },
    navButtons: {
        fontFamily: "Roboto",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    hambugerContainer: {
        padding: "20px 30px",
    },
}));

const navigationList = [
    {
        label: "Artists",
        href: "/artists",
    },
    {
        label: "Genres",
        href: "/genres",
    },
    {
        label: "Sign In",
        href: "#"
    }
]

const Navbar = () => {

    const { nav, brand, navButtons, toolbar, hambugerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        hamburgerOpen: false
    })

    const {mobileView, hamburgerOpen} = state;

    

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 
            ? setState((prevState) => ({ ...prevState, mobileView: true})) 
            : setState((prevState) => ({ ...prevState, mobileView: false}));
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
    }, []);

    const desktopView = () => {
        return (
        <Toolbar className={toolbar}>
            {appName}
            {getNavButtons()}
        </Toolbar>);
    };

    const getHamburgerOptions = () => {
        return navigationList.map(({label, href}) => {
            return (
                <Link {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: {textDecoration: "none"},
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const displayMobile = () => {
        const handleHamburgerOpen = () => setState((prevState) => ({...prevState, hamburgerOpen: true}));
        const handleHamburgerClose = () => setState((prevState) => ({...prevState, hamburgerOpen: false}));
        return (
            <Toolbar>
                <IconButton {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleHamburgerOpen,
                }}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: hamburgerOpen,
                        onClose: handleHamburgerClose,
                    }}
                >
                    <div className={hambugerContainer}>{getHamburgerOptions()}</div>
                </Drawer>
                <div>{appName}</div>
            </Toolbar>
        )
    }

    const getNavButtons = () => {
        return navigationList.map(({label, href}) => {
            return (
                <Button {...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: RouterLink,
                    className: navButtons
                }}>
                    {label}
                </Button>
            );
        });
    };

    const appName = (
        <Typography variant="h6" component="h1" className={brand} >
            Music Share
        </Typography>
    );

    return(
        <header>
            <AppBar className={nav}>{mobileView ? displayMobile() : desktopView()}</AppBar>
        </header>
    );
}

export default Navbar;