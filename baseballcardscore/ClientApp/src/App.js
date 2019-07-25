import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { CardChecklist } from './components/CardChecklist';
import { AddCard } from './components/AddCard';
import { MyCollection } from './components/MyCollection';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route path='/mycollection' component={MyCollection} />
            <Route path='/cardchecklist' component={CardChecklist} />
            <Route path='/addcard' component={AddCard} />
            <Route exact path='/' component={MyCollection} />
            <Route path='/fetch-data' component={FetchData} />

      </Layout>
    );
  }
}
