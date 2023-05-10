import React from 'react';

class LigneTableau extends React.Component{
    handleDelete = (event) => {
        this.props.delete(event.target.value)
    }

    render() {
        return(
    
            <tr>
                
                    <td>{this.props.id}|</td>
                    <td>{this.props.marque}|</td>
                    <td>{this.props.models}|</td>
                    <td>{this.props.prix}|</td>
                    <td>{this.props.description}|</td>
                    <td>{this.props.nom_vendeur}|</td>
                    <td>{this.props.adresse}|</td>
                    <td>{this.props.ville}|</td>
                    <td>{this.props.courriel}|</td>
                    <td>{this.props.no_telephone}|</td>
                    <td>    
                        <img
                           src={this.props.image_url}
                           alt="new"
                           width="200" height="200"
                        />
                    </td>
                    
                    <td><button type="button" onClick={this.handleDelete} value={this.props.id}>Supprimer</button></td>
                
            </tr>
              
        );
    }
}

export default (LigneTableau);
