/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class BitbucketService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static bitbucketCreate(requestBody: {
		bitbucketId?: string;
		bitbucketUsername?: string;
		bitbucketEmail?: string;
		appPassword?: string;
		apiToken?: string;
		bitbucketWorkspaceName?: string;
		gitProviderId?: string;
		authId: string;
		name: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/bitbucket.create",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param bitbucketId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static bitbucketOne(bitbucketId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/bitbucket.one",
			query: {
				bitbucketId: bitbucketId,
			},
		});
	}
	/**
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static bitbucketBitbucketProviders(): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/bitbucket.bitbucketProviders",
		});
	}
	/**
	 * @param bitbucketId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static bitbucketGetBitbucketRepositories(bitbucketId: string): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/bitbucket.getBitbucketRepositories",
			query: {
				bitbucketId: bitbucketId,
			},
		});
	}
	/**
	 * @param owner
	 * @param repo
	 * @param bitbucketId
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static bitbucketGetBitbucketBranches(
		owner: string,
		repo: string,
		bitbucketId?: string,
	): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "GET",
			url: "/bitbucket.getBitbucketBranches",
			query: {
				owner: owner,
				repo: repo,
				bitbucketId: bitbucketId,
			},
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static bitbucketTestConnection(requestBody: {
		bitbucketId: string;
		bitbucketUsername?: string;
		bitbucketEmail?: string;
		workspaceName?: string;
		apiToken?: string;
		appPassword?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/bitbucket.testConnection",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static bitbucketUpdate(requestBody: {
		bitbucketId: string;
		bitbucketUsername?: string;
		bitbucketEmail?: string;
		appPassword?: string;
		apiToken?: string;
		bitbucketWorkspaceName?: string;
		gitProviderId: string;
		name: string;
		organizationId?: string;
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/bitbucket.update",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
