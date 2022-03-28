import {
    TYPE_MINECRAFT_JAVA,
    TYPE_MINECRAFT_BUKKIT,
    TYPE_MINECRAFT_BUNGEECORD,
    TYPE_MINECRAFT_GEYSER,
    TYPE_MINECRAFT_PAPER,
    TYPE_MINECRAFT_SPIGOT,
    TYPE_MINECRAFT_FORGE,
    TYPE_MINECRAFT_FABRIC
} from "./instance_type";
import { BIOME_RESOURCE_LOCATIONS, BLOCK_RESOURCE_LOCATIONS, ENCHANTMENT_RESOURCE_LOCATIONS, ITEM_RESOURCE_LOCATIONS, STATUS_RESOURCE_LOCATIONS } from "./resource_location";

/**
 * 等级
 */
const LEVEL = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64"
]

/**
 * 时间
 */
const TIME = [
    { command: "10", value: "10秒" },
    { command: "20", value: "20秒" },
    { command: "30", value: "30秒" },
    { command: "60", value: "1分" },
    { command: "90", value: "90秒" },
    { command: "120", value: "2分" },
    { command: "180", value: "3分秒" },
    { command: "300", value: "5分" },
    { command: "600", value: "10分" }
]

/**
 * 玩家标识
 */
const COMMAND_PLAYERS = [
    { command: "@a", value: "@a(所有玩家)" },
    { command: "@e", value: "@e(所有实体)" },
    { command: "@p", value: "@p(最近的玩家)" },
    { command: "@r", value: "@r(随机玩家)" },
    { command: "@s", value: "@a(当前实体)" }
]

/**
 * 原版配置
 */
const COMMAND_MINECRAFT_JAVA = {
    "/advancement": [["grant", "revoke"], COMMAND_PLAYERS, ["everything", "from", "only", "through", "until"]],
    "/attribute": [COMMAND_PLAYERS, [], ["get", "base", "modifier"]],
    "/execute": [["run", "if", "unless", "as", "at", "store", "positioned", "rotated", "facing", "align", "anchored", "in"]],
    "/bossbar": [["add", "remove", "list", "set", "get"]],
    "/clear": [],
    "/clone": [["~"], ["~"], ["~"], ["~"], ["~"], ["~"], ["~"], ["~"], ["~"], ["replace", "masked", "filtered"]],
    "/data": [["merge", "get", "remove", "modify"]],
    "/datapack": [["enable", "disable", "list"]],
    "/debug": [["start", "stop", "function"]],
    "/defaultgamemode": [["survival", "creative", "adventure", "spectator"]],
    "/difficulty": [["peaceful", "easy", "normal", "hard"]],
    "/effect": [["clear", "give"], COMMAND_PLAYERS, STATUS_RESOURCE_LOCATIONS, TIME, LEVEL],
    "/me": [],
    "/enchant": [COMMAND_PLAYERS, ENCHANTMENT_RESOURCE_LOCATIONS, LEVEL],
    "/experience": [["add", "set", "query"], COMMAND_PLAYERS, LEVEL],
    "/xp": ["add", "set", "query"],
    "/fill": [["~"], ["~"], ["~"], ["~"], ["~"], ["~"], BLOCK_RESOURCE_LOCATIONS["replace", "keep", "outline", "hollow", "destroy"]],
    "/forceload": [["add", "remove", "query"]],
    "/function": [],
    "/gamemode": [["survival", "creative", "adventure", "spectator"]],
    "/gamerule": [["announceAdvancements", "commandBlockOutput", "disableElytraMovementCheck", "disableRaids", "doDaylightCycle", "doEntityDrops", "doFireTick", "doImmediateRespawn", "doInsomnia", "doLimitedCrafting", "doMobLoot", "doMobSpawning", "doPatrolSpawning", "doTileDrops", "doTraderSpawning", "doWeatherCycle", "drowningDamage", "fallDamage", "fireDamage", "forgiveDeadPlayers", "freezeDamage", "keepInventory", "logAdminCommands", "maxCommandChainLength", "maxEntityCramming", "mobGriefing", "naturalRegeneration", "playersSleepingPercentage", "randomTickSpeed", "reducedDebugInfo", "sendCommandFeedback", "showDeathMessages", "spawnRadius", "spectatorsGenerateChunks", "universalAnger"], ["true", "false"]],
    "/give": [COMMAND_PLAYERS, [...BLOCK_RESOURCE_LOCATIONS, ...ITEM_RESOURCE_LOCATIONS], LEVEL],
    "/help": [],
    "/item": [["replace", "modify"]],
    "/kick": [COMMAND_PLAYERS],
    "/kill": [COMMAND_PLAYERS],
    "/list": [],
    "/locate": ["pillager_outpost", "mineshaft", "mansion", "jungle_pyramid", "desert_pyramid", "igloo", "ruined_portal", "shipwreck", "swamp_hut", "stronghold", "monument", "ocean_ruin", "fortress", "endcity", "buried_treasure", "village", "nether_fossil", "bastion_remnant"],
    "/locatebiome": [BIOME_RESOURCE_LOCATIONS],
    "/loot": [["replace", "insert", "give", "spawn"]],
    "/msg": [COMMAND_PLAYERS],
    "/tell": [COMMAND_PLAYERS],
    "/w": [COMMAND_PLAYERS],
    "/particle": [],
    "/playsound": [["master", "music", "record", "weather", "block", "hostile", "neutral", "player", "ambient", "voice"]],
    "/reload": [],
    "/recipe": [["give", "take"], COMMAND_PLAYERS, ["*"]],
    "/say": [],
    "/schedule": [["function", "clear"]],
    "/scoreboard": [["objectives", "players"]],
    "/seed": [],
    "/setblock": [["~"], ["~"], ["~"], BLOCK_RESOURCE_LOCATIONS, ["destroy", "keep", "replace"], BLOCK_RESOURCE_LOCATIONS],
    "/spawnpoint": [COMMAND_PLAYERS, ["~"], ["~"], ["~"]],
    "/setworldspawn": [["~"], ["~"], ["~"]],
    "/spectate": [COMMAND_PLAYERS],
    "/spreadplayers": [],
    "/stopsound": [COMMAND_PLAYERS, ["*", "master", "music", "record", "weather", "block", "hostile", "neutral", "player", "ambient", "voice"]],
    "/summon": [],
    "/tag": [COMMAND_PLAYERS, ["add", "remove", "list"]],
    "/team": ["list", "add", "remove", "empty", "join", "leave", "modify"],
    "/teammsg": [],
    "/tm": [],
    "/teleport": [COMMAND_PLAYERS],
    "/tp": [COMMAND_PLAYERS],
    "/tellraw": [COMMAND_PLAYERS],
    "/time": [["set", "add", "query"]],
    "/title": [COMMAND_PLAYERS, ["clear", "reset", "title", "subtitle", "actionbar", "times"]],
    "/trigger": [],
    "/weather": [["clear", "rain", "thunder"]],
    "/worldborder": [["add", "set", "center", "damage", "get", "warning"]],
    "/jfr": [["start", "stop"]],
    "/ban-ip": [COMMAND_PLAYERS],
    "/banlist": [["ips", "players"]],
    "/ban": [COMMAND_PLAYERS],
    "/deop": [COMMAND_PLAYERS],
    "/op": [COMMAND_PLAYERS],
    "/pardon": [COMMAND_PLAYERS],
    "/pardon-ip": [COMMAND_PLAYERS],
    "/perf": [["start", "stop"]],
    "/save-all": [["flush"]],
    "/save-off": [],
    "/save-on": [],
    "/setidletimeout": [],
    "/stop": [],
    "/whitelist": [["on", "off", "list", "add", "remove", "reload"], COMMAND_PLAYERS]
};

export const COMMAND_CONFIGS = [
    {
        type: TYPE_MINECRAFT_JAVA,
        instructs: COMMAND_MINECRAFT_JAVA
    }, {
        type: TYPE_MINECRAFT_BUKKIT,
        instructs: COMMAND_MINECRAFT_JAVA
    }, {
        type: TYPE_MINECRAFT_BUNGEECORD,
        instructs: COMMAND_MINECRAFT_JAVA
    }, {
        type: TYPE_MINECRAFT_GEYSER,
        instructs: COMMAND_MINECRAFT_JAVA
    }, {
        type: TYPE_MINECRAFT_PAPER,
        instructs: COMMAND_MINECRAFT_JAVA
    }, {
        type: TYPE_MINECRAFT_SPIGOT,
        instructs: COMMAND_MINECRAFT_JAVA
    }, {
        type: TYPE_MINECRAFT_FORGE,
        instructs: COMMAND_MINECRAFT_JAVA
    }, {
        type: TYPE_MINECRAFT_FABRIC,
        instructs: COMMAND_MINECRAFT_JAVA
    }

]
