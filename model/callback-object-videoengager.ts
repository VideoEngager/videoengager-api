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
 * @interface CallbackObjectVideoengager
 */
export interface CallbackObjectVideoengager {
    /**
     * 
     * @type {boolean}
     * @memberof CallbackObjectVideoengager
     */
    'autoAnswer': boolean;
    /**
     * 
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'customerID'?: string;
    /**
     * visitor Name
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'name': string;
    /**
     * visitor Email
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'email': string;
    /**
     * visitor Phone
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'phone': string;
    /**
     * subject
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'subject': string;
    /**
     * Visitor Join Meeting URL
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'meetingUrl': string;
    /**
     * Short URL Code for generating short URL
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'code': string;
    /**
     * scheduled Time
     * @type {number}
     * @memberof CallbackObjectVideoengager
     */
    'date': number;
    /**
     * Agent Meeting URL, Only Available upon creation
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'agentUrl'?: string;
    /**
     * Created At
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'created': string;
    /**
     * Duration of callback in minutes
     * @type {number}
     * @memberof CallbackObjectVideoengager
     */
    'duration': number;
    /**
     * scheduleId
     * @type {string}
     * @memberof CallbackObjectVideoengager
     */
    'scheduleId': string;
    /**
     * wether this callback is active or canceled
     * @type {boolean}
     * @memberof CallbackObjectVideoengager
     */
    'active': boolean;
}

