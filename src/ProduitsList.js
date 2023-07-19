import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const ProduitsList = () => {
    const [prod, setProd] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/produits").then((res) => {
            return res.json();
        }).then((resp) => {
            prod(resp);

        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="divbtn">
                    <Link to="/produits/create"className="btn">Ajouter produit</Link>
                </div>
                <div className="card-title">
                    <h2>Liste des produits</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text white">
                            <tr>
                                <td>ID</td>
                                <td>Nom</td>
                                <td>Prix</td>
                                <td>Quantite</td>
                                <td>Action</td>

                            </tr>
                        </thead>
                        <tbody>
                            {   prod &&
                                prod.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.nom}</td>
                                        <td>{item.prix}</td>
                                        <td>{item.quantite}</td>
                                        <td><a className="btn btn-success">Edit</a>
                                            <a className="btn btn-danger">Remove</a>
                                            <a className="btn btn-primary">Update</a>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>

                </div>


            </div>



        </div>



    );
}

export default ProduitsList;