export enum AccessLevel {
    NoAccess,
    FullAccess,
    EveningAccess
}

export function getAccessLevelFromString(level: string): AccessLevel {
    switch (level) {
        case "fullAccess":
            return AccessLevel.FullAccess;
        case "evening-access":
            return AccessLevel.EveningAccess;
        default:
            return AccessLevel.NoAccess;
    }
}