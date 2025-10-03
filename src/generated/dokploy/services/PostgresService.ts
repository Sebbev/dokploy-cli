/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class PostgresService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresCreate(requestBody: {
		name: string;
		appName: string;
		databaseName: string;
		databaseUser: string;
		databasePassword: string;
		dockerImage?: string;
		environmentId: string;
		description?: string | null;
		serverId?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param postgresId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresOne(postgresId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/postgres.one",
			query: {
				postgresId: postgresId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresStart(requestBody: { postgresId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.start",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresStop(requestBody: { postgresId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.stop",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresSaveExternalPort(requestBody: {
		postgresId: string;
		externalPort: number | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.saveExternalPort",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresDeploy(requestBody: { postgresId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.deploy",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresChangeStatus(requestBody: {
		postgresId: string;
		applicationStatus: "idle" | "running" | "done" | "error";
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.changeStatus",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresRemove(requestBody: { postgresId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.remove",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresSaveEnvironment(requestBody: {
		postgresId: string;
		env?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.saveEnvironment",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresReload(requestBody: {
		postgresId: string;
		appName: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.reload",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresUpdate(requestBody: {
		postgresId: string;
		name?: string;
		appName?: string;
		databaseName?: string;
		databaseUser?: string;
		databasePassword?: string;
		description?: string | null;
		dockerImage?: string;
		command?: string | null;
		env?: string | null;
		memoryReservation?: string | null;
		externalPort?: number | null;
		memoryLimit?: string | null;
		cpuReservation?: string | null;
		cpuLimit?: string | null;
		applicationStatus?: "idle" | "running" | "done" | "error";
		healthCheckSwarm?: {
			Test?: Array<string>;
			Interval?: number;
			Timeout?: number;
			StartPeriod?: number;
			Retries?: number;
		} | null;
		restartPolicySwarm?: {
			Condition?: string;
			Delay?: number;
			MaxAttempts?: number;
			Window?: number;
		} | null;
		placementSwarm?: {
			Constraints?: Array<string>;
			Preferences?: Array<{
				Spread: {
					SpreadDescriptor: string;
				};
			}>;
			MaxReplicas?: number;
			Platforms?: Array<{
				Architecture: string;
				OS: string;
			}>;
		} | null;
		updateConfigSwarm?: {
			Parallelism: number;
			Delay?: number;
			FailureAction?: string;
			Monitor?: number;
			MaxFailureRatio?: number;
			Order: string;
		} | null;
		rollbackConfigSwarm?: {
			Parallelism: number;
			Delay?: number;
			FailureAction?: string;
			Monitor?: number;
			MaxFailureRatio?: number;
			Order: string;
		} | null;
		modeSwarm?: {
			Replicated?: {
				Replicas?: number;
			};
			Global?: any;
			ReplicatedJob?: {
				MaxConcurrent?: number;
				TotalCompletions?: number;
			};
			GlobalJob?: any;
		} | null;
		labelsSwarm?: Record<string, string> | null;
		networkSwarm?: Array<{
			Target?: string;
			Aliases?: Array<string>;
			DriverOpts?: any;
		}> | null;
		replicas?: number;
		createdAt?: string;
		environmentId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresMove(requestBody: {
		postgresId: string;
		targetEnvironmentId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.move",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static postgresRebuild(requestBody: { postgresId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/postgres.rebuild",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
