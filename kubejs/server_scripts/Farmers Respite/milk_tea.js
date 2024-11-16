ServerEvents.tags("item", e => {
    e.add("forge:fruits/durian", [
        "fruitsdelight:durian_flesh"
    ]),
    e.add("forge:fruits/apple", [
        "minecraft:apple"
    ]),
    e.add("forge:fruits/pumpkin_slice", [
        "farmersdelight:pumpkin_slice"
    ])
    e.add("forge:fruits/sweet_berries", [
        "minecraft:sweet_berries"
    ])
    e.add("forge:fruits/melon_slice", [
        "minecraft:melon_slice"
    ]),
    e.add("forge:cafe/oreo_crushed", [
        "createcafe:oreo_crushed"
    ])
})
ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "createcafe:mixing/vanilla_tea_mixing2",
        "createcafe:mixing/avocado_tea_mixing3"
    ])
    //紫颂果珍珠奶茶
    e.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
                tag: "forge:chorus_fruits"
            },
            {
                item: "ends_delight:ender_pearl_grain"
            },
            {
                item: "minecraft:sugar"
            },
            {
                amount: 200,
                fluidTag: "forge:milk"
            },
            {
                amount: 100,
                fluid: "farmersrespite:black_tea",
                nbt: {}
            }
        ],
        results: [
            {
                amount: 500,
                fluid: "create_central_kitchen:chorus_fruit_bubble_tea"
            }
        ]
    }).id("ends_delight:food/bubble_tea")
    let milk_teas = [
        ["neapolitan:vanilla", "farmersrespite:black_tea", "createcafe:vanilla_tea"],
        ['culturaldelights:avocados', "farmersrespite:black_tea", "createcafe:avocado_tea"],
        ["forge:fruits/mango", "farmersrespite:dandelion_tea", "createcafe:mango_tea"],
        ['forge:fruits/peach', "farmersrespite:dandelion_tea", "createcafe:peach_tea"],
        ['forge:fruits/durian', "farmersrespite:dandelion_tea", "createcafe:durian_tea"],
        ["forge:fruits/fig", "farmersrespite:green_tea", "createcafe:fig_tea"],
        ["forge:fruits/grape", "farmersrespite:green_tea", "createcafe:grape_tea"],
        ["forge:fruits/blood_orange", "farmersrespite:rose_hip_tea", "createcafe:blood_tea"],
        ["forge:fruits/lychee", "farmersrespite:rose_hip_tea", "createcafe:lychee_tea"],
        ["forge:fruits/blueberry", "farmersrespite:rose_hip_tea", "createcafe:blueberry_tea"],
        ["forge:fruits/pineapple", "farmersrespite:green_tea", "createcafe:pineapple_tea"],
        ["forge:fruits/apple", "farmersrespite:green_tea", "createcafe:apple_tea"],
        ["forge:fruits/pumpkin_slice", "farmersrespite:yellow_tea", "createcafe:pumpkin_tea"],
        ["forge:fruits/sweet_berries", "farmersrespite:rose_hip_tea", "createcafe:sweetberry_tea"],
        ["forge:fruits/kiwi", "farmersrespite:yellow_tea", "createcafe:kiwi_tea"],
        ["forge:fruits/orange", "farmersrespite:yellow_tea", "createcafe:orange_tea"],
        ["forge:fruits/persimmon", "farmersrespite:yellow_tea", "createcafe:persimmon_tea"],
        ["forge:fruits/lemon", "farmersrespite:green_tea", "createcafe:lemon_tea"],
        ["forge:fruits/melon_slice", "farmersrespite:rose_hip_tea", "createcafe:watermelon_tea"],
        ["forge:fruits/banana", "farmersrespite:black_tea", "createcafe:banana_tea"],
        ["forge:fruits/cherry", "farmersrespite:black_tea", "createcafe:cherry_tea"],
        ["forge:cafe/oreo_crushed", "farmersrespite:black_tea", "createcafe:oreo_tea"],
        ["forge:chorus_fruits", "farmersrespite:black_tea", "create_central_kitchen:chorus_fruit_milk_tea"]

    ]
    milk_teas.forEach(milk_tea => {
        e.custom({
            type: "create:mixing",
            heatRequirement: "heated",
            ingredients: [
                {
                    tag: milk_tea[0]
                },
                {
                    item: "minecraft:sugar"
                },
                {
                    amount: 200,
                    fluidTag: "forge:milk"
                },
                {
                    amount: 100,
                    fluid: milk_tea[1],
                    nbt: {}
                }
            ],
            results: [
                {
                    amount: 500,
                    fluid: milk_tea[2]
                }
            ]
        }).id(`createcafe:mixing/${milk_tea[2].split(":")[1]}_mixing`)
    });
})