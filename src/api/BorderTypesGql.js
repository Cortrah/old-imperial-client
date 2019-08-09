import axios from "axios";

const BORDER_TYPES_QUERY = `{
          borderTypeList {
            id,
            name,
            code,
            description,
            landCost,
            airCost,
            navalCost,
            manaCost,
            isDirectional,
        }
    }`;

/**
 * Get a list of BorderTypes
 */
export async function getBorderTypes() {
    return await axios.post('http://localhost:8080/graphql', {
        query: BORDER_TYPES_QUERY
    }).then(
        response => {
            return response.data.data.borderTypeList;
        },
        error => {
            throw error;
        }
    );
}
