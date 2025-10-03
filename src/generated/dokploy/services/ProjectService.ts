/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ProjectService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static projectCreate(requestBody: {
		name: string;
		description?: string | null;
		env?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/project.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param projectId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static projectOne(projectId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/project.one",
			query: {
				projectId: projectId,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static projectAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/project.all",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static projectRemove(requestBody: { projectId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/project.remove",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static projectUpdate(requestBody: {
		projectId: string;
		name?: string;
		description?: string | null;
		createdAt?: string;
		organizationId?: string;
		env?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/project.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static projectDuplicate(requestBody: {
		sourceEnvironmentId: string;
		name: string;
		description?: string;
		includeServices?: boolean;
		selectedServices?: Array<{
			id: string;
			type: "application" | "postgres" | "mariadb" | "mongo" | "mysql" | "redis" | "compose";
		}>;
		duplicateInSameProject?: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/project.duplicate",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
