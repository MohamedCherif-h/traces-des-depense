
document.addEventListener('DOMContentLoaded' , function() {
    let montant ;
    //premiere page validation
    document.querySelector('#valider').disabled = true ;
    document.querySelector('#valider').style.backgroundColor = '#E6E6E6';
        // verification
    document.querySelector('#montant').onkeyup = () => {
        if (document.querySelector('#montant').value.length >= 2) {
            document.querySelector('#montant').style.border = '1px solid #3DB2FF'
            document.querySelector('#valider').style.backgroundColor = '#548CFF';
             document.querySelector('#valider').disabled = false ;
        } else {
            document.querySelector('#valider').disabled = true ;
            document.querySelector('#valider').style.backgroundColor = '#E6E6E6';
            document.querySelector('#montant').style.border = '1px solid #F05945';
        }
    }


    // soumission du formulaire
    document.querySelector('#form1').onsubmit = () => {
        montant = document.querySelector('#montant').value ;

        if (isNaN(montant)) {
          alert("Assurez-vous que c'est un nombre !");
        } else {
            document.querySelector('#nombre').innerHTML = montant ;
            document.querySelector('p').style.display = 'block';
            document.querySelector('div').style.display = 'flex';
            document.querySelector('#montant').value = '';
            document.querySelector('#montant').placeholder = 'Changer de Montant';
        }

       
        // changer le comportement de soumission
        return false
    }

    // Nouvelle depense 
    document.querySelector('#ndepense').onclick = () => {
        document.querySelector('#deuxieme-page').style.display = 'block';
        document.querySelector('#first-page').style.display = 'none';
        return false ;
    }


    document.querySelector('#form2').onsubmit = () => {
        let cout = document.querySelector('#cout').value ;
        let nom = document.querySelector('#nom').value ;

        // creer une liste 
        let row = document.createElement('tr') ;
        let data = document.createElement('td');
        let sdata = document.createElement('td');
        data.textContent = nom  ;
        sdata.textContent = cout + '$' ;
        row.append(data) ;
        row.append(sdata);
        
        document.querySelector('table').append(row);

        if(isNaN(cout)) {
            alert("Assurez-vous que c'est un nombre !");
        } 
        else {

            if (parseFloat(cout) <=parseFloat(montant)) {
                 // calcul du cout et changement
                 montant = montant - cout ;
                 document.querySelector('#reste').innerHTML = montant;
                 if (montant == 0 ) {
                    document.querySelector('#ndepense').onclick = () => {
                        alert("Vous n'avez plus d'argent !");
                        return false
                    }
                }
                 
                 // cacher et montrer les elements
                 document.querySelector('#first-page').style.display = 'block';
                 document.querySelector('#deuxieme-page').style.display = 'none';
                 document.querySelector('h3').style.display = 'block';
                 document.querySelector('#cout').value = '';
                 document.querySelector('#nom').value = '';
                
            } 
            else {
                alert(`Impossible a effectuer cette depense car il vous reste ${montant} $`);
                document.querySelector('#cout').value = ''
            }

        }
        

        // changer le comportement de soumission
        return false
    }


    document.querySelector('#troisieme-page').style.display = 'none';

    // Liste des depense
    document.querySelector('#liste').onclick = () => {
        document.querySelector('#first-page').style.display = 'none';
        document.querySelector('#troisieme-page').style.display = 'flex';
        
        return false
    }

    // retour 
    document.querySelector('#retour').onclick = () => {
        document.querySelector('#first-page').style.display = 'block';
        document.querySelector('#troisieme-page').style.display = 'none';
        return false
    }

    document.querySelector('#annuler').onclick = () => {
        document.querySelector('#first-page').style.display = 'block';
        document.querySelector('#deuxieme-page').style.display = 'none';
        return false
    }



})