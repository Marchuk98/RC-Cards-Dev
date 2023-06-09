import React, {useCallback} from 'react';
import {Menu, MenuItem} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {authThunks} from "../../features/auth/auth.slice.ts";
// import avatar from "../../assets/img/ava.png"
import Divider from '@mui/material/Divider'
import Typography from "@mui/material/Typography";

export const SimpleMenu = () => {

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const getProfile = useAppSelector(state => state.profileReducer.profile)

    const {name,avatar} = getProfile

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }
    const redirectToProfileHandler = () => {
        navigate("/")
    }
    const redirectToLogoutHandler = useCallback(() =>{
        dispatch(authThunks.logout()).then(()=>{
            navigate("/login")
        })
    },[])

    const redirectToPacksItemHandler = ()=> {
        navigate('/packs-item')
    }

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    return (
        <div>

            <Box sx={{ flexGrow: 0 }}>
                <Typography component={'span'} sx={{ fontWeight: '500', fontSize: '16px',marginRight:"30px" }}>
                    {name}
                </Typography>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={avatar} />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem
                        onClick={redirectToProfileHandler}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',padding:"7px" }}
                    >
                        Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={redirectToLogoutHandler} sx={{ display: 'flex', alignItems: 'center', columnGap: 2,padding:"7px" }}>
                        {/*Вставить иконку выхода*/}
                        Logout
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={redirectToPacksItemHandler} sx={{ display: 'flex', alignItems: 'center', columnGap: 2,padding:"7px" }}>
                        {/*Вставить иконку пачки*/}
                        Packs
                    </MenuItem>
                </Menu>
            </Box>
        </div>
    );
}