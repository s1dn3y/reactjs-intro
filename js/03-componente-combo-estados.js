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
			React.createElement('select', propriedades,
				React.createElement('option', null, 'Selecione um estado'),
				function() {
					var options = [];
					Object.keys(estados).map(function(sigla) {
						options.push(
							React.createElement(
								'option', {
									value: sigla
								},
								estados[sigla]
							)
						);
					});
					return options;
				}()
			)
		);
	}
});