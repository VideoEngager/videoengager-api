/* tslint:disable */
/* eslint-disable */


import * as apis from "./api";
import {Configuration} from "./configuration";

type SmartVideoClientConfiguration = {
    pak?: string,
    externalId?: string,
    email?: string,
    basePath?: string,
    accessToken?: string,
}
const smartVideoClient: Configuration = new Configuration ();

export const authentication = new apis.AuthenticationApi(smartVideoClient);
export const callbacks = new apis.CallbacksApi(smartVideoClient);


/**
 *
 * Use this function to initialize the SmartVideoClient
 * @export
 */
export async function initializeSmartVideoClient (configuration: SmartVideoClientConfiguration) {
  if (configuration.accessToken) {
    smartVideoClient.setAccessToken(configuration.accessToken);
    return;
  }
  if (smartVideoClient.initialized) {
    throw new Error('SmartVideoClient already initialized');
  }

  if (!configuration.pak || !configuration.externalId || !configuration.email || !configuration.basePath) {
    throw new Error(`Configuration parameters are missing ${!configuration.pak ? 'pak' : ''} ${!configuration.externalId ? 'externalId' : ''} ${!configuration.email ? 'email' : ''} ${!configuration.basePath ? 'basePath' : ''}`);
  }

  smartVideoClient.basePath = configuration.basePath;
  try {
    const promiseI = authentication.authenticatePartner({
      pak: configuration.pak,
      externalId: configuration.externalId,
      email: configuration.email,
    });
    smartVideoClient.promiseI = promiseI;
    const response = await promiseI;
    if (response.data.token) {
      smartVideoClient.setAccessToken(response.data.token);
    } else {
      throw new Error('SmartVideoClient initialization failed');
    }
    smartVideoClient.promiseI = null;
  } catch (e) {
    smartVideoClient.promiseI = null;
    throw new Error('SmartVideoClient initialization failed' + e.message);
  }
}

