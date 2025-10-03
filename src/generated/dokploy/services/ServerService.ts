/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServerService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverCreate(
        requestBody: {
            name: string;
            description?: string | null;
            ipAddress: string;
            port: number;
            username: string;
            sshKeyId: string | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/server.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverOne(
        serverId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.one',
            query: {
                'serverId': serverId,
            },
        });
    }
    /**
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverGetDefaultCommand(
        serverId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.getDefaultCommand',
            query: {
                'serverId': serverId,
            },
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.all',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverCount(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.count',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverWithSshKey(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.withSSHKey',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverSetup(
        requestBody: {
            serverId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/server.setup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverValidate(
        serverId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.validate',
            query: {
                'serverId': serverId,
            },
        });
    }
    /**
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverSecurity(
        serverId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.security',
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
    public static serverSetupMonitoring(
        requestBody: {
            serverId: string;
            metricsConfig: {
                server: {
                    refreshRate: number;
                    port: number;
                    token: string;
                    urlCallback: string;
                    retentionDays: number;
                    cronJob: string;
                    thresholds: {
                        cpu: number;
                        memory: number;
                    };
                };
                containers: {
                    refreshRate: number;
                    services: {
                        include?: Array<string>;
                        exclude?: Array<string>;
                    };
                };
            };
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/server.setupMonitoring',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverRemove(
        requestBody: {
            serverId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/server.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverUpdate(
        requestBody: {
            name: string;
            description?: string | null;
            serverId: string;
            ipAddress: string;
            port: number;
            username: string;
            sshKeyId: string | null;
            command?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/server.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverPublicIp(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.publicIp',
        });
    }
    /**
     * @param url
     * @param token
     * @param dataPoints
     * @returns any Successful response
     * @throws ApiError
     */
    public static serverGetServerMetrics(
        url: string,
        token: string,
        dataPoints: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/server.getServerMetrics',
            query: {
                'url': url,
                'token': token,
                'dataPoints': dataPoints,
            },
        });
    }
}
