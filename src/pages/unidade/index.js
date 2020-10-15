import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'


export default class Unidade extends Component{
    state = {
        unit: [],
        
    }


    componentDidMount(){
        document.title = 'Nossas Unidades';
        this.loadUnit()
        
    }

     loadUnit = async () => {
        
        const unit = await api.get('/unidade')
        console.log(unit.data)
        
        this.setState({unit: unit.data})
        
    }


    render() {

        const { unit } = this.state;

        return (

            <div className="container">  
                
                <div className="container-links">

                    <a href="/empresa" className="back">Início</a>
                    <a href="/empresa" className="back">Voltar</a>
                    
                </div>


                <div className="unit-list">
                    {unit.map(unidade => (

                        <article key={unidade._id}>
                            <strong> <h1>Unidade: {unidade.name}</h1></strong>
                            <p>Endereço: {unidade.description}</p>
                            <p>Empresa: {unidade.empresa}</p>
                            <a href="#">Buscar ativos</a>
                        </article>
                    ))}

                </div>



            </div> 
           
        )
    }
    
}