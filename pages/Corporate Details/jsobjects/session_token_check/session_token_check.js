export default {
SessionActive: () =>  {
setInterval(async function(){
	await Fetch_Session_Token.run()
	if (Fetch_Session_Token.data[0]['result'] == appsmith.store.OPS_TOKEN){//pass
																				}
	else {navigateTo('LoginEmail'), showAlert('Session Expired! Please re-login.')}
}, 120000)
}}