import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        email:''
    }
    add =(e)=>{
        e.preventDefault();

        if(this.state.name === '' || this.state.email ===''){
            alert("All Fields are madotory ")
        }else{
            this.props.addContactHandler(this.state);
            this.setState({name:"",email:''});
            // console.log(this.state);
        }
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>

                <form className="ui form" onSubmit={this.add} >

                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} placeholder="Name"/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email}  name="email" placeholder="email"/>
                </div>

                <button className="ui button blue ">Add Contact</button>

                </form>
            </div>
        )
    }
};
export default AddContact;