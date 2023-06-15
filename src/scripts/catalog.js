export const catalog = (harvestArray) => {
    let html = "";
  
    for (const seeds of harvestArray) {
      html += `
        <p class="plant">${seeds.type}</p>
      `;
    }
  
    document.querySelector(".container").innerHTML=html
    
  };
