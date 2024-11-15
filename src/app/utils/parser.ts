export const parseThumbnail = (data: string) => {

    // Regex pattern
    const regex = /alt="" src="([^"]+)"/g;

    // Extract URLs
    const matches = data.match(regex);
    let res;
    if (matches!.length != 0) {
        res = matches![0].replace("alt=\"\" src=\"", "").replace("\"", "")
    }

    return res ? res : "";
};