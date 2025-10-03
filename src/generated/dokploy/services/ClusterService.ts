/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ClusterService {
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static clusterGetNodes(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/cluster.getNodes",
			query: {
				serverId: serverId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static clusterRemoveWorker(requestBody: {
		nodeId: string;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/cluster.removeWorker",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static clusterAddWorker(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/cluster.addWorker",
			query: {
				serverId: serverId,
			},
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static clusterAddManager(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/cluster.addManager",
			query: {
				serverId: serverId,
			},
		});
	}
}
