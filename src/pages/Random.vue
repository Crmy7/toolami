<template>
    <div class="random-tool-container">
        <button @click="selectRandomTool" class="random-button">Afficher un outil aléatoire</button>

        <div v-if="randomTool" class="card">
            <img :src="randomTool.image" :alt="randomTool.title" class="card-image"/>
            <div class="card-title">{{ randomTool.title }}</div>
            <div class="card-text">{{ randomTool.text }}</div>

            <div class="card-tags">
                <span v-for="tag in randomTool.tags" :key="tag" class="card-tag">{{ tag }}</span>
            </div>

            <div v-if="showHelpRandom" class="card-utils">
                <div v-for="util in randomTool.util" :key="util" class="card-util">{{ util }}</div>
            </div>

            <button @click="toggleHelpRandom" class="help-button">Aide</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RandomTool',

    data() {
        return {
            showHelpRandom: false,
            randomTool: null,
            
            infos: [
                
                
                
                { 
                title: "Blur", 
                image: "/img/noun-blur-tool-177470.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Clone Stamp", 
                image: "/img/noun-clone-stamp-tool-177479.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                
                
                { 
                title: "Color Sample", 
                image: "/img/noun-color-sample-tool-177482.svg", 
                text: "Utilisez l'outil de découpe pour découper des parties d'une image.", 
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Convert Point", 
                image: "/img/noun-convert-point-tool-177484.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Crop", 
                image: "/img/noun-crop-tool-177485.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Crop Perspective", 
                image: "/img/crop-perspective.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },

                { 
                title: "Cut", 
                image: "/img/cut.svg", 
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
                title: "Ellipse", 
                image: "/img/noun-ellipse-tool-177490.svg", 
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
                title: "Gradient", 
                image: "/img/Gradient.svg", 
                text: "Appliquez des couleurs avec l'outil pinceau." ,
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
                title: "Magic Wand", 
                image: "/img/magic-wand.svg", 
                text: "Utilisez l'outil de découpe pour découper des parties d'une image." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                {
                title: "Magnetic Lasso", 
                image: "/img/noun-magnetic-lasso-tool-177513.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
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
                title: "Patch", 
                image: "/img/noun-patch-tool-177518.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
                tags: ["Sélection", "Outil", "Lasso"],
                util: ["Texte utilitaire 1", "Texte utilitaire 2", "Texte utilitaire 3"]
                },
                { 
                title: "Path Selection", 
                image: "/img/noun-path-selection-tool-177517.svg", 
                text: "Sélectionnez un objet avec l'outil de sélection." ,
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
                title: "Pencil", 
                image: "/img/noun-pencil-tool-209327.svg", 
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
                title: "Rectangular", 
                image: "/img/noun-rectangle-tool-177544.svg", 
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

            ],
            
        };
    },

    methods: {
        selectRandomTool() {
            const randomIndex = Math.floor(Math.random() * this.infos.length);
            this.randomTool = this.infos[randomIndex];
        },
        toggleHelpRandom() {
            this.showHelpRandom = !this.showHelpRandom;
        },
    }
};
</script>

<style>
.random-tool-container {
    /* Styles pour le conteneur */
}

.random-button {
    /* Styles pour le bouton 'Random' */
}

.card {
    /* Styles pour la carte */
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

.card-title {
    font-weight: bold;
    margin-top: 10px;
}

.card-text {
    text-align: center;
}

.card-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
}

.card-tag {
    margin: 5px;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: #f0f0f0;
    font-size: 0.9em;
}

.card-utils {
    margin-top: 10px;
    text-align: center;
    color: green;
    font-weight: bold;
}

.help-button {
    /* Styles pour le bouton d'aide */
}
</style>