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
import support from "../support/entidad";
// END EXTRA CODE

/**
 * Shuts down all agents and removes from cache
 * 
 * Note: With soft reset of react native client there will remain background connections
 * If in that case a new agent is initialized, the callbacks will not work
 * 
 * After about 5 minutes it might start working
 * 
 * Possible solution is still being investigated relating to getting access to lower level functionality to retrieve and shutdown all transports
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/644e860a05f40166e26c497a2e8619c9a38df11d/packages/core/src/agent/Agent.ts#L205
 * @returns {Promise.<void>}
 */
export async function jsa_aries_agents_shutdown() {
	// BEGIN USER CODE
	/*
	try{
		//console.info("BEG");
		let keys=support.cache.keys();
		for(let i=0;i<keys.length;i++){
			try{
				let k=keys[i];
				try{
					let agent=support.cache.get(k);
					if(agent!=null){
						await agent.shutdown();
					};
				}catch(e){
					console.error(e.toString());
				}
				support.cache.remove(k);
			}catch(e){
				console.error(e.toString());
			}
		}
		//console.info("END");
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	*/
	/*
	try{
		console.info("BEG");
		support.cache.keys().forEach(async(k)=>{
			try{
				let agent=support.cache.get(k);
				if(agent!=null){
					await agent.shutdown();
				};
			}catch(e){
				console.error(e.toString());
			}
			support.cache.remove(k);
		})
		console.info("END");
		return Promise.resolve();
	}catch(e){
		return Promise.reject(e.toString());
	}
	*/
	try{
		let keys=support.cache.keys();
		for(const k of keys){
			try{
				let agent=support.cache.get(k);
				if(agent!=null){
					await agent.shutdown();
				}
			}catch(e){
				console.error(e.toString());
			}
			support.cache.remove(k);
		}
		//return Promise.resolve();//original
		return window.setTimeout(()=>{Promise.resolve();},1000);
	}catch(e){
		return Promise.reject(e.toString());
	}

	// END USER CODE
}
