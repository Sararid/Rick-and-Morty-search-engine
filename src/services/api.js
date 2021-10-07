const callToApi = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(response => {
            return response.results
                .map(char => {
                    const result = {
                        name: char.name,
                        species: char.species,
                        image: char.image,
                        id: char.id,
                        status: char.status,
                        episode: char.episode,
                        origin: char.origin.name

                    }
                    return result;
                })
        });

};

const objectToExport = {
    callToApi: callToApi,
};

export default objectToExport;