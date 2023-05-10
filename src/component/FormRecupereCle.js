import React from 'react';
import axios from 'axios';

class FormRecupererCle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            motdepasse: '',
            cle: ''
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    SelectionneCle(data){
        
        axios({
            method: 'post',
            url: `http://localhost/ApiFinalVenteVoiture/utilisateur/cle`,
            data: {
                username: data.username,
                motdepasse: data.motdepasse,
                
                
            }
        }).then((resultat) => {
                const cle = resultat.data.cle;
                
                console.log(cle);
                this.setState({cle: cle});
                
            })
            .catch((error) => {
                console.log(data);
            });
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const book = {
            username: this.state.username,
            motdepasse: this.state.motdepasse,
            cle: this.state.cle,
        };
        this.SelectionneCle(book);
        event.preventDefault();
        this.clearInput();
    }

    clearInput() {
        this.setState({
            
            username: '',
            motdepasse: ''
            
        });
    }


    render(){

        return (
            <tr>
            <div className='FormRecupererCle'>
                
                <h2> Récupérer Clé</h2>

                <form onSubmit={this.handleSubmit}>

                    <table className='FormRecupererCle'>
                        <tbody>
                        <tr>
                             <td><label>username :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>mot de passe :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="motdepasse"
                                    name="motdepasse"
                                    value={this.state.motdepasse}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Clé:</td>
                            <td>{this.state.cle}</td>
                           
                        </tr>
                        
                        <tr>
                            <td></td>
                            <td style={{'textAlign':'right'}}>
                                <input type="button" value="Cancel"/>
                                <input type="submit" value="Récupérer" />
                            </td>
                        </tr>

                        
                        
                        </tbody>
                    </table>

                    
                </form>
                
            </div>
            </tr>
            
        );
        
    }
}

export default (FormRecupererCle);