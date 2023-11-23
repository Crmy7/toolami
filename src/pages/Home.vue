<template>
    <div>
        <ul>
            <!-- Boucle pour afficher les informations -->
            <li v-for="(info, index) in infos" :key="info.title" class="list-card-item">
                <!-- Bouton pour chaque outil -->
                <b-btn @click="selectTool(index)" variant="info" class="list-card">
                    <img :src="info.image" :alt="info.title" class="list-card-image"/>
                    <div class="list-card-title">{{ info.title }}</div>
                </b-btn>

                <!-- Popover associée à chaque outil -->
                <b-popover v-if="selectedTool === index" :target="'button-' + index" :title="info.title" class="popover-target">
            <div class="card">
            <!-- Bouton d'aide -->
            <button @click="toggleHelp(index)" class="help-button">Help</button>

            <img :src="info.image" :alt="info.title" class="card-image"/>
            <div class="card-text">{{ info.text }}</div>

            <div class="card-tags">
                <span v-for="tag in info.tags" :key="tag" class="card-tag">{{ tag }}</span>
            </div>

            <!-- Affichage des éléments util si l'aide est activée -->
            <div v-if="showHelp[index]" class="card-utils">
                <div v-for="util in info.util" :key="util" class="card-util">{{ util }}</div>
            </div>

            <button @click="selectedTool = null" class="btn-close card-button">Fermer la Popover</button>
        </div>
    </b-popover>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Home',
    data() {
        return {
            // ...
            showHelp: {}, // Suivi de l'état d'aide pour chaque carte
        };
    },
    methods: {
        toggleHelp(index) {
            // Active/désactive l'aide pour la carte spécifiée
            this.$set(this.showHelp, index, !this.showHelp[index]);
        },
    },
    
    data() {
        return {
            infos: [
                {
                title: "Magnetic Lasso", 
                image: "/img/noun-magnetic-lasso-tool-177513.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                {
                title: "Magic Wand", 
                image: "/img/magic-wand.svg", 
                text: "Utilisez l'outil de découpe pour découper des parties d'une image." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Gradient", 
                image: "/img/Gradient.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Blur", 
                image: "/img/noun-blur-tool-177470.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Color Sample", 
                image: "/img/noun-color-sample-tool-177482.svg", 
                text: "Utilisez l'outil de découpe pour découper des parties d'une image." },
                { 
                title: "Convert Point", 
                image: "/img/noun-convert-point-tool-177484.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Direct Selection", 
                image: "/img/noun-direct-selection-tool-177487.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Eliptical-marquee", 
                image: "/img/noun-eliptical-marquee-tool-764886.svg", 
                text: "Utilisez l'outil de découpe pour découper des parties d'une image." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Eraser Tool", 
                image: "/img/noun-eraser-tool-177493.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Eyedropper Tool", 
                image: "/img/noun-eyedropper-tool-177491.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Horizontal Type", 
                image: "/img/noun-horizontal-type-tool-177501.svg", 
                text: "Utilisez l'outil de découpe pour découper des parties d'une image." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Paint Bucket Tool", 
                image: "/img/noun-paint-bucket-tool-177519.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Pen", 
                image: "/img/noun-pen-tool-177523.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Polygon", 
                image: "/img/noun-polygon-tool-177527.svg", 
                text: "Utilisez l'outil de découpe pour découper des parties d'une image.",
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },    
                { 
                title: "QuickSelection", 
                image: "/img/noun-quick-selection-tool-177526.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Rectangular Marquee", 
                image: "/img/noun-rectangular-marquee-tool-177529.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Rotate View", 
                image: "/img/noun-rotate-view-tool-177525.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Ruler", 
                image: "/img/noun-ruler-tool-177533.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Shape Builder", 
                image: "/img/noun-shape-builder-tool-1457300.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Slice", 
                image: "/img/noun-slice-tool-177537 (1).svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Smooth", 
                image: "/img/noun-smooth-tool-1457250.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Smudge", 
                image: "/img/noun-smudge-tool-177542.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Sponge", 
                image: "/img/noun-sponge-tool-177538.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Spot Healing brush", 
                image: "/img/noun-spot-healing-brush-tool-177545.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Vertical Type", 
                image: "/img/noun-vertical-type-tool-177550.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Zoom", 
                image: "/img/noun-zoom-tool-177547.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Rotate", 
                image: "/img/Rotate.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Shape Gradient", 
                image: "/img/Shape Gradient.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Degrade De Forme", 
                image: "/img/degrade_de_forme.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                

            ],
            selectedTool: null
        };
    },

    methods: {
        selectTool(index) {
            // Met à jour l'outil sélectionné
            this.selectedTool = index;
        }
    }
};
</script>

<style>
.popover-target {
    position: absolute;
    margin: auto;
}

.popover-target {
    position: absolute;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popover-target img {
    width: 50vh;
}

.btn-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
}
.card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 15px;
    margin-top: 10px;
    background-color: white;
}

.card-image {
    width: 100%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
}

.card-text {
    margin-top: 10px;
    text-align: center;
}

.card-tags {
    display: flex;
    justify-content: center; /* Centre les tags */
    flex-wrap: wrap;
    margin-top: 10px;
}

.card-tag {
    margin: 5px;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: #f0f0f0; /* Arrière-plan pour les tags */
    font-size: 0.9em;
}


.card-button {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

.help-button {
    position: absolute;
    top: 10px;
    right: 10px;
    /* Autres styles pour le bouton d'aide */
}

.card {
    position: relative; /* Pour positionner correctement le bouton d'aide */
    /* Autres styles de la carte */
}

.card-utils {
    margin-top: 10px;
    text-align: center;
}



.list-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.list-card-item {
    list-style-type: none;
    margin: 5px; /* Ajustez la marge selon vos besoins */
    
}

.list-card {
    display: block;
    text-align: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    background-color: white;
    cursor: pointer;
    text-decoration: none;
    width: 100%; /* Assurez-vous que la carte occupe toute la largeur de list-card-item */
}

.list-card-image {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
}

.list-card-title {
    margin-top: 10px;
}

</style>