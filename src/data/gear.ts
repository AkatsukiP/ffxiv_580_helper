interface gear {
    head: number // 头部
    body: number // 身体
    hands:number // 手部
    legs: number // 腿部
    feet: number // 脚部
    earrings: number // 耳环
    necklace: number // 项链
    bracelets: number // 手镯
    ring: number // 戒指
}

function createGear<gear>() {
    let tmp ={
        head: 0,
        body: 2,
        hands: 3,
        legs: 0,
        feet: 0,
        earrings: 0,
        necklace: 0,
        bracelets: 0,
        ring: 0,
    }
    return tmp
} 
export class role {
    tank: gear = createGear()
    healer: gear = createGear()
    dragoonAndReaper: gear = createGear()
    samuraiAndMonk: gear = createGear()
    ninja: gear = createGear()
    rangedDPS: gear = createGear()
    magicDPS: gear = createGear()
    gearName = ["头部", "身体", "手部", "腿部", "脚部", "耳饰", "项链", "手镯", "戒指"]
}