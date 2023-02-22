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
import { CallbackObjectGenesys } from './callback-object-genesys';
// May contain unused imports in some cases
// @ts-ignore
import { CallbackObjectVideoengager } from './callback-object-videoengager';

/**
 * 
 * @export
 * @interface CallbackObject
 */
export interface CallbackObject {
    /**
     * 
     * @type {CallbackObjectGenesys}
     * @memberof CallbackObject
     */
    'genesys'?: CallbackObjectGenesys;
    /**
     * 
     * @type {CallbackObjectVideoengager}
     * @memberof CallbackObject
     */
    'videoengager'?: CallbackObjectVideoengager;
    /**
     * ics Data, can be downloaded as ics file, and then send as attachment in the mail
     * @type {string}
     * @memberof CallbackObject
     */
    'icsCalendarData'?: string;
    /**
     * wether notification email has been send to visitor or not
     * @type {boolean}
     * @memberof CallbackObject
     */
    'emailSent'?: boolean;
}

