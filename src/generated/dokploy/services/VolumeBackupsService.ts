/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class VolumeBackupsService {
	/**
	 * @param id
	 * @param volumeBackupType
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static volumeBackupsList(
		id: string,
		volumeBackupType:
			| "application"
			| "postgres"
			| "mysql"
			| "mariadb"
			| "mongo"
			| "redis"
			| "compose",
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/volumeBackups.list",
			query: {
				id: id,
				volumeBackupType: volumeBackupType,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static volumeBackupsCreate(requestBody: {
		name: string;
		volumeName: string;
		prefix: string;
		serviceType?: "application" | "postgres" | "mysql" | "mariadb" | "mongo" | "redis" | "compose";
		appName?: string;
		serviceName?: string | null;
		turnOff?: boolean;
		cronExpression: string;
		keepLatestCount?: number | null;
		enabled?: boolean | null;
		applicationId?: string | null;
		postgresId?: string | null;
		mariadbId?: string | null;
		mongoId?: string | null;
		mysqlId?: string | null;
		redisId?: string | null;
		composeId?: string | null;
		createdAt?: string;
		destinationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/volumeBackups.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param volumeBackupId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static volumeBackupsOne(volumeBackupId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/volumeBackups.one",
			query: {
				volumeBackupId: volumeBackupId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static volumeBackupsDelete(requestBody: {
		volumeBackupId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/volumeBackups.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static volumeBackupsUpdate(requestBody: {
		name: string;
		volumeName: string;
		prefix: string;
		serviceType?: "application" | "postgres" | "mysql" | "mariadb" | "mongo" | "redis" | "compose";
		appName?: string;
		serviceName?: string | null;
		turnOff?: boolean;
		cronExpression: string;
		keepLatestCount?: number | null;
		enabled?: boolean | null;
		applicationId?: string | null;
		postgresId?: string | null;
		mariadbId?: string | null;
		mongoId?: string | null;
		mysqlId?: string | null;
		redisId?: string | null;
		composeId?: string | null;
		createdAt?: string;
		destinationId: string;
		volumeBackupId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/volumeBackups.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static volumeBackupsRunManually(requestBody: {
		volumeBackupId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/volumeBackups.runManually",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
