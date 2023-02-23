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
import { AuthenticatePartner400Response } from '../model';
// @ts-ignore
import { CallbackObject } from '../model';
// @ts-ignore
import { CallbackUpdateError } from '../model';
// @ts-ignore
import { CallbackUpdateRequest } from '../model';
// @ts-ignore
import { CallbacksList } from '../model';
// @ts-ignore
import { CreateCallbackRequest } from '../model';
/**
 * CallbacksApi - axios parameter creator
 * @export
 */
export const CallbacksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Notes.  *URL* is required, transferID is needed if you want to be able to deactive it later, pin will not be applied if brokerage settings doesn\'t allow it, if code is not provided, code automatically will be generated.
         * @summary Create New Genesys Callback
         * @param {{ [key: string]: string; }} requestBody 
         * @param {string} tenantId Tennant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCallback: async (requestBody: { [key: string]: string; }, tenantId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('createCallback', 'requestBody', requestBody)
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('createCallback', 'tenantId', tenantId)
            const localVarPath = `/api/genesys/callback/tenant/{tenantId}`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            if (configuration && configuration.promiseI){
                await configuration.promiseI
            }
            
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * used to deactive remove callback by conversation ID
         * @summary remove callback by conversation ID
         * @param {string} tenantId Tennant ID
         * @param {string} conversationId Conversation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCallbackByConversationId: async (tenantId: string, conversationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('deleteCallbackByConversationId', 'tenantId', tenantId)
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('deleteCallbackByConversationId', 'conversationId', conversationId)
            const localVarPath = `/api/genesys/callback/tenant/{tenantId}/{conversationId}`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)))
                .replace(`{${"conversationId"}}`, encodeURIComponent(String(conversationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            if (configuration && configuration.promiseI){
                await configuration.promiseI
            }
            
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * used to retrieve callback by conversation id
         * @summary Get Single Callback
         * @param {string} tenantId Tennant ID
         * @param {string} conversationId Conversation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallbackByConversationId: async (tenantId: string, conversationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('getCallbackByConversationId', 'tenantId', tenantId)
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('getCallbackByConversationId', 'conversationId', conversationId)
            const localVarPath = `/api/genesys/callback/tenant/{tenantId}/{conversationId}`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)))
                .replace(`{${"conversationId"}}`, encodeURIComponent(String(conversationId)));
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
            
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * should return Object of dates strings with true or false
         * @summary Get Availablity of tennant for tennant
         * @param {string} tenantId Tennant ID
         * @param {number} numberOfDays number of days to return
         * @param {string} start start date (Number, Date ISO String, or Date)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTennantAvailability: async (tenantId: string, numberOfDays: number, start: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('getTennantAvailability', 'tenantId', tenantId)
            // verify required parameter 'numberOfDays' is not null or undefined
            assertParamExists('getTennantAvailability', 'numberOfDays', numberOfDays)
            // verify required parameter 'start' is not null or undefined
            assertParamExists('getTennantAvailability', 'start', start)
            const localVarPath = `/api/genesys/callback/{tenantId}/availability`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)));
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
            
            if (numberOfDays !== undefined) {
                localVarQueryParameter['number-of-days'] = numberOfDays;
            }

            if (start !== undefined) {
                localVarQueryParameter['start'] = start;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Calendar configuration of tennant can be set in Settings page
         * @summary Get Calendar configuration of tennant
         * @param {string} tenantId Tennant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTennantCalendar: async (tenantId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('getTennantCalendar', 'tenantId', tenantId)
            const localVarPath = `/api/genesys//callback/{tenantId}/calendar`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)));
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
        /**
         * Returns a list of callbacks for specific tenant and period with Server Side Pagination, Sorting and Filtering.
         * @summary List Callbacks for specific tennant.
         * @param {string} tenantId Tenant ID
         * @param {string} from start of the period
         * @param {string} to End of the period
         * @param {string} [preferedAgent] filter result by preferred agent
         * @param {'duration' | 'created' | 'date' | 'canceled'} [orderBy] Order by (default is date)
         * @param {1 | -1} [asc] Order by ascending or descending
         * @param {number} [pageSize] Page size
         * @param {number} [page] Page number
         * @param {string} [searchBy] * Search by specific field (will search in all fields if not specified) &lt;br /&gt; * Allowed values: visitor.name, visitor.email, conversationId, visitor.phone, \&quot;customAttributes.*\&quot; * (where * is the name of the custom attribute) 
         * @param {string} [searchString] Search string
         * @param {boolean} [active] Filter by active or inactive
         * @param {string} [queueId] Filter by queue
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCallbacks: async (tenantId: string, from: string, to: string, preferedAgent?: string, orderBy?: 'duration' | 'created' | 'date' | 'canceled', asc?: 1 | -1, pageSize?: number, page?: number, searchBy?: string, searchString?: string, active?: boolean, queueId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('listCallbacks', 'tenantId', tenantId)
            // verify required parameter 'from' is not null or undefined
            assertParamExists('listCallbacks', 'from', from)
            // verify required parameter 'to' is not null or undefined
            assertParamExists('listCallbacks', 'to', to)
            const localVarPath = `/api/genesys/callback/list/tenant/{tenantId}/{from}/{to}`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)))
                .replace(`{${"from"}}`, encodeURIComponent(String(from)))
                .replace(`{${"to"}}`, encodeURIComponent(String(to)));
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
            
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (preferedAgent !== undefined) {
                localVarQueryParameter['preferedAgent'] = preferedAgent;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (asc !== undefined) {
                localVarQueryParameter['asc'] = asc;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (searchBy !== undefined) {
                localVarQueryParameter['searchBy'] = searchBy;
            }

            if (searchString !== undefined) {
                localVarQueryParameter['searchString'] = searchString;
            }

            if (active !== undefined) {
                localVarQueryParameter['active'] = active;
            }

            if (queueId !== undefined) {
                localVarQueryParameter['queueId'] = queueId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * used to deactive remove callback by schedule ID
         * @summary remove callback by schedule ID
         * @param {string} tenantId Tennant ID
         * @param {string} scheduleId Schedule ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeCallbackByScheduleId: async (tenantId: string, scheduleId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('removeCallbackByScheduleId', 'tenantId', tenantId)
            // verify required parameter 'scheduleId' is not null or undefined
            assertParamExists('removeCallbackByScheduleId', 'scheduleId', scheduleId)
            const localVarPath = `/api/genesys/callback/byScheduleId/tenant/{tenantId}/{scheduleId}`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)))
                .replace(`{${"scheduleId"}}`, encodeURIComponent(String(scheduleId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            if (configuration && configuration.promiseI){
                await configuration.promiseI
            }
            
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * used to update callback schedule time by conversation id
         * @summary Update Single Callback
         * @param {CallbackUpdateRequest} callbackUpdateRequest callback object
         * @param {string} tenantId Tennant ID
         * @param {string} conversationId Conversation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCallbackByConversationId: async (callbackUpdateRequest: CallbackUpdateRequest, tenantId: string, conversationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'callbackUpdateRequest' is not null or undefined
            assertParamExists('updateCallbackByConversationId', 'callbackUpdateRequest', callbackUpdateRequest)
            // verify required parameter 'tenantId' is not null or undefined
            assertParamExists('updateCallbackByConversationId', 'tenantId', tenantId)
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('updateCallbackByConversationId', 'conversationId', conversationId)
            const localVarPath = `/api/genesys/callback/tenant/{tenantId}/{conversationId}`
                .replace(`{${"tenantId"}}`, encodeURIComponent(String(tenantId)))
                .replace(`{${"conversationId"}}`, encodeURIComponent(String(conversationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            if (configuration && configuration.promiseI){
                await configuration.promiseI
            }
            
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(callbackUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CallbacksApi - functional programming interface
 * @export
 */
export const CallbacksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CallbacksApiAxiosParamCreator(configuration)
    return {
        /**
         * Notes.  *URL* is required, transferID is needed if you want to be able to deactive it later, pin will not be applied if brokerage settings doesn\'t allow it, if code is not provided, code automatically will be generated.
         * @summary Create New Genesys Callback
         * @param {{ [key: string]: string; }} requestBody 
         * @param {string} tenantId Tennant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCallback(requestBody: { [key: string]: string; }, tenantId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallbackObject>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCallback(requestBody, tenantId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * used to deactive remove callback by conversation ID
         * @summary remove callback by conversation ID
         * @param {string} tenantId Tennant ID
         * @param {string} conversationId Conversation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCallbackByConversationId(tenantId: string, conversationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallbackObject>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCallbackByConversationId(tenantId, conversationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * used to retrieve callback by conversation id
         * @summary Get Single Callback
         * @param {string} tenantId Tennant ID
         * @param {string} conversationId Conversation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCallbackByConversationId(tenantId: string, conversationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallbackObject>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCallbackByConversationId(tenantId, conversationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * should return Object of dates strings with true or false
         * @summary Get Availablity of tennant for tennant
         * @param {string} tenantId Tennant ID
         * @param {number} numberOfDays number of days to return
         * @param {string} start start date (Number, Date ISO String, or Date)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTennantAvailability(tenantId: string, numberOfDays: number, start: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: number; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTennantAvailability(tenantId, numberOfDays, start, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Calendar configuration of tennant can be set in Settings page
         * @summary Get Calendar configuration of tennant
         * @param {string} tenantId Tennant ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTennantCalendar(tenantId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTennantCalendar(tenantId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of callbacks for specific tenant and period with Server Side Pagination, Sorting and Filtering.
         * @summary List Callbacks for specific tennant.
         * @param {string} tenantId Tenant ID
         * @param {string} from start of the period
         * @param {string} to End of the period
         * @param {string} [preferedAgent] filter result by preferred agent
         * @param {'duration' | 'created' | 'date' | 'canceled'} [orderBy] Order by (default is date)
         * @param {1 | -1} [asc] Order by ascending or descending
         * @param {number} [pageSize] Page size
         * @param {number} [page] Page number
         * @param {string} [searchBy] * Search by specific field (will search in all fields if not specified) &lt;br /&gt; * Allowed values: visitor.name, visitor.email, conversationId, visitor.phone, \&quot;customAttributes.*\&quot; * (where * is the name of the custom attribute) 
         * @param {string} [searchString] Search string
         * @param {boolean} [active] Filter by active or inactive
         * @param {string} [queueId] Filter by queue
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCallbacks(tenantId: string, from: string, to: string, preferedAgent?: string, orderBy?: 'duration' | 'created' | 'date' | 'canceled', asc?: 1 | -1, pageSize?: number, page?: number, searchBy?: string, searchString?: string, active?: boolean, queueId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallbacksList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCallbacks(tenantId, from, to, preferedAgent, orderBy, asc, pageSize, page, searchBy, searchString, active, queueId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * used to deactive remove callback by schedule ID
         * @summary remove callback by schedule ID
         * @param {string} tenantId Tennant ID
         * @param {string} scheduleId Schedule ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeCallbackByScheduleId(tenantId: string, scheduleId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallbackObject>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeCallbackByScheduleId(tenantId, scheduleId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * used to update callback schedule time by conversation id
         * @summary Update Single Callback
         * @param {CallbackUpdateRequest} callbackUpdateRequest callback object
         * @param {string} tenantId Tennant ID
         * @param {string} conversationId Conversation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCallbackByConversationId(callbackUpdateRequest: CallbackUpdateRequest, tenantId: string, conversationId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallbackObject>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCallbackByConversationId(callbackUpdateRequest, tenantId, conversationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CallbacksApi - factory interface
 * @export
 */
export const CallbacksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CallbacksApiFp(configuration)
    return {
        /**
         * Notes.  *URL* is required, transferID is needed if you want to be able to deactive it later, pin will not be applied if brokerage settings doesn\'t allow it, if code is not provided, code automatically will be generated.
         * @summary Create New Genesys Callback
         * @param {CallbacksApiCreateCallbackRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCallback(requestParameters: CallbacksApiCreateCallbackRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject> {
            return localVarFp.createCallback(requestParameters.requestBody, requestParameters.tenantId, options).then((request) => request(axios, basePath));
        },
        /**
         * used to deactive remove callback by conversation ID
         * @summary remove callback by conversation ID
         * @param {CallbacksApiDeleteCallbackByConversationIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCallbackByConversationId(requestParameters: CallbacksApiDeleteCallbackByConversationIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject> {
            return localVarFp.deleteCallbackByConversationId(requestParameters.tenantId, requestParameters.conversationId, options).then((request) => request(axios, basePath));
        },
        /**
         * used to retrieve callback by conversation id
         * @summary Get Single Callback
         * @param {CallbacksApiGetCallbackByConversationIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallbackByConversationId(requestParameters: CallbacksApiGetCallbackByConversationIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject> {
            return localVarFp.getCallbackByConversationId(requestParameters.tenantId, requestParameters.conversationId, options).then((request) => request(axios, basePath));
        },
        /**
         * should return Object of dates strings with true or false
         * @summary Get Availablity of tennant for tennant
         * @param {CallbacksApiGetTennantAvailabilityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTennantAvailability(requestParameters: CallbacksApiGetTennantAvailabilityRequest, options?: AxiosRequestConfig): AxiosPromise<{ [key: string]: number; }> {
            return localVarFp.getTennantAvailability(requestParameters.tenantId, requestParameters.numberOfDays, requestParameters.start, options).then((request) => request(axios, basePath));
        },
        /**
         * Calendar configuration of tennant can be set in Settings page
         * @summary Get Calendar configuration of tennant
         * @param {CallbacksApiGetTennantCalendarRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTennantCalendar(requestParameters: CallbacksApiGetTennantCalendarRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.getTennantCalendar(requestParameters.tenantId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of callbacks for specific tenant and period with Server Side Pagination, Sorting and Filtering.
         * @summary List Callbacks for specific tennant.
         * @param {CallbacksApiListCallbacksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCallbacks(requestParameters: CallbacksApiListCallbacksRequest, options?: AxiosRequestConfig): AxiosPromise<CallbacksList> {
            return localVarFp.listCallbacks(requestParameters.tenantId, requestParameters.from, requestParameters.to, requestParameters.preferedAgent, requestParameters.orderBy, requestParameters.asc, requestParameters.pageSize, requestParameters.page, requestParameters.searchBy, requestParameters.searchString, requestParameters.active, requestParameters.queueId, options).then((request) => request(axios, basePath));
        },
        /**
         * used to deactive remove callback by schedule ID
         * @summary remove callback by schedule ID
         * @param {CallbacksApiRemoveCallbackByScheduleIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeCallbackByScheduleId(requestParameters: CallbacksApiRemoveCallbackByScheduleIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject> {
            return localVarFp.removeCallbackByScheduleId(requestParameters.tenantId, requestParameters.scheduleId, options).then((request) => request(axios, basePath));
        },
        /**
         * used to update callback schedule time by conversation id
         * @summary Update Single Callback
         * @param {CallbacksApiUpdateCallbackByConversationIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCallbackByConversationId(requestParameters: CallbacksApiUpdateCallbackByConversationIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject> {
            return localVarFp.updateCallbackByConversationId(requestParameters.callbackUpdateRequest, requestParameters.tenantId, requestParameters.conversationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CallbacksApi - interface
 * @export
 * @interface CallbacksApi
 */
export interface CallbacksApiInterface {
    /**
     * Notes.  *URL* is required, transferID is needed if you want to be able to deactive it later, pin will not be applied if brokerage settings doesn\'t allow it, if code is not provided, code automatically will be generated.
     * @summary Create New Genesys Callback
     * @param {CallbacksApiCreateCallbackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    createCallback(requestParameters: CallbacksApiCreateCallbackRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject>;
    /**
     * used to deactive remove callback by conversation ID
     * @summary remove callback by conversation ID
     * @param {CallbacksApiDeleteCallbackByConversationIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    deleteCallbackByConversationId(requestParameters: CallbacksApiDeleteCallbackByConversationIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject>;
    /**
     * used to retrieve callback by conversation id
     * @summary Get Single Callback
     * @param {CallbacksApiGetCallbackByConversationIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    getCallbackByConversationId(requestParameters: CallbacksApiGetCallbackByConversationIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject>;
    /**
     * should return Object of dates strings with true or false
     * @summary Get Availablity of tennant for tennant
     * @param {CallbacksApiGetTennantAvailabilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    getTennantAvailability(requestParameters: CallbacksApiGetTennantAvailabilityRequest, options?: AxiosRequestConfig): AxiosPromise<{ [key: string]: number; }>;
    /**
     * Calendar configuration of tennant can be set in Settings page
     * @summary Get Calendar configuration of tennant
     * @param {CallbacksApiGetTennantCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    getTennantCalendar(requestParameters: CallbacksApiGetTennantCalendarRequest, options?: AxiosRequestConfig): AxiosPromise<string>;
    /**
     * Returns a list of callbacks for specific tenant and period with Server Side Pagination, Sorting and Filtering.
     * @summary List Callbacks for specific tennant.
     * @param {CallbacksApiListCallbacksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    listCallbacks(requestParameters: CallbacksApiListCallbacksRequest, options?: AxiosRequestConfig): AxiosPromise<CallbacksList>;
    /**
     * used to deactive remove callback by schedule ID
     * @summary remove callback by schedule ID
     * @param {CallbacksApiRemoveCallbackByScheduleIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    removeCallbackByScheduleId(requestParameters: CallbacksApiRemoveCallbackByScheduleIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject>;
    /**
     * used to update callback schedule time by conversation id
     * @summary Update Single Callback
     * @param {CallbacksApiUpdateCallbackByConversationIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApiInterface
     */
    updateCallbackByConversationId(requestParameters: CallbacksApiUpdateCallbackByConversationIdRequest, options?: AxiosRequestConfig): AxiosPromise<CallbackObject>;
}

/**
 * Request parameters for createCallback operation in CallbacksApi.
 * @export
 * @interface CallbacksApiCreateCallbackRequest
 */
export interface CallbacksApiCreateCallbackRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CallbacksApiCreateCallback
     */
    readonly requestBody: { [key: string]: string; }

    /**
     * Tennant ID
     * @type {string}
     * @memberof CallbacksApiCreateCallback
     */
    readonly tenantId: string
}

/**
 * Request parameters for deleteCallbackByConversationId operation in CallbacksApi.
 * @export
 * @interface CallbacksApiDeleteCallbackByConversationIdRequest
 */
export interface CallbacksApiDeleteCallbackByConversationIdRequest {
    /**
     * Tennant ID
     * @type {string}
     * @memberof CallbacksApiDeleteCallbackByConversationId
     */
    readonly tenantId: string

    /**
     * Conversation ID
     * @type {string}
     * @memberof CallbacksApiDeleteCallbackByConversationId
     */
    readonly conversationId: string
}

/**
 * Request parameters for getCallbackByConversationId operation in CallbacksApi.
 * @export
 * @interface CallbacksApiGetCallbackByConversationIdRequest
 */
export interface CallbacksApiGetCallbackByConversationIdRequest {
    /**
     * Tennant ID
     * @type {string}
     * @memberof CallbacksApiGetCallbackByConversationId
     */
    readonly tenantId: string

    /**
     * Conversation ID
     * @type {string}
     * @memberof CallbacksApiGetCallbackByConversationId
     */
    readonly conversationId: string
}

/**
 * Request parameters for getTennantAvailability operation in CallbacksApi.
 * @export
 * @interface CallbacksApiGetTennantAvailabilityRequest
 */
export interface CallbacksApiGetTennantAvailabilityRequest {
    /**
     * Tennant ID
     * @type {string}
     * @memberof CallbacksApiGetTennantAvailability
     */
    readonly tenantId: string

    /**
     * number of days to return
     * @type {number}
     * @memberof CallbacksApiGetTennantAvailability
     */
    readonly numberOfDays: number

    /**
     * start date (Number, Date ISO String, or Date)
     * @type {string}
     * @memberof CallbacksApiGetTennantAvailability
     */
    readonly start: string
}

/**
 * Request parameters for getTennantCalendar operation in CallbacksApi.
 * @export
 * @interface CallbacksApiGetTennantCalendarRequest
 */
export interface CallbacksApiGetTennantCalendarRequest {
    /**
     * Tennant ID
     * @type {string}
     * @memberof CallbacksApiGetTennantCalendar
     */
    readonly tenantId: string
}

/**
 * Request parameters for listCallbacks operation in CallbacksApi.
 * @export
 * @interface CallbacksApiListCallbacksRequest
 */
export interface CallbacksApiListCallbacksRequest {
    /**
     * Tenant ID
     * @type {string}
     * @memberof CallbacksApiListCallbacks
     */
    readonly tenantId: string

    /**
     * start of the period
     * @type {string}
     * @memberof CallbacksApiListCallbacks
     */
    readonly from: string

    /**
     * End of the period
     * @type {string}
     * @memberof CallbacksApiListCallbacks
     */
    readonly to: string

    /**
     * filter result by preferred agent
     * @type {string}
     * @memberof CallbacksApiListCallbacks
     */
    readonly preferedAgent?: string

    /**
     * Order by (default is date)
     * @type {'duration' | 'created' | 'date' | 'canceled'}
     * @memberof CallbacksApiListCallbacks
     */
    readonly orderBy?: 'duration' | 'created' | 'date' | 'canceled'

    /**
     * Order by ascending or descending
     * @type {1 | -1}
     * @memberof CallbacksApiListCallbacks
     */
    readonly asc?: 1 | -1

    /**
     * Page size
     * @type {number}
     * @memberof CallbacksApiListCallbacks
     */
    readonly pageSize?: number

    /**
     * Page number
     * @type {number}
     * @memberof CallbacksApiListCallbacks
     */
    readonly page?: number

    /**
     * * Search by specific field (will search in all fields if not specified) &lt;br /&gt; * Allowed values: visitor.name, visitor.email, conversationId, visitor.phone, \&quot;customAttributes.*\&quot; * (where * is the name of the custom attribute) 
     * @type {string}
     * @memberof CallbacksApiListCallbacks
     */
    readonly searchBy?: string

    /**
     * Search string
     * @type {string}
     * @memberof CallbacksApiListCallbacks
     */
    readonly searchString?: string

    /**
     * Filter by active or inactive
     * @type {boolean}
     * @memberof CallbacksApiListCallbacks
     */
    readonly active?: boolean

    /**
     * Filter by queue
     * @type {string}
     * @memberof CallbacksApiListCallbacks
     */
    readonly queueId?: string
}

/**
 * Request parameters for removeCallbackByScheduleId operation in CallbacksApi.
 * @export
 * @interface CallbacksApiRemoveCallbackByScheduleIdRequest
 */
export interface CallbacksApiRemoveCallbackByScheduleIdRequest {
    /**
     * Tennant ID
     * @type {string}
     * @memberof CallbacksApiRemoveCallbackByScheduleId
     */
    readonly tenantId: string

    /**
     * Schedule ID
     * @type {string}
     * @memberof CallbacksApiRemoveCallbackByScheduleId
     */
    readonly scheduleId: string
}

/**
 * Request parameters for updateCallbackByConversationId operation in CallbacksApi.
 * @export
 * @interface CallbacksApiUpdateCallbackByConversationIdRequest
 */
export interface CallbacksApiUpdateCallbackByConversationIdRequest {
    /**
     * callback object
     * @type {CallbackUpdateRequest}
     * @memberof CallbacksApiUpdateCallbackByConversationId
     */
    readonly callbackUpdateRequest: CallbackUpdateRequest

    /**
     * Tennant ID
     * @type {string}
     * @memberof CallbacksApiUpdateCallbackByConversationId
     */
    readonly tenantId: string

    /**
     * Conversation ID
     * @type {string}
     * @memberof CallbacksApiUpdateCallbackByConversationId
     */
    readonly conversationId: string
}

/**
 * CallbacksApi - object-oriented interface
 * @export
 * @class CallbacksApi
 * @extends {BaseAPI}
 */
export class CallbacksApi extends BaseAPI implements CallbacksApiInterface {
    /**
     * Notes.  *URL* is required, transferID is needed if you want to be able to deactive it later, pin will not be applied if brokerage settings doesn\'t allow it, if code is not provided, code automatically will be generated.
     * @summary Create New Genesys Callback
     * @param {CallbacksApiCreateCallbackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public createCallback(requestParameters: CallbacksApiCreateCallbackRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).createCallback(requestParameters.requestBody, requestParameters.tenantId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * used to deactive remove callback by conversation ID
     * @summary remove callback by conversation ID
     * @param {CallbacksApiDeleteCallbackByConversationIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public deleteCallbackByConversationId(requestParameters: CallbacksApiDeleteCallbackByConversationIdRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).deleteCallbackByConversationId(requestParameters.tenantId, requestParameters.conversationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * used to retrieve callback by conversation id
     * @summary Get Single Callback
     * @param {CallbacksApiGetCallbackByConversationIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public getCallbackByConversationId(requestParameters: CallbacksApiGetCallbackByConversationIdRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).getCallbackByConversationId(requestParameters.tenantId, requestParameters.conversationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * should return Object of dates strings with true or false
     * @summary Get Availablity of tennant for tennant
     * @param {CallbacksApiGetTennantAvailabilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public getTennantAvailability(requestParameters: CallbacksApiGetTennantAvailabilityRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).getTennantAvailability(requestParameters.tenantId, requestParameters.numberOfDays, requestParameters.start, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Calendar configuration of tennant can be set in Settings page
     * @summary Get Calendar configuration of tennant
     * @param {CallbacksApiGetTennantCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public getTennantCalendar(requestParameters: CallbacksApiGetTennantCalendarRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).getTennantCalendar(requestParameters.tenantId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of callbacks for specific tenant and period with Server Side Pagination, Sorting and Filtering.
     * @summary List Callbacks for specific tennant.
     * @param {CallbacksApiListCallbacksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public listCallbacks(requestParameters: CallbacksApiListCallbacksRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).listCallbacks(requestParameters.tenantId, requestParameters.from, requestParameters.to, requestParameters.preferedAgent, requestParameters.orderBy, requestParameters.asc, requestParameters.pageSize, requestParameters.page, requestParameters.searchBy, requestParameters.searchString, requestParameters.active, requestParameters.queueId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * used to deactive remove callback by schedule ID
     * @summary remove callback by schedule ID
     * @param {CallbacksApiRemoveCallbackByScheduleIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public removeCallbackByScheduleId(requestParameters: CallbacksApiRemoveCallbackByScheduleIdRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).removeCallbackByScheduleId(requestParameters.tenantId, requestParameters.scheduleId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * used to update callback schedule time by conversation id
     * @summary Update Single Callback
     * @param {CallbacksApiUpdateCallbackByConversationIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallbacksApi
     */
    public updateCallbackByConversationId(requestParameters: CallbacksApiUpdateCallbackByConversationIdRequest, options?: AxiosRequestConfig) {
        return CallbacksApiFp(this.configuration).updateCallbackByConversationId(requestParameters.callbackUpdateRequest, requestParameters.tenantId, requestParameters.conversationId, options).then((request) => request(this.axios, this.basePath));
    }
}
