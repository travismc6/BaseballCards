import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
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
            <Route exact path='/' component={MyCollection} />
            <Route path='/fetch-data' component={FetchData} />

      </Layout>
    );
  }
}
