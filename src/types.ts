export interface Project {
	projectId: string;
	name: string;
	description: string;
	createdAt: string;
	organizationId: string;
	env: string;
	environments: Environment[];
}

export interface Environment {
	environmentId: string;
	name: string;
	description: string;
	createdAt: string;
	env: string;
	projectId: string;
	applications: Application[];
	mariadb: MariaDB[];
	mongo: MongoDB[];
	mysql: MySQL[];
	postgres: PostgreSQL[];
	redis: Redis[];
	compose: Compose[];
}

export interface Application {
	applicationId: string;
	name: string;
	appName: string;
	description: string;
	env: string;
	// more fields...
}

export interface Compose {
	composeId: string;
	name: string;
	appName: string;
	description: string;
	env: string;
	// more fields...
}

export interface MariaDB {
	name: string;
	appName: string;
}

export interface MongoDB {
	name: string;
	appName: string;
}

export interface MySQL {
	name: string;
	appName: string;
}

export interface PostgreSQL {
	name: string;
	appName: string;
}

export interface Redis {
	name: string;
	appName: string;
}
