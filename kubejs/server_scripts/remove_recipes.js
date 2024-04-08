
// event.remove({output: "minecraft:ender_chest", input: "minecraft:ender_chest"})
ServerEvents.recipes(event => {
    
    event.remove({ output: "minecraft:ender_chest" })

    event.remove({output: "create:brown_toolbox"})
    event.remove({id: 'create:crafting/appliances/slime_ball'})
    
    event.remove({id: 'caverns_and_chasms:bundle'})
    
    event.remove({mod: 'solapplepie'})
    
    event.remove({mod: 'waystones'})
    
    event.remove({id: 'abnormals_delight:neapolitan/adzuki_curry'})
})

