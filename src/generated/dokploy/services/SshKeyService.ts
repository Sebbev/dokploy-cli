/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SshKeyService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static sshKeyCreate(
        requestBody: {
            name: string;
            description?: string | null;
            privateKey: string;
            publicKey: string;
            organizationId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sshKey.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static sshKeyRemove(
        requestBody: {
            sshKeyId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sshKey.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param sshKeyId
     * @returns any Successful response
     * @throws ApiError
     */
    public static sshKeyOne(
        sshKeyId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sshKey.one',
            query: {
                'sshKeyId': sshKeyId,
            },
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static sshKeyAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sshKey.all',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static sshKeyGenerate(
        requestBody: {
            type?: 'rsa' | 'ed25519';
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sshKey.generate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static sshKeyUpdate(
        requestBody: {
            name?: string;
            description?: string | null;
            lastUsedAt?: string | null;
            sshKeyId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sshKey.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
