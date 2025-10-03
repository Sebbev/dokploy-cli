/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class DestinationService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static destinationCreate(requestBody: {
		name: string;
		provider: string | null;
		accessKey: string;
		bucket: string;
		region: string;
		endpoint: string;
		secretAccessKey: string;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/destination.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static destinationTestConnection(requestBody: {
		name: string;
		provider: string | null;
		accessKey: string;
		bucket: string;
		region: string;
		endpoint: string;
		secretAccessKey: string;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/destination.testConnection",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param destinationId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static destinationOne(destinationId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/destination.one",
			query: {
				destinationId: destinationId,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static destinationAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/destination.all",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static destinationRemove(requestBody: { destinationId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/destination.remove",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static destinationUpdate(requestBody: {
		name: string;
		accessKey: string;
		bucket: string;
		region: string;
		endpoint: string;
		secretAccessKey: string;
		destinationId: string;
		provider: string | null;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/destination.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
