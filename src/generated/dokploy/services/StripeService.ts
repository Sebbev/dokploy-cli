/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StripeService {
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static stripeGetProducts(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stripe.getProducts',
        });
    }
    /**
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static stripeCreateCheckoutSession(
        requestBody: {
            productId: string;
            serverQuantity: number;
            isAnnual: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stripe.createCheckoutSession',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static stripeCreateCustomerPortalSession(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stripe.createCustomerPortalSession',
        });
    }
    /**
     * @returns any Successful response
     * @throws ApiError
     */
    public static stripeCanCreateMoreServers(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stripe.canCreateMoreServers',
        });
    }
}
