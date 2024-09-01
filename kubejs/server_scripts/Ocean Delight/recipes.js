ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "oceansdelight:cutting/pufferfish"
    ])
    // 炙烤河豚寿司
    e.shapeless(
        "2x oceansdelight:fugu_roll",
        [
            "farmersdelight:cooked_rice",
            "2x crabbersdelight:cooked_pufferfish_slice"
        ]
    )
        .id("oceansdelight:food/fugu_roll")
    // 河豚寿司
    e.shapeless(
        "2x culturaldelights:pufferfish_roll",
        [
            "2x crabbersdelight:pufferfish_slice",
            "farmersdelight:cooked_rice",
        ]
    )
        .id("culturaldelights:pufferfish_roll")
    // 河豚水饺
    dumpling(e, [
        "crabbersdelight:pufferfish_slice",
        "#forge:dough",
        "#forge:vegetables/onion"
    ], "2x festival_delicacies:pufferfish_boiled_dumpling", 1.0, 200)
    // 鱿鱼须相关
    e.recipes.farmersdelight.cutting(
        "culturaldelights:raw_calamari",
        "#farmersdelight:tools/knives",
        "3x oceansdelight:cut_tentacles"
    ).id("oceansdelight:cutting/tentacles")
    e.custom({
        "type": "casualness_delight:deep_frying",
        "ingredient": {
            "item": "oceansdelight:cut_tentacles"
        },
        "cookingtime": 100,
        "result": "oceansdelight:squid_rings"
    })
        .id("oceansdelight:cooking/squid_rings")
    e.recipes.create.mixing(
        "oceansdelight:squid_rings",
        [
            "extradelight:cooking_oil",
            "oceansdelight:cut_tentacles"
        ]
    )
        .heated()
        .id("oceansdelight:cooking/squid_rings2")
    e.shapeless(
        "oceansdelight:tentacle_on_a_stick",
        [
            "minecraft:stick",
            "culturaldelights:raw_calamari"
        ]
    )
        .id("oceansdelight:tentacle_on_a_stick")
})

ServerEvents.tags("item", e => {
    e.remove("forge:raw_fishes", [
        "crabbersdelight:pufferfish_slice"
    ])
})
