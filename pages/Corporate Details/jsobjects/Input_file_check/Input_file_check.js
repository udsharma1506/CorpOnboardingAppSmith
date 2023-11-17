export default {
	async myFun2 () {
		
	if (Input3.text !== "" && FilePicker1.files.length > 0) {
  New_MkrChkr_Org_Limit.run(
    () => {
      get_org_details_v2.run();
      showAlert('Your Request has been sent to the Approver. The limit status will change once actioned by the Approver.', 'success');
      resetWidget('Input3');
      resetWidget('FilePicker1');
    },
    () => {
      showAlert(New_MkrChkr_Org_Limit.data.msg.substring(0, 44).toUpperCase(), 'error');
      resetWidget('Input3');
      resetWidget('FilePicker1');
    }
  );
} else {
  showAlert("New limit and supporting document field should not be empty");
}

	}
}