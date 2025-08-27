import { Box, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/perfil.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/animatedBackground";



const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center"

}));

const StyledImage = styled("img")(() => ({
  width: "80%",
  maxWidth: "300px",
  borderRadius: "50%",
  display: "block",
  margin: "0 auto",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImage src={Avatar} />
              </Box>
            </Box>

          </Grid>
          <Grid item xs={12} md={7} textAlign="center">
            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
              Samira Resende
            </Typography>
            <Typography color="primary.contrastText" variant="h5" gutterBottom>
              Desenvolvedora de Software
            </Typography>

            <Grid container display="flex" justifyContent="center" spacing={3}pt={3}> 
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon />
                  <Typography>
                    Download CV
                  </Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>
                    Contato
                  </Typography>
                </StyledButton>
              </Grid>
            </Grid>


          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
