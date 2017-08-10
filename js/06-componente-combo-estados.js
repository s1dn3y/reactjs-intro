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
			<select {...propriedades}>
				<option>Selecione um estado</option>
				{Object.keys(estados).map(sigla =>
					<option value={sigla} key={sigla}>{estados[sigla]}</option>
				)}
			</select>
		);
	}
});