export enum AccessLevel {
    NoAccess,
    FullAccess,
    EveningAccess,
    AdminAccess
}

export function getAccessLevelFromString(level: string): AccessLevel {
    switch (level) {
        case "fullAccess":
            return AccessLevel.FullAccess;
        case "evening-access":
            return AccessLevel.EveningAccess;
        case "adminAccess":
            return AccessLevel.AdminAccess;
        default:
            return AccessLevel.NoAccess;
    }
}