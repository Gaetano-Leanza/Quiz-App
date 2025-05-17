let products = [ 
  {
    name: "Apfel",
    preis: "1.99",
    Eigenschaften: ["vegan", "bio", "rot"]
  },
  {
    name: "Banane",
    preis: "0.99",
    Eigenschaften: ["vegan", "bio", "gelb"]
  },
  {
    name: "Kiwi",
    preis: "2.99",
    Eigenschaften: ["vegan", "bio", "grün"]
  }
];

let productContainer = document.getElementById('productContainer');
        
// Iteriert über jedes Produkt im Array "products"
products.forEach(product => {
// Für jedes Produkt wird der folgende Codeblock ausgeführt
    // Produkt-Container erstellen
    let productDiv = document.createElement('div'); // Erstellt ein neues <div>-Element
    productDiv.innerHTML = `<strong>${product.name}</strong> - ${product.preis}€`; // Setzt den Inhalt mit Template-Strings: Poduktname und Preis
    // Eigenschaften-Container erstellen
    let propsDiv = document.createElement('div'); // Erstellt einen Untercontainer für die Eigenschaften
    // Eigenschaften verarbeiten
    product.Eigenschaften.forEach(eigenschaft => {
        // Für jede Eigenschaft des Produkts:
        let propDiv = document.createElement('div');
        propDiv.className = 'property-item';
        propDiv.textContent = eigenschaft;
        propsDiv.appendChild(propDiv);
    });

    productDiv.appendChild(propsDiv);
    productContainer.appendChild(productDiv);
});