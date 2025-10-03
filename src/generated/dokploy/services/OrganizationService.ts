/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static organizationCreate(
        requestBody: {
            name: string;
            logo?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/organization.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static organizationAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organization.all',
        });
    }
    /**
     * @param organizationId
     * @returns any Successful response
     * @throws ApiError
     */
    public static organizationOne(
        organizationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organization.one',
            query: {
                'organizationId': organizationId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static organizationUpdate(
        requestBody: {
            organizationId: string;
            name: string;
            logo?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/organization.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static organizationDelete(
        requestBody: {
            organizationId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/organization.delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static organizationAllInvitations(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organization.allInvitations',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static organizationRemoveInvitation(
        requestBody: {
            invitationId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/organization.removeInvitation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
