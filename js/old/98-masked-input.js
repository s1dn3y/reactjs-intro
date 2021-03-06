var MaskedInput = React.createClass({
	propTypes: {
		id: React.PropTypes.string,
		isReverse: React.PropTypes.bool,
		placeHolder: React.PropTypes.string,
		mask: React.PropTypes.string.isRequired,
		defaultValue: React.PropTypes.string
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
		var $input = $(this.refs.input);
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
			ref: 'input',
			type: 'text',
			defaultValue: this.props.defaultValue,
			onChange: this.handleChange,
		}, null);
	}
});