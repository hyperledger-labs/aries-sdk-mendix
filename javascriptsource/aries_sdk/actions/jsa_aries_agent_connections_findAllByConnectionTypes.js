// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import { IsInstanceOrArrayOfInstances } from "@aries-framework/core/build/utils";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * findAllByConnectionTypes(connectionTypes: string[]): Promise<AriesCore.ConnectionRecord[]>
 * An array of connection types to query for a match for
 * 
 * 
 * @returns — a promise of ab array of connection records
 * @param {string} agent_key
 * @param {string} connectionTypes - String[]
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_connections_findAllByConnectionTypes(agent_key, connectionTypes) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(connectionTypes==null)return Promise.reject("Invalid connectionTypes parameter");										//mandatory
		try{
			connectionTypes=JSON.parse(connectionTypes);
			if(!Array.isArray(connectionTypes))return Promise.reject("Argument connectionTypes is not a JSON array");
		}catch(e){
			return Promise.reject("Argument connectionTypes is not a JSON array");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		return Promise.resolve(JSON.stringify(await agent.connections.findAllByConnectionTypes(connectionTypes)));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
