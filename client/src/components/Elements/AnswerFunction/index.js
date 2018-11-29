import React from 'react';
import { connect } from 'react-redux';
import * as actionsType from '../../../constants/actionsType';
import './style.scss';
import { Button } from '../';

function doAdd(answer) {
	return {};
}
class AnswerFunction extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
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

const mapDispatchToProps = dispatch => ({
	onSend: value =>
		dispatch({
			type: actionsType.ON_SAND_VALUE,
			value,
		}),
});

export default connect(
	null,
	mapDispatchToProps,
)(AnswerFunction);
