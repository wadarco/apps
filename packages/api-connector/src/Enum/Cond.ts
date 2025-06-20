export enum CondType {
    NONE = "none",
    QUEST_CLEAR = "questClear",
    ITEM_GET = "itemGet",
    USE_ITEM_ETERNITY = "useItemEternity",
    USE_ITEM_TIME = "useItemTime",
    USE_ITEM_COUNT = "useItemCount",
    SVT_LEVEL = "svtLevel",
    SVT_LIMIT = "svtLimit",
    SVT_GET = "svtGet",
    SVT_FRIENDSHIP = "svtFriendship",
    SVT_GROUP = "svtGroup",
    EVENT = "event",
    DATE = "date",
    WEEKDAY = "weekday",
    PURCHASE_QP_SHOP = "purchaseQpShop",
    PURCHASE_STONE_SHOP = "purchaseStoneShop",
    WAR_CLEAR = "warClear",
    FLAG = "flag",
    SVT_COUNT_STOP = "svtCountStop",
    BIRTH_DAY = "birthDay",
    EVENT_END = "eventEnd",
    SVT_EVENT_JOIN = "svtEventJoin",
    MISSION_CONDITION_DETAIL = "missionConditionDetail",
    EVENT_MISSION_CLEAR = "eventMissionClear",
    EVENT_MISSION_ACHIEVE = "eventMissionAchieve",
    QUEST_CLEAR_NUM = "questClearNum",
    NOT_QUEST_GROUP_CLEAR = "notQuestGroupClear",
    RAID_ALIVE = "raidAlive",
    RAID_DEAD = "raidDead",
    RAID_DAMAGE = "raidDamage",
    QUEST_CHALLENGE_NUM = "questChallengeNum",
    MASTER_MISSION = "masterMission",
    QUEST_GROUP_CLEAR = "questGroupClear",
    SUPER_BOSS_DAMAGE = "superBossDamage",
    SUPER_BOSS_DAMAGE_ALL = "superBossDamageAll",
    PURCHASE_SHOP = "purchaseShop",
    QUEST_NOT_CLEAR = "questNotClear",
    NOT_SHOP_PURCHASE = "notShopPurchase",
    NOT_SVT_GET = "notSvtGet",
    NOT_EVENT_SHOP_PURCHASE = "notEventShopPurchase",
    SVT_HAVING = "svtHaving",
    NOT_SVT_HAVING = "notSvtHaving",
    QUEST_CHALLENGE_NUM_EQUAL = "questChallengeNumEqual",
    QUEST_CHALLENGE_NUM_BELOW = "questChallengeNumBelow",
    QUEST_CLEAR_NUM_EQUAL = "questClearNumEqual",
    QUEST_CLEAR_NUM_BELOW = "questClearNumBelow",
    QUEST_CLEAR_PHASE = "questClearPhase",
    NOT_QUEST_CLEAR_PHASE = "notQuestClearPhase",
    EVENT_POINT_GROUP_WIN = "eventPointGroupWin",
    EVENT_NORMA_POINT_CLEAR = "eventNormaPointClear",
    QUEST_AVAILABLE = "questAvailable",
    QUEST_GROUP_AVAILABLE_NUM = "questGroupAvailableNum",
    EVENT_NORMA_POINT_NOT_CLEAR = "eventNormaPointNotClear",
    NOT_ITEM_GET = "notItemGet",
    COSTUME_GET = "costumeGet",
    QUEST_RESET_AVAILABLE = "questResetAvailable",
    SVT_GET_BEFORE_EVENT_END = "svtGetBeforeEventEnd",
    QUEST_CLEAR_RAW = "questClearRaw",
    QUEST_GROUP_CLEAR_RAW = "questGroupClearRaw",
    EVENT_GROUP_POINT_RATIO_IN_TERM = "eventGroupPointRatioInTerm",
    EVENT_GROUP_RANK_IN_TERM = "eventGroupRankInTerm",
    NOT_EVENT_RACE_QUEST_OR_NOT_ALL_GROUP_GOAL = "notEventRaceQuestOrNotAllGroupGoal",
    EVENT_GROUP_TOTAL_WIN_EACH_PLAYER = "eventGroupTotalWinEachPlayer",
    EVENT_SCRIPT_PLAY = "eventScriptPlay",
    SVT_COSTUME_RELEASED = "svtCostumeReleased",
    QUEST_NOT_CLEAR_AND = "questNotClearAnd",
    SVT_RECOVERD = "svtRecoverd",
    SHOP_RELEASED = "shopReleased",
    EVENT_POINT = "eventPoint",
    EVENT_REWARD_DISP_COUNT = "eventRewardDispCount",
    EQUIP_WITH_TARGET_COSTUME = "equipWithTargetCostume",
    RAID_GROUP_DEAD = "raidGroupDead",
    NOT_SVT_GROUP = "notSvtGroup",
    NOT_QUEST_RESET_AVAILABLE = "notQuestResetAvailable",
    NOT_QUEST_CLEAR_RAW = "notQuestClearRaw",
    NOT_QUEST_GROUP_CLEAR_RAW = "notQuestGroupClearRaw",
    NOT_EVENT_MISSION_CLEAR = "notEventMissionClear",
    NOT_EVENT_MISSION_ACHIEVE = "notEventMissionAchieve",
    NOT_COSTUME_GET = "notCostumeGet",
    NOT_SVT_COSTUME_RELEASED = "notSvtCostumeReleased",
    NOT_EVENT_RACE_QUEST_OR_NOT_TARGET_RANK_GOAL = "notEventRaceQuestOrNotTargetRankGoal",
    PLAYER_GENDER_TYPE = "playerGenderType",
    SHOP_GROUP_LIMIT_NUM = "shopGroupLimitNum",
    EVENT_GROUP_POINT = "eventGroupPoint",
    EVENT_GROUP_POINT_BELOW = "eventGroupPointBelow",
    EVENT_TOTAL_POINT = "eventTotalPoint",
    EVENT_TOTAL_POINT_BELOW = "eventTotalPointBelow",
    EVENT_VALUE = "eventValue",
    EVENT_VALUE_BELOW = "eventValueBelow",
    EVENT_FLAG = "eventFlag",
    EVENT_STATUS = "eventStatus",
    NOT_EVENT_STATUS = "notEventStatus",
    FORCE_FALSE = "forceFalse",
    SVT_HAVING_LIMIT_MAX = "svtHavingLimitMax",
    EVENT_POINT_BELOW = "eventPointBelow",
    SVT_EQUIP_FRIENDSHIP_HAVING = "svtEquipFriendshipHaving",
    MOVIE_NOT_DOWNLOAD = "movieNotDownload",
    MULTIPLE_DATE = "multipleDate",
    SVT_FRIENDSHIP_ABOVE = "svtFriendshipAbove",
    SVT_FRIENDSHIP_BELOW = "svtFriendshipBelow",
    MOVIE_DOWNLOADED = "movieDownloaded",
    ROUTE_SELECT = "routeSelect",
    NOT_ROUTE_SELECT = "notRouteSelect",
    LIMIT_COUNT = "limitCount",
    LIMIT_COUNT_ABOVE = "limitCountAbove",
    LIMIT_COUNT_BELOW = "limitCountBelow",
    BAD_END_PLAY = "badEndPlay",
    COMMAND_CODE_GET = "commandCodeGet",
    NOT_COMMAND_CODE_GET = "notCommandCodeGet",
    ALL_USERS_BOX_GACHA_COUNT = "allUsersBoxGachaCount",
    TOTAL_TD_LEVEL = "totalTdLevel",
    TOTAL_TD_LEVEL_ABOVE = "totalTdLevelAbove",
    TOTAL_TD_LEVEL_BELOW = "totalTdLevelBelow",
    COMMON_RELEASE = "commonRelease",
    BATTLE_RESULT_WIN = "battleResultWin",
    BATTLE_RESULT_LOSE = "battleResultLose",
    EVENT_VALUE_EQUAL = "eventValueEqual",
    BOARD_GAME_TOKEN_HAVING = "boardGameTokenHaving",
    BOARD_GAME_TOKEN_GROUP_HAVING = "boardGameTokenGroupHaving",
    EVENT_FLAG_ON = "eventFlagOn",
    EVENT_FLAG_OFF = "eventFlagOff",
    QUEST_STATUS_FLAG_ON = "questStatusFlagOn",
    QUEST_STATUS_FLAG_OFF = "questStatusFlagOff",
    EVENT_VALUE_NOT_EQUAL = "eventValueNotEqual",
    LIMIT_COUNT_MAX_EQUAL = "limitCountMaxEqual",
    LIMIT_COUNT_MAX_ABOVE = "limitCountMaxAbove",
    LIMIT_COUNT_MAX_BELOW = "limitCountMaxBelow",
    BOARD_GAME_TOKEN_GET_NUM = "boardGameTokenGetNum",
    BATTLE_LINE_WIN_ABOVE = "battleLineWinAbove",
    BATTLE_LINE_LOSE_ABOVE = "battleLineLoseAbove",
    BATTLE_LINE_CONTINUE_WIN = "battleLineContinueWin",
    BATTLE_LINE_CONTINUE_LOSE = "battleLineContinueLose",
    BATTLE_LINE_CONTINUE_WIN_BELOW = "battleLineContinueWinBelow",
    BATTLE_LINE_CONTINUE_LOSE_BELOW = "battleLineContinueLoseBelow",
    BATTLE_GROUP_WIN_AVOVE = "battleGroupWinAvove",
    BATTLE_GROUP_LOSE_AVOVE = "battleGroupLoseAvove",
    SVT_LIMIT_CLASS_NUM = "svtLimitClassNum",
    OVER_TIME_LIMIT_RAID_ALIVE = "overTimeLimitRaidAlive",
    ON_TIME_LIMIT_RAID_DEAD = "onTimeLimitRaidDead",
    ON_TIME_LIMIT_RAID_DEAD_NUM = "onTimeLimitRaidDeadNum",
    RAID_BATTLE_PROGRESS_ABOVE = "raidBattleProgressAbove",
    SVT_EQUIP_RARITY_LEVEL_NUM = "svtEquipRarityLevelNum",
    LATEST_MAIN_SCENARIO_WAR_CLEAR = "latestMainScenarioWarClear",
    EVENT_MAP_VALUE_CONTAINS = "eventMapValueContains",
    RESET_BIRTH_DAY = "resetBirthDay",
    SHOP_FLAG_ON = "shopFlagOn",
    SHOP_FLAG_OFF = "shopFlagOff",
    PURCHASE_VALID_SHOP_GROUP = "purchaseValidShopGroup",
    SVT_LEVEL_CLASS_NUM = "svtLevelClassNum",
    SVT_LEVEL_ID_NUM = "svtLevelIdNum",
    LIMIT_COUNT_IMAGE_EQUAL = "limitCountImageEqual",
    LIMIT_COUNT_IMAGE_ABOVE = "limitCountImageAbove",
    LIMIT_COUNT_IMAGE_BELOW = "limitCountImageBelow",
    EVENT_TYPE_START_TIME_TO_END_DATE = "eventTypeStartTimeToEndDate",
    EXIST_BOX_GACHA_SCRIPT_REPLACE_GIFT_ID = "existBoxGachaScriptReplaceGiftId",
    NOT_EXIST_BOX_GACHA_SCRIPT_REPLACE_GIFT_ID = "notExistBoxGachaScriptReplaceGiftId",
    LIMITED_PERIOD_VOICE_CHANGE_TYPE_ON = "limitedPeriodVoiceChangeTypeOn",
    START_RANDOM_MISSION = "startRandomMission",
    RANDOM_MISSION_CLEAR_NUM = "randomMissionClearNum",
    PROGRESS_VALUE_EQUAL = "progressValueEqual",
    PROGRESS_VALUE_ABOVE = "progressValueAbove",
    PROGRESS_VALUE_BELOW = "progressValueBelow",
    RANDOM_MISSION_TOTAL_CLEAR_NUM = "randomMissionTotalClearNum",
    WEEKDAYS = "weekdays",
    EVENT_FORTIFICATION_REWARD_NUM = "eventFortificationRewardNum",
    QUEST_CLEAR_BEFORE_EVENT_START = "questClearBeforeEventStart",
    NOT_QUEST_CLEAR_BEFORE_EVENT_START = "notQuestClearBeforeEventStart",
    EVENT_TUTORIAL_FLAG_ON = "eventTutorialFlagOn",
    EVENT_TUTORIAL_FLAG_OFF = "eventTutorialFlagOff",
    EVENT_SUPER_BOSS_VALUE_EQUAL = "eventSuperBossValueEqual",
    NOT_EVENT_SUPER_BOSS_VALUE_EQUAL = "notEventSuperBossValueEqual",
    ALL_SVT_TARGET_SKILL_LV_NUM = "allSvtTargetSkillLvNum",
    SUPER_BOSS_DAMAGE_ABOVE = "superBossDamageAbove",
    SUPER_BOSS_DAMAGE_BELOW = "superBossDamageBelow",
    EVENT_MISSION_GROUP_ACHIEVE = "eventMissionGroupAchieve",
    SVT_FRIENDSHIP_CLASS_NUM_ABOVE = "svtFriendshipClassNumAbove",
    NOT_WAR_CLEAR = "notWarClear",
    SVT_SKILL_LV_CLASS_NUM_ABOVE = "svtSkillLvClassNumAbove",
    SVT_CLASS_LV_UP_COUNT = "svtClassLvUpCount",
    SVT_CLASS_SKILL_LV_UP_COUNT = "svtClassSkillLvUpCount",
    SVT_CLASS_LIMIT_UP_COUNT = "svtClassLimitUpCount",
    SVT_CLASS_FRIENDSHIP_COUNT = "svtClassFriendshipCount",
    COMPLETE_HEEL_PORTRAIT = "completeHeelPortrait",
    NOT_COMPLETE_HEEL_PORTRAIT = "notCompleteHeelPortrait",
    CLASS_BOARD_SQUARE_RELEASED = "classBoardSquareReleased",
    SVT_LEVEL_EXCHANGE_SVT = "svtLevelExchangeSvt",
    SVT_LIMIT_EXCHANGE_SVT = "svtLimitExchangeSvt",
    SKILL_LV_EXCHANGE_SVT = "skillLvExchangeSvt",
    SVT_FRIENDSHIP_EXCHANGE_SVT = "svtFriendshipExchangeSvt",
    EXCHANGE_SVT = "exchangeSvt",
    RAID_DAMAGE_ABOVE = "raidDamageAbove",
    RAID_DAMAGE_BELOW = "raidDamageBelow",
    RAID_GROUP_DAMAGE_ABOVE = "raidGroupDamageAbove",
    RAID_GROUP_DAMAGE_BELOW = "raidGroupDamageBelow",
    RAID_DAMAGE_RATE_ABOVE = "raidDamageRateAbove",
    RAID_DAMAGE_RATE_BELOW = "raidDamageRateBelow",
    RAID_DAMAGE_RATE_NOT_ABOVE = "raidDamageRateNotAbove",
    RAID_DAMAGE_RATE_NOT_BELOW = "raidDamageRateNotBelow",
    RAID_GROUP_DAMAGE_RATE_ABOVE = "raidGroupDamageRateAbove",
    RAID_GROUP_DAMAGE_RATE_BELOW = "raidGroupDamageRateBelow",
    RAID_GROUP_DAMAGE_RATE_NOT_ABOVE = "raidGroupDamageRateNotAbove",
    RAID_GROUP_DAMAGE_RATE_NOT_BELOW = "raidGroupDamageRateNotBelow",
    NOT_QUEST_GROUP_CLEAR_NUM = "notQuestGroupClearNum",
    RAID_GROUP_OPEN_ABOVE = "raidGroupOpenAbove",
    RAID_GROUP_OPEN_BELOW = "raidGroupOpenBelow",
    TREASURE_DEVICE_ACCELERATE = "treasureDeviceAccelerate",
    PLAY_QUEST_PHASE = "playQuestPhase",
    NOT_PLAY_QUEST_PHASE = "notPlayQuestPhase",
    EVENT_START_TO_END = "eventStartToEnd",
    COMMON_VALUE_ABOVE = "commonValueAbove",
    COMMON_VALUE_BELOW = "commonValueBelow",
    COMMON_VALUE_EQUAL = "commonValueEqual",
    ELAPSED_TIME_AFTER_QUEST_CLEAR = "elapsedTimeAfterQuestClear",
    WITH_STARTING_MEMBER = "withStartingMember",
    LATEST_QUEST_PHASE_EQUAL = "latestQuestPhaseEqual",
    NOT_LATEST_QUEST_PHASE_EQUAL = "notLatestQuestPhaseEqual",
    PURCHASE_SHOP_NUM = "purchaseShopNum",
    EVENT_TRADE_TOTAL_NUM = "eventTradeTotalNum",
    LIMITED_MISSION_ACHIEVE_NUM_BELOW = "limitedMissionAchieveNumBelow",
    LIMITED_MISSION_ACHIEVE_NUM_ABOVE = "limitedMissionAchieveNumAbove",
    NOT_SVT_VOICE_PLAYED = "notSvtVoicePlayed",
    BATTLE_POINT_ABOVE = "battlePointAbove",
    BATTLE_POINT_BELOW = "battlePointBelow",
    BEFORE_SPECIFIED_DATE = "beforeSpecifiedDate",
    NOT_HAVE_CHARGE_STONE = "notHaveChargeStone",
    HAVE_CHARGE_STONE = "haveChargeStone",
    BATTLE_FUNCTION_TARGET_ALL_INDIVIDUALITY = "battleFunctionTargetAllIndividuality",
    BATTLE_FUNCTION_TARGET_ONE_INDIVIDUALITY = "battleFunctionTargetOneIndividuality",
    BEFORE_QUEST_CLEAR_TIME = "beforeQuestClearTime",
    AFTER_QUEST_CLEAR_TIME = "afterQuestClearTime",
    NOT_BATTLE_FUNCTION_TARGET_ALL_INDIVIDUALITY = "notBattleFunctionTargetAllIndividuality",
    NOT_BATTLE_FUNCTION_TARGET_ONE_INDIVIDUALITY = "notBattleFunctionTargetOneIndividuality",
    EVENT_SCRIPT_NOT_PLAY = "eventScriptNotPlay",
    EVENT_SCRIPT_FLAG = "eventScriptFlag",
    IMAGE_PARTS_GROUP = "imagePartsGroup",
    USER_LEVEL_ABOVE = "userLevelAbove",
    USER_LEVEL_BELOW = "userLevelBelow",
    USER_LEVEL_EQUAL = "userLevelEqual",
    HIGHEST_WAVE_ABOVE = "highestWaveAbove",
    HIGHEST_WAVE_BELOW = "highestWaveBelow",
    PRIVILEGE_VALID = "privilegeValid",
    PRIVILEGE_INVALID = "privilegeInvalid",
    BATTLE_ACTION_OPPONENT_INDIVIDUALITY = "battleActionOpponentIndividuality",
    NOT_BATTLE_ACTION_OPPONENT_INDIVIDUALITY = "notBattleActionOpponentIndividuality",
    TREASURE_DEVICE_OF_SELECTED_CARD = "treasureDeviceOfSelectedCard",
    BATTLE_SVT_FRIENDSHIP_ABOVE = "battleSvtFriendshipAbove",
    BATTLE_SVT_FRIENDSHIP_BELOW = "battleSvtFriendshipBelow",
    ELAPSED_TIME_AFTER_SVT_GET = "elapsedTimeAfterSvtGet",
    NOT_ELAPSED_TIME_AFTER_QUEST_CLEAR = "notElapsedTimeAfterQuestClear",
    NOT_ELAPSED_TIME_AFTER_SVT_GET = "notElapsedTimeAfterSvtGet",
}

export default CondType;
