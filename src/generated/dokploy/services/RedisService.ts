/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class RedisService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisCreate(requestBody: {
		name: string;
		appName: string;
		databasePassword: string;
		dockerImage?: string;
		environmentId: string;
		description?: string | null;
		serverId?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param redisId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisOne(redisId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/redis.one",
			query: {
				redisId: redisId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisStart(requestBody: { redisId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.start",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisReload(requestBody: {
		redisId: string;
		appName: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.reload",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisStop(requestBody: { redisId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.stop",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisSaveExternalPort(requestBody: {
		redisId: string;
		externalPort: number | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.saveExternalPort",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisDeploy(requestBody: { redisId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.deploy",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisChangeStatus(requestBody: {
		redisId: string;
		applicationStatus: "idle" | "running" | "done" | "error";
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.changeStatus",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisRemove(requestBody: { redisId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.remove",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisSaveEnvironment(requestBody: {
		redisId: string;
		env?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.saveEnvironment",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisUpdate(requestBody: {
		redisId: string;
		name?: string;
		appName?: string;
		description?: string | null;
		databasePassword?: string;
		dockerImage?: string;
		command?: string | null;
		env?: string | null;
		memoryReservation?: string | null;
		memoryLimit?: string | null;
		cpuReservation?: string | null;
		cpuLimit?: string | null;
		externalPort?: number | null;
		createdAt?: string;
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
		environmentId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisMove(requestBody: {
		redisId: string;
		targetEnvironmentId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.move",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redisRebuild(requestBody: { redisId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redis.rebuild",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
