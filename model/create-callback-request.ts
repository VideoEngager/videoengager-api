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



/**
 * 
 * @export
 * @interface CreateCallbackRequest
 */
export interface CreateCallbackRequest {
    /**
     * used to add agent ID preferred routing, MUST exist if callbackOwned is True;
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'preferedAgent'?: string;
    /**
     * used to give prefered Agent ownership of the callback, will not work without prefered Agent ID
     * @type {boolean}
     * @memberof CreateCallbackRequest
     */
    'callbackOwned'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'firstname': string;
    /**
     * 
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'lastname'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'customer_email': string;
    /**
     * Identify the creater of the scheduled meeting.
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'creator'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    '_customer_number': string;
    /**
     * 
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    '_desired_time': string;
    /**
     * 
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'veSubject'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'customer_subject'?: string;
    /**
     * used to add custom customer ID Field to the callback
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'customerID'?: string;
    /**
     * used to add script ID  to the callback (if not provided, default script in settings will be used)
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'scriptId'?: string;
    /**
     * used to add queue ID  to the callback (if not provided, default script in settings will be used)
     * @type {string}
     * @memberof CreateCallbackRequest
     */
    'queueId'?: string;
}

