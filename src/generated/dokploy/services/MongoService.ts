/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MongoService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoCreate(
        requestBody: {
            name: string;
            appName: string;
            dockerImage?: string;
            environmentId: string;
            description?: string | null;
            databaseUser: string;
            databasePassword: string;
            serverId?: string | null;
            replicaSets?: boolean | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param mongoId
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoOne(
        mongoId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mongo.one',
            query: {
                'mongoId': mongoId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoStart(
        requestBody: {
            mongoId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.start',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoStop(
        requestBody: {
            mongoId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.stop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoSaveExternalPort(
        requestBody: {
            mongoId: string;
            externalPort: number | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.saveExternalPort',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoDeploy(
        requestBody: {
            mongoId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.deploy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoChangeStatus(
        requestBody: {
            mongoId: string;
            applicationStatus: 'idle' | 'running' | 'done' | 'error';
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.changeStatus',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoReload(
        requestBody: {
            mongoId: string;
            appName: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.reload',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoRemove(
        requestBody: {
            mongoId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoSaveEnvironment(
        requestBody: {
            mongoId: string;
            env?: string | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.saveEnvironment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoUpdate(
        requestBody: {
            mongoId: string;
            name?: string;
            appName?: string;
            description?: string | null;
            databaseUser?: string;
            databasePassword?: string;
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
            replicaSets?: boolean | null;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoMove(
        requestBody: {
            mongoId: string;
            targetEnvironmentId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.move',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static mongoRebuild(
        requestBody: {
            mongoId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mongo.rebuild',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
