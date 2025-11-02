// 1. Naselektování všech potřebných prvků - stále nutné pro přístup z JS
const cpxBarvaTextu = document.getElementById('cpxBarvaTextu');
const cpxBarvaPozadi = document.getElementById('cpxBarvaPozadi');
const rngVelikostTextu = document.getElementById('rngVelikostTextu');
const spnVelikostTextu = document.getElementById('spnVelikostTextu');
const selFontFamily = document.getElementById('selFontFamily');
const divPreviewBox = document.getElementById('divPreviewBox');

// 2. Hlavní funkce, která aktualizuje náhled - JE VOLÁNA PŘÍMO Z HTML
function updatePreview() {
    
    // Čtení hodnot ze všech ovládacích prvků
    const newColor = cpxBarvaTextu.value;
    const newBgColor = cpxBarvaPozadi.value;
    const newSize = rngVelikostTextu.value;
    const newFont = selFontFamily.value;
    
    // 3. Aplikace stylů na náhledový box (.style...)
    
    // Barva textu
    divPreviewBox.style.color = newColor;
    
    // Barva pozadí (background-color se píše jako backgroundColor)
    divPreviewBox.style.backgroundColor = newBgColor;
    
    // Velikost písma (musíme PŘIDAT JEDNOTKU 'px')
    divPreviewBox.style.fontSize = newSize + 'px';
    
    // Typ písma
    divPreviewBox.style.fontFamily = newFont;
    
    // Aktualizace popisku se zobrazenou velikostí
    spnVelikostTextu.innerText = newSize;
}

// 4. Nastavení počátečního stavu
// Funkci zavoláme jednou při startu, abychom zajistili, že po prvním načtení 
// jsou styly náhledu synchronizované s výchozími hodnotami inputů.
updatePreview();