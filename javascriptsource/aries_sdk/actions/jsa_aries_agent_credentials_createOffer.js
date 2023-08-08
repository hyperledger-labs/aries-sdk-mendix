// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
import support from"../support/entidad";
// END EXTRA CODE

/**
 * https://github.com/hyperledger/aries-framework-javascript/blob/dbfebb4720da731dbe11efdccdd061d1da3d1323/packages/core/src/modules/credentials/CredentialsApi.ts
 * 
 *    * Initiate a new credential exchange as issuer by creating a credential offer
 *    * not bound to any connection. The offer must be delivered out-of-band to the holder
 *    * @param options The credential options to use for the offer
 *    * @returns The credential record and credential offer message
 * 
 *   public async createOffer(options: CreateCredentialOfferOptions<CPs>): Promise<{
 *     message: AgentMessage
 *     credentialRecord: CredentialExchangeRecord
 *   }>
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/dbfebb4720da731dbe11efdccdd061d1da3d1323/packages/core/src/modules/credentials/CredentialsApiOptions.ts#L120
 * 
 *  * Interface for CredentialsApi.createOffer. Will create an out of band offer
 * export interface CreateCredentialOfferOptions<CPs extends CredentialProtocol[] = CredentialProtocol[]>
 * @param {string} agent_key
 * @param {string} options - json
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_credentials_createOffer(agent_key, options) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(options==null)return Promise.reject("Invalid options parameter");										//mandatory
		try{
			options=JSON.parse(options);
		}catch(e){
			return Promise.reject("Argument options is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.credentials.createOffer(options)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
