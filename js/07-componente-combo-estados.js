import React, {Component, PropTypes} from 'react';

class ComboDeEstados extends Component {
	render() {
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
}

ComboDeEstados.propTypes = {
	id: PropTypes.string,
	defaultValue: PropTypes.string
}

export default ComboDeEstados;