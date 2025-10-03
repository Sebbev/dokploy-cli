/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ScheduleService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static scheduleCreate(requestBody: {
		scheduleId?: string;
		name: string;
		cronExpression: string;
		appName?: string;
		serviceName?: string | null;
		shellType?: "bash" | "sh";
		scheduleType?: "application" | "compose" | "server" | "dokploy-server";
		command: string;
		script?: string | null;
		applicationId?: string | null;
		composeId?: string | null;
		serverId?: string | null;
		userId?: string | null;
		enabled?: boolean;
		createdAt?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/schedule.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static scheduleUpdate(requestBody: {
		scheduleId: string;
		name: string;
		cronExpression: string;
		appName?: string;
		serviceName?: string | null;
		shellType?: "bash" | "sh";
		scheduleType?: "application" | "compose" | "server" | "dokploy-server";
		command: string;
		script?: string | null;
		applicationId?: string | null;
		composeId?: string | null;
		serverId?: string | null;
		userId?: string | null;
		enabled?: boolean;
		createdAt?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/schedule.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static scheduleDelete(requestBody: { scheduleId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/schedule.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param id
	 * @param scheduleType
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static scheduleList(
		id: string,
		scheduleType: "application" | "compose" | "server" | "dokploy-server",
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/schedule.list",
			query: {
				id: id,
				scheduleType: scheduleType,
			},
		});
	}
	/**
	 * @param scheduleId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static scheduleOne(scheduleId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/schedule.one",
			query: {
				scheduleId: scheduleId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static scheduleRunManually(requestBody: { scheduleId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/schedule.runManually",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
