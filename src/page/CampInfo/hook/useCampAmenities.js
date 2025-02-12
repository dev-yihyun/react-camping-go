function useCampAmenities(amenityData) {
    if (!amenityData?.amenities) return [];
    return amenityData.amenities.split(",");
}

export default useCampAmenities;
