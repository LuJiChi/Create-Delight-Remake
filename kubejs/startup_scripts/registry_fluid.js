StartupEvents.registry("fluid", e => {
    e.create("createdelight:fuel_mixtures")
        .thinTexture(0X8470FF)
        .bucketColor(0X8470FF)
        .translationKey("fluid.createdelight.fuel_mixtures")
        .translationKey("block.createdelight.fuel_mixtures")
        .translationKey("item.createdelight.fuel_mixtures_bucket")
    e.create("createdelight:whipped_cream")
        .thinTexture(0XF0FFFF)
        .bucketColor(0XF0FFFF)
        .translationKey("fluid.createdelight.whipped_cream")
        .translationKey("block.createdelight.whipped_cream")
        .translationKey("item.createdelight.whipped_cream_bucket")
    e.create("createdelight:molten_andesite")
        .thickTexture(0XA9AFA1)
        .bucketColor(0XA9AFA1)
        .translationKey("fluid.createdelight.molten_andesite")
        .translationKey("block.createdelight.molten_andesite")
        .translationKey("item.createdelight.molten_andesite_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:molten_desh")
        .thickTexture(0Xd68d4d)
        .bucketColor(0Xd68d4d)
        .translationKey("fluid.createdelight.molten_desh")
        .translationKey("block.createdelight.molten_desh")
        .translationKey("item.createdelight.molten_desh_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:molten_ostrum")
        .thickTexture(0X925e64)
        .bucketColor(0X925e64)
        .translationKey("fluid.createdelight.molten_ostrum")
        .translationKey("block.createdelight.molten_ostrum")
        .translationKey("item.createdelight.molten_ostrum_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:molten_calorite")
        .thickTexture(0Xb83145)
        .bucketColor(0Xb83145)
        .translationKey("fluid.createdelight.molten_calorite")
        .translationKey("block.createdelight.molten_calorite")
        .translationKey("item.createdelight.molten_calorite_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:cryo_fuel")
        .thinTexture(0X00F5FF)
        .bucketColor(0X00F5FF)
        .translationKey("fluid.createdelight.cryo_fuel")
        .translationKey("block.createdelight.cryo_fuel")
        .translationKey("item.createdelight.cryo_fuel_bucket")
    // 龙血相关
    e.create("createdelight:fire_dragon_blood")
        .stillTexture("createdelight:fluid/fire_dragon_blood/still")
        .flowingTexture("createdelight:fluid/fire_dragon_blood/flowing")
        .translationKey("fluid.createdelight.fire_dragon_blood")
        .translationKey("block.createdelight.fire_dragon_blood")
        .translationKey("item.createdelight.fire_dragon_blood_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:ice_dragon_blood")
        .stillTexture("createdelight:fluid/ice_dragon_blood/still")
        .flowingTexture("createdelight:fluid/ice_dragon_blood/flowing")
        .translationKey("fluid.createdelight.ice_dragon_blood")
        .translationKey("block.createdelight.ice_dragon_blood")
        .translationKey("item.createdelight.ice_dragon_blood_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:lightning_dragon_blood")
        .stillTexture("createdelight:fluid/lightning_dragon_blood/still")
        .flowingTexture("createdelight:fluid/lightning_dragon_blood/flowing")
        .translationKey("fluid.createdelight.lightning_dragon_blood")
        .translationKey("block.createdelight.lightning_dragon_blood")
        .translationKey("item.createdelight.lightning_dragon_blood_bucket")
        .tag("forge:molten_materials")
    // 龙钢相关
    e.create("createdelight:molten_fire_steel")
        .stillTexture("createdelight:fluid/molten_fire_steel/still")
        .flowingTexture("createdelight:fluid/molten_fire_steel/flowing")
        .translationKey("fluid.createdelight.molten_fire_steel")
        .translationKey("block.createdelight.molten_fire_steel")
        .translationKey("item.createdelight.molten_fire_steel_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:molten_ice_steel")
        .stillTexture("createdelight:fluid/molten_ice_steel/still")
        .flowingTexture("createdelight:fluid/molten_ice_steel/flowing")
        .translationKey("fluid.createdelight.molten_ice_steel")
        .translationKey("block.createdelight.molten_ice_steel")
        .translationKey("item.createdelight.molten_ice_steel_bucket")
        .tag("forge:molten_materials")
    e.create("createdelight:molten_lightning_steel")
        .stillTexture("createdelight:fluid/molten_lightning_steel/still")
        .flowingTexture("createdelight:fluid/molten_lightning_steel/flowing")
        .translationKey("fluid.createdelight.molten_lightning_steel")
        .translationKey("block.createdelight.molten_lightning_steel")
        .translationKey("item.createdelight.molten_lightning_steel_bucket")
        .tag("forge:molten_materials")

    // 陨石溶液
    e.create("createdelight:sky_solution")
        .thickTexture(0X494949)
        .bucketColor(0X494949)
        .translationKey("fluid.createdelight.sky_solution")
        .translationKey("block.createdelight.sky_solution")
        .translationKey("item.createdelight.sky_solution_bucket")
    // 废液
    e.create("createdelight:spent_liquor")
        .thinTexture(0X99ffcd)
        .bucketColor(0X99ffcd)
        .translationKey("fluid.createdelight.spent_liquor")
        .translationKey("block.createdelight.spent_liquor")
        .translationKey("item.createdelight.spent_liquor_bucket")
    //纸浆
    e.create("createdelight:paper_pulp")
        .thickTexture(0xF0FFFF)
        .bucketColor(0xF0FFFF)
        .translationKey("fluid.createdelight.paper_pulp")
        .translationKey("block.createdelight.paper_pulp")
        .translationKey("item.createdelight.paper_pulp_bucket")
    //待发酵的纸浆
    e.create("createdelight:unfermented_paper_pulp")
        .thinTexture(0xF0FFFF)
        .bucketColor(0xF0FFFF)
        .translationKey("fluid.createdelight.unfermented_paper_pulp")
        .translationKey("block.createdelight.unfermented_paper_pulp")
        .translationKey("item.createdelight.unfermented_paper_pulp_bucket")
    //蛋黄以及蛋糕糊
    e.create("createdelight:cake_batter")
        .stillTexture("ratatouille:fluid/cake_batter_still")
        .flowingTexture("ratatouille:fluid/cake_batter_flow")
        .translationKey("fluid.createdelight.cake_batter")
        .translationKey("block.createdelight.cake_batter")
        .translationKey("item.createdelight.cake_batter_bucket")
    e.create("createdelight:egg_yolk")
        .stillTexture("ratatouille:fluid/egg_yolk_still")
        .flowingTexture("ratatouille:fluid/egg_yolk_flow")
        .translationKey("fluid.createdelight.egg_yolk")
        .translationKey("block.createdelight.egg_yolk")
        .translationKey("item.createdelight.egg_yolk_bucket")
})
