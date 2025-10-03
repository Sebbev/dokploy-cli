/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MariadbService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbCreate(
        requestBody: {
            name: string;
            appName: string;
            dockerImage?: string;
            databaseRootPassword: string;
            environmentId: string;
            description?: string | null;
            databaseName: string;
            databaseUser: string;
            databasePassword: string;
            serverId?: string | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param mariadbId
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbOne(
        mariadbId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mariadb.one',
            query: {
                'mariadbId': mariadbId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbStart(
        requestBody: {
            mariadbId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.start',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbStop(
        requestBody: {
            mariadbId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.stop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbSaveExternalPort(
        requestBody: {
            mariadbId: string;
            externalPort: number | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.saveExternalPort',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbDeploy(
        requestBody: {
            mariadbId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.deploy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbChangeStatus(
        requestBody: {
            mariadbId: string;
            applicationStatus: 'idle' | 'running' | 'done' | 'error';
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.changeStatus',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbRemove(
        requestBody: {
            mariadbId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbSaveEnvironment(
        requestBody: {
            mariadbId: string;
            env?: string | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.saveEnvironment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbReload(
        requestBody: {
            mariadbId: string;
            appName: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.reload',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbUpdate(
        requestBody: {
            mariadbId: string;
            name?: string;
            appName?: string;
            description?: string | null;
            databaseName?: string;
            databaseUser?: string;
            databasePassword?: string;
            databaseRootPassword?: string;
            dockerImage?: string;
            command?: string | null;
            env?: string | null;
            memoryReservation?: string | null;
            memoryLimit?: string | null;
            cpuReservation?: string | null;
            cpuLimit?: string | null;
            externalPort?: number | null;
            applicationStatus?: 'idle' | 'running' | 'done' | 'error';
            healthCheckSwarm?: {
                Test?: Array<string>;
                Interval?: number;
                Timeout?: number;
                StartPeriod?: number;
                Retries?: number;
            } | null;
            restartPolicySwarm?: {
                Condition?: string;
                Delay?: number;
                MaxAttempts?: number;
                Window?: number;
            } | null;
            placementSwarm?: {
                Constraints?: Array<string>;
                Preferences?: Array<{
                    Spread: {
                        SpreadDescriptor: string;
                    };
                }>;
                MaxReplicas?: number;
                Platforms?: Array<{
                    Architecture: string;
                    OS: string;
                }>;
            } | null;
            updateConfigSwarm?: {
                Parallelism: number;
                Delay?: number;
                FailureAction?: string;
                Monitor?: number;
                MaxFailureRatio?: number;
                Order: string;
            } | null;
            rollbackConfigSwarm?: {
                Parallelism: number;
                Delay?: number;
                FailureAction?: string;
                Monitor?: number;
                MaxFailureRatio?: number;
                Order: string;
            } | null;
            modeSwarm?: {
                Replicated?: {
                    Replicas?: number;
                };
                Global?: any;
                ReplicatedJob?: {
                    MaxConcurrent?: number;
                    TotalCompletions?: number;
                };
                GlobalJob?: any;
            } | null;
            labelsSwarm?: Record<string, string> | null;
            networkSwarm?: Array<{
                Target?: string;
                Aliases?: Array<string>;
                DriverOpts?: any;
            }> | null;
            replicas?: number;
            createdAt?: string;
            environmentId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbMove(
        requestBody: {
            mariadbId: string;
            targetEnvironmentId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.move',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mariadbRebuild(
        requestBody: {
            mariadbId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mariadb.rebuild',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
