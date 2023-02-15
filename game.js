import { getURL } from "next/dist/shared/lib/utils";

const url = "https://roblox.com/places/api-get-details?assetId=";
const placeId = 6284583030

export default function handler(req, res) {
    res.status(200).json({message: "Hello There", amount: 50});
}