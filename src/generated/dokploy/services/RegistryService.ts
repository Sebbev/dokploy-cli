/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class RegistryService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static registryCreate(requestBody: {
		registryName: string;
		username: string;
		password: string;
		registryUrl: string;
		registryType: "cloud";
		imagePrefix: string | null;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/registry.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static registryRemove(requestBody: { registryId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/registry.remove",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static registryUpdate(requestBody: {
		registryId: string;
		registryName?: string;
		imagePrefix?: string | null;
		username?: string;
		password?: string;
		registryUrl?: string;
		createdAt?: string;
		registryType?: "cloud";
		organizationId?: string;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/registry.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static registryAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/registry.all",
		});
	}
	/**
	 * @param registryId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static registryOne(registryId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/registry.one",
			query: {
				registryId: registryId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static registryTestRegistry(requestBody: {
		registryName?: string;
		username: string;
		password: string;
		registryUrl: string;
		registryType: "cloud";
		imagePrefix?: string | null;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/registry.testRegistry",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
