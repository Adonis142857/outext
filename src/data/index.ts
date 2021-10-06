import { TScene, TAction } from "@/types";

const action = (data: string[][], timeout?: number): TAction => {
  return {
    action: "select",
    data,
    timeout,
  };
};

const endAction: TAction = {
  action: "end",
  data: [["你挂了 - 重新开始", "1"]],
};

export const screenplay: { [key: string]: TScene } = {
  "1": [
    "某日",
    "你在一间废弃的医院中醒来",
    "你感到疑惑，回忆自己是如何来到这儿的，但怎么也想不起来，感觉自己忘记了什么",
    "你回忆自己的名字",
    "你叫王大铁，好在你没有忘记自己的名字",
    "一直呆着也不是办法，你壮起胆子准备四处探索一番，总有方法出去的，你决定",
    action([
      ["直接用椅子打碎窗户", "2"],
      ["尝试打开房间的门", "3"],
    ]),
  ],
  "2": [
    "你直接抄起身边的椅子朝窗户砸去",
    "你发现自己身处20层高楼，窗外是一片漆黑寂静，周围基本都是大山，不像是在城市中",
    "正当你考虑这如何逃出去，走廊传来了一阵脚步声",
    "你无法判断对方意图如何，所以你决定",
    action(
      [
        ["在门口埋伏", "4"],
        ["躲到床底", "end-bed"],
      ],
      5
    ),
  ],
  "3": [
    "你尝试开门，发现门被锁的死死的",
    "突然，你听到走廊传来了一阵脚步声",
    "你无法判断对方意图如何，所以你决定",
    action(
      [
        ["在门口埋伏", "4"],
        ["躲到床底", "5"],
      ],
      5
    ),
  ],
  "4": [
    // 埋伏
    "你抄起身边的椅子在门边埋伏",
    "对方刚一开门，你就直接把椅子朝他用力扔去，他被椅子砸倒在地",
    "你看他只是暂时被制住了，他马上就能爬起来反击",
    "你决定逃命",
    action(
      [
        ["往左边跑", "6-1"],
        ["往右边跑", "7-1"],
      ],
      4
    ),
  ],
  "5": [
    // 没有砸窗户
    "你躲在床底，不敢出声，只能听到自己的心跳声",
    "门被打开了，你只看到一双腐烂的双脚在慢慢移动",
    "不过他在门口停留了一会儿，就离开了",
    "显然，这个地方非常的危险，随便乱跑可能会丢了性命，你决定",
    action(
      [
        ["睡一觉或许就天亮有人来找你了", "end-sleep"],
        ["往左边跑", "6-2"],
        ["往右边跑", "7-2"],
      ],
      20
    ),
  ],
  "6-1": [
    // 埋伏敌人之后往左边跑
    "你往左边的走廊飞奔，那怪物挣脱开椅子朝你袭来",
    "你在奔跑中回顾四周，发现前面就是安全通道，周边还有一些移动病床",
    "眼看你就要被追上了，你决定",
    action(
      [
        ["拼尽全力奔跑", "end-4"],
        ["用移动病床阻拦怪物", "end-3"],
      ],
      4
    ),
  ],
  "7-1": [
    // 埋伏敌人之后往右边跑
    "你往右边的走廊飞奔，那怪物挣脱开椅子朝你袭来",
    "右边的岔路口非常多，你左绕右绕，稍微和怪物拉开了距离",
    "你决定",
    action(
      [
        ["继续跑，不能停下来啊！", "end-5"],
        ["在阴暗角落躲一会儿", "8-1"],
      ],
      7
    ),
  ],
  "6-2": [
    // 没有埋伏敌人之后往左边跑
    "你小心翼翼地往左边走廊移动，发现前面就有安全通道",
    "你来到安全通道",
    action(
      [
        ["锁门要紧", "14-3"],
        ["往楼上跑", "14-1"],
        ["往楼下跑", "end-10"],
      ],
      20
    ),
  ],
  "7-2": [
    // 没有埋伏敌人之后往右边跑
    "你小心翼翼地往右边走廊移动，不过你发现右边的岔路口非常多",
    "是非常好的躲避地点，也是非常危险的地方",
    action(
      [
        ["继续前进", "end-11"],
        ["往回走", "6-2"],
      ],
      10
    ),
  ],
  "8-1": [
    // 在阴暗角落躲一会儿
    "你躲在一个看起来比较隐蔽的角落里",
    "但怪物也不傻，在附近徘徊",
    "这个地方不能躲太久，得想办法继续前进",
    "你回顾四周，发现有灭火器和塑料瓶，你打算",
    action(
      [
        ["拿着灭火器埋伏", "9-1"],
        ["使用塑料瓶引诱敌人", "10-1"],
      ],
      10
    ),
  ],
  "9-1": [
    "你拿着手中的灭火器，等着怪物靠近你就喷它一脸",
    "怪物脚步声越来越近了",
    action(
      [
        ["再靠近一些喷得更准一些", "end-6"],
        ["现在就冲出去喷它", "11-1"],
      ],
      8
    ),
  ],
  "10-1": [
    // 使用塑料瓶引诱敌人
    "你用塑料瓶朝怪物反方向一丢",
    "果然怪物就被吸引过去了，看起来智商不过如此",
    action(
      [
        ["拿灭火器偷袭", "12-2"],
        ["绕到之前左边的走廊", "6-2"],
      ],
      10
    ),
  ],
  "11-1": [
    // 现在就冲出去喷它
    "你很勇哦，直接就冲出去对着怪物狂喷",
    "不过怪物一点感觉也没有，持续向你靠近",
    action(
      [
        ["往后狂奔", "end-7"],
        ["拿灭火器锤它", "12-1"],
      ],
      4
    ),
  ],
  "12-1": [
    // 拿灭火器锤它
    "你用力挥舞着灭火器朝怪物头上砸去",
    "怪物瞬间被打倒在地，它不断在挣扎，看来一时半会儿起不来了",
    action(
      [
        ["该逃命了", "13-1"],
        ["继续砸它", "end-8"],
      ],
      8
    ),
  ],
  "12-2": [
    // 拿灭火器偷袭
    "你偷偷靠近了怪物，拿起灭火器就砸它头上",
    "怪物瞬间被打倒在地，它不断在挣扎，看来一时半会儿起不来了",
    action(
      [
        ["该逃命了", "13-1"],
        ["继续砸它", "end-8"],
      ],
      8
    ),
  ],
  "13-1": [
    // 该逃命了
    "趁着怪物倒地还没起来，你赶紧逃命",
    "你在前面看到了安全通道",
    "你赶紧跑进去",
    action(
      [
        ["往楼上跑", "14-1"],
        ["往楼下跑", "end-10"],
      ],
      15
    ),
  ],
  "13-2": [
    // 从楼上回到安全通道
    "你从楼上回到安全通道处，发现怪物的脚步声开始逼近了",
    "你庆幸刚刚没有去剪锁链",
    "不过现在留给你的思考时间不多了",
    action(
      [
        ["把安全通道锁上", "14-2"],
        ["往楼下跑", "end-10"],
      ],
      5
    ),
  ],
  "14-1": [
    // 楼上
    "你往楼上跑去，发现有道门被锁链锁上了",
    "不过边上有断线钳可以把锁链剪断，但风险很大",
    action(
      [
        ["尝试着剪开", "end-9"],
        ["回到安全通道", "13-2"],
        ["往楼下跑", "end-10"],
      ],
      15
    ),
  ],
  "14-2": [
    // 锁安全通道
    "你把安全通道关上并锁起来了，不过这个锁和门非常破旧了，关门的声响引来了怪物，不知道能抵挡多久",
    "你需要快点做好决定",
    action(
      [
        ["上楼继续开锁", "15-1"],
        ["往楼下跑", "end-10"],
      ],
      7
    ),
  ],
  "14-3": [
    // 锁门要紧
    "你把安全通道关上并锁起来了，不过这个锁和门非常破旧了，关门的声响引来了怪物，不知道能抵挡多久",
    "你需要快点做好决定",
    action(
      [
        ["往楼上跑", "15-2"],
        ["往楼下跑", "end-10"],
      ],
      7
    ),
  ],
  "15-1": [
    // 上楼继续开锁
    "你拿起断线钳开始剪断锁链",
    "怪物开始砸门了，你非常慌张",
    "...",
    "...",
    "你终于剪开了锁链，门外是天台，同时楼下的门也已经被破开",
    "没时间了！",
    action(
      [
        ["往天台跑去", "16-1"],
        ["进天台关门", "end-12"],
      ],
      4
    ),
  ],
  "15-2": [
    // 锁门后往楼上跑
    "你往楼上跑去，发现有道门被锁链锁上了",
    "不过边上有断线钳可以把锁链剪断，但风险很大",
    action(
      [
        ["往楼下跑", "end-10"],
        ["尝试着剪开", "15-1"],
      ],
      5
    ),
  ],
  "16-1": [
    "你飞快的朝天台中央跑去",
    "天台中央有个指示牌居然写着 - 跳下去，这可是21层高啊！",
    "此时边上还有一个滑索，显然是其他人放的，或许是逃离的路线？",
    "最后的抉择了！",
    action(
      [
        ["跳下去！", "finish"],
        ["使用滑索", "end-13"],
      ],
      5
    ),
  ],
  "end-bed": [
    "你躲在床底下，看到门被打开",
    "你只看到一双腐烂的双脚在慢慢移动，寂静中除了自己的心跳声，还能听到对方嘴里碎碎念些什么",
    "他走到刚被砸碎的窗户边停留了一会儿，开始往回走",
    "你以为自己躲在床底下就安全了",
    "突然，他蹲了下来搜寻床底",
    "你和他四目相对，他是一个面部扭曲的人，仿佛被化学物品侵蚀了一般",
    "你看清了他的脸，但他也抓住了你，你被扔了下去",
    endAction,
  ],
  "end-sleep": [
    "你太害怕了，决定睡一觉说不定就好了，或许这只是梦境",
    "你躺在床底一动不动睡着了",
    "...",
    "你的呼噜声特别大，以至于引来的敌人",
    "你被敌人发现了，然而你还在睡梦中...",
    endAction,
  ],
  "end-noselect": [
    "你一时间没有做出选择，愣在原地",
    "最终被怪物发现",
    endAction,
  ],
  "end-3": [
    "你计划用移动病床阻挡一下怪物，减缓它的移动",
    "没想到移动病床比你想象中的要重，你的进展缓慢",
    "你被怪物追上了",
    endAction,
  ],
  "end-4": [
    "你跑得飞快，感觉自己都快超越奥运冠军了",
    "但你一下子没刹住，从楼梯上滚了下去",
    "怪物从楼梯上跳下把你抓住了",
    endAction,
  ],
  "end-5": [
    "你在岔路口中继续绕，虽然和怪物拉开了距离，但你自己也被绕晕了",
    "你也不知道怪物到底是在你后面还是前面",
    "你只能听着脚步声离你越来越近",
    "你跑进了死路，你回头，发现怪物在你背后",
    endAction,
  ],
  "end-6": [
    "你等怪物靠的近了，你按下按钮狂喷",
    "没想到怪物一点感觉也没有",
    "你无路可退",
    endAction,
  ],
  "end-7": ["你丢下灭火器逃命", "但始终是跑不过怪物", "你被追上了", endAction],
  "end-8": [
    "你狂砸怪物，怪物不断在地上挣扎",
    "你感到了胜利的曙光",
    "突然怪物抓住了你的脚，一把将你扯倒",
    "你倒在地上被怪物抓住",
    endAction,
  ],
  "end-9": [
    "你费劲的使用断线钳剪断了锁链",
    "正当你以为胜利就在前方",
    "突然怪物一把抓住了你的脖子",
    "你绝望的回头看",
    "逃命也不要忘记关门啊！",
    endAction,
  ],
  "end-10": [
    "你往楼下跑，但所有的门都是紧锁的",
    "你越跑越绝望",
    "一直到最底层，你也找不到出去的路",
    "而脚步声越来越近...",
    endAction,
  ],
  "end-11": [
    "你不畏艰险继续在岔路口中前进",
    "你每次前进都能听到脚步声忽远忽近",
    "你不确定敌人的位置，也不确定自己的位置",
    "最终，你转角遇到爱...",
    endAction,
  ],
  "end-12": [
    "你进了天台之后下意识关门",
    "但是怪物的力气非常大，你根本挡不住",
    "你被撞开的门压住了，怪物朝你走来",
    endAction,
  ],
  "end-13": [
    "你使用了滑索",
    "你看着自己离开了医院大楼，怪物只能在天台愤怒吼叫，你充满信心",
    "突然滑索断了！你绝望的掉落在医院大门口，离出口只差一点",
    endAction,
  ],
  finish: [
    "你狠狠心，说不定指示牌有什么含义",
    "你闭眼纵身一跃",
    "坠落瞬间你突然惊醒",
    "不知为何，是场梦",
    "但，真的是梦吗？",
    { action: "finish" },
  ],
};
