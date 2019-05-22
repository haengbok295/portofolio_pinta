import React from 'react';
import bgHome from '../home.jpg';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Hu from '../hu.jpg';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

console.log(bgHome); 

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });

function Header() {
  return (
    <div class="bgHome">
        <Grid container spacing={0}>
        <Grid item xs={7}>
            <img src={Hu}/>
        </Grid>
        <Grid item xs={5}>
            <div class="beranda">
                <h1>Assalamualaikum</h1>
                <h3>안녕하세요</h3>
                <p>Selamat Datang di Pinta's Website</p>
                <Link to='/profile'>
                    <Button variant="outlined" color="secondary" className="button">
                        Cek Profile
                    </Button>
                </Link>
            </div>
        </Grid>
        </Grid>
    </div>
  )
}

export default Header;