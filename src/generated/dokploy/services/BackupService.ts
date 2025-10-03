/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BackupService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupCreate(
        requestBody: {
            schedule: string;
            enabled?: boolean | null;
            prefix: string;
            destinationId: string;
            keepLatestCount?: number | null;
            database: string;
            mariadbId?: string | null;
            mysqlId?: string | null;
            postgresId?: string | null;
            mongoId?: string | null;
            databaseType: 'postgres' | 'mariadb' | 'mysql' | 'mongo' | 'web-server';
            userId?: string | null;
            backupType?: 'database' | 'compose';
            composeId?: string | null;
            serviceName?: string | null;
            metadata?: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param backupId
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupOne(
        backupId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/backup.one',
            query: {
                'backupId': backupId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupUpdate(
        requestBody: {
            schedule: string;
            enabled?: boolean | null;
            prefix: string;
            backupId: string;
            destinationId: string;
            database: string;
            keepLatestCount?: number | null;
            serviceName: string | null;
            metadata?: any;
            databaseType: 'postgres' | 'mariadb' | 'mysql' | 'mongo' | 'web-server';
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupRemove(
        requestBody: {
            backupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupManualBackupPostgres(
        requestBody: {
            backupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.manualBackupPostgres',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupManualBackupMySql(
        requestBody: {
            backupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.manualBackupMySql',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupManualBackupMariadb(
        requestBody: {
            backupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.manualBackupMariadb',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupManualBackupCompose(
        requestBody: {
            backupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.manualBackupCompose',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupManualBackupMongo(
        requestBody: {
            backupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.manualBackupMongo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupManualBackupWebServer(
        requestBody: {
            backupId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/backup.manualBackupWebServer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param destinationId
     * @param search
     * @param serverId
     * @returns any Successful response
     * @throws ApiError
     */
    public static backupListBackupFiles(
        destinationId: string,
        search: string,
        serverId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/backup.listBackupFiles',
            query: {
                'destinationId': destinationId,
                'search': search,
                'serverId': serverId,
            },
        });
    }
}
