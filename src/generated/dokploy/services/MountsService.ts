/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MountsService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mountsCreate(
        requestBody: {
            type: 'bind' | 'volume' | 'file';
            hostPath?: string | null;
            volumeName?: string | null;
            content?: string | null;
            mountPath: string;
            serviceType?: 'application' | 'postgres' | 'mysql' | 'mariadb' | 'mongo' | 'redis' | 'compose';
            filePath?: string | null;
            serviceId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mounts.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mountsRemove(
        requestBody: {
            mountId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mounts.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param mountId
     * @returns any Successful response
     * @throws ApiError
     */
    public static mountsOne(
        mountId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mounts.one',
            query: {
                'mountId': mountId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mountsUpdate(
        requestBody: {
            mountId: string;
            type?: 'bind' | 'volume' | 'file';
            hostPath?: string | null;
            volumeName?: string | null;
            filePath?: string | null;
            content?: string | null;
            serviceType?: 'application' | 'postgres' | 'mysql' | 'mariadb' | 'mongo' | 'redis' | 'compose';
            mountPath?: string;
            applicationId?: string | null;
            postgresId?: string | null;
            mariadbId?: string | null;
            mongoId?: string | null;
            mysqlId?: string | null;
            redisId?: string | null;
            composeId?: string | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mounts.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param applicationId
     * @returns any Successful response
     * @throws ApiError
     */
    public static mountsAllNamedByApplicationId(
        applicationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mounts.allNamedByApplicationId',
            query: {
                'applicationId': applicationId,
            },
        });
    }
}
