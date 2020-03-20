import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Layout from './components/layout/'
import Main from './components/pages/main'
import ProductPage from './components/product'
import "./assets/css/vendor/bootstrap.min.css";

import { StyledGlobal } from './components/theme'
import store from './store';
import { getAllProducts } from './actions/index.js';


import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends Component{

    
    render(){
        store.dispatch(getAllProducts());

        return (
            <StyledGlobal>

            <Provider store={store}>
        {/* Aqui va lo del multilanguaje */}
                <BrowserRouter basename={'/'}>
                    {/* scrollcontent */}
                    <Switch>
                        <Layout>
                            <Route exact path={'/'} component={Main} />
                            <Route path={`${process.env.PUBLIC_URL}/product/:id`} component={ProductPage}/>
                        </Layout>
                    </Switch>
                </BrowserRouter>


            </Provider>
            </StyledGlobal>

        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
