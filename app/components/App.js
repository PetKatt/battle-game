var USER_DATA = {
	name: "Piotr Wiercinski",
	username: "petkatt"
};

var React = require("react");
var PropTypes = require("prop-types");

/*Component Features:
	Focused
	Independent
	Reusable
	Small
	Testable	
*/

class ProfilePic extends React.Component {
	redner() {
		return(
			<img 
				src={"https://github.com/" + this.props.username + ".png?size=200"}
				style={{height: 100, width: 100}}
			/>
		);
	}
}

ProfilePic.propTypes = {
	username: PropTypes.string.isRequired
};

/*--------------------------------------------*/

class ProfileLink extends React.Component {
	render() {
		return(
			<a href={"https://www.github.com/" + this.props.username}>
				@{this.props.username}
			</a>
		);
	}
}

ProfileLink.propTypes = {
	username: PropTypes.string.isRequired
};

/*--------------------------------------------*/

class ProfileName extends React.Component {
	render() {
		return(
			<div>{this.props.name}</div>
		);
	}
}

ProfileName.propTypes = {
	name: PropTypes.string.isRequired
};

/*--------------------------------------------*/

class ProfileCard extends React.Component {
	render() {
		return(
			<div>
				<ProfilePic username={this.props.user.username} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		);
	}
}

ProfileCard.propTypes = {
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired
};

/*--------------------------------------------*/

class App extends React.Component {
	render() {
		return(
			<ProfileCard user={USER_DATA} />
		);
	}
}

module.exports = App;