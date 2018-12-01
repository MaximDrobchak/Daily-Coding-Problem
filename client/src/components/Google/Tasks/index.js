import React from 'react';
import { connect } from 'react-redux';
import { doUpdateList } from '../../../actions/';

import { AnswerFunction } from '../../Elements';

class Tasks extends React.Component {
	async componentDidMount() {
		const param = 'Google';
		const response = await fetch('/api/problems', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ post: param }),
		});
		const body = await response.json();
		// console.log(body);
		this.props.onUpdateList(body);
	}

	render() {
		const { list } = this.props;
		console.log(list);
		return (
			<div>
				<ul>
					{Object.values(list).map((item, index) => (
						<li key={index}>
							<span>{item.id}</span>
							<p>{item.description}</p>
						</li>
					))}
				</ul>
				<AnswerFunction />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onUpdateList: body => dispatch(doUpdateList(body)),
});

const mapStateToProps = state => ({
	list: state.listState,
});
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Tasks);
