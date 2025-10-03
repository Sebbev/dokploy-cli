/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GitProviderService {
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitProviderGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gitProvider.getAll',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static gitProviderRemove(
        requestBody: {
            gitProviderId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gitProvider.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
