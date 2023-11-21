<template>
    <div>
        <ul>
            <!-- Utilisez info.title et info.text pour afficher les informations -->
            <li v-for="(info, index) in infos" :key="info.title">
                <b-btn @click="selectTool(index)" variant="info">
                    {{ info.title }}
                </b-btn>

                <b-popover class="popover-target" v-if="selectedTool === index" :target="'popover-' + index" :title="info.title">
                    {{ info.text }}
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
            infos: [
                { title: "Sélection", text: "Sélectionnez un objet avec l'outil de sélection." },
                { title: "Découpe", text: "Utilisez l'outil de découpe pour découper des parties d'une image." },
                { title: "Pinceau", text: "Appliquez des couleurs avec l'outil pinceau." }
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
.popover-target{
    position: absolute;
    margin: auto;
}
</style>
  