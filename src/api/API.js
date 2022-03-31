import React, { Component } from 'react'



//Here is your API key: c16ec1a3
class API extends Component {//export default function App
    state = {
            data: null
        }


    componentDidMount = () => {
    const apikey = `c16ec1a3`;
    const search = 'godfather';
    const url = `http://www.omdbapi.com/?s=${search}apikey=${apikey}`;//http://www.omdbapi.com/?s=${search}apikey=${apikey}
        fetch(url)
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              data: data
            })
          );
      };

      render(){
        return (
            <>
          <h1>hi</h1>
          </>
        );
      }
      }
  
      export default API;
 