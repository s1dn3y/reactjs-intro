var ComboDeEstados = React.createClass({
	propTypes: {
		id: React.PropTypes.string,
		defaultValue: React.PropTypes.string
	},

	render: function() {
		var propriedades = popularObjetoCom({
			id: this.props.id,
			defaultValue: this.props.defaultValue
		});

		return (
			<select>
				<option>Selecione um estado</option>
				{Object.keys(estados).map(function(sigla) {
					return (
						<option value={sigla}>{estados[sigla]}</option>
					);
				})}
			</select>
		);
	}
});