function useInfoSection(InfoData) {
    console.log("##InfoData", InfoData);
    const homepageLink = InfoData?.homepage.startsWith("http")
        ? InfoData?.homepage
        : `http://${InfoData?.homepage}`;
    const resveLink = InfoData?.resveUrl.startsWith("http")
        ? InfoData?.resveUrl
        : `http://${InfoData?.resveUrl}`;

    return { homepageLink, resveLink };
}

export default useInfoSection;
