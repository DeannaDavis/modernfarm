import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat} from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./field.js"


export const plantSeeds = (yearlyPlan) => {
    for ( const array of yearlyPlan) {
        
        for (const plant of array ){
            if(plant === "Asparagus") {
            const asparagus = createAsparagus()
            addPlant(asparagus)
        }
        else if (plant === "Corn") {
            const corn = createCorn()
            addPlant(corn)
        }
        else if (plant === "Potato") {
            const potato = createPotato()
            addPlant(potato)
        }
        else if (plant === "Soybean") {
            const soybean = createSoybean()
            addPlant(soybean)
        }
        else if (plant === "Wheat") {
            const wheat = createWheat()
            addPlant(wheat)
        }
        else if (plant === "Sunflower") {
            const sunflower = createSunflower()
            addPlant(sunflower)
        }
    }
 }
}