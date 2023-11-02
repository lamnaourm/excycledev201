import React, { Component } from 'react'
import { hourglass } from 'ldrs'

hourglass.register()

export default class Exemple extends Component {
    constructor(props){
        super(props)

        console.log('Appel de constructeur ....')

        this.state = {
            compteur:0,
            valeur:0,
            loading: true
        }
    }
  render() {
    console.log('Appel de render ....')

    if(this.state.loading)
        return <l-hourglass
                    size="100"
                    bg-opacity="0.1"
                    speed="1.75" 
                    color="darkblue" 
                ></l-hourglass>

    return (
      <div>
        <h1>Comteur: {this.state.compteur}</h1>
        <h1>Valeur : {this.state.compteur}</h1>
        <button onClick={() => this.setState({compteur: this.state.compteur+1})}>Incrementer</button>
      </div>
    )
  }

  componentDidMount(){
    console.log('Appel de componentDidMount ....')
    setTimeout(()=> this.setState({loading:false}), 5000)
  }

  componentDidUpdate(prevprops, prevstate){
    console.log('Appel de componentDidUpdate ')
    if(prevstate.compteur !== this.state.compteur){
        this.setState({valeur: this.state.valeur+this.state.compteur})
    }
  }

  componentWillUnmount(){
    console.log('Appel de componentWillUnmount ')

  }
}
