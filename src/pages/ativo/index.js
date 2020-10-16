import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'


export default class Ativo extends Component{
    state = {
        active: [],
        productInfo: {},
        page: 1
    }


    componentDidMount(){
        document.title = 'Ativos em estoque';
        this.loadActive()
        
    }

    loadActive = async (page = 1) => {
        
        const active = await api.get(`/ativo?page=${page}`)

        const {docs, ...productInfo} = active.data
        
        this.setState({active: docs, productInfo, page })
        
    }

    prevPage = () => {
        const {page} = this.state

        if (page === 1) return;

        const pageNumber = page - 1

        this.loadActive(pageNumber)
    }

    
    nextPage = () => {
        const {page, productInfo} = this.state

        if (page === productInfo) return;

        const pageNumber = page + 1

        this.loadActive(pageNumber)
    }


    render() {

        const {active , page, productInfo} = this.state


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

                <div className="actions">
               
                    <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
                    <button className="desabilitado" >Pagina: {page}</button>

                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                
                </div>




            </div> 
           
        )
    }
    
}