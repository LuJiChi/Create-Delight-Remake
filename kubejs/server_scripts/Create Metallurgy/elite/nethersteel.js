ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "createbigcannons:mixing/alloy_nethersteel_steel",
        "createbigcannons:compacting/forge_nethersteel_ingot"
    ])
    e.recipes.createmetallurgy.alloying(
        Fluid.of("createbigcannons:molten_nethersteel", 10),
        [
            Fluid.of("createmetallurgy:molten_steel", 5),
            Fluid.of("createdelight:molten_netherite", 5)
        ], "superheated", 180
    )
    metal_production_line_2(e, 
        [
            "createbigcannons:nethersteel_block",
            "createbigcannons:nethersteel_ingot",
            "createbigcannons:nethersteel_nugget",
            "vintageimprovements:nethersteel_sheet",
            "createbigcannons:molten_nethersteel"
        ], "superheated", 180
    )
})