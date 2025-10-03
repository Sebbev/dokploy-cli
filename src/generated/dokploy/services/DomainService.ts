/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class DomainService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static domainCreate(requestBody: {
		host: string;
		path?: string | null;
		port?: number | null;
		https?: boolean;
		applicationId?: string | null;
		certificateType?: "letsencrypt" | "none" | "custom";
		customCertResolver?: string | null;
		composeId?: string | null;
		serviceName?: string | null;
		domainType?: "compose" | "application" | "preview" | null;
		previewDeploymentId?: string | null;
		internalPath?: string | null;
		stripPath?: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/domain.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param applicationId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static domainByApplicationId(applicationId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/domain.byApplicationId",
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
	public static domainByComposeId(composeId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/domain.byComposeId",
			query: {
				composeId: composeId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static domainGenerateDomain(requestBody: {
		appName: string;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/domain.generateDomain",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static domainCanGenerateTraefikMeDomains(serverId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/domain.canGenerateTraefikMeDomains",
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
	public static domainUpdate(requestBody: {
		host: string;
		path?: string | null;
		port?: number | null;
		https?: boolean;
		certificateType?: "letsencrypt" | "none" | "custom";
		customCertResolver?: string | null;
		serviceName?: string | null;
		domainType?: "compose" | "application" | "preview" | null;
		internalPath?: string | null;
		stripPath?: boolean;
		domainId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/domain.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param domainId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static domainOne(domainId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/domain.one",
			query: {
				domainId: domainId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static domainDelete(requestBody: { domainId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/domain.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static domainValidateDomain(requestBody: {
		domain: string;
		serverIp?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/domain.validateDomain",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
