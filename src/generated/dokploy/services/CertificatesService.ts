/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CertificatesService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static certificatesCreate(
        requestBody: {
            certificateId?: string;
            name: string;
            certificateData: string;
            privateKey: string;
            certificatePath?: string;
            autoRenew?: boolean | null;
            organizationId: string;
            serverId?: string | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/certificates.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param certificateId
     * @returns any Successful response
     * @throws ApiError
     */
    public static certificatesOne(
        certificateId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certificates.one',
            query: {
                'certificateId': certificateId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static certificatesRemove(
        requestBody: {
            certificateId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/certificates.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static certificatesAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certificates.all',
        });
    }
}
