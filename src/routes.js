import React from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Empresa from './pages/empresa'
import Unidade from './pages/unidade'
import Ativo from './pages/ativo'
import getActive from './pages/getActive'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/empresa" exact component={Empresa} />
            <Route path="/empresas" component={Unidade} />
            <Route path="/ativo" exact component={Ativo}/>
            <Route path="/ativos" component={getActive}/>
            <Route path="/unidade" exact component={Unidade}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
