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
        console.log(active.data)
        
        this.setState({active: active.data})
        
    }


    render() {

        const { active } = this.state;

        return (

            <div className="container">  
                
                <div className="container-links">

                    <Link to="/empresa" className="back">Início</Link>
                    <Link to="/unidade" className="back">Voltar</Link>
                    
                </div>


                <div className="unit-list">
                    {active.map(ativo => (

                        <article key={ativo._id}>
                            <img width="150" height="150" alt="Img do ativo" src={ativo.img}></img>
                            <p>Nome: {ativo.name}</p>
                            <p>Descrição: {ativo.description}</p>
                            <p>Modelo: {ativo.model}</p>
                            <p>Status: {ativo.status}</p>
                            <p>N° Série: {ativo._id}</p>
                            <p>Nível de saúde: {ativo.healthStatus}</p>
                            <p>Unidade: {ativo.unidade}</p>

                        </article>
                    ))}

                </div>



            </div> 
           
        )
    }
    
}