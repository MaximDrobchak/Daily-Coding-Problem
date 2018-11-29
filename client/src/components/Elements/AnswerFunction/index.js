import React from 'react';
import { connect } from 'react-redux';
import * as actionsType from '../../../constants/actionsType';
import './style.scss';
import { Button } from '../';

// const  fetchData = async params => {
// 	const response = await fetch('/api/world', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ post: params }),
// 	});
// 	const body = await response.text();
// 	return body
// }

class AnswerFunction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			decision: '',
		};
	}

	async componentDidMount() {
		const { userEmail } = this.props;

		const response = await fetch('/api/world', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ post: userEmail }),
		});

		const body = await response.text();
		this.setState({ decision: body });
	}

	onChange = e => this.setState({ value: e.target.value });

	onSubmit = e => {
		e.preventDefault();

		const { onSend } = this.props;
		const { value } = this.state;

		onSend(value);
	};

	render() {
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<h1>{this.state.decision}</h1>
				<textarea
					value={this.state.value}
					onChange={this.onChange}
					id="AnswerFunction"
					cols="70"
					rows="15"
				/>
				<br />
				<Button color="black" type="submit">
					Send
				</Button>
			</form>
		);
	}
}
const mapSetToProps = state => ({
	userEmail: state.sessionState.authUser.email,
});
const mapDispatchToProps = dispatch => ({
	onSend: value =>
		dispatch({
			type: actionsType.ON_SAND_VALUE,
			value,
		}),
});

export default connect(
	mapSetToProps,
	mapDispatchToProps,
)(AnswerFunction);
