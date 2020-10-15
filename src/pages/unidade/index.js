import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'


export default class Unidade extends Component{
    state = {
        unit: [],
        
    }

    componentDidMount(){
        document.title = 'Nossas Unidades';
        this.loadUnit()
        
    }


    loadUnit = async () => {

        const { location: { search } } = this.props;

        const unit = await api.get(`/empresas${search}`)
        
        this.setState({unit: unit.data})
        
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
                            <strong> <h1>Unidade: {unidade.name}</h1></strong>
                            <p>Endereço: {unidade.description}</p>
                            <p>Empresa: {unidade.empresa}</p>
                            <a href={`/ativos?unidade=${unidade._id}`}>Buscar ativos</a>
                        </article>
                    ))}

                </div>



            </div> 
           
        )
    }
    
}