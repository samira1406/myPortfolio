import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledTooBar = styled(Toolbar)(() => ({
        display:"flex",
        justifyContent:"space-between",
    }));
    return (
        <>
            <AppBar position="absolute">
                <StyledTooBar>
                    <MenuItem> Sobre mim</MenuItem>
                    <MenuItem> Skills</MenuItem>
                    <MenuItem> Projetos</MenuItem>
                </StyledTooBar>
            </AppBar>
        </>
    )
}

export default NavBar
