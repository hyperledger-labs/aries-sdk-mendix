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
 * update(record: GenericRecord): Promise<void>
 * @param {string} agent_key
 * @param {string} record - json?
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agent_genericRecords_update(agent_key, record) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");										//mandatory
		if(record==null)return Promise.reject("Invalid record parameter");										//mandatory
		try{
			record=JSON.parse(record);
		}catch(e){
			return Promise.reject("Argument record is not a valid JSON object");
		}
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		await agent.genericRecords.update(record);
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
