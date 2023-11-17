export default {
	myFun1: async () => {
		
await SupportingDoc_fetch.run()
let link = SupportingDoc_fetch.data[0]
// Fetching the URL without query parameters
let urlWithoutParams = link.split('?')[0];
const fileExtension = urlWithoutParams.split('.').pop();

		if (fileExtension === "png"){ showModal('View_SupportingDoc_Png_jpeg')}
		else {showModal('View_SupportingDoc_pdf_doc')}
	}
}