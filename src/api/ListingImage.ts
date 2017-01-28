import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IListingImage {
    listing_image_id: number,
    hex_code: string,
    red: number,
    green: number,
    blue: number,
    hue: number,
    saturation: number,
    brightness: number,
    is_black_and_white: boolean,
    creation_tsz: number,
    listing_id: number,
    rank: number,
    url_75x75: string,
    url_170x135: string,
    url_570xN: string,
    url_fullxfull: string,
    full_height: number,
    full_width: number
}


export interface IFindAllListingImagesParameters extends IStandardParameters {
    listing_id: number
}
export interface IUploadListingImageParameters extends IStandardParameters {
    listing_id: number,
    listing_image_id?: number,
    image?: any,
    rank?: number,
    overwrite?: boolean,
    is_watermarked?: boolean
}
export interface IGetImageListingParameters extends IStandardParameters {
    listing_image_id: number[],
    listing_id: number
}
export interface IDeleteListingImageParameters extends IStandardParameters {
    listing_id: number,
    listing_image_id: number
}

export class ListingImage {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Retrieves a set of ListingImage objects associated to a Listing.
     */
    findAllListingImages<TResult>(parameters: IFindAllListingImagesParameters): Promise<IStandardResponse<IFindAllListingImagesParameters, TResult>> {
        return this.client.http<IFindAllListingImagesParameters, TResult>("/listings/:listing_id/images", parameters, "GET");
    }

    /**
     * Upload a new listing image, or re-associate a previously deleted one. You may associate an image
     to any listing within the same shop that the image's original listing belongs to.
     You MUST pass either a listing_image_id OR an image to this method.
     Passing a listing_image_id serves to re-associate an image that was previously deleted.
     If you wish to re-associate an image, we strongly recommend using the listing_image_id
     argument as opposed to re-uploading a new image each time, to save bandwidth for you as well as us.
     Pass overwrite=1 to replace the existing image at a given rank.
     When uploading a new listing image with a watermark, pass is_watermarked=1; existing listing images
     will not be affected by this parameter.
     */
    uploadListingImage<TResult>(parameters: IUploadListingImageParameters): Promise<IStandardResponse<IUploadListingImageParameters, TResult>> {
        return this.client.http<IUploadListingImageParameters, TResult>("/listings/:listing_id/images", parameters, "POST");
    }

    /**
     * Retrieves a Image_Listing by id.
     */
    getImage_Listing<TResult>(parameters: IGetImageListingParameters): Promise<IStandardResponse<IGetImageListingParameters, TResult>> {
        return this.client.http<IGetImageListingParameters, TResult>("/listings/:listing_id/images/:listing_image_id", parameters, "GET");
    }

    /**
     * Deletes a listing image. A copy of the file remains on our servers,
     and so a deleted image may be re-associated with the listing without
     re-uploading the original image; see uploadListingImage
     */
    deleteListingImage<TResult>(parameters: IDeleteListingImageParameters): Promise<IStandardResponse<IDeleteListingImageParameters, TResult>> {
        return this.client.http<IDeleteListingImageParameters, TResult>("/listings/:listing_id/images/:listing_image_id", parameters, "DELETE");
    }
}