import React from 'react';
import axios from 'axios';

export default class PortoInput extends React.Component {
    state = {
        judul: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        const portof ={
            judul: this.state.judul
        }
        axios.post('https://my-json-server.typicode.com/haengbok295/portofolio_api/portofolio', {portof})
        .then(res =>{
            console.log(res);
            console.log(res.data);
        })
    }

    handleChange = event => {
        this.setState({judul: event.target.value});

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Judul:
                    <input type="text" name="judul" onChange ={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        )

    }
}