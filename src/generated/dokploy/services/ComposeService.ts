/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ComposeService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeCreate(requestBody: {
		name: string;
		description?: string | null;
		environmentId: string;
		composeType?: "docker-compose" | "stack";
		appName?: string;
		serverId?: string | null;
		composeFile?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param composeId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeOne(composeId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/compose.one",
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
	public static composeUpdate(requestBody: {
		composeId: string;
		name?: string;
		appName?: string;
		description?: string | null;
		env?: string | null;
		composeFile?: string;
		refreshToken?: string | null;
		sourceType?: "git" | "github" | "gitlab" | "bitbucket" | "gitea" | "raw";
		composeType?: "docker-compose" | "stack";
		repository?: string | null;
		owner?: string | null;
		branch?: string | null;
		autoDeploy?: boolean | null;
		gitlabProjectId?: number | null;
		gitlabRepository?: string | null;
		gitlabOwner?: string | null;
		gitlabBranch?: string | null;
		gitlabPathNamespace?: string | null;
		bitbucketRepository?: string | null;
		bitbucketOwner?: string | null;
		bitbucketBranch?: string | null;
		giteaRepository?: string | null;
		giteaOwner?: string | null;
		giteaBranch?: string | null;
		customGitUrl?: string | null;
		customGitBranch?: string | null;
		customGitSSHKeyId?: string | null;
		command?: string;
		enableSubmodules?: boolean;
		composePath?: string;
		suffix?: string;
		randomize?: boolean;
		isolatedDeployment?: boolean;
		isolatedDeploymentsVolume?: boolean;
		triggerType?: "push" | "tag" | null;
		composeStatus?: "idle" | "running" | "done" | "error";
		environmentId?: string;
		createdAt?: string;
		watchPaths?: Array<string> | null;
		githubId?: string | null;
		gitlabId?: string | null;
		bitbucketId?: string | null;
		giteaId?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeDelete(requestBody: {
		composeId: string;
		deleteVolumes: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeCleanQueues(requestBody: { composeId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.cleanQueues",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param composeId
	 * @param type
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeLoadServices(
		composeId: string,
		type?: "fetch" | "cache",
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/compose.loadServices",
			query: {
				composeId: composeId,
				type: type,
			},
		});
	}
	/**
	 * @param composeId
	 * @param serviceName
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeLoadMountsByService(
		composeId: string,
		serviceName: string,
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/compose.loadMountsByService",
			query: {
				composeId: composeId,
				serviceName: serviceName,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeFetchSourceType(requestBody: { composeId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.fetchSourceType",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeRandomizeCompose(requestBody: {
		composeId: string;
		suffix?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.randomizeCompose",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeIsolatedDeployment(requestBody: {
		composeId: string;
		suffix?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.isolatedDeployment",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param composeId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeGetConvertedCompose(composeId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/compose.getConvertedCompose",
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
	public static composeDeploy(requestBody: {
		composeId: string;
		title?: string;
		description?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.deploy",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeRedeploy(requestBody: {
		composeId: string;
		title?: string;
		description?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.redeploy",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeStop(requestBody: { composeId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.stop",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeStart(requestBody: { composeId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.start",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param composeId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeGetDefaultCommand(composeId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/compose.getDefaultCommand",
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
	public static composeRefreshToken(requestBody: { composeId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.refreshToken",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeDeployTemplate(requestBody: {
		environmentId: string;
		serverId?: string;
		id: string;
		baseUrl?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.deployTemplate",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param baseUrl
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeTemplates(baseUrl?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/compose.templates",
			query: {
				baseUrl: baseUrl,
			},
		});
	}
	/**
	 * @param baseUrl
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeGetTags(baseUrl?: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/compose.getTags",
			query: {
				baseUrl: baseUrl,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeDisconnectGitProvider(requestBody: {
		composeId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.disconnectGitProvider",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeMove(requestBody: {
		composeId: string;
		targetEnvironmentId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.move",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeProcessTemplate(requestBody: {
		base64: string;
		composeId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.processTemplate",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeImport(requestBody: {
		base64: string;
		composeId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.import",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static composeCancelDeployment(requestBody: {
		composeId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/compose.cancelDeployment",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
