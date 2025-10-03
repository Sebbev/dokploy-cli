/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class UserService {
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userAll(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.all",
		});
	}
	/**
	 * @param userId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userOne(userId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.one",
			query: {
				userId: userId,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGet(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.get",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userHaveRootAccess(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.haveRootAccess",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGetBackups(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.getBackups",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGetServerMetrics(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.getServerMetrics",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userUpdate(requestBody: {
		id?: string;
		name?: string;
		isRegistered?: boolean;
		expirationDate?: string;
		createdAt2?: string;
		createdAt?: string | null;
		twoFactorEnabled?: boolean | null;
		email?: string;
		emailVerified?: boolean;
		image?: string | null;
		banned?: boolean | null;
		banReason?: string | null;
		banExpires?: string | null;
		updatedAt?: string;
		serverIp?: string | null;
		certificateType?: "letsencrypt" | "none" | "custom";
		https?: boolean;
		host?: string | null;
		letsEncryptEmail?: string | null;
		sshPrivateKey?: string | null;
		enableDockerCleanup?: boolean;
		logCleanupCron?: string | null;
		enablePaidFeatures?: boolean;
		allowImpersonation?: boolean;
		metricsConfig?: {
			server: {
				type: "Dokploy" | "Remote";
				refreshRate: number;
				port: number;
				token: string;
				urlCallback: string;
				retentionDays: number;
				cronJob: string;
				thresholds: {
					cpu: number;
					memory: number;
				};
			};
			containers: {
				refreshRate: number;
				services: {
					include: Array<string>;
					exclude: Array<string>;
				};
			};
		};
		cleanupCacheApplications?: boolean;
		cleanupCacheOnPreviews?: boolean;
		cleanupCacheOnCompose?: boolean;
		stripeCustomerId?: string | null;
		stripeSubscriptionId?: string | null;
		serversQuantity?: number;
		password?: string;
		currentPassword?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/user.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param token
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGetUserByToken(token: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.getUserByToken",
			query: {
				token: token,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGetMetricsToken(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.getMetricsToken",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userRemove(requestBody: { userId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/user.remove",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userAssignPermissions(requestBody: {
		id: string;
		accessedProjects: Array<string>;
		accessedEnvironments: Array<string>;
		accessedServices: Array<string>;
		canCreateProjects: boolean;
		canCreateServices: boolean;
		canDeleteProjects: boolean;
		canDeleteServices: boolean;
		canAccessToDocker: boolean;
		canAccessToTraefikFiles: boolean;
		canAccessToAPI: boolean;
		canAccessToSSHKeys: boolean;
		canAccessToGitProviders: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/user.assignPermissions",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGetInvitations(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.getInvitations",
		});
	}
	/**
	 * @param url
	 * @param token
	 * @param appName
	 * @param dataPoints
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGetContainerMetrics(
		url: string,
		token: string,
		appName: string,
		dataPoints: string,
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.getContainerMetrics",
			query: {
				url: url,
				token: token,
				appName: appName,
				dataPoints: dataPoints,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userGenerateToken(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/user.generateToken",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userDeleteApiKey(requestBody: { apiKeyId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/user.deleteApiKey",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userCreateApiKey(requestBody: {
		name: string;
		prefix?: string;
		expiresIn?: number;
		metadata: {
			organizationId: string;
		};
		rateLimitEnabled?: boolean;
		rateLimitTimeWindow?: number;
		rateLimitMax?: number;
		remaining?: number;
		refillAmount?: number;
		refillInterval?: number;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/user.createApiKey",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param userId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userCheckUserOrganizations(userId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/user.checkUserOrganizations",
			query: {
				userId: userId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static userSendInvitation(requestBody: {
		invitationId: string;
		notificationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/user.sendInvitation",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
