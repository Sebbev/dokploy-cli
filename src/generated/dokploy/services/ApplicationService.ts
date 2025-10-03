/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ApplicationService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationCreate(requestBody: {
		name: string;
		appName?: string;
		description?: string | null;
		environmentId: string;
		serverId?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param applicationId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationOne(applicationId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/application.one",
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
	public static applicationReload(requestBody: {
		appName: string;
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.reload",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationDelete(requestBody: { applicationId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.delete",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationStop(requestBody: { applicationId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.stop",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationStart(requestBody: { applicationId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.start",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationRedeploy(requestBody: {
		applicationId: string;
		title?: string;
		description?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.redeploy",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveEnvironment(requestBody: {
		applicationId: string;
		env?: string | null;
		buildArgs?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveEnvironment",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveBuildType(requestBody: {
		applicationId: string;
		buildType:
			| "dockerfile"
			| "heroku_buildpacks"
			| "paketo_buildpacks"
			| "nixpacks"
			| "static"
			| "railpack";
		dockerfile?: string | null;
		dockerContextPath: string | null;
		dockerBuildStage: string | null;
		herokuVersion?: string | null;
		railpackVersion?: string | null;
		publishDirectory?: string | null;
		isStaticSpa?: boolean | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveBuildType",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveGithubProvider(requestBody: {
		applicationId: string;
		repository?: string | null;
		branch?: string | null;
		owner: string | null;
		buildPath?: string | null;
		githubId: string | null;
		watchPaths?: Array<string> | null;
		enableSubmodules: boolean;
		triggerType?: "push" | "tag";
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveGithubProvider",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveGitlabProvider(requestBody: {
		applicationId: string;
		gitlabBranch: string | null;
		gitlabBuildPath: string | null;
		gitlabOwner: string | null;
		gitlabRepository: string | null;
		gitlabId: string | null;
		gitlabProjectId: number | null;
		gitlabPathNamespace: string | null;
		watchPaths?: Array<string> | null;
		enableSubmodules: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveGitlabProvider",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveBitbucketProvider(requestBody: {
		bitbucketBranch: string | null;
		bitbucketBuildPath: string | null;
		bitbucketOwner: string | null;
		bitbucketRepository: string | null;
		bitbucketId: string | null;
		applicationId: string;
		watchPaths?: Array<string> | null;
		enableSubmodules: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveBitbucketProvider",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveGiteaProvider(requestBody: {
		applicationId: string;
		giteaBranch: string | null;
		giteaBuildPath: string | null;
		giteaOwner: string | null;
		giteaRepository: string | null;
		giteaId: string | null;
		watchPaths?: Array<string> | null;
		enableSubmodules: boolean;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveGiteaProvider",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveDockerProvider(requestBody: {
		dockerImage?: string | null;
		applicationId: string;
		username?: string | null;
		password?: string | null;
		registryUrl?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveDockerProvider",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationSaveGitProdiver(requestBody: {
		customGitBranch?: string | null;
		applicationId: string;
		customGitBuildPath?: string | null;
		customGitUrl?: string | null;
		watchPaths?: Array<string> | null;
		enableSubmodules: boolean;
		customGitSSHKeyId?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.saveGitProdiver",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationDisconnectGitProvider(requestBody: {
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.disconnectGitProvider",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationMarkRunning(requestBody: {
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.markRunning",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationUpdate(requestBody: {
		applicationId: string;
		name?: string;
		appName?: string;
		description?: string | null;
		env?: string | null;
		previewEnv?: string | null;
		watchPaths?: Array<string> | null;
		previewBuildArgs?: string | null;
		previewLabels?: Array<string> | null;
		previewWildcard?: string | null;
		previewPort?: number | null;
		previewHttps?: boolean;
		previewPath?: string | null;
		previewCertificateType?: "letsencrypt" | "none" | "custom";
		previewCustomCertResolver?: string | null;
		previewLimit?: number | null;
		isPreviewDeploymentsActive?: boolean | null;
		previewRequireCollaboratorPermissions?: boolean | null;
		rollbackActive?: boolean | null;
		buildArgs?: string | null;
		memoryReservation?: string | null;
		memoryLimit?: string | null;
		cpuReservation?: string | null;
		cpuLimit?: string | null;
		title?: string | null;
		enabled?: boolean | null;
		subtitle?: string | null;
		command?: string | null;
		refreshToken?: string | null;
		sourceType?: "github" | "docker" | "git" | "gitlab" | "bitbucket" | "gitea" | "drop";
		cleanCache?: boolean | null;
		repository?: string | null;
		owner?: string | null;
		branch?: string | null;
		buildPath?: string | null;
		triggerType?: "push" | "tag" | null;
		autoDeploy?: boolean | null;
		gitlabProjectId?: number | null;
		gitlabRepository?: string | null;
		gitlabOwner?: string | null;
		gitlabBranch?: string | null;
		gitlabBuildPath?: string | null;
		gitlabPathNamespace?: string | null;
		giteaRepository?: string | null;
		giteaOwner?: string | null;
		giteaBranch?: string | null;
		giteaBuildPath?: string | null;
		bitbucketRepository?: string | null;
		bitbucketOwner?: string | null;
		bitbucketBranch?: string | null;
		bitbucketBuildPath?: string | null;
		username?: string | null;
		password?: string | null;
		dockerImage?: string | null;
		registryUrl?: string | null;
		customGitUrl?: string | null;
		customGitBranch?: string | null;
		customGitBuildPath?: string | null;
		customGitSSHKeyId?: string | null;
		enableSubmodules?: boolean;
		dockerfile?: string | null;
		dockerContextPath?: string | null;
		dockerBuildStage?: string | null;
		dropBuildPath?: string | null;
		healthCheckSwarm?: {
			Test?: Array<string>;
			Interval?: number;
			Timeout?: number;
			StartPeriod?: number;
			Retries?: number;
		} | null;
		restartPolicySwarm?: {
			Condition?: string;
			Delay?: number;
			MaxAttempts?: number;
			Window?: number;
		} | null;
		placementSwarm?: {
			Constraints?: Array<string>;
			Preferences?: Array<{
				Spread: {
					SpreadDescriptor: string;
				};
			}>;
			MaxReplicas?: number;
			Platforms?: Array<{
				Architecture: string;
				OS: string;
			}>;
		} | null;
		updateConfigSwarm?: {
			Parallelism: number;
			Delay?: number;
			FailureAction?: string;
			Monitor?: number;
			MaxFailureRatio?: number;
			Order: string;
		} | null;
		rollbackConfigSwarm?: {
			Parallelism: number;
			Delay?: number;
			FailureAction?: string;
			Monitor?: number;
			MaxFailureRatio?: number;
			Order: string;
		} | null;
		modeSwarm?: {
			Replicated?: {
				Replicas?: number;
			};
			Global?: any;
			ReplicatedJob?: {
				MaxConcurrent?: number;
				TotalCompletions?: number;
			};
			GlobalJob?: any;
		} | null;
		labelsSwarm?: Record<string, string> | null;
		networkSwarm?: Array<{
			Target?: string;
			Aliases?: Array<string>;
			DriverOpts?: any;
		}> | null;
		replicas?: number;
		applicationStatus?: "idle" | "running" | "done" | "error";
		buildType?:
			| "dockerfile"
			| "heroku_buildpacks"
			| "paketo_buildpacks"
			| "nixpacks"
			| "static"
			| "railpack";
		railpackVersion?: string | null;
		herokuVersion?: string | null;
		publishDirectory?: string | null;
		isStaticSpa?: boolean | null;
		createdAt?: string;
		registryId?: string | null;
		environmentId?: string;
		githubId?: string | null;
		gitlabId?: string | null;
		giteaId?: string | null;
		bitbucketId?: string | null;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationRefreshToken(requestBody: {
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.refreshToken",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationDeploy(requestBody: {
		applicationId: string;
		title?: string;
		description?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.deploy",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationCleanQueues(requestBody: {
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.cleanQueues",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param applicationId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationReadTraefikConfig(applicationId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/application.readTraefikConfig",
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
	public static applicationUpdateTraefikConfig(requestBody: {
		applicationId: string;
		traefikConfig: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.updateTraefikConfig",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param appName
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationReadAppMonitoring(appName: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/application.readAppMonitoring",
			query: {
				appName: appName,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationMove(requestBody: {
		applicationId: string;
		targetEnvironmentId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.move",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static applicationCancelDeployment(requestBody: {
		applicationId: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/application.cancelDeployment",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
