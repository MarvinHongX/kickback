<script setup>
import { ref, onMounted } from 'vue';

const { appStoreUrl, googlePlayUrl } = useImg();

const headlineText = ref('');
const subTitleText = ref('');

const headline1 = "Are you ready to try";
const headline2 = "Kickback?";
const subTitle = "Kickback and connect—meet new people from around the world, anytime, anywhere.";

onMounted(async () => {
    await typeText(headline1 + '\n' + headline2, headlineText, 80);
    await fadeInText(subTitle, subTitleText);
});

const typeText = (text, targetRef, delay) => {
    return new Promise(resolve => {
        let index = 0;
        const interval = setInterval(() => {
            targetRef.value += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

const fadeInText = (text, targetRef) => {
    targetRef.value = text;
}
</script>

<template>
    <div class="app-promo">
        <div class="headline">
            <p class="headline-text">{{ headlineText }}</p>
        </div>

        <div class="subtitle" v-if="subTitleText">
            {{ subTitleText }}
        </div>

        <div class="store-icons" v-if="subTitleText">
            <NuxtImg format="webp" :src="appStoreUrl" alt="App Store" class="icon app-store" />
            <NuxtImg format="webp" :src="googlePlayUrl" alt="Google Play" class="icon google-play" />
        </div>
    </div>
</template>

<style scoped>
.app-promo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
}

.headline {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.headline-text {
    font-family: Gtmrblk, sans-serif;
    font-size: 3.2rem;
    color: #333;
    font-weight: 700;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 1.3;
}

.subtitle {
    font-size: 1.6rem;
    color: #666;
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeIn 1s forwards 1s;
}

.store-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 1.5rem;
}

.icon {
    width: 300px;
    height: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeInIcon 3s forwards 1s;
}

.icon:hover {
    transform: scale(1.1); 
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInIcon {
    from { opacity: 0; }
    to { opacity: 1; }
}

@media (max-width: 768px) {
    .headline-text {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.4rem;
    }

    .icon {
        width: 260px;
    }
}

@media (max-width: 480px) {
    .headline-text {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .store-icons {
        gap: 1rem;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .icon {
        width: 240px;
    }
}
</style>
