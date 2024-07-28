export type BasicInfo = {
    version: string
    servername: string
    description: string
}

export type Player = {
    name: string
    accountName: string
    playerId: string
    userId:string
    ip: string
    ping: string
    location_x: string
    location_y: string
    level: string
}

export type PlayerList = {
    players: Player[]
}

export type ServerSettings = {
    Difficulty: string
    DayTimeSpeedRate: number
    NightTimeSpeedRate: number
    ExpRate: number
    PalCaptureRate: number
    PalSpawnNumRate: number
    PalDamageRateAttack: number
    PalDamageRateDefense: number
    PlayerDamageRateAttack: number
    PlayerDamageRateDefense: number
    PlayerStomachDecreaceRate: number
    PlayerStaminaDecreaceRate: number
    PlayerAutoHPRegeneRate: number
    PlayerAutoHpRegeneRateInSleep: number
    PalStomachDecreaceRate: number
    PalStaminaDecreaceRate: number
    PalAutoHPRegeneRate: number
    PalAutoHpRegeneRateInSleep: number
    BuildObjectDamageRate: number
    BuildObjectDeteriorationDamageRate: number
    CollectionDropRate: number
    CollectionObjectHpRate: number
    CollectionObjectRespawnSpeedRate: number
    EnemyDropItemRate: number
    DeathPenalty: string
    bEnablePlayerToPlayerDamage: boolean
    bEnableFriendlyFire: boolean
    bEnableInvaderEnemy: boolean
    bActiveUNKO: boolean
    bEnableAimAssistPad: boolean
    bEnableAimAssistKeyboard: boolean
    DropItemMaxNum: number
    DropItemMaxNum_UNKO: number
    BaseCampMaxNum: number
    BaseCampWorkerMaxNum: number
    DropItemAliveMaxHours: number
    bAutoResetGuildNoOnlinePlayers: boolean
    AutoResetGuildTimeNoOnlinePlayers: number
    GuildPlayerMaxNum: number
    PalEggDefaultHatchingTime: number
    WorkSpeedRate: number
    bIsMultiplay: boolean
    bIsPvP: boolean
    bCanPickupOtherGuildDeathPenaltyDrop: boolean
    bEnableNonLoginPenalty: boolean
    bEnableFastTravel: boolean
    bIsStartLocationSelectByMap: boolean
    bExistPlayerAfterLogout: boolean
    bEnableDefenseOtherGuildPlayer: boolean
    CoopPlayerMaxNum: number
    ServerPlayerMaxNum: number
    ServerName: string
    ServerDescription: string
    PublicPort: number
    PublicIP: string
    RCONEnabled: boolean
    RCONPort: number
    Region: string
    bUseAuth: boolean
    BanListURL: string
    RESTAPIEnabled: boolean
    RESTAPIPort: number
    bShowPlayerList: boolean
    AllowConnectPlatform: string
    bIsUseBackupSaveData: boolean
    LogFormatType: string
}

export type ServerMetrics = {
    serverfps: number
    currentplayernum: number
    serverframetime: number
    maxplayernum: number
    uptime: number
}

export type ServerAction = {
    data: "OK"
}