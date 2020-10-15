import React from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Empresa from './pages/empresa'
import Unidade from './pages/unidade'
import Ativo from './pages/ativo'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/empresa" exact component={Empresa} />
            <Route path="/empresas" exact component={Unidade} />
            <Route path="/ativo" exact component={Ativo}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
