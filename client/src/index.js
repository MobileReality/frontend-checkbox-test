import React from 'react';
import ReactGA from 'react-ga';
import Scroll from 'react-scroll';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store';
import routes from './routes';
import './styles/main.scss';

ReactGA.initialize('UA-62297361-1');

const logPageView = () => {
    ReactGA.set({ page: window.location.hash + window.location.search });
    ReactGA.pageview(window.location.hash + window.location.search);
};

Scroll.Events.scrollEvent.register('begin', (to) => {
    ReactGA.event({
        category: 'Scroll events',
        action: `Someone scrolled with ${to} link`
    });
});


render(
    <Provider store={store}>
        <HashRouter onUpdate={logPageView}>
            {routes}
        </HashRouter>
    </Provider>,
    document.getElementById('main')
);
