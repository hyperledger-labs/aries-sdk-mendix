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
 * getService(protocolVersion: string): AriesCore.ProofService<[AriesCore.IndyProofFormat]>
 * @param {string} agent_key
 * @param {string} protocolVersion
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_proofs_getService(agent_key, protocolVersion) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");				//mandatory
		if(protocolVersion==null)return Promise.reject("Invalid protocolVersion parameter");	//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(agent.proofs.getService(protocolVersion)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
