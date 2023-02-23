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


// May contain unused imports in some cases
// @ts-ignore
import { CallbackObject } from './callback-object';

/**
 * 
 * @export
 * @interface CallbacksList
 */
export interface CallbacksList {
    /**
     * 
     * @type {Array<CallbackObject>}
     * @memberof CallbacksList
     */
    'data'?: Array<CallbackObject>;
    /**
     * 
     * @type {string}
     * @memberof CallbacksList
     */
    'from'?: string;
    /**
     * 
     * @type {string}
     * @memberof CallbacksList
     */
    'to'?: string;
    /**
     * 
     * @type {number}
     * @memberof CallbacksList
     */
    'count'?: number;
    /**
     * 
     * @type {number}
     * @memberof CallbacksList
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof CallbacksList
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof CallbacksList
     */
    'orderBy'?: string;
    /**
     * 
     * @type {number}
     * @memberof CallbacksList
     */
    'asc'?: number;
    /**
     * 
     * @type {string}
     * @memberof CallbacksList
     */
    'preferedAgent'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CallbacksList
     */
    'active'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CallbacksList
     */
    'queueId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CallbacksList
     */
    'searchBy'?: string;
    /**
     * 
     * @type {string}
     * @memberof CallbacksList
     */
    'searchString'?: string;
}

