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
import { CallbackObjectGenesysConversation } from './callback-object-genesys-conversation';

/**
 * 
 * @export
 * @interface CallbackObjectGenesys
 */
export interface CallbackObjectGenesys {
    /**
     * 
     * @type {string}
     * @memberof CallbackObjectGenesys
     */
    'scriptId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CallbackObjectGenesys
     */
    'queueId'?: string;
    /**
     * 
     * @type {CallbackObjectGenesysConversation}
     * @memberof CallbackObjectGenesys
     */
    'conversation'?: CallbackObjectGenesysConversation;
}

