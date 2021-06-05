import jsPDF from "jspdf";
import "jspdf-autotable";

//name, imageUrl, price, quantity

const generatePDF = (cartItems,total) => {
    // initialize jsPDF
    const doc = new jsPDF();
  
    // define the columns we want and their titles
    const tableColumn = ["Id", "Name", "Quantity", "Price"];
    // define an empty array of rows
    const tableRows = [];
  
    // for each ticket pass all its data into an array
    // let total=0;
    cartItems.forEach(item => {
      const itemData = [
        item.id,
        item.name,
        item.quantity,
        item.price,
      ];
      // total+= parseInt(item.quantity)*parseInt(item.price);
      // push each tickcet's info into a row
      tableRows.push(itemData);
    });

    const finalRow=[
        "TOTAL:",
        "",
        "",
        total
    ]
    tableRows.push(finalRow)
  
  
    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // ticket title. and margin-top + margin-left
    doc.text("CRWN-SHOPPING\t\t\t\t\t\t Receipt", 14, 15);
    // we define the name of our PDF file.
    doc.save(`receipt_${dateStr}.pdf`);
  };
  
  export default generatePDF;