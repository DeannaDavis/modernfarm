export const harvestPlants = (arrayOfPlants) => {
    let getPlants = []
    for (const plant of arrayOfPlants) {
        if (plant.type === "Corn") {
            for( let i = 0; i < (plant.output /2); i++) {
                getPlants.push(plant)
            }
        } 
        else {
            for (let i=0; i< plant.output; i++) {
               getPlants.push(plant)
            }
        }
    }
    return getPlants
}
