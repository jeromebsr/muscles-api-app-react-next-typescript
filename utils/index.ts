import { FilterProps } from "@types";

export async function fetchExercices(filters: FilterProps) {
    let { muscle, difficulty } = filters
    
    const headers: HeadersInit = {
        'X-RapidAPI-Key': 'e07e7c8a77msh1582c3b6621541cp1b1c42jsn15c692c238e3',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficulty}&muscle=${muscle}`, {
            headers: headers
        }
    )

    const result = await response.json();

    return result;
}