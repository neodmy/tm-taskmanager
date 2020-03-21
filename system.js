const System = require('systemic');
const { join } = require('path');

module.exports = () => new System({ name: 'tm-taskmanager' })
	.bootstrap(join(__dirname, 'components'));
