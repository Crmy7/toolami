<template>
    <div>
        <ul>
            <!-- Utilisez info.title et info.text pour afficher les informations -->
            <li v-for="info in infos" :key="info.title">
                <h3>{{ info.title }}</h3>
                <p>{{ info.text }}</p>
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
                { title: "Choisis ton artiste", text: "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés" },
                { title: "Réserve ton billet", text: "buuk te propose les prix les plus attractifs du marché, plus tu réserves tôt, plus tu auras droit à un prix bas. Alors fonce, ne perds pas de temps !" },
                { title: "Kiffe ton concert", text: "Nous te proposons régulièrement des concerts en avant-première, choisis le concert de ton artiste préféré parmi ceux proposés" }
            ]
        };
    }
};
</script>
