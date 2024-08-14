ServerEvents.tags("fluid", e => {
    e.add("forge:molten_materials", [
        "createbigcannons:molten_bronze",
        "createbigcannons:flowing_molten_bronze"
    ])
})
ServerEvents.tags("block", e => {
    e.add('forge:storage_blocks', "createdelight:bronze_block")
    e.add('forge:storage_blocks/bronze', "createdelight:bronze_block")
})
ServerEvents.tags("item", e => {
    e.add('balm:ingots', "createdelight:bronze_ingot")
    e.add('forge:ingots', "createdelight:bronze_ingot")
    e.add('forge:ingots/bronze', "createdelight:bronze_ingot")
    e.add("forge:plates", "createdelight:bronze_sheet")
    e.add("forge:plates/bronze", "createdelight:bronze_sheet")
    e.add("createbigcannons:sheet_bronze", "createdelight:bronze_sheet")
    e.add("forge:nuggets", "createdelight:bronze_nugget")
    e.add("forge:nuggets/bronze", "createdelight:bronze_nugget")
})
ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "createbigcannons:compacting/forge_bronze_ingot",
        "vintageimprovements:pressing/bronze_ingot"
    ])
    e.replaceInput({id: "vintageimprovements:rolling/bronze_plate"}, "vintageimprovements:bronze_sheet", "createdelight:bronze_sheet")
    e.replaceOutput({id: "vintageimprovements:pressing/bronze_ingot"}, "vintageimprovements:bronze_sheet", "createdelight:bronze_sheet")
    e.recipes.createmetallurgy.alloying(
        Fluid.of("createbigcannons:molten_bronze", 10),
        [
            Fluid.of("createdelight:molten_tin", 5),
            Fluid.of("createmetallurgy:molten_copper", 5)
        ], "superheated", 100
    ).id("createmetallurgy:alloying/alloying_bronze")
    metal_production_line(e, 
        [
            "createdelight:bronze_block",
            'createdelight:bronze_ingot',
            'createdelight:bronze_sheet',
            'createdelight:bronze_nugget',
            "createbigcannons:molten_bronze"
        ], "heated", 80
    )
})