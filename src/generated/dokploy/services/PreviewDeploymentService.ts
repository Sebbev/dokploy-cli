/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class PreviewDeploymentService {
	/**
	 * @param applicationId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static previewDeploymentAll(applicationId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/previewDeployment.all",
			query: {
				applicationId: applicationId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static previewDeploymentDelete(requestBody: {
		previewDeploymentId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/previewDeployment.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param previewDeploymentId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static previewDeploymentOne(previewDeploymentId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/previewDeployment.one",
			query: {
				previewDeploymentId: previewDeploymentId,
			},
		});
	}
}
