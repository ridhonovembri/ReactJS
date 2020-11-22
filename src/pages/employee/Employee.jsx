import React from 'react';

class Employee extends React.Component {
    constructor(props){
        super(props);
        this.state = {apiResponse:""};
    }

    callAPI(){
        fetch("http://localhost:8000/getEmployee")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount(){
        this.callAPI();
    }
  
   
    render(){
        return(
            <div>
                <p>this is employee page</p>
                <p>{this.state.apiResponse}</p>
            </div>
        )
    }
}

export default Employee;