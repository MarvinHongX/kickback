export const useImg = () => {
    const logoUrl = computed(() => {
        return `/layout/images/logo.png`;
    });
    const appStoreUrl = computed(() => {
        return `/layout/images/appstore.png`;
    });
    const googlePlayUrl = computed(() => {
        return `/layout/images/googleplay.png`;
    });

    return {
        logoUrl,
        appStoreUrl,
        googlePlayUrl,
    };
};