/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GitlabService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitlabCreate(
        requestBody: {
            gitlabId?: string;
            gitlabUrl: string;
            applicationId?: string;
            redirectUri?: string;
            secret?: string;
            accessToken?: string | null;
            refreshToken?: string | null;
            groupName?: string;
            expiresAt?: number | null;
            gitProviderId?: string;
            authId: string;
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gitlab.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param gitlabId
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitlabOne(
        gitlabId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitlab.one',
            query: {
                'gitlabId': gitlabId,
            },
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitlabGitlabProviders(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitlab.gitlabProviders',
        });
    }
    /**
     * @param gitlabId
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitlabGetGitlabRepositories(
        gitlabId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitlab.getGitlabRepositories',
            query: {
                'gitlabId': gitlabId,
            },
        });
    }
    /**
     * @param owner
     * @param repo
     * @param id
     * @param gitlabId
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitlabGetGitlabBranches(
        owner: string,
        repo: string,
        id?: number,
        gitlabId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitlab.getGitlabBranches',
            query: {
                'id': id,
                'owner': owner,
                'repo': repo,
                'gitlabId': gitlabId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitlabTestConnection(
        requestBody: {
            gitlabId?: string;
            groupName?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gitlab.testConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitlabUpdate(
        requestBody: {
            gitlabId: string;
            gitlabUrl: string;
            applicationId?: string;
            redirectUri?: string;
            secret?: string;
            accessToken?: string | null;
            refreshToken?: string | null;
            groupName?: string;
            expiresAt?: number | null;
            gitProviderId: string;
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gitlab.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
