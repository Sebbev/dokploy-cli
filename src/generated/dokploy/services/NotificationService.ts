/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationService {
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationCreateSlack(
        requestBody: {
            appBuildError: boolean;
            databaseBackup: boolean;
            dokployRestart: boolean;
            name: string;
            appDeploy: boolean;
            dockerCleanup: boolean;
            serverThreshold: boolean;
            webhookUrl: string;
            channel: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.createSlack',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationUpdateSlack(
        requestBody: {
            appBuildError?: boolean;
            databaseBackup?: boolean;
            dokployRestart?: boolean;
            name?: string;
            appDeploy?: boolean;
            dockerCleanup?: boolean;
            serverThreshold?: boolean;
            webhookUrl?: string;
            channel?: string;
            notificationId: string;
            slackId: string;
            organizationId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.updateSlack',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationTestSlackConnection(
        requestBody: {
            webhookUrl: string;
            channel: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.testSlackConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationCreateTelegram(
        requestBody: {
            appBuildError: boolean;
            databaseBackup: boolean;
            dokployRestart: boolean;
            name: string;
            appDeploy: boolean;
            dockerCleanup: boolean;
            serverThreshold: boolean;
            botToken: string;
            chatId: string;
            messageThreadId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.createTelegram',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationUpdateTelegram(
        requestBody: {
            appBuildError?: boolean;
            databaseBackup?: boolean;
            dokployRestart?: boolean;
            name?: string;
            appDeploy?: boolean;
            dockerCleanup?: boolean;
            serverThreshold?: boolean;
            botToken?: string;
            chatId?: string;
            messageThreadId?: string;
            notificationId: string;
            telegramId: string;
            organizationId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.updateTelegram',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationTestTelegramConnection(
        requestBody: {
            botToken: string;
            chatId: string;
            messageThreadId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.testTelegramConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationCreateDiscord(
        requestBody: {
            appBuildError: boolean;
            databaseBackup: boolean;
            dokployRestart: boolean;
            name: string;
            appDeploy: boolean;
            dockerCleanup: boolean;
            serverThreshold: boolean;
            webhookUrl: string;
            decoration: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.createDiscord',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationUpdateDiscord(
        requestBody: {
            appBuildError?: boolean;
            databaseBackup?: boolean;
            dokployRestart?: boolean;
            name?: string;
            appDeploy?: boolean;
            dockerCleanup?: boolean;
            serverThreshold?: boolean;
            webhookUrl?: string;
            decoration?: boolean;
            notificationId: string;
            discordId: string;
            organizationId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.updateDiscord',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationTestDiscordConnection(
        requestBody: {
            webhookUrl: string;
            decoration?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.testDiscordConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationCreateEmail(
        requestBody: {
            appBuildError: boolean;
            databaseBackup: boolean;
            dokployRestart: boolean;
            name: string;
            appDeploy: boolean;
            dockerCleanup: boolean;
            serverThreshold: boolean;
            smtpServer: string;
            smtpPort: number;
            username: string;
            password: string;
            fromAddress: string;
            toAddresses: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.createEmail',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationUpdateEmail(
        requestBody: {
            appBuildError?: boolean;
            databaseBackup?: boolean;
            dokployRestart?: boolean;
            name?: string;
            appDeploy?: boolean;
            dockerCleanup?: boolean;
            serverThreshold?: boolean;
            smtpServer?: string;
            smtpPort?: number;
            username?: string;
            password?: string;
            fromAddress?: string;
            toAddresses?: Array<string>;
            notificationId: string;
            emailId: string;
            organizationId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.updateEmail',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationTestEmailConnection(
        requestBody: {
            smtpServer: string;
            smtpPort: number;
            username: string;
            password: string;
            toAddresses: Array<string>;
            fromAddress: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.testEmailConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationRemove(
        requestBody: {
            notificationId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param notificationId
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationOne(
        notificationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification.one',
            query: {
                'notificationId': notificationId,
            },
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification.all',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationReceiveNotification(
        requestBody: {
            ServerType?: 'Dokploy' | 'Remote';
            Type: 'Memory' | 'CPU';
            Value: number;
            Threshold: number;
            Message: string;
            Timestamp: string;
            Token: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.receiveNotification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationCreateGotify(
        requestBody: {
            appBuildError: boolean;
            databaseBackup: boolean;
            dokployRestart: boolean;
            name: string;
            appDeploy: boolean;
            dockerCleanup: boolean;
            serverUrl: string;
            appToken: string;
            priority: number;
            decoration: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.createGotify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationUpdateGotify(
        requestBody: {
            appBuildError?: boolean;
            databaseBackup?: boolean;
            dokployRestart?: boolean;
            name?: string;
            appDeploy?: boolean;
            dockerCleanup?: boolean;
            serverUrl?: string;
            appToken?: string;
            priority?: number;
            decoration?: boolean;
            notificationId: string;
            gotifyId: string;
            organizationId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.updateGotify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationTestGotifyConnection(
        requestBody: {
            serverUrl: string;
            appToken: string;
            priority: number;
            decoration?: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.testGotifyConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationCreateNtfy(
        requestBody: {
            appBuildError: boolean;
            databaseBackup: boolean;
            dokployRestart: boolean;
            name: string;
            appDeploy: boolean;
            dockerCleanup: boolean;
            serverUrl: string;
            topic: string;
            accessToken: string;
            priority: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.createNtfy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationUpdateNtfy(
        requestBody: {
            appBuildError?: boolean;
            databaseBackup?: boolean;
            dokployRestart?: boolean;
            name?: string;
            appDeploy?: boolean;
            dockerCleanup?: boolean;
            serverUrl?: string;
            topic?: string;
            accessToken?: string;
            priority?: number;
            notificationId: string;
            ntfyId: string;
            organizationId?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.updateNtfy',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationTestNtfyConnection(
        requestBody: {
            serverUrl: string;
            topic: string;
            accessToken: string;
            priority: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification.testNtfyConnection',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static notificationGetEmailProviders(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification.getEmailProviders',
        });
    }
}
