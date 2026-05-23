// Petit script pour afficher l'adresse mail au clic (évite le spam des robots)
document.getElementById('contactBtn').addEventListener('click', function() {
    const emailDisplay = document.getElementById('emailDisplay');
    
    // REMPLACEZ PAR VOTRE ADRESSE EMAIL
    emailDisplay.textContent = "contact@votre-domaine.com"; 
    
    this.style.display = 'none'; // Cache le bouton après le clic
});