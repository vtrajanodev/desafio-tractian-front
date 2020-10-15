import React , { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'


export default class Empresa extends Component{
    state = {
        empresa: [],
    }


    componentDidMount(){
        document.title = 'Supersônico Freios';
        this.loadCompany()
        
    }

    loadCompany = async () => {
        
        const empresa = await api.get('/empresa')
        
        this.setState({empresa: empresa.data})
        
    }


    render() {

        const { empresa } = this.state;

    return (

        <div className="content">


            <div className="title">
                <h2>
                    {empresa.map(company => (
                    company.name))}
                </h2>

                <p>{empresa.map(company => (
                    company.description))}</p>
            </div>  

            <div className="box-align"> 
                
                <div className="box">
                   <p>Troca de fluido de freio</p>
                    
                </div>
                
                <div className="box">
                <p>Soluções em cilindros de freio</p>

                </div>
                
                <div className="box">
                <p>Ativos mordernos e de qualidade</p>

                </div>

                <div className="box">
                <p>Garantia de serviço por 18 meses</p>

                </div>

            </div> 

            <div className="links"> 
               
                <Link to={`/empresas?empresa=${empresa.map(company => (company._id))}` } >ACESSAR UNIDADES</Link>
                <Link to={`/ativo`}>ACESSAR ATIVOS</Link>

            </div>


        </div>
    )
    }
}