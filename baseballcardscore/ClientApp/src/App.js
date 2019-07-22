import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { CardList } from './components/CardList';
import { AddCard } from './components/AddCard';
import { MyCollection } from './components/MyCollection';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route path='/mycollection' component={MyCollection} />
            <Route path='/cardlist' component={CardList} />
            <Route path='/addcard' component={AddCard} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={CardList} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />

      </Layout>
    );
  }
}
