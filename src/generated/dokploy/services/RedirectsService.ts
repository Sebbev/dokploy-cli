/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class RedirectsService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redirectsCreate(requestBody: {
		regex: string;
		replacement: string;
		permanent: boolean;
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redirects.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param redirectId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redirectsOne(redirectId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/redirects.one",
			query: {
				redirectId: redirectId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redirectsDelete(requestBody: { redirectId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redirects.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static redirectsUpdate(requestBody: {
		redirectId: string;
		regex: string;
		replacement: string;
		permanent: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/redirects.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
