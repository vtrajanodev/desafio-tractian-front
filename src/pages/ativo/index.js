import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'


export default class Ativo extends Component{
    state = {
        active: [],
        
    }


    componentDidMount(){
        document.title = 'Nossas Unidades';
        this.loadActive()
        
    }

     loadActive = async () => {
        
        const active = await api.get('/ativo')
        console.log(active.data)
        
        this.setState({active: active.data})
        
    }


    render() {

        const { active } = this.state;

        return (

            <div className="container">  
                
                <div className="container-links">

                    <a href="/empresa" className="back">Início</a>
                    <a href="/unidade" className="back">Voltar</a>
                    
                </div>


                <div className="unit-list">
                    {active.map(ativo => (

                        <article key={ativo._id}>
                            <img width="150" height="150" src={ativo.img}></img>
                            <p>Nome: {ativo.name}</p>
                            <p>Descrição: {ativo.description}</p>
                            <p>Modelo: {ativo.model}</p>
                            <p>N° Série: {ativo._id}</p>
                            <p>Unidade: {ativo.unidade}</p>

                        </article>
                    ))}

                </div>



            </div> 
           
        )
    }
    
}