import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'


export default class Ativo extends Component{
    state = {
        active: [],
    }


    componentDidMount(){
        document.title = 'Ativos em estoque';
        this.loadActive()
        
    }

    loadActive = async () => {
        
        const active = await api.get(`/ativo`)
        
        this.setState({active: active.data})
        
    }


    render() {

        const { active } = this.state;

        return (

            <div className="container">  
                
                <div className="container-links">

                    <Link to="/empresa" className="back">Início</Link>
                    <Link to="/unidade" className="back">Unidades</Link>
                    
                </div>


                <div className="actives-list">
                    {active.map(ativo => (

                        <article key={ativo._id}>
                            <img width="150" height="150" alt="Img do ativo" src={ativo.img}></img>
                            <p>Nome: {ativo.name}</p>
                            <p>Descrição: {ativo.description}</p>
                            <p>Modelo: {ativo.model}</p>
                            <p>Status: {ativo.status}</p>
                            <p>Nível de saúde: {ativo.healthStatus}</p>
                            <p>N° Série: {ativo._id}</p>
                            <p>Ref Unidade: {ativo.unidade}</p>

                        </article>
                    ))}

                </div>



            </div> 
           
        )
    }
    
}