import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'


export default class getActive extends Component{
    state = {
        active: [],
        unidade: ''
    }

    

    componentDidMount(){
        document.title = 'Ativos por unidade';
        this.loadActive()
        
    }

     loadActive = async () => {

        const { location: { search } } = this.props;

        const active = await api.get(`/ativos${search}`)
                
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


                <div className="active-list">
                    {active.map(ativo => (

                        <article key={ativo._id}>
                            <img alt="Img do ativo" width="150" height="150" src={ativo.img}></img>
                            <p>Nome: {ativo.name}</p>
                            <p>Descrição: {ativo.description}</p>
                            <p>Status: {ativo.status}</p>
                            <p>Modelo: {ativo.model}</p>
                            <p>Nivel de saúde: {ativo.healthStatus}</p>
                            <p>N° Série: {ativo._id}</p>
                            <p>Ref Unidade: {ativo.unidade}</p>

                        </article>
                    ))}

                </div>



            </div> 
           
        )
    }
    
}