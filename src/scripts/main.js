console.log("Welcome to the main module")

import { createPlan } from "./plan.js" 

const entirePlan = createPlan()

for (let plan of entirePlan) {
    console.log(plan)
}

import {addPlant, usePlants } from './field.js'
import {plantSeeds} from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from "./catalog.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)

const usePlantsResult= usePlants()
const harvestedPlants= harvestPlants(usePlantsResult)
catalog (harvestedPlants)

console.log(harvestedPlants)

