export interface ITokenReq {
    client_id: string;
    client_secret:   string;
    audience:   string;
    grant_type:   string;
}

export interface ITokenRes {
    access_token: string;
    expires_in:   number;
    token_type:   string;
}