let inventoryGrid = document.getElementById("inventoryGrid");

function createInventoryGrid(){
  inventoryGrid.innerHTML="";
  for(let i=0;i<27;i++){
    let slot=document.createElement("div");
    slot.className="craftSlot";
    inventoryGrid.appendChild(slot);
  }
}
createInventoryGrid();