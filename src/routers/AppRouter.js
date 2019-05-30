import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import TasksDashboardPage from '../components/TasksDashboardPage';
import AddTaskPage from '../components/AddTaskPage';
import LoginPage from '../components/LoginPage';
import EditTaskPage from '../components/EditTaskPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        <Switch>
            <Route path="/" component={TasksDashboardPage} exact={true}/>
            <Route path="/create" component={AddTaskPage} />
            <Route path="/edit/:id" component={EditTaskPage} />
            <Route path="/admin" component={LoginPage} />
                     
            <Route component={NotFoundPage} />
        </Switch>
        </div>
        
    </BrowserRouter>
)

export default AppRouter
