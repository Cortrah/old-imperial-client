import axios from "axios";

/**
 * Get a list of regions
 */
export function getRegions() {
    return axios.get("/regions");
}

/**
 * Add a new region
 */
export function addRegion(region) {
    return axios.post("/regions/", region);
}

/**
 * Update an owner
 */
export function updateRegion(region) {
    return axios.put("/regions/" + region.id, region);
}

/**
 * Soft delete an region by its id
 */
export function deleteRegion(id) {
    return axios({
        data: null,
        headers: {
            "Content-Type": "application/json",
        },
        method: "delete",
        url: "/regions/" + id,
    });
}
