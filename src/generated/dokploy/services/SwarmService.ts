/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SwarmService {
    /**
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static swarmGetNodes(
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/swarm.getNodes',
            query: {
                'serverId': serverId,
            },
        });
    }
    /**
     * @param nodeId
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static swarmGetNodeInfo(
        nodeId: string,
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/swarm.getNodeInfo',
            query: {
                'nodeId': nodeId,
                'serverId': serverId,
            },
        });
    }
    /**
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static swarmGetNodeApps(
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/swarm.getNodeApps',
            query: {
                'serverId': serverId,
            },
        });
    }
}
