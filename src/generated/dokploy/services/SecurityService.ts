/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SecurityService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static securityCreate(
        requestBody: {
            applicationId: string;
            username: string;
            password: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/security.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param securityId
     * @returns any Successful response
     * @throws ApiError
     */
    public static securityOne(
        securityId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/security.one',
            query: {
                'securityId': securityId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static securityDelete(
        requestBody: {
            securityId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/security.delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static securityUpdate(
        requestBody: {
            securityId: string;
            username: string;
            password: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/security.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
