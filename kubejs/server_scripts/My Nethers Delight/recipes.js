ServerEvents.recipes(e => {
    const {create, kubejs} = e.recipes
    create.milling("minecraft:gunpowder", "mynethersdelight:powder_cannon")
    .id("mynethersdelight:milling/powdery_cannon")
    kubejs.shapeless("mynethersdelight:letios_compost", [
        "2x vintagedelight:organic_mash",
        ["minecraft:soul_sand", "minecraft:soul_soil"],
        ["minecraft:crimson_roots", "minecraft:warped_roots"],
        ["minecraft:crimson_roots", "minecraft:warped_roots", "farmersdelight:straw"],
        "4x minecraft:bone_meal"
    ])
    .id("mynethersdelight:letios_compost_from_organic_mash")
    kubejs.shapeless("mynethersdelight:letios_compost", [
        ["minecraft:soul_sand", "minecraft:soul_soil"],
        "2x vintagedelight:organic_mash",
        "2x #netherexp:glowspores",
        "4x minecraft:bone_meal"
    ])
    .id("mynethersdelight:letios_compost_from_glowspores")
    kubejs.shapeless("mynethersdelight:letios_compost", [
        ["minecraft:soul_sand", "minecraft:soul_soil"],
        "2x minecraft:rotten_flesh",
        "2x #netherexp:glowspores",
        "4x minecraft:bone_meal"
    ])
    .id("mynethersdelight:letios_compost_from_glowspores_2")
})