/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RollbackService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static rollbackDelete(
        requestBody: {
            rollbackId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rollback.delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static rollbackRollback(
        requestBody: {
            rollbackId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rollback.rollback',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
