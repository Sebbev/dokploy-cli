/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class SettingsService {
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReloadServer(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.reloadServer",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanRedis(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanRedis",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReloadRedis(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.reloadRedis",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReloadTraefik(requestBody?: { serverId?: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.reloadTraefik",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsToggleDashboard(requestBody: {
		enableDashboard?: boolean;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.toggleDashboard",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanUnusedImages(requestBody?: {
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanUnusedImages",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanUnusedVolumes(requestBody?: {
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanUnusedVolumes",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanStoppedContainers(requestBody?: {
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanStoppedContainers",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanDockerBuilder(requestBody?: {
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanDockerBuilder",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanDockerPrune(requestBody?: {
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanDockerPrune",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanAll(requestBody?: { serverId?: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanAll",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanMonitoring(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanMonitoring",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsSaveSshPrivateKey(requestBody: {
		sshPrivateKey: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.saveSSHPrivateKey",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsAssignDomainServer(requestBody: {
		host: string | null;
		certificateType: "letsencrypt" | "none" | "custom";
		letsEncryptEmail?: string | null;
		https?: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.assignDomainServer",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCleanSshPrivateKey(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.cleanSSHPrivateKey",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsUpdateDockerCleanup(requestBody: {
		enableDockerCleanup: boolean;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateDockerCleanup",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReadTraefikConfig(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.readTraefikConfig",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsUpdateTraefikConfig(requestBody: {
		traefikConfig: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateTraefikConfig",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReadWebServerTraefikConfig(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.readWebServerTraefikConfig",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsUpdateWebServerTraefikConfig(requestBody: {
		traefikConfig: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateWebServerTraefikConfig",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReadMiddlewareTraefikConfig(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.readMiddlewareTraefikConfig",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsUpdateMiddlewareTraefikConfig(requestBody: {
		traefikConfig: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateMiddlewareTraefikConfig",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetUpdateData(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.getUpdateData",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsUpdateServer(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateServer",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetDokployVersion(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.getDokployVersion",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetReleaseTag(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.getReleaseTag",
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReadDirectories(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.readDirectories",
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
	public static settingsUpdateTraefikFile(requestBody: {
		path: string;
		traefikConfig: string;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateTraefikFile",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param path
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReadTraefikFile(path: string, serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.readTraefikFile",
			query: {
				path: path,
				serverId: serverId,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetIp(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.getIp",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetOpenApiDocument(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.getOpenApiDocument",
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsReadTraefikEnv(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.readTraefikEnv",
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
	public static settingsWriteTraefikEnv(requestBody: {
		env: string;
		serverId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.writeTraefikEnv",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsHaveTraefikDashboardPortEnabled(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.haveTraefikDashboardPortEnabled",
			query: {
				serverId: serverId,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsHaveActivateRequests(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.haveActivateRequests",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsToggleRequests(requestBody: { enable: boolean }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.toggleRequests",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsIsCloud(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.isCloud",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsIsUserSubscribed(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.isUserSubscribed",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsHealth(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.health",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsSetupGpu(requestBody: { serverId?: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.setupGPU",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsCheckGpuStatus(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.checkGPUStatus",
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
	public static settingsUpdateTraefikPorts(requestBody: {
		serverId?: string;
		additionalPorts: Array<{
			targetPort: number;
			publishedPort: number;
			protocol: "tcp" | "udp" | "sctp";
		}>;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateTraefikPorts",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param serverId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetTraefikPorts(serverId?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.getTraefikPorts",
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
	public static settingsUpdateLogCleanup(requestBody: {
		cronExpression: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/settings.updateLogCleanup",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetLogCleanupStatus(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.getLogCleanupStatus",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static settingsGetDokployCloudIps(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/settings.getDokployCloudIps",
		});
	}
}
