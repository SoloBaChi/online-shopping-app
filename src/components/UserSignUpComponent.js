require('../signup.css');

const UserSignUp = props => {
	return(
		<div className="signup-section">
		 <form className="signup-form-group">
		 <label htmlFor="firstname">Firstname: <span>&#10045;</span></label>
		  <input 
		  type="text"
		  />
		  <label htmlFor="lastname">Lastname: <span>&#10045;</span></label>
		  <input
		  type="text"
		  />
		  <label htmlFor="email">Email: <span>&#10045;</span></label>
		  <input 
		  type="email"
		  />
		  <label htmlFor="password">Password: <span>&#10045;</span></label>
		  <input
		   type="password"
		  />
		  <button type="submit">Sign Up</button>
		 </form>
		</div>
		);

}
export default UserSignUp;