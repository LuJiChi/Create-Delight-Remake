ServerEvents.recipes(e => {
    const {createmetallurgy} = e.recipes
    metal_production_line_7(e, ["iceandfire:dragonsteel_fire_block", "iceandfire:dragonsteel_fire_ingot", "createdelight:molten_fire_steel"], "heated", 160)
    metal_production_line_7(e, ["iceandfire:dragonsteel_ice_block", "iceandfire:dragonsteel_ice_ingot", "createdelight:molten_ice_steel"], "heated", 160)
    metal_production_line_7(e, ["iceandfire:dragonsteel_lightning_block", "iceandfire:dragonsteel_lightning_ingot", "createdelight:molten_lightning_steel"], "heated", 160)
    createmetallurgy.alloying(Fluid.of("createdelight:molten_fire_steel", 90), [Fluid.of("createmetallurgy:molten_steel", 90), Fluid.of("createdelight:fire_dragon_blood", 250)])
    createmetallurgy.alloying(Fluid.of("createdelight:molten_ice_steel", 90), [Fluid.of("createmetallurgy:molten_steel", 90), Fluid.of("createdelight:ice_dragon_blood", 250)])
    createmetallurgy.alloying(Fluid.of("createdelight:molten_lightning_steel", 90), [Fluid.of("createmetallurgy:molten_steel", 90), Fluid.of("createdelight:lightning_dragon_blood", 250)])
})