var MaskedInput = React.createClass({
	propTypes: {
		id: React.PropTypes.string.isRequired,
		isReverse: React.PropTypes.bool,
		placeHolder: React.PropTypes.string,
		mask: React.PropTypes.string.isRequired
	},

	getInitialState: function() {
		return {
			valor: ''
		};
	},

	handleChange: function(e){
		this.setState({
			valor : e.target.value
		});
	},

	componentDidMount: function() {
		var $input = $(ReactDOM.findDOMNode(this.refs[this.props.id]));
		var isReverse = false || this.props.isReverse;
		var placeHolder = '' || this.props.placeHolder;

		$input.mask(this.props.mask, {
			reverse: isReverse,
			placeholder: placeHolder
		});
	},

	render: function() {
		return React.createElement('input', {
			id: this.props.id,
			ref: this.props.id,
			type: 'text',
			defaultValue: this.props.defaultValue,
			onChange: this.handleChange,
		}, null);
	}
});