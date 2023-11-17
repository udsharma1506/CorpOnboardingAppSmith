export default {
SessionActive: async () =>  {
	if (Fetch_Session_Token.data[0]['result'] == appsmith.store.OPS_TOKEN){ //pass
																				}
	else {navigateTo('LoginEmail')}
}}
