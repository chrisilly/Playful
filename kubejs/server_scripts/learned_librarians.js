MoreJSEvents.villagerTrades(event => {
    // event.removeVanillaTrades("mason", 1)
    event.removeVanillaTrades("librarian", 1)
    event.removeVanillaTrades("librarian", 2)
    event.removeVanillaTrades("librarian", 3)
    event.removeVanillaTrades("librarian", 4)
    
    const papersToEmeralds = event.addTrade("librarian", 1, TradeItem.of("minecraft:paper",16,28), "minecraft:emerald");
    const emeraldsToBookshelves = event.addTrade("librarian", 1, TradeItem.of("minecraft:emerald",6,6), TradeItem.of("minecraft:bookshelf",3,3));
    const emeraldsToCandle = event.addTrade("librarian", 1, TradeItem.of("minecraft:emerald",6,9), TradeItem.of("#minecraft:candles",3,3));
    const booksToEmeralds = event.addTrade("librarian", 2, TradeItem.of("minecraft:book",4,4), TradeItem.of("minecraft:emerald",1,1));
    const emeraldToLantern = event.addTrade("librarian", 2, ["minecraft:emerald"], "minecraft:lantern");
    const emeraldToEmptySmallScroll = event.addTrade("librarian", 2, TradeItem.of("minecraft:emerald",12,18), TradeItem.of("hexcasting:scroll",1,1));
    const inksToEmeralds = event.addTrade("librarian", 3, TradeItem.of("minecraft:ink_sac",5,5), "minecraft:emerald");
    const emeraldsToGlass = event.addTrade("librarian", 3, TradeItem.of("minecraft:emerald",1,1), TradeItem.of("minecraft:glass",4,4));
    const emeraldsToPalbum = event.addTrade("librarian", 3, TradeItem.of("minecraft:emerald",35,39), TradeItem.of("exposure:album",1,1));
    const bookAndQuillToEmeralds = event.addTrade("librarian", 4, TradeItem.of("minecraft:writable_book",2,2), TradeItem.of("minecraft:emerald",2,2));
    const emeraldsToClock = event.addTrade("librarian", 4, TradeItem.of("minecraft:emerald",5,5), TradeItem.of("minecraft:clock",1,1));
    const emeraldsToCompass = event.addTrade("librarian", 4, TradeItem.of("minecraft:emerald",4,4), TradeItem.of("minecraft:compass",1,1));
    const emeraldsToSealedDelieryAgreement = event.addTrade("librarian", 4, TradeItem.of("minecraft:emerald",6,12), TradeItem.of("minecraft:painting",1,1));
})