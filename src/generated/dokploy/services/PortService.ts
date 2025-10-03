/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class PortService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static portCreate(requestBody: {
		publishedPort: number;
		publishMode?: "ingress" | "host";
		targetPort: number;
		protocol?: "tcp" | "udp";
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/port.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param portId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static portOne(portId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/port.one",
			query: {
				portId: portId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static portDelete(requestBody: { portId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/port.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static portUpdate(requestBody: {
		portId: string;
		publishedPort: number;
		publishMode?: "ingress" | "host";
		targetPort: number;
		protocol?: "tcp" | "udp";
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/port.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
