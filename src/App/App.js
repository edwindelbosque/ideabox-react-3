import React, { Component } from 'react';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas'
import { setIdeasToFetch } from '../apiCalls';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      setIdeasToFetch()
        .then(ideas => this.setState({ ideas: ideas }))
        .catch(error => this.setState({ error: error }))
    }, 3000)
  }

  addIdea = newIdea => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  removeIdea = id => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas });
  }


  render() {
    const loadingIcon =
      (
        <article>
          <div className="container">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
              </filter>
            </defs>
          </svg>
        </article >
      );

    return (
      <main className="App">
        <h1>IdeaBox</h1>
        {!this.state.ideas.length && loadingIcon}
        <Form addIdea={this.addIdea} />
        <Ideas
          ideas={this.state.ideas}
          removeIdea={this.removeIdea}
        />
      </main>
    )
  }
}