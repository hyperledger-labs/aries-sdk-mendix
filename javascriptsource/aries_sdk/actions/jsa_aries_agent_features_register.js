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
// END EXTRA CODE

/**
 * register(...features: AriesCore.Feature[]): void
 * set of {Feature} objects or any inherited class
 * 
 * 
 * Register a single or set of Features on the registry
 * @param {string} agent_key
 * @param {string} features - json?
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_features_register(agent_key, features) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(features==null)return Promise.reject("Invalid features parameter");										//mandatory
		try{
			features=JSON.parse(features);
		}catch(e){
			return Promise.reject("Argument features is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.features.register(features)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
