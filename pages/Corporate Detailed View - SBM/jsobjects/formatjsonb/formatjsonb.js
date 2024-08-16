export default {
	formatdata: function transformJSONBToTable(jsonData) {
  const tableData = [];

  // Loop through each entry in the JSONB object
  Object.keys(jsonData).forEach(index => {
    const record = jsonData[index];
    
    // Loop through each role (maker, happay, checker) for each record
    Object.keys(record).forEach(role => {
      tableData.push({
        index: index,          // Key of the main record
        role: role,            // maker, happay, checker
        status: record[role].Status || record[role].status,  // Status field
        remarks: record[role].remarks,   // Remarks field
        updated_at: new Date(record[role].updated_at).toLocaleString() // Updated at field formatted as date
      });
    });
  });

  return tableData;
}
}