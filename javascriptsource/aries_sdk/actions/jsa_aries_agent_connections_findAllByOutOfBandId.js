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
 * findAllByOutOfBandId(outOfBandId: string): Promise<AriesCore.ConnectionRecord[]>
 * @param {string} agent_key
 * @param {string} outOfBandId
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_connections_findAllByOutOfBandId(agent_key, outOfBandId) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(outOfBandId==null)return Promise.reject("Invalid outOfBandId parameter");										//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.connections.findAllByOutOfBandId(outOfBandId)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
