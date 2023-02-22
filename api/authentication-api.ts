/* tslint:disable */
/* eslint-disable */
/**
 * VideoEngager SDK API
 * API for VideoEngager SDK
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@videoengager.com
 *
 * NOTE: This module is auto generated usen openapi-generator (https://openapi-generator.tech).
 * MIT License (https://opensource.org/licenses/MIT)
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AuthenticatePartner200Response } from '../model';
// @ts-ignore
import { AuthenticatePartner400Response } from '../model';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API will generate a token for the partner to use in the SDK
         * @summary Authenticate Using Partner Access Key
         * @param {string} pak Partner API Key
         * @param {string} externalId External ID
         * @param {string} email partner email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authenticatePartner: async (pak: string, externalId: string, email: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pak' is not null or undefined
            assertParamExists('authenticatePartner', 'pak', pak)
            // verify required parameter 'externalId' is not null or undefined
            assertParamExists('authenticatePartner', 'externalId', externalId)
            // verify required parameter 'email' is not null or undefined
            assertParamExists('authenticatePartner', 'email', email)
            const localVarPath = `/api/partners/impersonate/{pak}/{externalId}/{email}`
                .replace(`{${"pak"}}`, encodeURIComponent(String(pak)))
                .replace(`{${"externalId"}}`, encodeURIComponent(String(externalId)))
                .replace(`{${"email"}}`, encodeURIComponent(String(email)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            if (configuration && configuration.promiseI){
                await configuration.promiseI
            }
            

    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * This API will generate a token for the partner to use in the SDK
         * @summary Authenticate Using Partner Access Key
         * @param {string} pak Partner API Key
         * @param {string} externalId External ID
         * @param {string} email partner email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authenticatePartner(pak: string, externalId: string, email: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticatePartner200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authenticatePartner(pak, externalId, email, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * This API will generate a token for the partner to use in the SDK
         * @summary Authenticate Using Partner Access Key
         * @param {AuthenticationApiAuthenticatePartnerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authenticatePartner(requestParameters: AuthenticationApiAuthenticatePartnerRequest, options?: AxiosRequestConfig): AxiosPromise<AuthenticatePartner200Response> {
            return localVarFp.authenticatePartner(requestParameters.pak, requestParameters.externalId, requestParameters.email, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - interface
 * @export
 * @interface AuthenticationApi
 */
export interface AuthenticationApiInterface {
    /**
     * This API will generate a token for the partner to use in the SDK
     * @summary Authenticate Using Partner Access Key
     * @param {AuthenticationApiAuthenticatePartnerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiInterface
     */
    authenticatePartner(requestParameters: AuthenticationApiAuthenticatePartnerRequest, options?: AxiosRequestConfig): AxiosPromise<AuthenticatePartner200Response>;
}

/**
 * Request parameters for authenticatePartner operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiAuthenticatePartnerRequest
 */
export interface AuthenticationApiAuthenticatePartnerRequest {
    /**
     * Partner API Key
     * @type {string}
     * @memberof AuthenticationApiAuthenticatePartner
     */
    readonly pak: string

    /**
     * External ID
     * @type {string}
     * @memberof AuthenticationApiAuthenticatePartner
     */
    readonly externalId: string

    /**
     * partner email
     * @type {string}
     * @memberof AuthenticationApiAuthenticatePartner
     */
    readonly email: string
}

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI implements AuthenticationApiInterface {
    /**
     * This API will generate a token for the partner to use in the SDK
     * @summary Authenticate Using Partner Access Key
     * @param {AuthenticationApiAuthenticatePartnerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public authenticatePartner(requestParameters: AuthenticationApiAuthenticatePartnerRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).authenticatePartner(requestParameters.pak, requestParameters.externalId, requestParameters.email, options).then((request) => request(this.axios, this.basePath));
    }
}
