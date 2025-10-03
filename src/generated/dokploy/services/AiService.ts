/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiService {
    /**
     * @param aiId
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiOne(
        aiId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai.one',
            query: {
                'aiId': aiId,
            },
        });
    }
    /**
     * @param apiUrl
     * @param apiKey
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiGetModels(
        apiUrl: string,
        apiKey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai.getModels',
            query: {
                'apiUrl': apiUrl,
                'apiKey': apiKey,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiCreate(
        requestBody: {
            name: string;
            apiUrl: string;
            apiKey: string;
            model: string;
            isEnabled: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiUpdate(
        requestBody: {
            aiId: string;
            name?: string;
            apiUrl?: string;
            apiKey?: string;
            model?: string;
            isEnabled?: boolean;
            createdAt?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai.getAll',
        });
    }
    /**
     * @param aiId
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiGet(
        aiId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai.get',
            query: {
                'aiId': aiId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiDelete(
        requestBody: {
            aiId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai.delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiSuggest(
        requestBody: {
            aiId: string;
            input: string;
            serverId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai.suggest',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static aiDeploy(
        requestBody: {
            environmentId: string;
            id: string;
            dockerCompose: string;
            envVariables: string;
            serverId?: string;
            name: string;
            description: string;
            domains?: Array<{
                host: string;
                port: number;
                serviceName: string;
            }>;
            configFiles?: Array<{
                filePath: string;
                content: string;
            }>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai.deploy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
