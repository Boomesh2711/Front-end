let products = [];
function addproduct() {
const Pname = document.getElementById('name');
  const Price = document.getElementById('price');
  const quantity = document.getElementById('quantity');

  const pnamevalue = Pname.value.trim();
  const pricevalue = Price.value.trim();
  const quantityvalue = quantity.value.trim();
  if (pnamevalue === '' || pricevalue === '' || quantityvalue === '') return;

  products.push({ name: pnamevalue, price: Number(pricevalue), quantity: Number(quantityvalue) });

    const table = document.getElementById('productTable');
    const row = document.createElement('tr');
    const td1= document.createElement('td');
    td1.innerText = pnamevalue;
    const td2 = document.createElement('td');
    td2.innerText = pricevalue;
    const td3 = document.createElement('td');
    td3.innerText = quantityvalue;


  const td4 = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.innerText = "Delete";

  delBtn.onclick = function () {
    const index = Array.from(table.rows).indexOf(row) - 1; // row index in products array
    products.splice(index, 1); // remove from array
    row.remove(); // remove row from table
  };
    td4.appendChild(delBtn);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    table.appendChild(row);

Pname.value = '';
Price.value = '';
quantity.value = '';
  
}