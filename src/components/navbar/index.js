import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/Logo.png';
import DownloadIcon from '@mui/icons-material/Download';

const pages = ['About Me', 'Skills', 'Projects', 'Contact Me'];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ border: '0px solid gray', py: { xs: 2, sm: 3 } }}>
            <AppBar position="static" sx={{ px: { xs: 0, sm: 4 }, backgroundColor: 'white', '&.MuiAppBar-root': { boxShadow: 'none' } }}>
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ width: 140, height: 40, border: '0px solid gray' }}>
                        <img alt='Logo' src={Logo} />
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, border: '0px solid gray', gap: 4 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2 }}
                            >
                                <Typography sx={{ color: '#000000', fontSize: 20, fontWeight: 600, textTransform: 'none' }}>{page}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ border: '0px solid gray', display: { xs: 'none', md: 'flex' } }}>
                        <Button variant="contained" sx={{ backgroundColor: 'black', textTransform: 'none', py: 2, px: 2.5 }} endIcon={<DownloadIcon />}>
                            Resume
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, border: '0px solid gray' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="gray"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar