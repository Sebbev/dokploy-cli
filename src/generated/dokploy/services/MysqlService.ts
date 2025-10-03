/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class MysqlService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlCreate(requestBody: {
		name: string;
		appName: string;
		dockerImage?: string;
		environmentId: string;
		description?: string | null;
		databaseName: string;
		databaseUser: string;
		databasePassword: string;
		databaseRootPassword: string;
		serverId?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param mysqlId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlOne(mysqlId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/mysql.one",
			query: {
				mysqlId: mysqlId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlStart(requestBody: { mysqlId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.start",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlStop(requestBody: { mysqlId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.stop",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlSaveExternalPort(requestBody: {
		mysqlId: string;
		externalPort: number | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.saveExternalPort",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlDeploy(requestBody: { mysqlId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.deploy",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlChangeStatus(requestBody: {
		mysqlId: string;
		applicationStatus: "idle" | "running" | "done" | "error";
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.changeStatus",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlReload(requestBody: {
		mysqlId: string;
		appName: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.reload",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlRemove(requestBody: { mysqlId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.remove",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlSaveEnvironment(requestBody: {
		mysqlId: string;
		env?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.saveEnvironment",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlUpdate(requestBody: {
		mysqlId: string;
		name?: string;
		appName?: string;
		description?: string | null;
		databaseName?: string;
		databaseUser?: string;
		databasePassword?: string;
		databaseRootPassword?: string;
		dockerImage?: string;
		command?: string | null;
		env?: string | null;
		memoryReservation?: string | null;
		memoryLimit?: string | null;
		cpuReservation?: string | null;
		cpuLimit?: string | null;
		externalPort?: number | null;
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
			url: "/mysql.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlMove(requestBody: {
		mysqlId: string;
		targetEnvironmentId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.move",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static mysqlRebuild(requestBody: { mysqlId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/mysql.rebuild",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
