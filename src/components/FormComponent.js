import React,{Component} from 'react';
class FormComponent extends Component{
	constructor(){
		super();

		this.state ={
			name:"",
			address:"",
			gender:""
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	handleSubmit = (event) =>{
		event.preventDefault();
		
		console.log('data',{
			name:this.state.name,
			address:this.state.address,
			gender:this.state.gender,
		});
	}

	render(){
		return (

			<>
				<div className='container default-margin'>
					<h1 className='text-center'>Form Handling</h1>
					<hr/>
					<form onSubmit={this.handleSubmit}>
						<lable>Name</lable>{"   "}
						<input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
						<br/>
						<lable>Address</lable>{"   "}
						<textarea name="address" cols="30" rows="10" onChange={this.handleChange}>
							{this.state.address}
						</textarea>
						<br/>
						<lable>Gender</lable>
						<select name="gender" value={this.state.gender} onChange={this.handleChange}>
							<option value="">select</option>
							<option value="Male">Male</option>
							<option value="FeMale">FeMale</option>
						</select>
						<button>Submit</button>
					</form>
				</div>
			</>
		);
	}
}

export default FormComponent;