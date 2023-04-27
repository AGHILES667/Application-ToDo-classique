document.querySelector('#ajouter').onclick = function () {
    if (document.querySelector('#nouvelletache input').value.length == 0) {
        alert("Veuillez écrire une tache")
    }
    else {
        // ça veut dire que quand le bouton "ajouter" est cliqué, on ajoute une nouvelle DIV qui va contenir les taches ajoutées.
        var tache = `
            <div class="tache-ajoutee">
                <label class="infos-tache">
                    <input type="checkbox" class="checkBox" data-fait="false">
                    <span id="nomTache">
                        ${document.querySelector('#nouvelletache input').value}
                    </span>
                </label>
                <button class="supprimer">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        document.querySelector('#taches').innerHTML += tache;

        document.querySelectorAll(".supprimer").forEach(function (tache_existante) {
            // ici on va selectionner tous les elements qui contiennent un bouton "supprimer", ça veut dire toutes les taches ajoutées.
            tache_existante.addEventListener("click", function () {
                // et on ajoute un écouteur d'evenements pour chaque tache trouvée.
                this.parentNode.remove();
            });
        });
        document.querySelectorAll(".checkBox").forEach(function (checkBox) {

            checkBox.onclick = function () {
                if (this.checked) {
                    // ici on vérifi si la checkbox est cochée ou pas, si c'est le cas, on met une ligne traversant le nom de la tache, et on définit l'attribut "data-fait" sur true.
                    this.parentNode.querySelector("#nomTache").style.textDecoration = "line-through";
                    this.setAttribute("data-fait", "true");
                } else {
                    this.parentNode.querySelector("#nomTache").style.textDecoration = "none";
                    this.setAttribute("data-fait", "false");
                }
            }
        
            // Restauration de la sélection des tâches depuis localStorage
            // ça sert a garder la preuve des taches déja faites, lorsqu'on ajoute d'autres taches.
            if (checkBox.getAttribute("data-fait") === "true") {
                checkBox.checked = true;
                checkBox.parentNode.querySelector("#nomTache").style.textDecoration = "line-through";
            }
        });
    }}        