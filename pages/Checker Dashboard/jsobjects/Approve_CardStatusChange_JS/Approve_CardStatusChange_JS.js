export default {
	myFun2: async () => {
		try{
		await Approval_API.run()
		let x = Fetch_Reqs.selectedRow.EntityId
		showAlert('The request against '+' '+x+' '+ 'has been approved','success')}
		catch{showAlert(Approval_API.data.slice(8,-2).toUpperCase(),'error')}
		await Fetch_all_requests.run()
		Fetch_CardDetails_UserDetails.clear()
		closeModal('Action_CardStatusChange')
		closeModal('Action_OrgLimitUpdate')
		closeModal('Action_SetLimitCardConfig')
		closeModal('DOM_INTL_Disable_Enable')
	}
}