const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: "thebaron",
				mongodb_password: "RwXS2VsiZvfez7B",
				mongodb_cluster: "generic",
				mongodb_database: "portfolio-dev",
			},
		};
	}
	return {
		env: {
			mongodb_username: "thebaron",
			mongodb_password: "RwXS2VsiZvfez7B",
			mongodb_cluster: "generic",
			mongodb_database: "portfolio",
		},
	};
};
