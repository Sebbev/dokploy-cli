/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class GithubService {
	/**
	 * @param githubId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static githubOne(githubId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/github.one",
			query: {
				githubId: githubId,
			},
		});
	}
	/**
	 * @param githubId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static githubGetGithubRepositories(githubId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/github.getGithubRepositories",
			query: {
				githubId: githubId,
			},
		});
	}
	/**
	 * @param repo
	 * @param owner
	 * @param githubId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static githubGetGithubBranches(
		repo: string,
		owner: string,
		githubId?: string,
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/github.getGithubBranches",
			query: {
				repo: repo,
				owner: owner,
				githubId: githubId,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static githubGithubProviders(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/github.githubProviders",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static githubTestConnection(requestBody: { githubId: string }): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/github.testConnection",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static githubUpdate(requestBody: {
		githubId: string;
		githubAppName: string;
		githubAppId?: number | null;
		githubClientId?: string | null;
		githubClientSecret?: string | null;
		githubInstallationId?: string | null;
		githubPrivateKey?: string | null;
		githubWebhookSecret?: string | null;
		gitProviderId: string;
		name: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/github.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
