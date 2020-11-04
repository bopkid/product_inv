function add_product(){
                  let Quanity= document.getElementById('Quanity').value;
                    let Price = document.getElementById('Price').value * document.getElementById('Quanity').value;
                    let Price_Per = document.getElementById('Price').value;
                    let Id= document.getElementById('Id').value;
                    let table = document.getElementById("new_product"), sumVal = 0;
                    
    
    
                      document.getElementById('Quanity').value = ' ';
                      document.getElementById('Id').value = ' ';
                      document.getElementById('Price').value = ' ';
    
                      var tableRef = document.getElementById('new_product').getElementsByTagName('tbody')[0];
    
    
                    // Insert a row in the table at the last row
                    const newRow   = tableRef.insertRow();
    
                    // Insert a cell in the row at index 0
                    const newCell1  = newRow.insertCell(0);
                    // Append a Id to the cell
                    const newId  = document.createTextNode(Id);
                        newCell1.appendChild(newId);
    
    
                      // Insert a cell in the row at index 1
                      const newCell2  = newRow.insertCell(1);
                     const newQuanity  = document.createTextNode(Quanity);
                     // Append a Quanity to the cell
                        newCell2.appendChild(newQuanity);
    
                      // Insert a cell in the row at index 2
                     const newCell3  = newRow.insertCell(2);
                     const newPricePer  = document.createTextNode(Price_Per);
                     // Append a Price to the cell
                       newCell3.appendChild(newPricePer);
    
    
    
                       // Insert a cell in the row at index 3
                     const newCell4  = newRow.insertCell(3);
                     const newPrice  = document.createTextNode(Price);
                     // Append a Price to the cell
                        newCell4.appendChild(newPrice);
                        
                        
                            for(var i = 1; i < table.rows.length; i++){
                                  sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
                            }
                            document.getElementById("sumV").innerHTML = "Total = "+sumVal +"$";
                            console.log("Sum => "+sumVal);       
    
                    }
                    
                