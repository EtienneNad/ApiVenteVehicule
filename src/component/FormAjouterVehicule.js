import React from 'react';

class FormAjouterVehicule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            marque: '',
            models: '',
            prix: '',
            description: '',
            image_url: '',
            nom_vendeur: '',
            adresse: '',
            ville: '',
            courriel: '',
            no_telephone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const vehicule = {
            marque: this.state.marque,
            models: this.state.models,
            prix: this.state.prix,
            description: this.state.description,
            image_url: this.state.image_url,
            nom_vendeur: this.state.nom_vendeur,
            adresse: this.state.adresse,
            ville: this.state.ville,
            courriel: this.state.courriel,
            no_telephone: this.state.no_telephone
        };
        this.props.addVehicule(vehicule);

        event.preventDefault();
        this.clearInput();
    }

    clearInput() {
        this.setState({
            marque: '',
            models: '',
            prix: '',
            description: '',
            image_url: '',
            nom_vendeur: '',
            adresse: '',
            ville: '',
            courriel: '',
            no_telephone: ''
        });
    }


    render(){

        return (
            <div className='formAjouterVehicule'>

                <h2>Ajouter un vehicule</h2>

                <form onSubmit={this.handleSubmit}>

                    <table className='VehiculesTable'>
                        <tbody>
                        <tr>
                            <td><label>Marque :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="marque"
                                    name="marque"
                                    value={this.state.marque}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Models :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="models"
                                    name="models"
                                    value={this.state.models}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Prix :</label></td>
                            <td>
                                <input
                                    type="number"
                                    id="prix"
                                    name="prix"
                                    value={this.state.prix}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Description :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Image_url :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="image_url"
                                    name="image_url"
                                    value={this.state.image_url}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Nom du vendeur :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="nom_vendeur"
                                    name="nom_vendeur"
                                    value={this.state.nom_vendeur}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Adresse :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="adresse"
                                    name="adresse"
                                    value={this.state.adresse}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Ville :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="ville"
                                    name="ville"
                                    value={this.state.ville}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Courriel :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="courriel"
                                    name="courriel"
                                    value={this.state.courriel}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Numéro de téléphone :</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="no_telephone"
                                    name="no_telephone"
                                    value={this.state.no_telephone}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{'textAlign':'right'}}>
                                <input type="button" value="Cancel" onClick={this.clearInput}/>
                                <input type="submit" value="Ajouter" />
                            </td>
                        </tr>
                       
                        </tbody>
                    </table>


                </form>
            </div>
        );
    }
}

export default (FormAjouterVehicule);