import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm/indes';
import error404 from './pages/error404';

const Routes = () => {
    return (
        <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
                <Route path="" component={error404} />
            {/* <Switch>
            </Switch>
            <Switch>
            </Switch>
            <Switch>
            </Switch>
            <Switch>
            </Switch> */}
        </BrowserRouter>
    );
}


export default Routes;