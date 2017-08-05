var ComponenteCampoCpf = React.createClass({
	render: function() {
		var meuID = this.props.id;
		return (
			React.createElement('input', {
				id: meuID,
				type: 'text',
				defaultValue: this.props.defaultValue,   // value VS defaultValue!!!
				onBlur: function(ev) {
					console.log(this.state);
					var ehValido = validarCPF(ev.target.value);
					console.log(meuID, ehValido ? 'CPF válido!' : 'CPF inválido...');
				}
			}, null)
		);
	},
	getInitialState: function() {
		return {
			value: this.props.defaultValue
		};
	}	
});