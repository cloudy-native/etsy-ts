import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface ISegment {
    /**
     * The formatted name for this Segment
     */
    name: string;
    /**
     * The sequence of slugified names leading up to (and including) this Segment, separated by period characters
     */
    path: string;
    /**
     * The slugified name of this Segment
     */
    short_name: string;
    /**
     * Whether this Segment has more Segments under it
     */
    has_children: boolean;
    /**
     * (Optional) A fullxfull image representing this Segment
     */
    image_url: string;
    /**
     * (Optional) The shop_id of the Shop from which the image_url was chosen
     */
    shop_id: number;
    /**
     * (Optional) The name of the Shop from which the image_url was chosen
     */
    shop_name: number;
    /**
     * (Optional) The id of the listing from which the image_url was chosen.
     */
    listing_id: number;
}
export interface IFindBrowseSegmentsParameters extends IStandardParameters {
    region?: string;
    path?: string;
}
/**
 * Find all Browse Segments
 */
declare function findBrowseSegments<TResult>(parameters: IFindBrowseSegmentsParameters, options?: IOptions): Promise<IStandardResponse<IFindBrowseSegmentsParameters, TResult>>;
export declare const Segment: {
    findBrowseSegments: typeof findBrowseSegments;
};
export {};
