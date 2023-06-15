let arrayOfPlants = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const seed of seedObj) {
            arrayOfPlants.push(seed)
        }
    }
    else {
        arrayOfPlants.push(seedObj)
    }
}

export const usePlants = () => {
    return arrayOfPlants
}