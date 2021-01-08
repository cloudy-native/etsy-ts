import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Token } from "oauth-1.0a";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";
export interface IBillingOverview {
    /**
     * True if the user has an overdue balance.
     */
    is_overdue: boolean;
    /**
     * The currency unit in which the user is billed.
     */
    currency_code: string;
    /**
     * The total overdue balance owed by the user.
     */
    overdue_balance: number;
    /**
     * The total amount currently due for payment (including any overdue balance.)
     */
    balance_due: number;
    /**
     * The total amount owed by the user (including fees that are not yet due for payment.)
     */
    total_balance: number;
    /**
     * The date by which the user's balance due must be paid.
     */
    date_due: number;
    /**
     @deprecated
     * The date on which the user's balance became overdue.

     Deprecated: do not use - always returns 0
     */
    date_overdue: number;
}
export interface IGetUserBillingOverviewParameters {
    user_id: string | number;
}
export declare class BillingOverview {
    private readonly config;
    private readonly apiKeys;
    constructor(config: AxiosRequestConfig, apiKeys: Token);
    /**
     * Retrieves the user's current balance.
     */
    getUserBillingOverview<TResult>(params: IGetUserBillingOverviewParameters & IStandardParameters, oauth?: IOAuthTokens): Promise<AxiosResponse<IStandardResponse<IGetUserBillingOverviewParameters, TResult>>>;
}