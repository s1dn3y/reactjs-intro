var estados = {
	'AC': 'Acre',
	'AL': 'Alagoas',
	'AM': 'Amazonas',
	'AP': 'Amapá',
	'BA': 'Bahia',
	'CE': 'Ceará',
	'DF': 'Distrito Federal',
	'ES': 'Espírito Santo',
	'GO': 'Goiás',
	'MA': 'Maranhão',
	'MT': 'Mato Grosso',
	'MS': 'Mato Grosso do Sul',
	'MG': 'Minas Gerais',
	'PA': 'Pará',
	'PB': 'Paraíba',
	'PR': 'Paraná',
	'PE': 'Pernambuco',
	'PI': 'Piauí',
	'RJ': 'Rio de Janeiro',
	'RN': 'Rio Grande do Norte',
	'RO': 'Rondônia',
	'RS': 'Rio Grande do Sul',
	'RR': 'Roraima',
	'SC': 'Santa Catarina',
	'SE': 'Sergipe',
	'SP': 'São Paulo',
	'TO': 'Tocantins',
};

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
			<select props={propriedades}>
				<option>Selecione um estado</option>
				function() {
					var options = [];
					Object.keys(estados).map(function(sigla) {
						options.push(
							<option props={value: sigla}>{estados[sigla]}</option>
						);
					});
					return options;
				}()
			</select>
		);
	}
});