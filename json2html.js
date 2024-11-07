// json2html.js
export default function json2html(data) {
    // Define the table with the data-user attribute
    let html = `<table data-user="sashank9063@gmail.com">`;
    
    // Define headers for the table
    const headers = ["Name", "Age", "Gender"];
    
    // Create table headers dynamically
    html += `<thead><tr>`;
    headers.forEach(header => html += `<th>${header}</th>`);
    html += `</tr></thead>`;
    
    // Add table rows based on the data provided
    html += `<tbody>`;
    data.forEach(row => {
        html += `<tr>`;
        headers.forEach(header => html += `<td>${row[header] || ''}</td>`);
        html += `</tr>`;
    });
    html += `</tbody></table>`;
    
    return html; // Return the complete HTML table as a string
}
