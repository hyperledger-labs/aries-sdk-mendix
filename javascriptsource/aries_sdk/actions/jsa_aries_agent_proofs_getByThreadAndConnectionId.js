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
 * getByThreadAndConnectionId(threadId: string, connectionId?: string): Promise<AriesCore.ProofExchangeRecord>
 * The thread id
 * 
 * 
 * Retrieve a proof record by connection id and thread id
 * 
 * @throws — {RecordNotFoundError} If no record is found
 * 
 * @throws — {RecordDuplicateError} If multiple records are found
 * 
 * @returns — The proof record
 * @param {string} agent_key
 * @param {string} threadId
 * @param {string} connectionId - optional
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_proofs_getByThreadAndConnectionId(agent_key, threadId, connectionId) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");	//mandatory
		if(threadId==null)return Promise.reject("Invalid threadId parameter");		//mandatory
		if(connectionId==null);														//mandatory
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let ret=null;
		      if(connectionId==null){
			ret=await agent.proofs.getByThreadAndConnectionId(threadId);
		}else if(connectionId!=null){
			ret=await agent.proofs.getByThreadAndConnectionId(threadId,connectionId);
		}
		return Promise.resolve(JSON.stringify(ret));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
