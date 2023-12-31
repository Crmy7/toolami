<template>
    <div style="width: 100vw;">
        <nav class="nav">
            <RouterLink to="/" style="height: 100%; width: 100%;">
                <img src="/src/assets/Logo_ToolAmI_v2.png" alt="" style="width: 100%; height: 100%; object-fit: contain;">
            </RouterLink>
        </nav>
        <div style="height: 15vh; width: 100vw"></div>
        <ul style="width: 100%;">
            <li v-for="(info, index) in infos" :key="info.title" class="list-card-item">
                <!-- Bouton pour chaque outil -->
                <b-button @click="selectTool(index)" variant="info" class="list-card">
                    <img :src="info.image" :alt="info.title" class="list-card-image" />
                    <div class="list-card-title">{{ info.title }}</div>
                </b-button>

                <!-- Popover associée à chaque outil -->
                <b-popover v-if="selectedTool === index" :target="'button-' + index" :title="info.title"
                    class="popover-target">
                    <div class="card">
                        <!-- Bouton d'aide -->
                        <h2 class="card-text">{{ info.title }}</h2>
                        <img :src="info.image" :alt="info.title" class="card-image" />
                        <div class="card-text">{{ info.text }}</div>

                        <div class="card-tags">
                            <span v-for="tag in info.tags" :key="tag" class="card-tag">{{ tag }}</span>
                        </div>

                        <button @click="toggleHelp(index)" class="help-button">Help me</button>

                        <!-- Affichage des éléments util si l'aide est activée -->
                        <div v-if="showHelp[index]" class="card-utils">
                            <div v-for="util in info.util" :key="util" class="card-util">{{ util }}</div>
                        </div>

                        <button @click="selectedTool = null" class="btn-close card-button">
                            <svg id="katman_1" data-name="katman 1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 626.4 626.4">
                                <path class="cls-1"
                                    d="m313.5,239.6L537.5,15.3c20.4-20.4,53.3-20.4,73.6,0,20.4,20.4,20.4,53.3,0,73.6l-224,224.6,224,224c20.4,20.4,20.4,53.3,0,73.6-20.4,20.4-53.3,20.4-73.6,0l-224-224-224.6,224c-20.4,20.4-53.3,20.4-73.6,0-20.4-20.4-20.4-53.3,0-73.6l224-224L15.4,89c-20.5-20.4-20.5-53.3-.1-73.6s53.3-20.4,73.6,0l224.6,224v.2Z" />
                            </svg>
                        </button>
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

            showHelp: {},
            infos: [
                {
                    title: "Basic Selection",
                    image: "/img/noun-path-selection-tool-177517.svg",
                    text: "Use this tool for basic selections in your projects.",
                    tags: ["Basic Selection", "Beginner", "Essential"],
                    util: ["Simple and fast selection", "Ideal for beginners", "Used in most Adobe software"]
                },
                {
                    title: "Blur",
                    image: "/img/noun-blur-tool-177470.svg",
                    text: "This tool allows you to blur certain parts of your image for artistic effects or to obscure details.",
                    tags: ["Blur", "Artistic Effect", "Obscuring"],
                    util: ["Creates artistic blur effects", "Used for detail obscuring", "Present in Photoshop and Lightroom"]
                },
                {
                    title: "Clone Stamp",
                    image: "/img/noun-clone-stamp-tool-177479.svg",
                    text: "Duplicate elements in your images using the Clone Stamp tool for creative editing.",
                    tags: ["Duplication", "Creative", "Image Editing"],
                    util: ["Duplicates elements", "For creative editing", "Key feature in Photoshop"]
                }, {
                    title: "Convert Point",
                    image: "/img/noun-convert-point-tool-177484.svg",
                    text: "Convert and adjust anchor points on your paths for precise control of your shapes.",
                    tags: ["Anchor Points", "Precision", "Shapes"],
                    util: ["Adjusts anchor points", "For precise shape control", "Used in Illustrator"]
                },
                {
                    title: "Crop",
                    image: "/img/noun-crop-tool-177485.svg",
                    text: "Crop your images to improve composition or eliminate unwanted elements.",
                    tags: ["Cropping", "Composition", "Editing"],
                    util: ["Crops images", "Improves composition", "Common in Photoshop and Lightroom"]
                },
                {
                    title: "Crop Perspective",
                    image: "/img/crop-perspective.svg",
                    text: "Adjust the perspective of your images while cropping for an enhanced depth effect.",
                    tags: ["Cropping", "Perspective", "Adjustment"],
                    util: ["Adjusts perspective while cropping", "Enhances depth effect", "Specific to Photoshop"]
                },
                {
                    title: "Cut",
                    image: "/img/cut.svg",
                    text: "Use this tool to cut and split parts of your images or projects.",
                    tags: ["Cutting", "Splitting", "Separating"],
                    util: ["Cuts and splits elements", "For separating parts", "Used in multiple Adobe software"]
                },
                {
                    title: "Direct Selection",
                    image: "/img/noun-direct-selection-tool-177487.svg",
                    text: "Directly select and manipulate objects and individual points for precise control.",
                    tags: ["Direct Selection", "Precise Control", "Manipulation"],
                    util: ["Directly selects objects", "Precise control and manipulation", "Key feature in Illustrator and Photoshop"]
                }, {
                    title: "Eliptical Marquee",
                    image: "/img/noun-eliptical-marquee-tool-764886.svg",
                    text: "Create precise elliptical selections, perfect for selecting round or curved objects.",
                    tags: ["Elliptical Selection", "Round Shapes", "Precision"],
                    util: ["Creates elliptical selections", "Ideal for round objects", "Precise selection tool in Photoshop"]
                },
                {
                    title: "Ellipse",
                    image: "/img/noun-ellipse-tool-177490.svg",
                    text: "Easily draw ellipses and perfect circles to add geometric shapes to your projects.",
                    tags: ["Ellipse", "Circles", "Geometric Shapes"],
                    util: ["Draws ellipses and circles", "Adds geometric shapes", "Used in Illustrator and Photoshop"]
                },
                {
                    title: "Eraser Tool",
                    image: "/img/noun-eraser-tool-177493.svg",
                    text: "Easily erase parts of your project with this tool, allowing for modifications or clean-up of specific areas.",
                    tags: ["Eraser", "Clean-up", "Removal"],
                    util: ["Erases parts of projects", "Allows modifications and clean-up", "Common in Photoshop"]
                },
                {
                    title: "Eyedropper Tool",
                    image: "/img/noun-eyedropper-tool-177491.svg",
                    text: "Sample colors directly from your project to ensure color consistency.",
                    tags: ["Eyedropper", "Color Sampling", "Consistency"],
                    util: ["Samples colors from projects", "Ensures color consistency", "Widely used in Adobe software"]
                },
                {
                    title: "Gradient",
                    image: "/img/Gradient.svg",
                    text: "Apply color gradients to enrich your creations with smooth color transitions.",
                    tags: ["Gradient", "Color Transition", "Enhancement"],
                    util: ["Applies color gradients", "Creates smooth color transitions", "Featured in Photoshop and Illustrator"]
                },
                {
                    title: "Horizontal Type",
                    image: "/img/noun-horizontal-type-tool-177501.svg",
                    text: "Add and edit horizontal text for titles, subtitles, and body text.",
                    tags: ["Text", "Horizontal", "Typography"],
                    util: ["Adds and edits horizontal text", "For titles, subtitles, and body", "Common in Photoshop and Illustrator"]
                },
                {
                    title: "Magic Wand",
                    image: "/img/magic-wand.svg",
                    text: "Automatically select similar color areas for quick and efficient editing.",
                    tags: ["Magic Wand", "Auto Select", "Efficiency"],
                    util: ["Selects similar color areas", "Quick and efficient editing", "Feature of Photoshop"]
                },
                {
                    title: "Magnetic Lasso",
                    image: "/img/noun-magnetic-lasso-tool-177513.svg",
                    text: "Trace precise selections around objects with ease, as the tool adheres to visible edges.",
                    tags: ["Magnetic Lasso", "Precision", "Edge Detection"],
                    util: ["Traces precise selections", "Adheres to visible edges", "Specific to Photoshop"]
                },
                {
                    title: "Paint Bucket Tool",
                    image: "/img/noun-paint-bucket-tool-177519.svg",
                    text: "Quickly fill areas with colors or patterns for rapid style changes.",
                    tags: ["Paint Bucket", "Filling", "Quick Editing"],
                    util: ["Fills areas with colors/patterns", "For rapid style changes", "Used in Photoshop"]
                },
                {
                    title: "Patch",
                    image: "/img/noun-patch-tool-177518.svg",
                    text: "Correct and enhance specific areas by replacing them with textures or colors from other parts.",
                    tags: ["Patch", "Correction", "Enhancement"],
                    util: ["Corrects and enhances areas", "Replaces with textures or colors", "Feature of Photoshop"]
                },
                {
                    title: "Pen",
                    image: "/img/noun-pen-tool-177523.svg",
                    text: "Create custom paths and precise shapes for detailed graphic designs.",
                    tags: ["Pen", "Paths", "Graphic Design"],
                    util: ["Creates custom paths and shapes", "For detailed graphic designs", "Used in Illustrator and Photoshop"]
                }, {
                    title: "Pencil",
                    image: "/img/noun-pencil-tool-209327.svg",
                    text: "Draw freehand to add artistic elements or annotations to your projects.",
                    tags: ["Pencil", "Drawing", "Freehand"],
                    util: ["Draws freehand", "Adds artistic elements", "Used in Photoshop and Illustrator"]
                },
                {
                    title: "Polygon",
                    image: "/img/noun-polygon-tool-177527.svg",
                    text: "Design polygons and multi-sided shapes for geometric graphical elements.",
                    tags: ["Polygon", "Geometric Shapes", "Design"],
                    util: ["Designs polygons and shapes", "For geometric elements", "Featured in Illustrator"]
                },
                {
                    title: "Quick Selection",
                    image: "/img/noun-quick-selection-tool-177526.svg",
                    text: "Quickly select entire areas with this tool for efficient and rapid editing.",
                    tags: ["Quick Selection", "Efficiency", "Editing"],
                    util: ["Selects entire areas quickly", "Efficient and rapid editing", "Specific to Photoshop"]
                },
                {
                    title: "Rectangular",
                    image: "/img/noun-rectangle-tool-177544.svg",
                    text: "Create rectangles and squares with precision to structure your designs and compositions.",
                    tags: ["Rectangle", "Square", "Geometry"],
                    util: ["Creates rectangles and squares", "Precise structuring", "Used in Illustrator and Photoshop"]
                },
                {
                    title: "Rectangular Marquee",
                    image: "/img/noun-rectangular-marquee-tool-177529.svg",
                    text: "Select rectangular areas to isolate, move, or edit specific parts.",
                    tags: ["Rectangular Selection", "Isolation", "Editing"],
                    util: ["Selects rectangular areas", "Isolates, moves, or edits parts", "Common in Photoshop"]
                },
                {
                    title: "Rotate",
                    image: "/img/Rotate.svg",
                    text: "Rotate your images or elements to adjust orientation or create dynamic effects.",
                    tags: ["Rotate", "Orientation", "Dynamic"],
                    util: ["Rotates images or elements", "Adjusts orientation", "Available in most Adobe software"]
                },
                {
                    title: "Move",
                    image: "/img/noun-move-tool-177525.svg",
                    text: "Precisely move and position elements in your projects for perfect alignment and placement.",
                    tags: ["Move", "Positioning", "Alignment"],
                    util: ["Moves and positions elements", "For perfect alignment", "Used in Photoshop and Illustrator"]
                },
                {
                    title: "Ruler",
                    image: "/img/noun-ruler-tool-177533.svg",
                    text: "Measure and align objects with precision using the ruler tool for balanced designs.",
                    tags: ["Ruler", "Measurement", "Alignment"],
                    util: ["Measures and aligns objects", "For precise measurements", "Common in Photoshop and Illustrator"]
                },
                {
                    title: "Shape Builder",
                    image: "/img/noun-shape-builder-tool-1457300.svg",
                    text: "Combine, edit, and create complex shapes and designs using the shape builder tool.",
                    tags: ["Shape Builder", "Creativity", "Complex Shapes"],
                    util: ["Combines and edits shapes", "Creates complex designs", "Specific to Illustrator"]
                },
                {
                    title: "Shape Gradient",
                    image: "/img/Shape Gradient.svg",
                    text: "Apply gradients to your shapes for visually appealing color transitions and effects.",
                    tags: ["Shape", "Gradient", "Visual Effect"],
                    util: ["Applies gradients to shapes", "Creates color transitions", "Featured in Illustrator"]
                },
                {
                    title: "Slice",
                    image: "/img/noun-slice-tool-177537 (1).svg",
                    text: "Slice your designs into smaller segments for easier editing or web layout purposes.",
                    tags: ["Slice", "Segmentation", "Web Layouts"],
                    util: ["Slices designs into segments", "For easier editing or web layouts", "Used in Photoshop"]
                },
                {
                    title: "Smooth",
                    image: "/img/noun-smooth-tool-1457250.svg",
                    text: "Smooth out rough edges and refine your designs with the smooth tool for a polished look.",
                    tags: ["Smooth", "Refinement", "Polished Design"],
                    util: ["Smooths out rough edges", "Refines designs", "Common in Illustrator"]
                },
                {
                    title: "Smudge",
                    image: "/img/noun-smudge-tool-177542.svg",
                    text: "Use the smudge tool to blend or smudge colors in your artwork for artistic effects.",
                    tags: ["Smudge", "Blend", "Artistic"],
                    util: ["Blends or smudges colors", "For artistic effects", "Featured in Photoshop"]
                },
                {
                    title: "Sponge",
                    image: "/img/noun-sponge-tool-177538.svg",
                    text: "Manipulate the saturation levels of your images with the sponge tool for vivid or muted colors.",
                    tags: ["Sponge", "Saturation", "Color Adjustment"],
                    util: ["Manipulates saturation levels", "For vivid or muted colors", "Used in Photoshop"]
                },
                {
                    title: "Spot Healing Brush",
                    image: "/img/noun-spot-healing-brush-tool-177545.svg",
                    text: "Quickly fix blemishes and imperfections in your images with the spot healing brush.",
                    tags: ["Spot Healing", "Blemish Fix", "Imperfection Removal"],
                    util: ["Fixes blemishes and imperfections", "Quick and effective", "Specific to Photoshop"]
                },
                {
                    title: "Vertical Type",
                    image: "/img/noun-vertical-type-tool-177550.svg",
                    text: "Add vertical text to your designs for creative typography and unique layout options.",
                    tags: ["Vertical Text", "Creative Typography", "Layout"],
                    util: ["Adds vertical text", "Creative typography", "Used in Photoshop and Illustrator"]
                },
                {
                    title: "Zoom",
                    image: "/img/noun-zoom-tool-177547.svg",
                    text: "Zoom in and out of your projects for detailed work or to get an overall view of your design.",
                    tags: ["Zoom", "Detail Work", "Overview"],
                    util: ["Zooms in and out of projects", "For detailed work or overall view", "Common in most Adobe software"]
                }

            ],
            selectedTool: null
        };
    },

    mounted() {
        // Move the event listener inside the mounted hook
        this.nav = document.querySelector(".nav");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            if (this.nav) {
                if (lastScrollY < window.scrollY) {
                    this.nav.classList.add("nav--hidden");
                } else {
                    this.nav.classList.remove("nav--hidden");
                }
            }

            lastScrollY = window.scrollY;
        });
    },

    methods: {
        selectTool(index) {
            // Met à jour l'outil sélectionné
            this.selectedTool = index;
        },
        toggleHelp(index) {
            // Active/désactive l'aide pour la carte spécifiée
            this.showHelp[index] = !this.showHelp[index];
        },
    }
};
</script>

<style>
.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}
</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

$red : #ff0000;
$blue : #3887fe;
$purple: #b74bfc;
$pink: #fb1aac;
$orange: #fb3d00;
$yellow: #f8cc08;
$green: #92e041;

.nav {
    width: 100%;
    height: 15vh;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.nav--hidden {
    transform: translateY(calc(-1 * 15vh)) !important;
    box-shadow: none;
}



#app {
    background: white;
    background-color: #fff;
    color: #000;
    font-family: Poppins, sans-serif;
    padding: 0;
    width: 100vw;
    margin: 0;
    max-width: none;
}

.popover-target {
    position: fixed;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;

    .card {
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        padding: 15px;
        margin-top: 10px;
        background-color: white;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        height: 100%;
        gap: 3%;
        overflow-y: scroll;

        img {
            width: 80%;
            max-width: 230px;
        }

        .card-button {
            display: block;
            padding: 10px 0;
            text-align: center;
            border-radius: 5px;
            color: white;
            border: none;
            cursor: pointer;
            background: none;
            position: absolute;
            top: 1.5rem;
            right: 2rem;
            width: 20px;
        }
    }
}

ul {
    padding: 0;
}

.card-text {
    margin-top: 10px;
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

.help-button {
    font-size: 1rem;
    padding: 1rem 5rem;
    border-radius: 1rem;
    background: linear-gradient(-45deg, $blue, $purple, $pink);
    background-size: 100% 100%;
    color: white;
    font-weight: 700;
    border: 0;
    cursor: pointer;
}


.card-utils {
    margin-top: 10px;
    text-align: center;
    font-weight: 700;
}

.list-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.list-card-item {
    list-style-type: none;
    margin: 5px;
    /* Ajustez la marge selon vos besoins */

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
    width: 100%;
    height: 30vh;

    img.list-card-image {
        width: 100%;
        height: 80%;
        border-radius: 10px 10px 0 0;
        object-fit: contain;
    }


    .list-card-title {
        color: black
    }
}
</style>
