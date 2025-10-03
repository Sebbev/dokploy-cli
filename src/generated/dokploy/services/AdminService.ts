/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class AdminService {
	/**
	 * @param requestBody
	 * @returns any Successful response
	 * @throws ApiError
	 */
	public static adminSetupMonitoring(requestBody: {
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
	}): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: "POST",
			url: "/admin.setupMonitoring",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
