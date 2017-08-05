var ComponenteCampoCpf = React.createClass({
	render: function() {
		console.log(this.props);
		var meuID = this.props.id;
		return (
			React.createElement('form', null,
				React.createElement('input', {
					id: meuID,
					type: 'text'
				}, null),
				React.createElement('input', {
					type: 'button',
					value: 'Validar',
					onClick: function() {
						var ehValido = validarCPF(document.getElementById(meuID).value);
						console.log(meuID, ehValido ? 'CPF válido!' : 'CPF inválido...');
					}
				}, null)
			)
		);
	},

	componentWillMount: function() {
		console.log('componentWillMount');
	},

	componentDidMount: function() {
		console.log('componentDidMount');
	},

	componentWillUpdate: function() {
		console.log('componentWillUpdate');
	},

	componentDidUpdate: function() {
		console.log('componentDidUpdate');
	},

	shouldComponentUpdate: function() {
		console.log('shouldComponentUpdate');
	}
});