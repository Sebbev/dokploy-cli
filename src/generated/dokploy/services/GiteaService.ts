/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GiteaService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaCreate(
        requestBody: {
            giteaId?: string;
            giteaUrl: string;
            redirectUri?: string;
            clientId?: string;
            clientSecret?: string;
            gitProviderId?: string;
            accessToken?: string;
            refreshToken?: string;
            expiresAt?: number;
            scopes?: string;
            lastAuthenticatedAt?: number;
            name: string;
            giteaUsername?: string;
            organizationName?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gitea.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param giteaId
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaOne(
        giteaId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitea.one',
            query: {
                'giteaId': giteaId,
            },
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaGiteaProviders(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitea.giteaProviders',
        });
    }
    /**
     * @param giteaId
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaGetGiteaRepositories(
        giteaId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitea.getGiteaRepositories',
            query: {
                'giteaId': giteaId,
            },
        });
    }
    /**
     * @param owner
     * @param repositoryName
     * @param giteaId
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaGetGiteaBranches(
        owner: string,
        repositoryName: string,
        giteaId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitea.getGiteaBranches',
            query: {
                'owner': owner,
                'repositoryName': repositoryName,
                'giteaId': giteaId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaTestConnection(
        requestBody: {
            giteaId?: string;
            organizationName?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gitea.testConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaUpdate(
        requestBody: {
            giteaId: string;
            giteaUrl: string;
            redirectUri?: string;
            clientId?: string;
            clientSecret?: string;
            gitProviderId: string;
            accessToken?: string;
            refreshToken?: string;
            expiresAt?: number;
            scopes?: string;
            lastAuthenticatedAt?: number;
            name: string;
            giteaUsername?: string;
            organizationName?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gitea.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param giteaId
     * @returns any Successful response
     * @throws ApiError
     */
    public static giteaGetGiteaUrl(
        giteaId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitea.getGiteaUrl',
            query: {
                'giteaId': giteaId,
            },
        });
    }
}
