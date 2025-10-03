/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class DeploymentService {
	/**
	 * @param applicationId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static deploymentAll(applicationId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/deployment.all",
			query: {
				applicationId: applicationId,
			},
		});
	}
	/**
	 * @param composeId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static deploymentAllByCompose(composeId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/deployment.allByCompose",
			query: {
				composeId: composeId,
			},
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static deploymentAllByServer(serverId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/deployment.allByServer",
			query: {
				serverId: serverId,
			},
		});
	}
	/**
	 * @param id
	 * @param type
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static deploymentAllByType(
		id: string,
		type:
			| "application"
			| "compose"
			| "server"
			| "schedule"
			| "previewDeployment"
			| "backup"
			| "volumeBackup",
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/deployment.allByType",
			query: {
				id: id,
				type: type,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static deploymentKillProcess(requestBody: {
		deploymentId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/deployment.killProcess",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
