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
 * @interface CallbackUpdateError
 */
export interface CallbackUpdateError {
    /**
     * 
     * @type {string}
     * @memberof CallbackUpdateError
     */
    'error'?: CallbackUpdateErrorErrorEnum;
}

export const CallbackUpdateErrorErrorEnum = {
    InvalidConversationId: 'invalid conversation id',
    CallbackNotFoundOnGenesys: 'callback not found on genesys',
    CannotUpdateNonAgentOwnedCallback: 'Cannot update non agent owned callback',
    CannotUpdateNonActiveCallback: 'Cannot update non active callback',
    CannotUpdateCallbackWithInvalidDate: 'Cannot update callback with invalid date',
    CallbackUpdateDateIsInThePast: 'Callback update date is in the past',
    CallbackUpdateDateIsTooFarInTheFuture: 'Callback update date is too far in the future',
    CallbackUpdateDateIsNotAvailable: 'Callback update date is not available'
} as const;

export type CallbackUpdateErrorErrorEnum = typeof CallbackUpdateErrorErrorEnum[keyof typeof CallbackUpdateErrorErrorEnum];


