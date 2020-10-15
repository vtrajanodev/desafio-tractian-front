import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'


export default class AllUnit extends Component{
    state = {
        unit: [],
        
    }

    componentDidMount(){
        document.title = 'Nossas Unidades';
        this.loadUnit()
        
    }


    loadUnit = async () => {


        const response = await api.get('/unidade')
        
        this.setState({unit: response.data})
        
    }


    render() {

        const { unit } = this.state;

        return (

            <div className="container">  
                
                <div className="container-links">

                    <Link to="/empresa" className="back">Início</Link>
                    <Link to="/empresa" className="back">Voltar</Link>
                    
                </div>


                <div className="unit-list">
                    
                    {unit.map(unidade => (

                        <article key={unidade._id}>
                            <strong> <h1>{unidade.name}</h1></strong>
                            <p><strong>Endereço:</strong> {unidade.adress}</p>
                            <p><strong>Especialização:</strong> {unidade.description}</p>
                            <a href={`/ativos?unidade=${unidade._id}`}>Buscar ativos</a>
                        </article>
                    ))}

                </div>



            </div> 
           
        )
    }
    
}