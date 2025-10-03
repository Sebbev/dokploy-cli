/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DockerService {
    /**
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static dockerGetContainers(
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/docker.getContainers',
            query: {
                'serverId': serverId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static dockerRestartContainer(
        requestBody: {
            containerId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/docker.restartContainer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param containerId
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static dockerGetConfig(
        containerId: string,
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/docker.getConfig',
            query: {
                'containerId': containerId,
                'serverId': serverId,
            },
        });
    }
    /**
     * @param appName
     * @param appType
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static dockerGetContainersByAppNameMatch(
        appName: string,
        appType?: ('stack' | 'docker-compose'),
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/docker.getContainersByAppNameMatch',
            query: {
                'appType': appType,
                'appName': appName,
                'serverId': serverId,
            },
        });
    }
    /**
     * @param appName
     * @param type
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static dockerGetContainersByAppLabel(
        appName: string,
        type: 'standalone' | 'swarm',
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/docker.getContainersByAppLabel',
            query: {
                'appName': appName,
                'serverId': serverId,
                'type': type,
            },
        });
    }
    /**
     * @param appName
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static dockerGetStackContainersByAppName(
        appName: string,
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/docker.getStackContainersByAppName',
            query: {
                'appName': appName,
                'serverId': serverId,
            },
        });
    }
    /**
     * @param appName
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static dockerGetServiceContainersByAppName(
        appName: string,
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/docker.getServiceContainersByAppName',
            query: {
                'appName': appName,
                'serverId': serverId,
            },
        });
    }
}
