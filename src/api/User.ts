import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../client/Request";
import { ApiKeyDetails } from "../types/ApiKeyDetails";
import { IOAuthTokens } from "../types/IOAuthTokens";
import { IStandardParameters } from "../types/IStandardParameters";
import { IStandardResponse } from "../types/IStandardResponse";

//fields
export interface IUser {
    /**
     * The user's numeric ID. This is also valid as the user's shop ID.
     */
    user_id: number,
    /**
     * The user's login name.
     */
    login_name: string,
    /**
     * The user's primary email address.
     */
    primary_email: string,
    /**
     * The date and time the user was created, in epoch seconds.
     */
    creation_tsz: number,
    /**
     * The numeric ID of the user that referred this user.
     */
    referred_by_user_id: number,
    /**
     * An associative array of feedback totals for the user.
     */
    feedback_info: any,
    /**
     * The total number of transactions the user has available for a new review.
     */
    awaiting_feedback_count: number,
    /**
     * Should this user's listings be created or edited using the new Inventory endpoints?
     */
    use_new_inventory_endpoints: boolean
}

//parameters types
export interface IFindAllUsersParameters {
    keywords?: string,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetUserParameters {
    user_id: (string | number)[]
}

export interface IFindAllUsersForTeamParameters {
    team_id: number,
    status?: "active" | "invited" | "pending",
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetCirclesContainingUserParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IGetConnectedUserParameters {
    user_id: string | number,
    to_user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IUnconnectUsersParameters {
    user_id: string | number,
    to_user_id: string | number
}

export interface IGetConnectedUsersParameters {
    user_id: string | number,
    limit?: number,
    offset?: number,
    page?: number
}

export interface IConnectUsersParameters {
    user_id: string | number,
    to_user_id: string | number
}

//methods class
export class User {
    constructor(
        private readonly config: AxiosRequestConfig,
        private readonly apiKeys: ApiKeyDetails
    ) {
    }


    /**
     * Finds all Users whose name or username match the keywords parameter.
     */
    async findAllUsers<TResult>(
        params: IFindAllUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUsersParameters, TResult>>> {
        return request<IFindAllUsersParameters, TResult>(
            {...this.config, url: "/users", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Retrieves a User by id.
     */
    async getUser<TResult>(
        params: IGetUserParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetUserParameters, TResult>>> {
        return request<IGetUserParameters, TResult>(
            {...this.config, url: "/users/:user_id", method: "GET"},
            params,
            {...{apiKeys: this.apiKeys}, ...oauth}
        );
    }

    /**
     * Returns a list of users for a specific team
     */
    async findAllUsersForTeam<TResult>(
        params: IFindAllUsersForTeamParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IFindAllUsersForTeamParameters, TResult>>> {
        return request<IFindAllUsersForTeamParameters, TResult>({
            ...this.config,
            url: "/teams/:team_id/users/",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Returns a list of users who have circled this user
     */
    async getCirclesContainingUser<TResult>(
        params: IGetCirclesContainingUserParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetCirclesContainingUserParameters, TResult>>> {
        return request<IGetCirclesContainingUserParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/circles",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Returns details about a connection between users
     */
    async getConnectedUser<TResult>(
        params: IGetConnectedUserParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetConnectedUserParameters, TResult>>> {
        return request<IGetConnectedUserParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/circles/:to_user_id",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Removes a user (to_user_id) from the logged in user's (user_id) circle
     */
    async unconnectUsers<TResult>(
        params: IUnconnectUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IUnconnectUsersParameters, TResult>>> {
        return request<IUnconnectUsersParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/circles/:to_user_id",
            method: "DELETE"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Returns a list of users that are in this user's cricle
     */
    async getConnectedUsers<TResult>(
        params: IGetConnectedUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IGetConnectedUsersParameters, TResult>>> {
        return request<IGetConnectedUsersParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/connected_users",
            method: "GET"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }

    /**
     * Adds user (to_user_id) to the user's (user_id) circle
     */
    async connectUsers<TResult>(
        params: IConnectUsersParameters & IStandardParameters,
        oauth?: IOAuthTokens
    ): Promise<AxiosResponse<IStandardResponse<IConnectUsersParameters, TResult>>> {
        return request<IConnectUsersParameters, TResult>({
            ...this.config,
            url: "/users/:user_id/connected_users",
            method: "POST"
        }, params, {...{apiKeys: this.apiKeys}, ...oauth});
    }
}
