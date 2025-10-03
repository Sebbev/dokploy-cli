/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EnvironmentService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static environmentCreate(
        requestBody: {
            name: string;
            description?: string | null;
            projectId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/environment.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param environmentId
     * @returns any Successful response
     * @throws ApiError
     */
    public static environmentOne(
        environmentId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/environment.one',
            query: {
                'environmentId': environmentId,
            },
        });
    }
    /**
     * @param projectId
     * @returns any Successful response
     * @throws ApiError
     */
    public static environmentByProjectId(
        projectId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/environment.byProjectId',
            query: {
                'projectId': projectId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static environmentRemove(
        requestBody: {
            environmentId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/environment.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static environmentUpdate(
        requestBody: {
            environmentId: string;
            name?: string;
            description?: string | null;
            createdAt?: string;
            env?: string;
            projectId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/environment.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static environmentDuplicate(
        requestBody: {
            environmentId: string;
            name: string;
            description?: string | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/environment.duplicate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
