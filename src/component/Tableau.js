import React from 'react';
import LigneTableau from "./LigneTableau";
import axios from 'axios';
import FormAjouterVehicule from "./FormAjouterVehicule";
import FormRecupererCle from './FormRecupereCle';
import ModifierVehicule from "./ModifierVehicule"
import Weather from './Weather';
class Tableau extends React.Component{
    constructor(props) {
        
        super(props);
        this.state = {
            vehicules:[],
            titre: 'Liste de vehicule',
            
        };
        
        this.addVehicule = this.addVehicule.bind(this);
        this.modifierVehicule = this.modifierVehicule.bind(this);
        this.deleteVehicule = this.deleteVehicule.bind(this);
    }

    componentDidMount() {
        const token='dXNlcm5hbWU6QWRtaW4gbW90ZGVwYXNzZTpxd2VydHk=';
        axios({
            method: 'get',
            url: 'http://localhost/ApiFinalVenteVoiture/vehicule/all',
           headers:{
                     Authorization:`Bearer ${token}`
             }
        })
            .then((res) => {
                const vehicules = res.data;
                this.setState({ vehicules });
            })
    }
    

    addVehicule(data) {
            const token='dXNlcm5hbWU6QWRtaW4gbW90ZGVwYXNzZTpxd2VydHk=';        
            axios({
            method: 'POST',
            url: 'http://localhost/ApiFinalVenteVoiture/vehicule',
            data: {
                
                marque: data.marque,
                models: data.models,
                prix: data.prix,
                description: data.description,
                image_url: data.image_url,
                nom_vendeur: data.nom_vendeur,
                adresse: data.adresse,
                ville: data.ville,
                courriel: data.courriel,
                no_telephone: data.no_telephone
            },
            headers:{
                Authorization:`Bearer ${token}`
        }
        })
            .then((res) => {
                data.id = res.data.id;
                const vehicules = [...this.state.vehicules, data];
                this.setState({ vehicules });
                this.componentDidMount();
            })
    }


    modifierVehicule(data){
        const token='dXNlcm5hbWU6QWRtaW4gbW90ZGVwYXNzZTpxd2VydHk=';
        axios({
            method: 'PUT',
            url: `http://localhost/ApiFinalVenteVoiture/vehicule/modif`,
            data: {
                id: data.id,
                marque: data.marque,
                models: data.models,
                prix: data.prix,
                description: data.description,
                image_url: data.image_url,
                nom_vendeur: data.nom_vendeur,
                adresse: data.adresse,
                ville: data.ville,
                courriel: data.courriel,
                no_telephone: data.no_telephone
                
            },
            headers:{
                Authorization:`Bearer ${token}`
        }
        }).then((resultat) => {
                const editedVehiculeList = this.state.vehicules.map(
                    vehicule => {
                        if (data.id === vehicule.id){
                            return {
                                id: resultat.data.id,
                                marque: resultat.data.marque,
                                models: resultat.data.models,
                                prix: resultat.data.prix,
                                description: resultat.data.description,
                                image_url: resultat.data.image_url,
                                nom_vendeur: resultat.data.nom_vendeur,
                                adresse: resultat.data.adresse,
                                ville: resultat.data.ville,
                                courriel: resultat.data.courriel,
                                no_telephone: resultat.data.no_telephone
                                
                            }
                        }
                        return vehicule;
                    });
                this.setState({vehicules: editedVehiculeList});
                this.componentDidMount();
            });
    }


    deleteVehicule(id){
        const token='dXNlcm5hbWU6QWRtaW4gbW90ZGVwYXNzZTpxd2VydHk=';
        axios({
            method: 'DELETE',
            url: `http://localhost/ApiFinalVenteVoiture/vehicule/${id}`,
            headers:{
                Authorization:`Bearer ${token}`
        }
        }).then((resultat) => {
            const remainingVehiculeList = this.state.vehicules.filter(vehicule => id !== vehicule.id);
            this.setState({vehicules: remainingVehiculeList});
        })
    }
   

    handleChange = (event) => {
        this.setState({titre:event.target.value});
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const lignesTableau = this.state.vehicules.map(transport => (
            <LigneTableau delete={this.deleteVehicule} id={transport.id} marque={transport.marque} models={transport.models} prix={transport.prix} description={transport.description}
              image_url={transport.image_url} nom_vendeur={transport.nom_vendeur} adresse={transport.adresse} 
              ville={transport.ville} courriel={transport.courriel} no_telephone={transport.no_telephone} key={transport.id} />
        ))
      
        return(
            <div className="App">
                <header className="App-header">
                    <h1>{this.state.titre}</h1>
                    <Weather /> 
                    <tr>
                        <th>
                            <FormAjouterVehicule addVehicule={this.addVehicule}/>
                        </th>
                        <th>
                            <ModifierVehicule modifier={this.modifierVehicule}/>
                        </th>
                    </tr>
                    <h3>{this.props.titre}</h3>

                    <table className="VehiculesTable">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>marque</th>
                            <th>model</th>
                            <th>prix</th>
                            <th>description</th>
                            <th>nom vendeur</th>
                            <th>adresse</th>
                            <th>ville</th>
                            <th>courriel</th>
                            <th>no_telephone</th>
                            <th>image</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                            
                            {lignesTableau}
                            
                        </tbody>
                    </table>
                    <FormRecupererCle/>
                </header>
            </div>
        );
    }
}

export default (Tableau);