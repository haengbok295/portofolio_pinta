import React from 'react';
import Axios from 'axios';

export default class PortoList extends React.Component {
    state = {
        portos: []
    }

    componentDidMount(){
        Axios.get('https://my-json-server.typicode.com/haengbok295/portofolio_api/portofolio')
        .then(res =>{
            console.log(res);
            this.setState({portos: res.data});
        })
    }
    render() {
        return (
            <ul>
                {this.state.portos.map(porto => <li key={porto.judul}>{porto.judul}</li>)}
                {this.state.portos.map(porto => <li key={porto.deskripsi}>{porto.deskripsi}</li>)}
            </ul>
        )

    }
}